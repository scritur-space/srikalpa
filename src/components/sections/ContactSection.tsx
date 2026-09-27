import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { business } from "@/data/business";
import { MapEmbed } from "@/components/ui/MapEmbed";

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20">
          <SectionLabel>Find Us</SectionLabel>
          <SectionHeading
            title="Visit our workshop"
            subtitle="Come see our work in person at Electronic City Phase 2."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Details */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                  Address
                </h3>
                <address className="not-italic text-primary leading-relaxed">
                  {business.address.street}
                  <br />
                  {business.address.area}
                  <br />
                  {business.address.city}
                </address>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                  Contact
                </h3>
                <div className="space-y-2 text-primary">
                  <p>
                    <a
                      href={`tel:${business.phone}`}
                      className="hover:text-accent transition-colors"
                    >
                      {business.phone}
                    </a>
                  </p>
                  {business.email && (
                    <p>
                      <a
                        href={`mailto:${business.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {business.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                  Hours
                </h3>
                <p className="text-primary">{business.hours}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.15}>
            <MapEmbed />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
