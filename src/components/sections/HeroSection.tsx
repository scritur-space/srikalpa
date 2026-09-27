"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[kenBurns_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-32">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent-light mb-6">
            Sri Kalpa — Bengaluru
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white leading-[1.05] mb-6">
            Crafted Furniture
            <br />
            for Beautiful Spaces
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Furniture for homes, offices and custom spaces in Bengaluru.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/products" variant="primary" size="lg">
              Explore Collection
            </Button>
            <Button href="/#enquiry" variant="secondary" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-px h-4 bg-white animate-scrollDown" />
        </div>
      </div>
    </section>
  );
}
