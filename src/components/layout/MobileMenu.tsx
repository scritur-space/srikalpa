"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-background transition-all duration-300 lg:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="font-heading text-3xl text-primary hover:text-accent transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-4">
          <Button href="/#enquiry" variant="primary" size="lg" onClick={onClose}>
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
