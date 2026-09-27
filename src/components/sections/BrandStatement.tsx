import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BrandStatement() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
                alt="Sri Kalpa furniture craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15} className="lg:col-span-5">
            <SectionLabel>About Sri Kalpa</SectionLabel>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-6">
              Built with intention,
              <br />
              finished with care
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Sri Kalpa is a furniture workshop based in Electronic City Phase 2,
              Bengaluru. We work with solid teak, rubberwood, and hardwood to
              create furniture that serves its purpose well and ages gracefully.
            </p>
            <p className="text-secondary leading-relaxed">
              From homes to offices, from a single bed to an entire living room —
              we build furniture to the dimensions and finishes that work for
              your space.
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
