import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "header" | "hero";
}

export default function Logo({ className = "", variant = "header" }: LogoProps) {
  const sizeClasses = variant === "hero" ? "text-5xl md:text-7xl lg:text-8xl" : "text-xl md:text-2xl";
  
  return (
    <Image src="/directgold_logo.png" alt="Logo" width={150} height={150} />
  );
}
