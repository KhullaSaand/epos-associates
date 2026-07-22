import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Details",
  description:
    "View product details, specifications, and pricing. Browse our range of POS hardware and software solutions.",
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
