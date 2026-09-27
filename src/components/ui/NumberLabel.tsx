interface NumberLabelProps {
  number: string;
  className?: string;
}

export function NumberLabel({ number, className = "" }: NumberLabelProps) {
  return (
    <span
      className={`font-heading text-5xl md:text-6xl lg:text-7xl text-accent font-light leading-none ${className}`}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
