interface GoldBarShowcaseProps {
  readonly backgroundImage?: string;
  readonly ariaLabel?: string;
}

export function GoldBarShowcase({ backgroundImage, ariaLabel }: GoldBarShowcaseProps) {
  const sheenOverlay =
    "linear-gradient(140deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 34%, rgba(242,200,122,0.25) 58%, rgba(214,175,109,0.65) 100%)";
  const backgroundValue = backgroundImage
    ? `${sheenOverlay}, url(${backgroundImage})`
    : sheenOverlay;

  return (
    <section className="flex w-full justify-center px-6 pb-16 md:pb-20">
      <div
        aria-label={ariaLabel}
        className="gold-bar-sheen h-52 w-full max-w-[520px] rounded-[28px] border border-[rgba(255,255,255,0.15)] bg-[var(--color-gold)]"
        style={{
          backgroundImage: backgroundValue,
        }}
      />
    </section>
  );
}

