"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <SectionLabel>What Our Clients Say</SectionLabel>
          <SectionHeading
            title="Words we have received"
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {/* Quote */}
            <div className="relative min-h-[200px] flex items-center justify-center">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="w-12 h-px bg-accent mb-8" />
                  <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed mb-8 italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-sm font-medium text-primary">{t.name}</p>
                    <p className="text-xs text-secondary mt-1">{t.location}</p>
                    {t.isDemo && (
                      <span className="text-[10px] text-accent uppercase tracking-wider mt-1 inline-block">
                        Demo
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-accent w-6" : "bg-border"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
