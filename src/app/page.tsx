import Link from "next/link"
import Image from "next/image"
import {
  Monitor,
  Printer,
  ScanBarcode,
  CreditCard,
  Wallet,
  ArrowRight,
  Truck,
  Shield,
  HeadphonesIcon,
  CheckCircle,
  Package,
  CreditCardIcon,
  Wrench,
  Star,
  Building2,
  ShoppingBag,
  Users,
  Zap,
  MonitorSmartphone,
} from "lucide-react"
import { prisma } from "@/lib/prisma"
import ConsultationForm from "@/components/ConsultationForm"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "POS Terminals": Monitor,
  "Receipt Printers": Printer,
  "Barcode Scanners": ScanBarcode,
  "Cash Drawers": Wallet,
  "Card Readers": CreditCard,
  "POS Software": MonitorSmartphone,
}

async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        _count: {
          select: { products: { where: { isActive: true } } },
        },
      },
    })
    return categories
  } catch {
    return []
  }
}

async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true, isFeatured: true },
      include: { category: true },
      take: 4,
      orderBy: { createdAt: "desc" },
    })
    return products.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: Number(p.price),
      comparePrice: p.comparePrice ? Number(p.comparePrice) : null,
      category: p.category.name,
      description: p.shortDesc || p.description.slice(0, 80),
      image: p.images[0] || null,
      productType: p.productType,
      softwareType: p.softwareType,
      monthlyPrice: p.monthlyPrice ? Number(p.monthlyPrice) : null,
      yearlyPrice: p.yearlyPrice ? Number(p.yearlyPrice) : null,
      hasSubscription: p.hasSubscription,
    }))
  } catch {
    return []
  }
}

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over \u00a3500",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "On all hardware products",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated account managers",
  },
]

const stats = [
  { icon: Building2, value: "5,000+", label: "Businesses Served" },
  { icon: ShoppingBag, value: "50,000+", label: "Products Delivered" },
  { icon: Users, value: "15+", label: "Years Experience" },
  { icon: Zap, value: "99.9%", label: "Uptime Guarantee" },
]

const howItWorks = [
  {
    icon: Package,
    step: "01",
    title: "Browse & Choose",
    description: "Explore our extensive catalogue of POS hardware and select the products that fit your business needs.",
  },
  {
    icon: CreditCardIcon,
    step: "02",
    title: "Secure Checkout",
    description: "Complete your purchase with our secure payment system. We accept all major cards and offer invoicing.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Fast Delivery",
    description: "Your equipment is dispatched within 24 hours with free tracked shipping on orders over \u00a3500.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Setup & Support",
    description: "Get free setup assistance and ongoing technical support from our expert team.",
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Bloom Caf\u00e9",
    content: "EPOS Associates provided us with a complete till system that transformed our service speed. The team was incredibly helpful from selection to setup.",
    rating: 5,
  },
  {
    name: "James Patel",
    role: "Manager, TechMart Retail",
    content: "We've been ordering from EPOS Associates for 3 years now. Their prices are competitive and the hardware quality is consistently excellent.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Director, Green Grocers Ltd",
    content: "The barcode scanners and receipt printers we purchased have been faultless. Great after-sales support too. Highly recommended for any retail business.",
    rating: 5,
  },
]

const industries = [
  { name: "Retail", description: "Tills, scanners & accessories for shops" },
  { name: "Hospitality", description: "EPOS systems for restaurants & bars" },
  { name: "Healthcare", description: "Check-in terminals & payment solutions" },
  { name: "Education", description: "Cashless payment & catering systems" },
]

export default async function Home() {
  const [categories, featuredProducts] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
  ])

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EPOS Associates",
            url: "https://eposassociates.com",
            logo: "https://eposassociates.com/EA2.svg",
            description:
              "Your trusted partner for POS hardware solutions. Quality point-of-sale terminals, receipt printers, barcode scanners, and more.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Business Street, Suite 100",
              addressLocality: "London",
              postalCode: "EC1A 1BB",
              addressCountry: "GB",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44-1234-567890",
              contactType: "sales",
              email: "contact@eposassociates.com",
            },
            sameAs: [],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                POS Hardware Solutions for Your Business
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                From terminals to receipt printers, we provide reliable point-of-sale
                equipment that keeps your business running smoothly. Trusted by
                thousands of businesses across the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((cat) => {
                const Icon = iconMap[cat.name] || Monitor
                return (
                  <div key={cat.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <Icon className="h-8 w-8 mb-3" />
                    <p className="font-semibold">{cat.name}</p>
                    <p className="text-sm text-blue-200">{cat._count.products} products</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to set up a complete point-of-sale system
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = iconMap[category.name] || Monitor
              return (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <Icon className="h-12 w-12 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category._count.products} products</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
                <p className="text-gray-600">Top picks for your business</p>
              </div>
              <Link
                href="/products"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <Image src="/EA2.svg" alt={product.name} width={100} height={40} className="opacity-60" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm text-blue-600">{product.category}</p>
                      {product.softwareType && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                          {product.softwareType === "cloud" ? "Cloud" : "On-Premise"}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                    <div className="flex items-center gap-2">
                      {product.hasSubscription ? (
                        <span className="text-lg font-bold text-gray-900">From {"\u00a3"}{product.monthlyPrice?.toFixed(2)}/mo</span>
                      ) : (
                        <>
                          <span className="text-lg font-bold text-gray-900">{"\u00a3"}{product.price.toFixed(2)}</span>
                          {product.comparePrice && (
                            <span className="text-sm text-gray-400 line-through">{"\u00a3"}{product.comparePrice.toFixed(2)}</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with EPOS Associates is simple
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialised POS solutions for every sector
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of businesses across the UK
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose EPOS Associates?</h2>
              <p className="text-blue-100 mb-8">
                With over 15 years of experience, we understand what businesses need from their POS hardware. 
                We combine quality products with exceptional service to deliver solutions that work.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium quality hardware from leading brands",
                  "Competitive trade and bulk pricing",
                  "Free technical support for life",
                  "Next-day delivery across the UK",
                  "30-day hassle-free returns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-6">Request a Free Consultation</h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Upgrade Your POS System?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team for personalized recommendations and volume pricing.
            We help businesses find the right hardware for their needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
