import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | EPOS Associates",
  description:
    "Browse our complete range of POS hardware and software. POS terminals, receipt printers, barcode scanners, cash drawers, card readers, and POS software solutions.",
  openGraph: {
    title: "POS Hardware & Software | EPOS Associates",
    description:
      "Browse POS terminals, receipt printers, barcode scanners, cash drawers, card readers, and POS software for businesses across the UK.",
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
