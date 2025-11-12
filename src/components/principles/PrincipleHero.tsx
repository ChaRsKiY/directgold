"use client";

import Image from "next/image";
import { MotionSection } from "@/components/motion";

interface PrincipleHeroProps {
  image: string;
  title: string;
}

export default function PrincipleHero({ image, title }: PrincipleHeroProps) {
  return (
    <MotionSection
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-light-bg)] via-transparent to-transparent" />
      </div>
    </MotionSection>
  );
}

