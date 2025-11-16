import Image from "next/image";
import { MotionDiv } from "../motion/MotionDiv";
import DBadge from "../ui/DBadge";

const QuestionsSection = () => {
  return (
    <section className="min-h-screen px-[10%] py-20">
      <div className="grid grid-cols-2 justify-between gap-12 items-center h-fit max-md:grid-cols-1 max-w-7xl mx-auto">
        <Image src="/mockups/mock1.jpg" alt="Questions Section 1" width={500} height={500} className="max-md:w-full" />
        <div id="questions" className="flex flex-col justify-evenly h-full flex-1 items-end gap-8 max-md:items-start">
            <div className="flex gap-4 text-right text-[var(--color-primary-gold)] items-center max-md:text-left">
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] hidden max-md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p><span className="font-bold">Zu welchen Preisen</span> kaufe und verkaufe ich? - Sind diese kompetitiv, transparent und jederzeit nachvollziehbar?</p>
                <MotionDiv
                    className="min-w-3 h-[120%] bg-[var(--color-primary-gold)] rounded-lg max-md:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </div>
            <div className="flex gap-4 text-right text-[var(--color-primary-gold)] items-center max-md:text-left">
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] hidden max-md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p><span className="font-bold">Erwerbe ich echtes Eigentum</span> an physischen, nummerierten, mir zugewiesenen Goldbarren?</p>
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] max-md:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </div>
            <div className="flex gap-4 text-right text-[var(--color-primary-gold)] items-center max-md:text-left">
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] hidden max-md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p><span className="font-bold">Welche Qualität und Herkunft</span> hat das mir angebotene Gold?</p>
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] max-md:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </div>
            <div className="flex gap-4 text-right text-[var(--color-primary-gold)] items-center max-md:text-left">
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] hidden max-md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <p><span className="font-bold">Ist mein Gold sicher?</span> Bin ich darauf angewiesen zu vertrauen oder kann ich jederzeit selbst, 24/7, objektiv und unabhängig den Beweis für Qualität, Quantität, Herkunft und den Lagerstandort meines Goldes überprüfen?</p>
                <MotionDiv
                    className="min-w-3 bg-[var(--color-primary-gold)] rounded-lg h-[120%] max-md:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center gap-4">
            <div className="flex justify-center">
                <DBadge />
            </div>
            <div className="mt-6 text-center text-2xl font-bold text-[var(--color-primary-gold)] w-2/3 max-md:w-full">
                DIRECTGOLD beantwortet alle diese Fragen eindeutig und jederzeit von Dir selbst überprüfbar.
            </div>
            <div className="text-center text-base text-[var(--color-secondary-text)] w-2/3 max-md:w-full">
                „Wer Sicherheit will, darf sich nicht in Illusionen wiegen." <br/> Lucius Annaeus Seneca (römischer Philosoph und Staatsmann, 4 v. Chr. - 65 n. Chr.)
            </div>
        </div>
    </section>
  );
};

export default QuestionsSection;