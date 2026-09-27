import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getWhatsAppLink, getProductEnquiryMessage } from "@/lib/whatsapp";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        {/* Breadcrumb */}
        <nav className="text-xs text-secondary mb-8 md:mb-12">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-accent transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28">
          {/* Image */}
          <AnimatedSection>
            <div className="relative aspect-[4/5] bg-surface-alt overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={0.15}>
            <SectionLabel>{product.category}</SectionLabel>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-6">
              {product.name}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-secondary">
              <span>
                <strong className="text-primary font-medium">Material:</strong>{" "}
                {product.material}
              </span>
              <span>
                <strong className="text-primary font-medium">Finish:</strong>{" "}
                {product.finish}
              </span>
            </div>

            <p className="text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specifications */}
            {Object.keys(product.specifications).length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">
                  Specifications
                </h3>
                <div className="border-t border-border">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 border-b border-border text-sm"
                    >
                      <span className="text-secondary">{key}</span>
                      <span className="text-primary font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink(getProductEnquiryMessage(product.name))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Enquire on WhatsApp
                </Button>
              </a>
              <Button href="/#enquiry" variant="secondary" size="lg">
                Request Price
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <AnimatedSection>
            <div className="border-t border-border pt-16 md:pt-20">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
