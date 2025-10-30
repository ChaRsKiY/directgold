import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-light-bg)] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-primary-text-dark)] mb-8 md:mb-10 max-w-4xl flex gap-2 flex-wrap items-center justify-center">
            <p>Dein Gold.</p> <p>Neu definiert.</p>
          </h2>
          <Button variant="primary">Mehr Infos</Button>
        </div>
      </div>
    </section>
  );
}
