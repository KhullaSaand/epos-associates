"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingCart, Phone, ChevronDown } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Hardware",
    href: "/products",
    children: [
      { name: "All Hardware", href: "/products" },
      { name: "POS Terminals", href: "/products?category=pos-terminals" },
      { name: "Receipt Printers", href: "/products?category=receipt-printers" },
      { name: "Barcode Scanners", href: "/products?category=barcode-scanners" },
      { name: "Cash Drawers", href: "/products?category=cash-drawers" },
      { name: "Card Readers", href: "/products?category=card-readers" },
    ],
  },
  { name: "Software", href: "/products?category=pos-software" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative">
              <Image
                src="/EA2.svg"
                alt="EPOS Associates"
                width={140}
                height={46}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50/50 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-2/3" />
                  </Link>
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-150"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>+44 1234 567890</span>
            </Link>
            <Link
              href="/cart"
              className="relative p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="lg:hidden p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                +44 1234 567890
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
