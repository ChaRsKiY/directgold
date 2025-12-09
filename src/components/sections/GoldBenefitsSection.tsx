"use client"

import { useRef } from "react";
import Image from "next/image";
import { LuShieldCheck, LuCoins, LuLock, LuTrendingUp, LuGlobe, LuAward } from "react-icons/lu";
import Button from "../ui/Button";
import { Archivo } from "next/font/google"
import { cn } from "@/lib/utils";
import ProgressIndicator from "../ui/ProgressIndicator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const archivo = Archivo({ subsets: ["latin"] });

const BENEFITS = [
    {
        icon: LuShieldCheck,
        title: "Sicherste Lagerung",
        description: "Ihr Gold wird in hochsicheren Tresoranlagen in der Schweiz gelagert, unabhängig vom Bankensystem und vollständig versichert."
    },
    {
        icon: LuCoins,
        title: "Hohe Liquidität",
        description: "Verkaufen Sie Ihr Gold jederzeit schnell und unkompliziert zu fairen Marktpreisen."
    },
    {
        icon: LuLock,
        title: "Volle Eigentumsrechte",
        description: "Sie sind der alleinige rechtliche Eigentümer Ihres Goldes. Es gibt kein Gegenparteirisiko."
    },
    {
        icon: LuTrendingUp,
        title: "Wertbeständigkeit",
        description: "Gold hat sich über Jahrtausende als stabiler Wertspeicher und Schutz vor Inflation bewährt."
    },
    {
        icon: LuGlobe,
        title: "Weltweiter Zugriff",
        description: "Greifen Sie von überall auf der Welt auf Ihr Depot zu und verwalten Sie Ihre Bestände online."
    },
    {
        icon: LuAward,
        title: "Zertifizierte Qualität",
        description: "Wir handeln ausschließlich mit LBMA-zertifizierten Barren von renommierten Herstellern."
    }
];

const GoldBenefitsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const iconItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const total = BENEFITS.length;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=500%",
                pin: true,
                scrub: 1,
            }
        });

        BENEFITS.forEach((_, index) => {
            const textItem = textItemsRef.current[index];
            const iconItem = iconItemsRef.current[index];

            if (!textItem || !iconItem) return;

            // Initial state
            gsap.set([textItem, iconItem], { autoAlpha: 0, display: "none" });

            const step = 1 / total;
            const start = index * step;
            const end = start + step;

            // Enter
            tl.to([textItem, iconItem], {
                display: "flex", // textItem is flex, iconItem is flex
                autoAlpha: 1,
                duration: step * 0.1,
                ease: "power2.out"
            }, start);

            // Icon animation (scale pulse)
            const iconSvg = iconItem.querySelector("svg");
            if (iconSvg) {
                tl.fromTo(iconSvg,
                    { scale: 0.8 },
                    { scale: 1, duration: step * 0.2, ease: "back.out(1.7)" },
                    start
                );
            }

            // Exit
            tl.to([textItem, iconItem], {
                autoAlpha: 0,
                display: "none",
                duration: step * 0.1,
                ease: "power2.in"
            }, end - (step * 0.1));
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative text-white h-screen overflow-hidden">
            <div className="absolute left-0 bottom-0 p-8 z-20">
                <ProgressIndicator activeIndex={3} />
            </div>
            <Image src="/buildings.png" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />

            <div className="px-[5%] md:px-[10%] h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full pt-20 md:pt-10 max-w-7xl mx-auto">
                    {/* Left Column: Title + Text Items */}
                    <div className="flex flex-col justify-center h-full relative">
                        <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-left shrink-0 relative z-20">
                            Essential Gold Benefits.
                        </h2>

                        <div className="relative w-full h-[400px]"> {/* Fixed height container for text items to avoid layout shifts if needed, or just relative */}
                            {BENEFITS.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => { textItemsRef.current[index] = el }}
                                    className="absolute inset-0 flex flex-col justify-center opacity-0 hidden"
                                >
                                    <div className="flex flex-1 gap-4 md:gap-8 items-center">
                                        <div className="w-1 h-[60%] bg-blue-light/40 rounded-full shrink-0 hidden md:block" />
                                        <div className="flex-1 flex flex-col justify-center relative gap-8 md:gap-0">
                                            <div
                                                className={cn(
                                                    "absolute top-1/2 left-0 -translate-y-1/2 w-full text-gold rounded-full opacity-10 font-bold -z-1 pointer-events-none",
                                                    "text-[12rem] md:text-[22rem]",
                                                    "-translate-x-[20px] md:-translate-x-[80px]",
                                                    index === 0 ? "number-1" : "number",
                                                )}
                                            >
                                                {index + 1}
                                            </div>

                                            <div className="flex-col flex gap-4 relative z-10">
                                                <h2 className="font-bold text-2xl md:text-4xl">{item.title}</h2>
                                                <p className="text-xl md:text-2xl">{item.description}</p>
                                            </div>

                                            {index === BENEFITS.length - 1 && (
                                                <div className="flex items-center justify-start mt-8 relative z-10">
                                                    <Button variant="white">OPEN ACCOUNT</Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Icon Items */}
                    <div className="flex items-center justify-center h-full relative">
                        {BENEFITS.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => { iconItemsRef.current[index] = el }}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 hidden"
                                >
                                    <div className="h-full w-full max-h-[600px] aspect-[1/2] text-[9rem] md:text-[13rem] flex items-center justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-light before:to-transparent before:opacity-40 before:-z-10 p-8 md:p-12 pb-16 md:pb-32 overflow-hidden md:overflow-visible rounded-3xl">
                                        <Icon color="var(--color-shield-icon)" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoldBenefitsSection
