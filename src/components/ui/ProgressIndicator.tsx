"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
    activeIndex: number;
    totalSteps?: number;
}

const MENU_ITEMS = [
    { label: "Home", id: "home" },
    { label: "Warum gold?", id: "dominanz" },
    { label: "Produkte", id: "produkte" },
    { label: "Essential Gold Benefits", id: "benefits" },
    { label: "Grundsätze", id: "principles" },
    { label: "Services", id: "services" },
    { label: "Sicherheit & Technologie", id: "security" },
    { label: "So funktioniert DIRECTGOLD", id: "how-it-works" },
];

const ProgressIndicator = ({ activeIndex, totalSteps = 8 }: ProgressIndicatorProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex gap-0.5 items-center justify-center py-2 cursor-pointer group z-[9999]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        "w-[6px] h-[13px] transition-colors duration-300",
                        index === activeIndex
                            ? 'bg-gold animate-pulse'
                            : 'bg-indicator-inactive group-hover:opacity-80'
                    )}
                />
            ))}

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-1 z-[9999] bg-black/95 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-white/10"
                    >
                        <div className="flex gap-6 relative">
                            {/* Axis Line */}
                            <div className="w-[2px] bg-white/10 relative my-2 flex flex-col items-center">
                                {/* Moving Indicator */}
                                <motion.div
                                    className="w-[2px] bg-gold absolute"
                                    initial={false}
                                    animate={{
                                        top: activeIndex * 36, // Approximate height of each item
                                        height: 24
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                {MENU_ITEMS.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`#${item.id}`}
                                        onClick={() => setIsHovered(false)}
                                        className={cn(
                                            "text-lg leading-relaxed transition-all duration-300 hover:translate-x-1 block h-[28px] whitespace-nowrap",
                                            index === activeIndex
                                                ? "text-white font-medium shadow-gold drop-shadow-sm"
                                                : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProgressIndicator;
