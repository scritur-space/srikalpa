import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Sri Kalpa — Electronic City, Bengaluru",
  description:
    "Get in touch with Sri Kalpa furniture shop in Electronic City Phase 2, Bengaluru. Phone, WhatsApp, and address details.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
