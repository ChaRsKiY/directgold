"use client";

import { useState } from "react";
import { MotionDiv } from "../motion";
import { AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        title: "DIRECTGOLD kombiniert die weltweit fortschrittlichste Verifizierungstechnologie mit höchsten Sicherheitsstandards für Dein Gold.",
        text: "Jeder bei DIRECTGOLD gelagerte Barren verfügt über einen digitalen Zwilling auf der aXedras-Plattform – die fälschungssichere, standardisierte digitale Repräsentation des physischen Goldbarrens im „Bullion Integrity Ledger™\". Über diese Blockchain-basierte Technologie kannst Du 24/7 jederzeit selbst, unabhängig und objektiv die Echtheit, Herkunft, Integrität und den aktuellen Lagerstandort Deines Goldes überprüfen."
    },
    {
        id: 2,
        title: "Maximale Sicherheit durch unabhängige Lagerung",
        text: "Ihr Gold wird in Hochsicherheits-Tresoranlagen gelagert, die unabhängig vom Bankensystem operieren. Dies gewährleistet nicht nur physischen Schutz, sondern auch Schutz vor systemischen Risiken. Regelmäßige Audits durch unabhängige Dritte bestätigen die Bestände."
    },
    {
        id: 3,
        title: "Volle Transparenz und Kontrolle",
        text: "Mit unserer Plattform haben Sie jederzeit vollen Einblick in Ihre Bestände. Sie können Transaktionen verfolgen, Berichte generieren und Ihr Portfolio verwalten – alles in Echtzeit und mit höchster Datensicherheit."
    }
];

const SecuritySlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <MotionDiv
            className="bg-gradient-to-b from-blue-light/40 to-transparent p-8 md:p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1">
                {/* Spacer to force height based on tallest slide */}
                <div className="col-start-1 row-start-1 invisible pointer-events-none grid grid-cols-1">
                    {slides.map((slide) => (
                        <div key={slide.id} className="col-start-1 row-start-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-6 leading-snug">
                                {slide.title}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed">
                                {slide.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Actual Animated Content */}
                <div className="col-start-1 row-start-1">
                    <AnimatePresence mode="wait">
                        <MotionDiv
                            key={currentSlide}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
                                {slides[currentSlide].title}
                            </h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                {slides[currentSlide].text}
                            </p>
                        </MotionDiv>
                    </AnimatePresence>
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <button
                    onClick={prevSlide}
                    className="p-2 text-gold hover:text-white transition-colors"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-gold"
                                : "bg-black/35 hover:bg-black/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 text-gold hover:text-white transition-colors"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </MotionDiv>
    )
}

export default SecuritySlides;