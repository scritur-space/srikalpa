import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "rubberwood-picnic-set",
    slug: "rubberwood-x-frame-picnic-set",
    name: "Solid Rubberwood X Frame Picnic Table & Bench Set",
    category: "Outdoor Furniture",
    categorySlug: "outdoor-furniture",
    material: "Solid Rubberwood",
    finish: "Natural oil finish, weather resistant",
    description:
      "A sturdy outdoor dining set featuring an X-frame design in solid rubberwood. The table and matching benches seat four comfortably. Finished with a natural oil treatment for weather resistance, this set is ideal for gardens, patios, and outdoor dining areas.",
    shortDescription:
      "Sturdy X-frame outdoor dining set in solid rubberwood with natural oil finish.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    specifications: {
      Material: "Solid Rubberwood",
      Seating: "4 persons",
      "Table Dimensions": "150cm x 75cm x 75cm",
      "Bench Dimensions": "150cm x 30cm x 45cm",
      Finish: "Natural oil, weather resistant",
      Assembly: "Required",
    },
    relatedProductSlugs: ["teak-wood-double-bed", "boss-office-chair"],
  },
  {
    id: "teak-wood-double-bed",
    slug: "teak-wood-double-bed",
    name: "Teak Wood Double Bed",
    category: "Home Furniture",
    categorySlug: "home-furniture",
    material: "Solid Teak Wood",
    finish: "Hand-rubbed natural teak",
    description:
      "A solid teak wood double bed with clean lines and traditional craftsmanship. The frame is built from kiln-dried teak for lasting strength, with a hand-rubbed finish that highlights the natural grain. Designed for everyday comfort and built to last generations.",
    shortDescription:
      "Solid teak wood double bed with clean lines and natural grain finish.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
    specifications: {
      Material: "Solid Teak Wood",
      Size: "King (6ft x 5ft)",
      Frame: "Kiln-dried teak",
      Finish: "Hand-rubbed natural teak",
      Storage: "Optional hydraulic storage",
      Assembly: "Delivered assembled",
    },
    relatedProductSlugs: ["rubberwood-picnic-set", "reclining-sofa"],
  },
  {
    id: "boss-office-chair",
    slug: "boss-office-chair",
    name: "Boss Executive Office Chair",
    category: "Office & Commercial",
    categorySlug: "office-commercial",
    material: "Leatherette upholstery, chrome base",
    finish: "Matte black chrome",
    description:
      "A high-back executive chair with padded armrests and a chrome swivel base. Designed for long hours at the desk with ergonomic lumbar support and smooth tilt mechanism. Upholstered in premium leatherette for a professional look.",
    shortDescription:
      "High-back executive chair with ergonomic support and chrome swivel base.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200&q=80",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    ],
    specifications: {
      Material: "Leatherette upholstery",
      Base: "Chrome swivel, 360°",
      Mechanism: "Tilt and lock",
      Armrests: "Padded, fixed",
      "Weight Capacity": "120 kg",
      Adjustable: "Height, tilt tension",
    },
    relatedProductSlugs: ["revolving-office-chair", "cash-desk-counter"],
  },
  {
    id: "revolving-office-chair",
    slug: "revolving-office-chair",
    name: "Revolving Office Chair",
    category: "Office & Commercial",
    categorySlug: "office-commercial",
    material: "Mesh back, fabric seat, nylon base",
    finish: "Matte black",
    description:
      "A versatile revolving office chair with a breathable mesh back and cushioned fabric seat. The pneumatic height adjustment and 360-degree swivel make it suitable for any workspace. Built for comfort during extended work sessions.",
    shortDescription:
      "Breathable mesh back office chair with pneumatic height adjustment.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&q=80",
    ],
    specifications: {
      Material: "Mesh back, fabric seat",
      Base: "Nylon, 360° swivel",
      Mechanism: "Pneumatic height adjustment",
      Armrests: "Fixed polypropylene",
      "Weight Capacity": "100 kg",
      Adjustable: "Height",
    },
    relatedProductSlugs: ["boss-office-chair", "cash-desk-counter"],
  },
  {
    id: "wooden-temple",
    slug: "wooden-temple-pooja-unit",
    name: "Wooden Temple / Pooja Unit",
    category: "Home Furniture",
    categorySlug: "home-furniture",
    material: "Solid Teak Wood",
    finish: "Polished natural teak with gold accents",
    description:
      "A traditional wooden pooja unit crafted from solid teak with intricate carving details. Features a domed top, storage drawer, and brass bell hooks. Designed to be a sacred focal point in your home with craftsmanship that honours tradition.",
    shortDescription:
      "Traditional teak wood pooja unit with carved details and brass accents.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    specifications: {
      Material: "Solid Teak Wood",
      Height: "150cm",
      Width: "75cm",
      Depth: "40cm",
      Finish: "Polished teak with gold accents",
      Features: "Domed top, storage drawer, bell hooks",
    },
    relatedProductSlugs: ["teak-wood-double-bed", "reclining-sofa"],
  },
  {
    id: "reclining-sofa",
    slug: "reclining-sofa",
    name: "Reclining Sofa",
    category: "Home Furniture",
    categorySlug: "home-furniture",
    material: "Premium fabric upholstery, solid wood frame",
    finish: "Warm grey fabric",
    description:
      "A three-seater reclining sofa with smooth reclining mechanisms on both ends. Built on a kiln-dried hardwood frame with high-density foam cushions. Upholstered in stain-resistant fabric, it combines comfort with durability for family living.",
    shortDescription:
      "Three-seater reclining sofa with smooth mechanisms and stain-resistant fabric.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
    ],
    specifications: {
      Material: "Premium fabric upholstery",
      Frame: "Kiln-dried hardwood",
      Seating: "3 persons",
      Recline: "Manual, both ends",
      Cushions: "High-density foam",
      Dimensions: "200cm x 95cm x 100cm",
    },
    relatedProductSlugs: ["teak-wood-double-bed", "wooden-temple"],
  },
  {
    id: "cash-desk-counter",
    slug: "cash-desk-counter",
    name: "Cash Desk Counter",
    category: "Office & Commercial",
    categorySlug: "office-commercial",
    material: "Engineered wood with laminate finish",
    finish: "Walnut laminate",
    description:
      "A functional cash desk counter for retail and commercial spaces. Features a raised counter top, lower storage shelves, and a lockable cash drawer. Clean lines and a professional walnut laminate finish suit any commercial interior.",
    shortDescription:
      "Professional cash desk counter with lockable drawer and storage shelves.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    specifications: {
      Material: "Engineered wood",
      Finish: "Walnut laminate",
      Width: "120cm",
      Depth: "60cm",
      Height: "90cm (counter), 110cm (raised)",
      Features: "Lockable cash drawer, storage shelves",
    },
    relatedProductSlugs: ["boss-office-chair", "revolving-office-chair"],
  },
  {
    id: "decorative-pillow-set",
    slug: "decorative-pillow-set",
    name: "Decorative Pillow Set",
    category: "Home Furniture",
    categorySlug: "home-furniture",
    material: "Cotton and linen blend",
    finish: "Assorted neutral tones",
    description:
      "A curated set of decorative throw pillows in complementary neutral tones. Made from a cotton-linen blend with hidden zippers. Designed to add warmth and texture to sofas, beds, and accent chairs.",
    shortDescription:
      "Curated set of cotton-linen throw pillows in warm neutral tones.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80",
    ],
    specifications: {
      Material: "Cotton-linen blend",
      Set: "4 pillows",
      Sizes: "45cm x 45cm (2), 30cm x 50cm (2)",
      Closure: "Hidden zipper",
      Care: "Machine washable covers",
      Fill: "Polyester fiber",
    },
    relatedProductSlugs: ["reclining-sofa", "teak-wood-double-bed"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter(
    (p) => product.relatedProductSlugs.includes(p.slug) && p.slug !== product.slug
  );
}
