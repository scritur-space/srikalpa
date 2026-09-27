"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const allFilters = [
  { label: "All", slug: "all" },
  ...categories.map((c) => ({ label: c.title, slug: c.slug })),
];

export default function ProductsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.categorySlug === active);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel>Our Collection</SectionLabel>
          <SectionHeading
            title="Furniture built to last"
            subtitle="Browse our range of solid wood furniture for homes and offices."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {allFilters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
                  active === f.slug
                    ? "bg-dark text-white border-dark"
                    : "bg-transparent text-secondary border-border hover:border-dark"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-secondary py-20">
            No products found in this category.
          </p>
        )}
      </Container>
    </section>
  );
}
