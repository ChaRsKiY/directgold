import { Package, UserPlus, RefreshCw, FileSignature, Infinity } from "lucide-react";
import Button from "../ui/Button";
import { MotionDiv } from "../motion";
import ProgressIndicator from "../ui/ProgressIndicator";

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
            description: "Execution: Durchführung des Goldkaufs zum nächsten LBMA Preis PM",
        },
        {
            icon: FileSignature,
            title: "Identifikation und Vertragsbestätigung durch digitale Signatur",
            description: "Settlement: Einlagerung und Gutschrift auf dem persönlichen Golddepot",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <section className="px-[10%] py-20 bg-gradient-to-b from-white to-[#fef4de] relative">
            <div className="absolute left-0 bottom-0 p-8">
                <ProgressIndicator activeIndex={7} />
            </div>
            <div className="max-w-7xl mx-auto">
                <MotionDiv
                    className="font-bold text-[var(--color-primary-gold)] mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-4xl md:text-5xl">So funktioniert</p>
                    <p className="text-5xl md:text-6xl uppercase">DIRECTGOLD</p>
                </MotionDiv>

                <MotionDiv
                    className="flex flex-col lg:flex-row items-start justify-between relative mb-20"
                    variants={containerVariants}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center justify-start lg:justify-center w-full lg:w-1/4 z-10 relative group gap-6 lg:gap-0 pb-8 lg:pb-0">
                                {/* Vertical Connecting Line - Mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute left-[3rem] -translate-x-1/2 top-[6rem] bottom-0 w-[3px] bg-[var(--color-primary-gold)]" />
                                )}

                                {/* Desktop Left Line */}
                                {index > 0 && (
                                    <div className="hidden lg:block absolute left-0 top-[90px] xl:top-[110px] -translate-y-1/2 h-[3px] bg-[var(--color-primary-gold)] w-[calc(50%-90px)] xl:w-[calc(50%-110px)]" />
                                )}

                                {/* Desktop Right Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-[90px] xl:top-[110px] -translate-y-1/2 h-[3px] bg-[var(--color-primary-gold)] w-[calc(50%-90px)] xl:w-[calc(50%-110px)]" />
                                )}

                                {/* Step Box */}
                                <div className="w-24 h-24 lg:w-[180px] lg:h-[180px] xl:w-[220px] xl:h-[220px] border-[3px] border-[var(--color-primary-gold)] rounded-3xl lg:rounded-[2rem] bg-transparent flex items-center justify-center mb-0 lg:mb-8 relative shrink-0">
                                    {/* Connecting Circles for Line */}
                                    {/* Desktop: Left/Right */}
                                    {index > 0 && (
                                        <>
                                            <div className="hidden lg:block absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-[var(--color-primary-gold)] bg-white z-20" />
                                            {/* Top gap cover */}
                                            <div className="hidden lg:block absolute left-[-8px] top-[calc(50%-11px)] w-4 h-[8px] bg-white z-[19]" />
                                            {/* Bottom gap cover */}
                                            <div className="hidden lg:block absolute left-[-8px] top-[calc(50%+3px)] w-4 h-[8px] bg-white z-[19]" />
                                        </>
                                    )}
                                    {index < steps.length - 1 && (
                                        <>
                                            <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-[var(--color-primary-gold)] bg-white z-20" />
                                            {/* Top gap cover */}
                                            <div className="hidden lg:block absolute right-[-8px] top-[calc(50%-11px)] w-4 h-[8px] bg-white z-[19]" />
                                            {/* Bottom gap cover */}
                                            <div className="hidden lg:block absolute right-[-8px] top-[calc(50%+3px)] w-4 h-[8px] bg-white z-[19]" />
                                        </>
                                    )}

                                    {/* Mobile: Top/Bottom */}
                                    {index > 0 && (
                                        <>
                                            <div className="lg:hidden absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-[var(--color-primary-gold)] bg-white z-20" />
                                            {/* Left gap cover */}
                                            <div className="lg:hidden absolute top-[-6px] left-[calc(50%-8.5px)] w-[7px] h-3 bg-white z-[19]" />
                                            {/* Right gap cover */}
                                            <div className="lg:hidden absolute top-[-6px] left-[calc(50%+1.5px)] w-[7px] h-3 bg-white z-[19]" />
                                        </>
                                    )}
                                    {index < steps.length - 1 && (
                                        <>
                                            <div className="lg:hidden absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-[var(--color-primary-gold)] bg-white z-20" />
                                            {/* Left gap cover */}
                                            <div className="lg:hidden absolute bottom-[-6px] left-[calc(50%-8.5px)] w-[7px] h-3 bg-white z-[19]" />
                                            {/* Right gap cover */}
                                            <div className="lg:hidden absolute bottom-[-6px] left-[calc(50%+1.5px)] w-[7px] h-3 bg-white z-[19]" />
                                        </>
                                    )}

                                    <Icon
                                        className="text-[var(--color-primary-gold)] w-10 h-10 lg:w-20 lg:h-20"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col flex-1 items-start lg:items-center text-left lg:text-center pt-2 lg:pt-0">
                                    {/* Title */}
                                    <h3 className="text-[var(--color-primary-gold)] font-bold text-lg lg:text-xl lg:text-center max-w-[220px] mb-2 lg:mb-4">
                                        {step.title}
                                    </h3>

                                    {index === 0 && (
                                        <div className="flex justify-end">
                                            <Button className="bg-[var(--color-primary-gold)] text-white px-12 py-4 rounded-md font-bold uppercase tracking-wider">
                                                OPEN ACCOUNT
                                            </Button>
                                        </div>
                                    )}

                                    {/* Extra Descriptions for specific steps */}
                                    {index === 2 && (
                                        <p className="text-gray-500 text-xs lg:text-sm max-w-[220px]">
                                            Execution: Goldkauf wird durchgeführt zum nächsten LBMA Preis PM
                                        </p>
                                    )}
                                    {index === 3 && (
                                        <p className="text-gray-500 text-xs lg:text-sm max-w-[220px]">
                                            Settlement: Einlagerung und Gutschrift auf dem Kundendepot
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </MotionDiv>
            </div>
        </section>
    )
}

export default BlocksSection;