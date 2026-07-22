import Image from "next/image"
import { CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | EPOS Associates",
  description:
    "Learn about EPOS Associates - your trusted partner for POS hardware solutions since 2010. Over 15 years serving 5,000+ businesses across the UK.",
  openGraph: {
    title: "About EPOS Associates | POS Hardware Solutions",
    description:
      "Your trusted partner for POS hardware solutions since 2010. Serving 5,000+ businesses across the UK.",
  },
}

const values = [
  {
    title: "Quality First",
    description:
      "We partner with leading manufacturers to bring you reliable, commercial-grade POS hardware that stands up to daily use.",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team understands the unique needs of different businesses. We help you find the right solution for your specific requirements.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct relationships with manufacturers mean better prices for you. Volume discounts available for multi-location businesses.",
  },
  {
    title: "Dedicated Support",
    description:
      "From initial setup to ongoing support, we're here to ensure your POS system runs smoothly.",
  },
]

const milestones = [
  { year: "2010", event: "Founded in London" },
  { year: "2015", event: "Expanded to 500+ business clients" },
  { year: "2018", event: "Launched nationwide UK shipping" },
  { year: "2020", event: "Introduced mobile POS solutions" },
  { year: "2023", event: "Surpassed 5,000 business clients" },
  { year: "2024", event: "Opened new distribution centre" },
  { year: "2025", event: "Launched next-gen product line" },
  { year: "2026", event: "Expanding across Europe" },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About EPOS Associates</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Your trusted partner for POS hardware solutions since 2010. We help
            businesses streamline their operations with reliable, affordable
            point-of-sale equipment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                EPOS Associates was founded with a simple goal: make quality POS
                hardware accessible to businesses of all sizes. We believe that
                every business deserves reliable, modern point-of-sale technology
                without breaking the bank.
              </p>
              <p className="text-gray-600">
                Today, we serve over 5,000 businesses across the United Kingdom,
                from single-location retail shops to multi-site restaurant chains.
                Our team of experts is passionate about helping businesses find the
                right hardware solutions for their unique needs.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <Image src="/EA2.svg" alt="EPOS Associates" width={160} height={64} className="opacity-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    {milestone.year}
                  </p>
                  <p className="text-gray-900">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
