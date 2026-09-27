"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

const allCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        <AnimatedSection className="mb-12 md:mb-16">
          <SectionLabel>Our Spaces</SectionLabel>
          <SectionHeading
            title="Spaces we have shaped"
            subtitle="Each project begins with understanding how the space will actually be used."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
                  active === cat
                    ? "bg-dark text-white border-dark"
                    : "bg-transparent text-secondary border-border hover:border-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-xs uppercase tracking-[0.15em] text-accent-light block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
