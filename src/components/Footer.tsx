import Link from "next/link"
import Image from "next/image"

const footerNavigation = {
  products: [
    { name: "POS Terminals", href: "/products?category=pos-terminals" },
    { name: "Receipt Printers", href: "/products?category=receipt-printers" },
    { name: "Barcode Scanners", href: "/products?category=barcode-scanners" },
    { name: "Cash Drawers", href: "/products?category=cash-drawers" },
    { name: "Card Readers", href: "/products?category=card-readers" },
  ],
  software: [
    { name: "All Software", href: "/products?category=pos-software" },
    { name: "Retail POS", href: "/products?category=pos-software" },
    { name: "Restaurant POS", href: "/products?category=pos-software" },
    { name: "Cloud-Based", href: "/products?category=pos-software" },
    { name: "On-Premise", href: "/products?category=pos-software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Warranty", href: "/warranty" },
    { name: "Returns", href: "/returns" },
    { name: "Shipping", href: "/shipping" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/EA2-white.svg" alt="EPOS Associates" width={120} height={40} />
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Your trusted partner for POS hardware and software solutions. We provide quality
              point-of-sale equipment and systems for businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a href="tel:+441234567890" className="text-sm hover:text-white">
                +44 1234 567890
              </a>
              <a href="mailto:sales@eposassociates.com" className="text-sm hover:text-white">
                sales@eposassociates.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Hardware</h3>
            <ul className="space-y-2">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Software</h3>
            <ul className="space-y-2">
              {footerNavigation.software.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EPOS Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
