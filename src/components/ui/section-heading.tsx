import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3 mb-12 md:mb-16", className)}>
      {eyebrow && (
        <span className="font-mono text-[11px] md:text-xs uppercase tracking-widest text-accent-champagne block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-foreground-muted text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
