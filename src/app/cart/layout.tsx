import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Cart | EPOS Associates",
  description: "Review your selected POS hardware and software before checkout.",
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children
}
