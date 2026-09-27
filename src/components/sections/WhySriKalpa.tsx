import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    number: "01",
    title: "Solid Materials",
    description:
      "We work with solid teak, rubberwood, and hardwood — not particle board or MDF. Materials chosen for strength and longevity.",
  },
  {
    number: "02",
    title: "Custom Dimensions",
    description:
      "Every home and office is different. We build to your measurements so furniture fits your space properly.",
  },
  {
    number: "03",
    title: "Honest Craftsmanship",
    description:
      "Joints, finishes, and construction methods that hold up to daily use. We focus on how furniture is built, not just how it looks.",
  },
];

export function WhySriKalpa() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-dark text-white">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20">
          <SectionLabel className="!text-accent-light">Why Sri Kalpa</SectionLabel>
          <SectionHeading
            title="What guides our work"
            subtitle="Three principles that shape every piece we build."
            className="*:text-white *:after:!bg-white/20"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((item, i) => (
            <AnimatedSection key={item.number} delay={i * 0.1}>
              <div className="border-t border-white/20 pt-8">
                <span className="font-heading text-4xl text-accent-light block mb-4">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl md:text-2xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
