"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group block relative overflow-hidden ${
        featured ? "aspect-[3/4]" : "aspect-[4/5]"
      }`}
    >
      {/* Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <span className="text-xs uppercase tracking-[0.15em] text-accent-light mb-2 block">
          {product.category}
        </span>
        <h3 className="font-heading text-xl md:text-2xl text-white leading-tight mb-3">
          {product.name}
        </h3>
        <span className="text-xs uppercase tracking-[0.15em] text-white/80 border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
          View Product
        </span>
      </div>
    </Link>
  );
}
