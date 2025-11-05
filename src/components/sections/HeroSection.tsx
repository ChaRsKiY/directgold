import { CTAButton } from "@/components/ui/CTAButton";
import { MotionSection, MotionDiv, MotionH1, MotionP, MotionSpan } from "@/components/motion";

interface HeroSectionProps {
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly backgroundImage?: string;
  readonly brandMark?: string;
}

export function HeroSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage,
  brandMark,
}: HeroSectionProps) {
  const overlay =
    "linear-gradient(180deg, rgba(8,6,5,0.92) 0%, rgba(16,11,7,0.92) 45%, rgba(8,6,5,0.96) 100%)";
  const backgroundValue = backgroundImage
    ? `${overlay}, url(${backgroundImage})`
    : overlay;

  return (
    <MotionSection
      className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-hero px-6 pb-24 pt-36 text-center text-hero-primary sm:pb-32 md:justify-start md:px-10 md:text-left"
      style={{
        backgroundImage: backgroundValue,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <MotionDiv
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 md:items-start"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {brandMark ? (
          <MotionDiv
            className="flex items-center gap-4 text-lg font-semibold uppercase tracking-[0.8rem] text-[rgba(255,255,255,0.7)] md:text-2xl"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MotionSpan className="text-[var(--color-gold)]">›</MotionSpan>
            <MotionSpan>{brandMark}</MotionSpan>
          </MotionDiv>
        ) : null}
        <MotionH1
          className="max-w-3xl text-balance text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.08]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {title}
        </MotionH1>
        <MotionP
          className="max-w-2xl text-pretty text-base leading-7 text-hero-muted md:text-lg md:leading-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {description}
        </MotionP>
        <MotionDiv
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
        </MotionDiv>
      </MotionDiv>
      <div className="absolute inset-0 bg-[rgba(6,4,3,0.45)] mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#2b160a] via-[rgba(23,13,8,0.6)] to-transparent" aria-hidden="true" />
    </MotionSection>
  );
}

