interface DecorativeLineProps {
  className?: string;
}

export function DecorativeLine({ className = "" }: DecorativeLineProps) {
  return (
    <div
      className={`w-full h-px bg-current opacity-20 ${className}`}
      aria-hidden="true"
    />
  );
}
