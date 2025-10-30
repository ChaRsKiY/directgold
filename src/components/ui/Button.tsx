import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseClasses = "px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-gold)]";
  
  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-b from-[var(--color-button-gold-light)] to-[var(--color-button-gold-dark)] text-[var(--color-primary-text)]"
      : "bg-transparent border-2 border-[var(--color-primary-gold)] text-[var(--color-primary-gold)] hover:bg-[var(--color-primary-gold)] hover:text-[var(--color-primary-text)]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseClasses, variantClasses, className)}
    >
      {children}
    </button>
  );
}
