import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/data/business";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Kalpa — Crafted Furniture for Beautiful Spaces",
    template: "%s | Sri Kalpa — Premium Furniture, Bengaluru",
  },
  description:
    "Premium handcrafted furniture for homes, offices, and custom spaces in Electronic City Phase 2, Bengaluru. Sofas, beds, teak wood furniture, office chairs, outdoor furniture, and modular kitchens.",
  keywords: [
    "furniture in Electronic City",
    "furniture shop in Electronic City",
    "furniture Bengaluru",
    "custom furniture Bengaluru",
    "teak wood furniture",
    "office furniture Bengaluru",
    "Sri Kalpa furniture",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: "Electronic City Phase 2",
    addressRegion: "Bengaluru, Karnataka",
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  telephone: business.phone,
  areaServed: "Electronic City Phase 2, Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
