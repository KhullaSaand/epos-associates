import { RotateCcw, CheckCircle, AlertCircle, Package } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Refunds | EPOS Associates",
  description:
    "30-day hassle-free return policy on all POS hardware. Free returns on defective items. Learn how to start a return or exchange.",
}

export default function ReturnsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Returns &amp; Refunds</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Not satisfied with your purchase? We offer a hassle-free 30-day return policy on all products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Policy</h2>
              <p className="text-gray-600 mb-6">
                We want you to be completely satisfied with your purchase. If for any reason you&apos;re not happy with your order, you can return it within 30 days of delivery for a full refund or exchange.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">30-Day Return Window</h3>
                    <p className="text-sm text-gray-600">Return most items within 30 days of delivery for a full refund.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Returns on Defective Items</h3>
                    <p className="text-sm text-gray-600">If your item is defective or damaged, we&apos;ll cover return shipping costs.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Full Refund or Exchange</h3>
                    <p className="text-sm text-gray-600">Choose between a full refund to your original payment method or an exchange.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Return</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                    <p className="text-sm text-gray-600">Email info@eposassociates.co.uk with your order number and reason for return.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Get a Return Authorisation</h3>
                    <p className="text-sm text-gray-600">We&apos;ll provide you with a return authorisation number and shipping instructions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pack &amp; Ship</h3>
                    <p className="text-sm text-gray-600">Securely pack the item in its original packaging and send it back to us.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Receive Your Refund</h3>
                    <p className="text-sm text-gray-600">Once we receive and inspect the item, your refund will be processed within 5-7 business days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Package className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Original Packaging</h3>
                  <p className="text-sm text-gray-600">Items should be returned in their original packaging where possible.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Condition</h3>
                  <p className="text-sm text-gray-600">Items must be unused and in the same condition as received.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Software</h3>
                  <p className="text-sm text-gray-600">Software products with activated licence keys cannot be returned unless defective.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Custom Orders</h3>
                  <p className="text-sm text-gray-600">Bespoke or custom-configured items may not be eligible for return.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start a Return?</h3>
            <p className="text-gray-600 mb-4">Contact our support team and we&apos;ll guide you through the process.</p>
            <a
              href="mailto:info@eposassociates.co.uk?subject=Return Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
              Request a Return
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
