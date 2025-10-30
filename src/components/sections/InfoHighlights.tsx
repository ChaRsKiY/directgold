import type { ReactNode } from "react";

interface InfoHighlightItem {
  readonly question: string;
  readonly answer: ReactNode;
}

interface InfoHighlightsProps {
  readonly eyebrow?: string;
  readonly items: readonly InfoHighlightItem[];
}

export function InfoHighlights({ eyebrow, items }: InfoHighlightsProps) {
  return (
    <section className="px-6 pt-20 text-center text-[var(--color-text-dark)] md:pt-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.65rem] text-[rgba(0,0,0,0.55)]">
            {eyebrow}
          </p>
        ) : null}
        <div className="flex w-full flex-col gap-12 pb-10 text-lg leading-9 md:text-xl">
          {items.map((item) => (
            <div key={item.question} className="space-y-4">
              <h3 className="text-base font-semibold uppercase tracking-[0.35rem] text-[rgba(44,28,18,0.78)] md:text-lg">
                {item.question}
              </h3>
              <p className="text-balance text-[1.5rem] font-semibold leading-[2.3rem] tracking-tight text-[rgba(70,46,29,0.95)] md:text-[1.75rem] md:leading-[2.6rem]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

