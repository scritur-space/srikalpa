import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getWhatsAppLink, getGeneralEnquiryMessage } from "@/lib/whatsapp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        {/* Breadcrumb */}
        <nav className="text-xs text-secondary mb-8 md:mb-12">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-accent transition-colors">
            Spaces
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{project.title}</span>
        </nav>

        {/* Hero Image */}
        <AnimatedSection>
          <div className="relative aspect-[16/9] bg-surface-alt overflow-hidden mb-12">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </AnimatedSection>

        {/* Details */}
        <div className="max-w-3xl">
          <AnimatedSection>
            <SectionLabel>{project.category}</SectionLabel>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {project.description}
            </p>
          </AnimatedSection>

          {/* Additional images */}
          {project.images.length > 1 && (
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* CTA */}
          <AnimatedSection delay={0.15}>
            <div className="border-t border-border pt-8 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink(getGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Enquire About This Project
                </Button>
              </a>
              <Button href="/#enquiry" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
