import { Package, UserPlus, RefreshCw, FileSignature } from "lucide-react";
import { Fragment } from "react";
import Button from "../ui/Button";

const BlocksSection = () => {
    const steps = [
        {
            icon: Package,
            title: "Produkt wählen",
            description: null,
        },
        {
            icon: UserPlus,
            title: "Konto eröffnen",
            description: null,
        },
        {
            icon: RefreshCw,
            title: "Gewählten Betrag überweisen",
            description: null,
        },
        {
            icon: FileSignature,
            title: "Identifikation und Vertragsbestätigung durch digitale Signatur",
            description: null,
        },
    ];

    return (
        <section className="px-[10%] py-20 bg-[#FFFDF5]">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bold text-[var(--color-primary-gold)] mb-16">
                    <p className="text-4xl md:text-5xl">So funktioniert</p>
                    <p className="text-5xl md:text-6xl uppercase">DIRECTGOLD</p>
                </h2>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative mb-20">
                    {/* Connecting Line Background - visible only on large screens */}
                    <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[2px] bg-[var(--color-primary-gold)] z-0" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={index} className="flex flex-col items-center w-full lg:w-1/4 z-10 relative group">
                                {/* Step Box */}
                                <div className="w-full max-w-[220px] aspect-square rounded-[2rem] border-2 border-[var(--color-primary-gold)] bg-white flex items-center justify-center mb-8 relative">
                                    {/* Connecting Circles for Line */}
                                    {index > 0 && (
                                        <div className="hidden lg:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[var(--color-primary-gold)] bg-white z-20" />
                                    )}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[var(--color-primary-gold)] bg-white z-20" />
                                    )}

                                    <Icon
                                        className="text-[var(--color-primary-gold)] w-20 h-20"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[var(--color-primary-gold)] font-bold text-xl text-center max-w-[220px] mb-4">
                                    {step.title}
                                </h3>

                                {/* Extra Descriptions for specific steps */}
                                {index === 2 && (
                                    <p className="text-center text-gray-500 text-sm max-w-[220px]">
                                        Execution: Goldkauf wird durchgeführt zum nächsten LBMA Preis PM
                                    </p>
                                )}
                                {index === 3 && (
                                    <p className="text-center text-gray-500 text-sm max-w-[220px]">
                                        Settlement: Einlagerung und Gutschrift auf dem Kundendepot
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div>
                    <Button className="bg-[var(--color-primary-gold)] text-white px-12 py-4 rounded-md font-bold uppercase tracking-wider">
                        OPEN ACCOUNT
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BlocksSection;