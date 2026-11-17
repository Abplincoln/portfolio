import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "champagne" | "outline" | "subtle";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-background-subtle text-foreground-muted border-border",
    champagne: "bg-background-subtle text-accent-champagne border-border-subtle",
    outline: "bg-transparent text-foreground-muted border-border",
    subtle: "bg-background-elevated text-foreground-faint border-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
