import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CustomFurnitureCTA() {
  return (
    <section
      id="custom-furniture"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-light block mb-6">
            Custom Furniture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Have a space in mind?
          </h2>
          <p className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed">
            Tell us what you are looking for. We build bespoke furniture to your
            dimensions, materials, and finish preferences.
          </p>
          <Button href="/#enquiry" variant="primary" size="lg">
            Request a Quote
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
