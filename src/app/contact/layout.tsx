import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | EPOS Associates",
  description:
    "Get in touch with EPOS Associates. Phone, email, or visit our London office. We respond within 24 hours.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
