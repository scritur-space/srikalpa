import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { DecorativeLine } from "@/components/ui/DecorativeLine";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="font-heading text-3xl text-white tracking-wide">
                  {business.name}
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                {business.tagline}. Crafting quality furniture for homes and
                offices in Bengaluru.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-accent-light transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a
                    href={`tel:${business.phone}`}
                    className="hover:text-accent-light transition-colors"
                  >
                    {business.phone}
                  </a>
                </li>
                {business.email && (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      className="hover:text-accent-light transition-colors"
                    >
                      {business.email}
                    </a>
                  </li>
                )}
                <li>{business.hours}</li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Address
              </h4>
              <address className="text-sm text-white/70 not-italic leading-relaxed">
                {business.address.street}
                <br />
                {business.address.area}
                <br />
                {business.address.city}
              </address>
            </div>
          </div>
        </div>

        <DecorativeLine className="text-white" />

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent-light transition-colors"
            >
              Instagram
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent-light transition-colors"
            >
              Facebook
            </a>
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-accent-light transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
