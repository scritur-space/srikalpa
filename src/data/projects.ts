import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "residential-living",
    slug: "residential-living-room",
    title: "Residential Living Room",
    category: "Residential",
    description:
      "A complete living room furnishing for a family home in Electronic City. Solid teak wood sofa set, coffee table, and TV unit designed to work together in a compact urban living space.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "corporate-office",
    slug: "corporate-office-fitout",
    title: "Corporate Office Fit-Out",
    category: "Office",
    description:
      "Executive office furniture for a technology firm in Electronic City. Included custom desks, ergonomic seating, conference table, and reception counter finished in walnut laminate.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "custom-teak-bedroom",
    slug: "custom-teak-bedroom",
    title: "Custom Teak Bedroom",
    category: "Custom",
    description:
      "A full bedroom set in solid teak — king bed with storage, matching wardrobes, and bedside tables. Designed to the client's exact measurements for a fitted look.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "outdoor-garden",
    slug: "outdoor-garden-furniture",
    title: "Outdoor Garden Setup",
    category: "Outdoor",
    description:
      "Weather-resistant garden furniture for a villa courtyard. Includes a six-seater dining set, sun loungers, and a garden bench in treated rubberwood.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "modular-kitchen",
    slug: "modular-kitchen-installation",
    title: "Modular Kitchen",
    category: "Kitchen",
    description:
      "A compact modular kitchen designed for efficient workflow in a modern apartment. Soft-close cabinets, granite countertop, and integrated storage solutions.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "reception-area",
    slug: "reception-area-design",
    title: "Reception Area Design",
    category: "Office",
    description:
      "A welcoming reception area for a medical clinic. Custom-built reception desk in teak with storage, paired with a comfortable waiting area sofa set.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
