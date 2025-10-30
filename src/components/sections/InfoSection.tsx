import QABlock from "./QABlock";

const qaData = [
  {
    question: "Zu welchem Preis kauf und verkaufe ich?",
    answer: "Transparent. Gegenwärtig. In der Zukunft.",
  },
  {
    question: "Erwerbe ich echtes Eigentum an konkreten Goldbarren?",
    answer: "Registriert. Nummeriert. Mir zugeordnet.",
  },
  {
    question: "Kann ich jederzeit, 24/7, selbst und unabhängig überprüfen, welche konkreten Barren ich wo lagere?",
    answer: "Qualität. Herkunft. Integrität.",
  },
];

export default function InfoSection() {
  return (
    <section
      id="about"
      className="bg-[var(--color-light-bg)] py-20 md:py-24 lg:py-32"
    >
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center px-4">
          {qaData.map((qa, index) => (
            <QABlock key={index} question={qa.question} answer={qa.answer} className="w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
