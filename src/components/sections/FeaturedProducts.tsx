import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.slice(0, 6);

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <SectionLabel>Featured Products</SectionLabel>
            <SectionHeading
              title="Our collection"
              subtitle="Solid wood furniture built for lasting daily use."
            />
          </div>
          <Button href="/products" variant="secondary" size="md">
            View All Products
          </Button>
        </AnimatedSection>

        {/* Editorial grid — not uniform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large featured item */}
          <AnimatedSection className="md:col-span-2 lg:row-span-2">
            <ProductCard product={featured[0]} featured />
          </AnimatedSection>

          {/* Smaller items */}
          {featured.slice(1, 3).map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}

          {/* Bottom row */}
          {featured.slice(3, 6).map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
