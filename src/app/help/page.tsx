import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Centre | EPOS Associates",
  description:
    "Find answers to common questions about POS hardware, orders, deliveries, and returns. Contact our support team for further assistance.",
}

const faqs = [
  {
    question: "How do I set up my POS terminal?",
    answer: "All POS terminals come with a quick-start guide. Simply connect the power, attach any peripherals via USB, and follow the on-screen setup wizard. For additional help, contact our support team.",
  },
  {
    question: "What warranty comes with hardware products?",
    answer: "All hardware products come with a standard 2-year manufacturer warranty. Extended warranty options are available at checkout.",
  },
  {
    question: "How do I process a return?",
    answer: "You can request a return within 30 days of purchase. Visit our Returns page or contact us directly to initiate the process.",
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! We offer competitive pricing for bulk orders. Contact our sales team for a custom quote based on your requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, Amex). Business customers can also pay by bank transfer or invoice.",
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery is 2-3 business days. Next-day delivery is available for orders placed before 2pm. Free shipping on orders over \u00a3500.",
  },
]

export default function HelpPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Help Centre</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="tel:+441234567890" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Phone className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">+44 1234 567890</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Fri 9am-6pm GMT</p>
            </a>
            <a href="mailto:info@eposassociates.co.uk" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Mail className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
              <p className="text-sm text-gray-600">info@eposassociates.co.uk</p>
              <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
            </a>
            <Link href="/contact" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <MessageCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">Chat with our team</p>
              <p className="text-xs text-gray-500 mt-1">Available during office hours</p>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-3">
                  <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
