"use client"

import { useRef } from "react";
import Image from "next/image";
import { MotionH2 } from "@/components/motion/MotionH2";
import { MotionH3 } from "../motion";
import ProgressIndicator from "../ui/ProgressIndicator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

const DominanzSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const items = itemsRef.current;
        const total = items.length;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: 1,
            }
        });

        items.forEach((item, index) => {
            if (!item) return;

            // Initial state
            gsap.set(item, { autoAlpha: 0, y: 50 });

            // Calculate timing
            const step = 1 / total;
            const start = index * step;
            const end = start + step;

            // Enter
            tl.to(item, {
                autoAlpha: 1,
                y: 0,
                duration: step * 0.2, // Fast entry
                ease: "power2.out"
            }, start);

            // Exit (except last item if we want it to stay, but usually they all exit or cycle)
            // Let's make them exit before the next one comes in, or overlap slightly
            tl.to(item, {
                autoAlpha: 0,
                y: -50,
                duration: step * 0.2,
                ease: "power2.in"
            }, end - (step * 0.2));
        });

    }, { scope: containerRef });

    return (
        <section id="dominanz" ref={containerRef} className="relative text-white h-screen z-20">
            <div className="absolute left-0 bottom-0 p-8 z-[9999]">
                <ProgressIndicator activeIndex={1} />
            </div>
            <Image src="/mockups/mock7.png" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />

            <div className="px-[5%] md:px-[10%] h-full py-[10%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full max-w-7xl mx-auto pt-20 md:pt-0">
                    <div className="flex flex-col">
                        <MotionH2
                            className="text-4xl md:text-6xl font-bold mb-8 md:mb-12"
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
                            className="text-xl md:text-2xl mt-8 md:mt-12"
                        >
                            Der Unterschied der zählt.
                        </MotionH3>
                    </div>

                    <div className="flex items-center justify-center gap-16 max-md:gap-4 h-full">
                        <div className="w-full relative h-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-light to-transparent opacity-40 -z-10" />

                            {QA_ITEMS.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => { itemsRef.current[index] = el }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center opacity-0"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold pb-4 md:pb-8">{item.question}</h2>
                                    <div className="qa-answer">
                                        <p className="text-xl md:text-2xl">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-1 h-full bg-gold rounded-full hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DominanzSection;
