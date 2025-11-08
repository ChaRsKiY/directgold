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
  const baseClasses = "px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-[var(--color-primary-gold)] cursor-pointer";
  
  const variantClasses =
    variant === "primary"
      ? "text-[var(--color-primary-text)] bg-[var(--color-primary-gold)]"
      : "border-2 border-[var(--color-primary-gold)] text-[var(--color-primary-gold)] hover:bg-[var(--color-primary-gold)] hover:text-[var(--color-primary-text)]";

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
