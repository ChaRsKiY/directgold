import Image from "next/image";

export default function GoldBarSection() {
  return (
    <section className="bg-[var(--color-light-bg)] pb-8 md:px-12 lg:px-16 relative overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="relative w-full">
          <div className="relative w-full">
            <Image src="/gold_bar.png" alt="Gold Bar" width={1280} height={960} className="translate-x-[40%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
