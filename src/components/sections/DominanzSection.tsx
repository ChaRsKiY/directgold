"use client"

import { useRef } from "react";
import Image from "next/image";
import { MotionH2 } from "@/components/motion/MotionH2";
import { MotionH3, MotionDiv } from "../motion";
import ProgressIndicator from "../ui/ProgressIndicator";
import { useScroll, useTransform, MotionValue } from "framer-motion";

const QA_ITEMS = [
    {
        question: "Zu welchen Preisen kaufe und verkaufe ich?",
        answer: "Sie handeln stets zu den aktuellen LBMA-Preisen. Transparenz und Fairness stehen bei uns an erster Stelle, damit Sie immer den besten Marktwert erhalten."
    },
    {
        question: "Wie sicher ist die Lagerung?",
        answer: "Ihr Gold wird in hochsicheren Tresoranlagen in der Schweiz gelagert, unabhängig vom Bankensystem und vollständig versichert."
    },
    {
        question: "Kann ich mein Gold physisch ausliefern lassen?",
        answer: "Ja, Sie können sich Ihr Gold jederzeit physisch ausliefern lassen oder es persönlich in unseren Sicherheitslagern abholen."
    },
    {
        question: "Welche Gebühren fallen an?",
        answer: "Wir bieten eine transparente Gebührenstruktur ohne versteckte Kosten. Alle Gebühren werden vor Abschluss einer Transaktion klar ausgewiesen."
    }
];

const QAItem = ({ item, index, total, scrollYProgress }: { item: typeof QA_ITEMS[0], index: number, total: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / total;
    const end = (index + 1) / total;

    // Transform global scroll progress to local progress (0 to 1) for this item
    const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

    const opacity = useTransform(localProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(localProgress, [0, 0.1, 0.8, 1], [50, 0, 0, -50]);

    // Stagger answer: starts appearing at 0.2 local progress
    const answerOpacity = useTransform(localProgress, [0.2, 0.3, 0.8, 1], [0, 1, 1, 0]);
    const answerY = useTransform(localProgress, [0.2, 0.3, 0.8, 1], [20, 0, 0, -20]);

    return (
        <MotionDiv
            style={{ opacity, y, display: useTransform(localProgress, (v) => (v <= 0 || v >= 1) ? "none" : "block") }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center"
        >
            <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-8">{item.question}</h2>
            <MotionDiv style={{ opacity: answerOpacity, y: answerY }}>
                <p className="text-xl md:text-2xl">{item.answer}</p>
            </MotionDiv>
        </MotionDiv>
    );
};

const DominanzSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative text-white h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute left-0 bottom-0 p-8 z-20">
                    <ProgressIndicator activeIndex={1} />
                </div>
                <Image src="/mockups/mock7.png" alt="Dominanz" fill className="object-cover -z-10" />
                <div className="absolute inset-0 bg-black/30 -z-5" />

                <div className="grid grid-cols-1 lg:grid-cols-2 m-auto max-w-7xl gap-8 md:gap-12 h-full px-[5%] md:px-[10%] pt-20 md:pt-0">
                    <div className="flex flex-col justify-center">
                        <MotionH2
                            className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 max-w-7xl mx-auto"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Dominanz in nobler Form.
                        </MotionH2>
                        <div className="w-[100px] h-[3px] bg-gold" />
                        <MotionH3
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl mt-8 md:mt-12 max-w-7xl mx-auto"
                        >
                            Der Unterschied der zählt.
                        </MotionH3>
                    </div>

                    <div className="flex items-center justify-center gap-16 max-md:gap-4 h-full">
                        <div className="w-full relative h-[400px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-light to-transparent opacity-40 -z-10 rounded-3xl" />

                            {QA_ITEMS.map((item, index) => (
                                <QAItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    total={QA_ITEMS.length}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                        <div className="w-1 h-[60%] bg-gold rounded-full hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DominanzSection;
