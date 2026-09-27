interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6 ${className}`}
    >
      {children}
    </span>
  );
}
