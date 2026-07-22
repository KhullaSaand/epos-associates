"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, ShoppingCart, Phone, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  comparePrice?: number
  category: string
  categorySlug: string
  sku: string
  stock: number
  description: string
  features: string[]
  specs: Record<string, string>
  productType: string
  softwareType?: string
  monthlyPrice?: number
  yearlyPrice?: number
  hasSubscription: boolean
  trialDays?: number
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly")
  const { addItem } = useCart()

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Product not found</p>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const price = product.hasSubscription
      ? (billingInterval === "monthly" ? product.monthlyPrice : product.yearlyPrice) || product.price
      : product.price

    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: price,
      category: product.category,
      productType: product.productType as "hardware" | "software",
      softwareType: product.softwareType as "cloud" | "on_premise" | undefined,
      billingInterval: product.hasSubscription ? billingInterval : undefined,
    })
  }

  const currentPrice = product.hasSubscription
    ? (billingInterval === "monthly" ? product.monthlyPrice : product.yearlyPrice) || product.price
    : product.price

  const yearlySavings = product.hasSubscription && product.monthlyPrice && product.yearlyPrice
    ? Math.round((1 - product.yearlyPrice / (product.monthlyPrice * 12)) * 100)
    : 0

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            sku: product.sku,
            brand: { "@type": "Brand", name: "EPOS Associates" },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: product.hasSubscription
                ? billingInterval === "monthly"
                  ? product.monthlyPrice
                  : product.yearlyPrice
                : product.price,
              availability: product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              seller: { "@type": "Organization", name: "EPOS Associates" },
            },
          }),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <Image src="/EA2.svg" alt={product.name} width={160} height={64} className="opacity-60" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg h-20 flex items-center justify-center"
                  >
                    <Image src="/EA2.svg" alt={`${product.name} thumbnail ${i}`} width={40} height={16} className="opacity-60" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-blue-600">{product.category}</p>
                {product.softwareType && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {product.softwareType === "cloud" ? "Cloud-Based" : "On-Premise"}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.hasSubscription ? (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => setBillingInterval("monthly")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        billingInterval === "monthly"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingInterval("yearly")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        billingInterval === "yearly"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Yearly
                    </button>
                    {yearlySavings > 0 && (
                      <span className="text-sm text-green-600 font-medium">
                        Save {yearlySavings}%
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {"\u00a3"}{currentPrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500">
                      /{billingInterval === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                  {billingInterval === "yearly" && product.monthlyPrice && (
                    <p className="text-sm text-gray-500 mt-1">
                      Equivalent to {"\u00a3"}{(product.yearlyPrice! / 12).toFixed(2)}/mo
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {"\u00a3"}{product.price.toFixed(2)}
                  </span>
                  {product.comparePrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {"\u00a3"}{product.comparePrice.toFixed(2)}
                    </span>
                  )}
                </div>
              )}

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">SKU: {product.sku}</p>
                {product.productType === "hardware" ? (
                  <p className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-green-600">
                    Available Immediately
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {product.hasSubscription ? "Subscribe Now" : "Add to Cart"}
                </button>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Request Quote
                </Link>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs && Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="w-1/3 text-sm text-gray-500">{key}</span>
                  <span className="w-2/3 text-sm text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
