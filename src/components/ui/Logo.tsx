import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "header" | "hero";
}

export default function Logo({ className = "", variant = "header" }: LogoProps) {
  return (
    <Image src="/directgold_logo.png" alt="Logo" width={150} height={150} />
  );
}
