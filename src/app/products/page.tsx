"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Search, Grid, List } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  comparePrice?: number
  category: string
  categorySlug: string
  description: string
  stock: number
  productType: string
  softwareType?: string
  monthlyPrice?: number
  yearlyPrice?: number
  hasSubscription: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>(["All Categories"])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState<"all" | "hardware" | "software">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: { products?: Product[] }) => {
        const prods = data.products || []
        setProducts(prods)
        const cats: string[] = ["All Categories", ...Array.from(new Set(prods.map((p) => p.category)))]
        setCategories(cats)
      })
      .catch(() => {
        setProducts([])
      })
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory
    const matchesType =
      selectedType === "all" ||
      product.productType === selectedType
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesType && matchesSearch
  })

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.hasSubscription ? (product.monthlyPrice || product.price) : product.price,
      category: product.category,
      productType: product.productType as "hardware" | "software",
      softwareType: product.softwareType as "cloud" | "on_premise" | undefined,
      billingInterval: product.hasSubscription ? "monthly" : undefined,
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            Browse our complete selection of POS hardware and software
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedType("all")}
                  className={`px-4 py-2 text-sm font-medium ${selectedType === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedType("hardware")}
                  className={`px-4 py-2 text-sm font-medium ${selectedType === "hardware" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  Hardware
                </button>
                <button
                  onClick={() => setSelectedType("software")}
                  className={`px-4 py-2 text-sm font-medium ${selectedType === "software" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  Software
                </button>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`bg-gray-100 flex items-center justify-center ${
                  viewMode === "list" ? "w-48 h-48" : "h-48"
                }`}
              >
                <span className="text-gray-400 text-sm">Image</span>
              </div>
              <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-blue-600">{product.category}</p>
                  {product.softwareType && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {product.softwareType === "cloud" ? "Cloud" : "On-Premise"}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    {product.hasSubscription ? (
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          From {"\u00a3"}{product.monthlyPrice?.toFixed(2)}<span className="text-sm font-normal text-gray-500">/mo</span>
                        </p>
                        <p className="text-sm text-green-600">
                          {"\u00a3"}{product.yearlyPrice?.toFixed(2)}/yr (Save {Math.round((1 - (product.yearlyPrice || 0) / ((product.monthlyPrice || 1) * 12)) * 100)}%)
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {"\u00a3"}{product.price.toFixed(2)}
                        </p>
                        {product.comparePrice && (
                          <p className="text-sm text-gray-400 line-through">
                            {"\u00a3"}{product.comparePrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {product.hasSubscription ? "Subscribe" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
