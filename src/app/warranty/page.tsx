import { Shield, CheckCircle, XCircle, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Warranty Information | EPOS Associates",
  description:
    "Learn about our 2-year manufacturer warranty on all POS hardware. Extended warranty options available. How to make a warranty claim.",
}

export default function WarrantyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Warranty Information</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            All our hardware products come with comprehensive warranty coverage for your peace of mind.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Warranty</h2>
              <p className="text-gray-600 mb-6">
                Every hardware product purchased from EPOS Associates includes a standard 2-year manufacturer warranty covering defects in materials and workmanship.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hardware Defects</h3>
                    <p className="text-sm text-gray-600">Coverage for any manufacturing defects in materials or workmanship.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Component Failure</h3>
                    <p className="text-sm text-gray-600">Replacement of failed components under normal operating conditions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Repair or Replacement</h3>
                    <p className="text-sm text-gray-600">We will repair or replace defective items at no charge during the warranty period.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Not Covered</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Accidental Damage</h3>
                    <p className="text-sm text-gray-600">Damage caused by drops, spills, or physical impact.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Water or Liquid Damage</h3>
                    <p className="text-sm text-gray-600">Damage caused by exposure to liquids or excessive moisture.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unauthorised Modifications</h3>
                    <p className="text-sm text-gray-600">Damage resulting from unauthorised repairs or modifications.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Normal Wear and Tear</h3>
                    <p className="text-sm text-gray-600">Cosmetic wear from regular use, including scratches and scuffs.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Extended Warranty</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Need longer coverage? Extended 3-year and 5-year warranty plans are available for purchase at checkout or by contacting our sales team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  <Phone className="h-4 w-4" />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need to Make a Warranty Claim?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our support team with your order number and a description of the issue. We&apos;ll guide you through the claims process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@eposassociates.com?subject=Warranty Claim"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start a Claim
              </a>
              <Link
                href="/help"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Visit Help Centre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
