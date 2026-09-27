export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  material: string;
  finish: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  specifications: Record<string, string>;
  relatedProductSlugs: string[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  isDemo: boolean;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: {
    full: string;
    street: string;
    area: string;
    city: string;
    pincode: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
  isPlaceholder: boolean;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  furnitureType: string;
  approximateSize: string;
  materialPreference: string;
  budget: string;
  message: string;
  referenceImage: File | null;
}
