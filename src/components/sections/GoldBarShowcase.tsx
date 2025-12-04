interface GoldBarShowcaseProps {
  readonly backgroundImage?: string;
  readonly ariaLabel?: string;
}

export function GoldBarShowcase({ backgroundImage, ariaLabel }: GoldBarShowcaseProps) {
  const sheenOverlay =
    "linear-gradient(140deg, var(--color-sheen-white-60) 0%, var(--color-sheen-white-10) 34%, var(--color-sheen-gold-25) 58%, var(--color-sheen-gold-65) 100%)";
  const backgroundValue = backgroundImage
    ? `${sheenOverlay}, url(${backgroundImage})`
    : sheenOverlay;

  return (
    <section className="flex w-full justify-center px-6 pb-16 md:pb-20">
      <div
        aria-label={ariaLabel}
        className="gold-bar-sheen h-52 w-full max-w-[520px] rounded-[28px] border border-gold-bar-border bg-gold"
        style={{
          backgroundImage: backgroundValue,
        }}
      />
    </section>
  );
}

