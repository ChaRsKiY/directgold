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
    "border-transparent bg-gold text-text-dark shadow-[0_12px_30px_var(--color-cta-shadow)] hover:-translate-y-[1px] hover:bg-gold-deep hover:shadow-[0_18px_40px_var(--color-cta-shadow-hover)] focus-visible:outline-gold",
  secondary:
    "border-cta-border text-hero-primary hover:-translate-y-[1px] hover:border-cta-border-hover hover:text-secondary-text focus-visible:outline-secondary-text",
};

export function CTAButton({ href, children, variant = "primary", className }: CTAButtonProps) {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`} href={href}>
      {children}
    </Link>
  );
}

