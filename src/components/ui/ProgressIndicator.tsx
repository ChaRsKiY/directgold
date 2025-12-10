"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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
    const [position, setPosition] = useState({ top: 0, left: 0, bottom: 0 });
    const [placement, setPlacement] = useState<'top' | 'bottom'>('bottom');
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        setMounted(true);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const menuHeightApprox = 450; // Estimated height of the menu

            const newPlacement = spaceBelow < menuHeightApprox ? 'top' : 'bottom';
            setPlacement(newPlacement);

            setPosition({
                top: rect.bottom,
                left: rect.left,
                bottom: window.innerHeight - rect.top
            });
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 150); // Small grace period to move from trigger to menu
    };

    return (
        <div
            ref={containerRef}
            className="relative flex gap-0.5 items-center justify-center py-2 cursor-pointer group z-[9999]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

            <div className="hidden" /> {/* Placeholder to ensure AnimatePresence doesn't break sibling order if that was an issue, but unrelated */}

            {mounted && createPortal(
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            key="menu"
                            initial={{
                                opacity: 0,
                                y: placement === 'bottom' ? -10 : 10,
                                scale: 0.95
                            }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{
                                opacity: 0,
                                y: placement === 'bottom' ? -10 : 10,
                                scale: 0.95
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{
                                position: 'fixed',
                                top: placement === 'bottom' ? position.top : 'auto',
                                bottom: placement === 'top' ? position.bottom : 'auto',
                                left: position.left,
                            }}
                            className={cn(
                                "z-[9999] bg-black/95 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-white/10",
                                placement === 'bottom' ? "mt-1" : "mb-1"
                            )}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
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
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default ProgressIndicator;
