import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberLabel } from "@/components/ui/NumberLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { categories } from "@/data/categories";

export function WhatWeOffer() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-surface-alt">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20">
          <SectionLabel>What We Offer</SectionLabel>
          <SectionHeading
            title="Furniture for every space"
            subtitle="From living rooms to office floors, we craft pieces that fit how you live and work."
          />
        </AnimatedSection>

        <div className="space-y-0">
          {categories.map((cat, index) => (
            <AnimatedSection key={cat.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 md:py-14 ${
                  index !== categories.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                {/* Number + Text */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <NumberLabel number={cat.number} />
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl text-primary mb-3">
                        {cat.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
