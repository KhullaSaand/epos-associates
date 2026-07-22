import { Truck, Clock, MapPin, Package } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Information | EPOS Associates",
  description:
    "Fast UK-wide delivery on POS hardware. Free shipping on orders over \u00a3500. Next-day delivery available. Standard, express, and pallet delivery options.",
}

export default function ShippingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Fast, reliable delivery across the United Kingdom. Free shipping on orders over {"\u00a3"}500.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 text-center">
              <Truck className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over {"\u00a3"}500</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Next-Day Delivery</h3>
              <p className="text-sm text-gray-600">Order before 2pm for next-day delivery</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">UK-Wide Coverage</h3>
              <p className="text-sm text-gray-600">Delivery to all UK addresses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Options</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Standard Delivery</h3>
                    <span className="text-lg font-bold text-gray-900">{"\u00a3"}9.99</span>
                  </div>
                  <p className="text-sm text-gray-600">2-3 business days. Free on orders over {"\u00a3"}500.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-600">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Next-Day Delivery</h3>
                    <span className="text-lg font-bold text-gray-900">{"\u00a3"}14.99</span>
                  </div>
                  <p className="text-sm text-gray-600">Order before 2pm Mon-Fri. Delivered next business day.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Express Delivery</h3>
                    <span className="text-lg font-bold text-gray-900">{"\u00a3"}24.99</span>
                  </div>
                  <p className="text-sm text-gray-600">Guaranteed next-day delivery with timed delivery window.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Details</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                  <p className="text-sm text-gray-600">
                    Orders are processed and dispatched within 24 hours (Mon-Fri). Orders placed after 2pm or on weekends will be processed the next business day.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking</h3>
                  <p className="text-sm text-gray-600">
                    All shipments include tracking. You&apos;ll receive an email with your tracking number once your order has been dispatched.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Large Items</h3>
                  <p className="text-sm text-gray-600">
                    POS terminals and large equipment are shipped via pallet delivery. Our team will contact you to arrange a convenient delivery slot.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">International Shipping</h3>
                  <p className="text-sm text-gray-600">
                    Currently we ship within the United Kingdom and Ireland. Contact us for international shipping enquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Delivery?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help with any shipping queries. Get in touch and we&apos;ll provide updates on your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:support@eposassociates.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
