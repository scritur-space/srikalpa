import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <SectionLabel>Our Spaces</SectionLabel>
            <SectionHeading
              title="Spaces we have shaped"
              subtitle="From apartments to offices, each project starts with understanding how the space will be used."
            />
          </div>
          <Button href="/projects" variant="secondary" size="md">
            View All Spaces
          </Button>
        </AnimatedSection>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featured.map((project, i) => (
            <AnimatedSection
              key={project.id}
              delay={i * 0.1}
              className={i === 0 ? "md:row-span-2" : ""}
            >
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
