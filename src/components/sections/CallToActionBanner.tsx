import { CTAButton } from "@/components/ui/CTAButton";

interface CallToActionBannerProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

export function CallToActionBanner({ title, subtitle, ctaLabel, ctaHref }: CallToActionBannerProps) {
  return (
    <section className="flex w-full flex-col items-center gap-8 px-6 pb-24 text-center md:gap-10 md:pb-32">
      <div className="space-y-4">
        <h2 className="text-balance text-[clamp(2.1rem,5vw,3rem)] font-semibold leading-tight text-[rgba(53,35,21,0.95)]">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-base uppercase tracking-[0.4rem] text-[rgba(96,70,49,0.75)]">
            {subtitle}
          </p>
        ) : null}
      </div>
      <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
    </section>
  );
}

