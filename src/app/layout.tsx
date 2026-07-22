import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EPOS Associates | POS Hardware Solutions for Business",
    template: "%s | EPOS Associates",
  },
  description:
    "Your trusted partner for POS hardware solutions. Quality point-of-sale terminals, receipt printers, barcode scanners, and more for businesses of all sizes across the UK.",
  keywords: [
    "POS hardware",
    "point of sale",
    "POS terminals",
    "receipt printers",
    "barcode scanners",
    "cash drawers",
    "card readers",
    "POS software",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "EPOS Associates",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
