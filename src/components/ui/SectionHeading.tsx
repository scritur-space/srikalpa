interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-primary leading-[1.05] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed mt-5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
