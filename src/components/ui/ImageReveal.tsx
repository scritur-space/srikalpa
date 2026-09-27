"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ImageReveal({ children, className = "" }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
