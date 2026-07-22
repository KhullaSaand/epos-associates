import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout | EPOS Associates",
  description: "Complete your POS hardware purchase securely. Shipping and payment information.",
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children
}
