import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DecorativeLine } from "@/components/ui/DecorativeLine";

export const metadata: Metadata = {
  title: "About Sri Kalpa",
  description:
    "Learn about Sri Kalpa — a furniture workshop in Electronic City Phase 2, Bengaluru, crafting solid wood furniture for homes and offices.",
};

const values = [
  {
    title: "Material First",
    description:
      "We choose solid teak, rubberwood, and hardwood because they hold up to decades of daily use. No particle board, no shortcuts.",
  },
  {
    title: "Built to Measure",
    description:
      "Every home is different. We build to your dimensions so furniture fits properly — not the other way around.",
  },
  {
    title: "Honest Work",
    description:
      "Good joints, proper finishes, and construction that holds up. We focus on how furniture is made, not just how it photographs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <Container className="relative z-10">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel className="!text-accent-light">About Us</SectionLabel>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Furniture built with
              <br />
              intention and care
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Sri Kalpa is a furniture workshop in Electronic City Phase 2,
              Bengaluru. We build solid wood furniture for homes, offices, and
              custom spaces.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=900&q=80"
                  alt="Furniture workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="lg:col-span-5">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-heading text-3xl md:text-4xl text-primary leading-[1.1] mb-6">
                Starting with wood,
                <br />
                ending with furniture
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                We started with a simple belief: furniture should be built from
                materials that last, by people who understand construction, and
                to measurements that fit the space it will live in.
              </p>
              <p className="text-secondary leading-relaxed">
                Based in Electronic City Phase 2, we work with homes and offices
                across Bengaluru. Every piece we build starts with understanding
                how the space will be used and what the client actually needs.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <DecorativeLine className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-10" />

      {/* Values */}
      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <AnimatedSection className="mb-16 md:mb-20">
            <SectionLabel>Our Approach</SectionLabel>
            <SectionHeading
              title="What guides our work"
              subtitle="Three principles that shape every piece we make."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="border-t border-border pt-8">
                  <h3 className="font-heading text-xl md:text-2xl text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-dark text-white">
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Ready to furnish your space?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Tell us what you need. We build furniture to your dimensions,
              materials, and finish preferences.
            </p>
            <Button href="/#enquiry" variant="primary" size="lg">
              Get in Touch
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
