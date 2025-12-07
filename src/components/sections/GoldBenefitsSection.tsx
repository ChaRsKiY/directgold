"use client"

import { useRef } from "react";
import Image from "next/image";
import { MotionH2, MotionDiv } from "../motion";
import { LuShieldCheck, LuCoins, LuLock, LuTrendingUp, LuGlobe, LuAward } from "react-icons/lu";
import Button from "../ui/Button";
import { Archivo } from "next/font/google"
import { cn } from "@/lib/utils";
import ProgressIndicator from "../ui/ProgressIndicator";
import { useScroll, useTransform, MotionValue } from "framer-motion";

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

const BenefitItem = ({ item, index, total, scrollYProgress }: { item: typeof BENEFITS[0], index: number, total: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / total;
    const end = (index + 1) / total;

    const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

    const opacity = useTransform(localProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(localProgress, [0, 0.1, 0.8, 1], [50, 0, 0, -50]);

    // Icon animation
    const iconScale = useTransform(localProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const iconOpacity = useTransform(localProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const Icon = item.icon;

    return (
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full items-center">
            {/* Left Column: Text */}
            <MotionDiv
                style={{ opacity, y, display: useTransform(localProgress, (v) => (v <= 0 || v >= 1) ? "none" : "flex") }}
                className="flex flex-col h-full justify-center order-2 md:order-1"
            >
                <div className="flex flex-1 gap-4 md:gap-8 items-center">
                    <div className="w-1 h-[60%] bg-blue-light/40 rounded-full shrink-0 hidden md:block" />
                    <div className="flex-1 flex flex-col justify-center relative gap-8 md:gap-0">
                        <div
                            className={cn(
                                "absolute top-1/2 left-0 -translate-y-1/2 w-full text-gold rounded-full opacity-10 font-bold -z-1 pointer-events-none",
                                "text-[12rem] md:text-[22rem]",
                                "-translate-x-[20px] md:-translate-x-[80px]",
                                archivo.className
                            )}
                        >
                            {index + 1}
                        </div>

                        <div className="flex-col flex gap-4 relative z-10">
                            <h2 className="font-bold text-2xl md:text-4xl">{item.title}</h2>
                            <p className="text-xl md:text-2xl">{item.description}</p>
                        </div>

                        {index === total - 1 && (
                            <div className="flex items-center justify-start mt-8 relative z-10">
                                <Button variant="white">OPEN ACCOUNT</Button>
                            </div>
                        )}
                    </div>
                </div>
            </MotionDiv>

            {/* Right Column: Icon */}
            <MotionDiv
                style={{ opacity: iconOpacity, scale: iconScale, display: useTransform(localProgress, (v) => (v <= 0 || v >= 1) ? "none" : "flex") }}
                className="flex items-center justify-center flex-1 mt-8 md:mt-0 order-1 md:order-2 h-full"
            >
                <div className="h-full aspect-[1/2] text-[9rem] md:text-[13rem] max-w-full flex items-center justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-light before:to-transparent before:opacity-40 before:-z-10 p-8 md:p-12 pb-16 md:pb-32 overflow-hidden md:overflow-visible rounded-3xl">
                    <Icon color="var(--color-shield-icon)" />
                </div>
            </MotionDiv>
        </div>
    );
};

const GoldBenefitsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative text-white h-[500vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute left-0 bottom-0 p-8 z-20">
                    <ProgressIndicator activeIndex={3} />
                </div>
                <Image src="/buildings.png" alt="Dominanz" fill className="object-cover -z-10" />
                <div className="absolute inset-0 bg-black/30 -z-5" />

                <div className="flex flex-col h-full px-[5%] md:px-[10%] pt-20 md:pt-10 max-w-7xl mx-auto">
                    <MotionH2
                        className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-center md:text-left shrink-0"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Essential Gold Benefits.
                    </MotionH2>

                    <div className="relative flex-1 w-full">
                        {BENEFITS.map((item, index) => (
                            <BenefitItem
                                key={index}
                                item={item}
                                index={index}
                                total={BENEFITS.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoldBenefitsSection
