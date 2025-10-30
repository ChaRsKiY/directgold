import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary";

interface CTAButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: CTAButtonVariant;
  readonly className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold uppercase tracking-[0.3rem] transition-[transform,box-shadow,background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<CTAButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--color-gold)] text-[var(--color-text-dark)] shadow-[0_12px_30px_rgba(214,175,109,0.35)] hover:-translate-y-[1px] hover:bg-[var(--color-gold-deep)] hover:shadow-[0_18px_40px_rgba(214,175,109,0.45)] focus-visible:outline-[var(--color-gold)]",
  secondary:
    "border-[rgba(255,255,255,0.18)] text-hero-primary hover:-translate-y-[1px] hover:border-[rgba(255,255,255,0.4)] hover:text-[var(--color-text-secondary)] focus-visible:outline-[var(--color-text-secondary)]",
};

export function CTAButton({ href, children, variant = "primary", className }: CTAButtonProps) {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`} href={href}>
      {children}
    </Link>
  );
}

