import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: any;
  className?: string;
  variant?: "primary" | "secondary" | "white" | "blue";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseClasses = "px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 hover:outline-none cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "text-primary-text bg-gold hover:ring-2 hover:ring-offset-2 hover:ring-gold"
      : variant === "white"
        ? "border-2 bg-white border-white text-black hover:ring-white ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-gold"
        : variant === "blue"
          ? "bg-blue-light text-white hover:bg-blue-dark"
          : "border-2 border-gold text-gold hover:bg-gold hover:text-primary-text";

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
