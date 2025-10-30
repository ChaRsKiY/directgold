interface QABlockProps {
  question: string;
  answer: string;
  className?: string;
}

export default function QABlock({ question, answer, className = "" }: QABlockProps) {
  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      <h3 className="text-base md:text-xl lg:text-2xl text-[var(--color-primary-gold)] font-bold mb-3 md:mb-4 px-[12%] max-md:px-[5%] max-sm:px-[2%]">
        {question}
      </h3>
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary-gold-light)] leading-tight">
        {answer}
      </p>
    </div>
  );
}
