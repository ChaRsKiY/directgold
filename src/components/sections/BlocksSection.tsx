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
        <section className="px-[10%] py-20 bg-gradient-to-b from-white to-bg-cream relative">
            <div className="absolute left-0 bottom-0 p-8">
                <ProgressIndicator activeIndex={7} />
            </div>
            <div className="max-w-7xl mx-auto">
                <MotionDiv
                    className="font-bold text-gold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-4xl md:text-5xl">So funktioniert</p>
                    <p className="text-5xl md:text-6xl uppercase">DIRECTGOLD</p>
                </MotionDiv>

                <MotionDiv
                    className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between relative mb-20 h-full flex-1 "
                    variants={containerVariants}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center justify-start w-full lg:w-1/4 z-10 relative group gap-6 lg:gap-0 pb-8 lg:pb-0 h-full flex-1">
                                {/* Vertical Connecting Line - Mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute left-[3rem] -translate-x-1/2 top-[calc(6rem+6px)] bottom-0 w-[3px] bg-gold" />
                                )}

                                {/* Desktop Left Line */}
                                {index > 0 && (
                                    <div className="hidden lg:block absolute left-0 top-[90px] xl:top-[110px] -translate-y-1/2 h-[3px] bg-gold w-[calc(50%-98px)] xl:w-[calc(50%-118px)]" />
                                )}

                                {/* Desktop Right Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-[90px] xl:top-[110px] -translate-y-1/2 h-[3px] bg-gold w-[calc(50%-98px)] xl:w-[calc(50%-118px)]" />
                                )}

                                {/* Step Box */}
                                <div className="w-24 h-24 lg:w-[180px] lg:h-[180px] xl:w-[220px] xl:h-[220px] rounded-3xl lg:rounded-[2rem] bg-transparent flex items-center justify-center mb-0 lg:mb-8 relative shrink-0">
                                    {/* Mobile Border with Masks */}
                                    <div
                                        className="lg:hidden absolute inset-0 border-[3px] border-gold rounded-3xl"
                                        style={{
                                            maskImage: `${index === 0 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to right, #fff calc(50% - 8px), transparent calc(50% - 8px), transparent calc(50% + 8px), #fff calc(50% + 8px))'}, ${index === steps.length - 1 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to right, #fff calc(50% - 8px), transparent calc(50% - 8px), transparent calc(50% + 8px), #fff calc(50% + 8px))'}`,
                                            maskSize: "100% 51%",
                                            maskPosition: "top left, bottom left",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskImage: `${index === 0 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to right, #fff calc(50% - 8px), transparent calc(50% - 8px), transparent calc(50% + 8px), #fff calc(50% + 8px))'}, ${index === steps.length - 1 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to right, #fff calc(50% - 8px), transparent calc(50% - 8px), transparent calc(50% + 8px), #fff calc(50% + 8px))'}`,
                                            WebkitMaskSize: "100% 51%",
                                            WebkitMaskPosition: "top left, bottom left",
                                            WebkitMaskRepeat: "no-repeat"
                                        }}
                                    />

                                    {/* Desktop Border with Masks */}
                                    <div
                                        className="hidden lg:block absolute inset-0 border-[3px] border-gold rounded-[2rem]"
                                        style={{
                                            maskImage: `${index === 0 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to bottom, #fff calc(50% - 12px), transparent calc(50% - 12px), transparent calc(50% + 12px), #fff calc(50% + 12px))'}, ${index === steps.length - 1 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to bottom, #fff calc(50% - 12px), transparent calc(50% - 12px), transparent calc(50% + 12px), #fff calc(50% + 12px))'}`,
                                            maskSize: "51% 100%",
                                            maskPosition: "left top, right top",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskImage: `${index === 0 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to bottom, #fff calc(50% - 12px), transparent calc(50% - 12px), transparent calc(50% + 12px), #fff calc(50% + 12px))'}, ${index === steps.length - 1 ? 'linear-gradient(#fff, #fff)' : 'linear-gradient(to bottom, #fff calc(50% - 12px), transparent calc(50% - 12px), transparent calc(50% + 12px), #fff calc(50% + 12px))'}`,
                                            WebkitMaskSize: "51% 100%",
                                            WebkitMaskPosition: "left top, right top",
                                            WebkitMaskRepeat: "no-repeat"
                                        }}
                                    />

                                    {/* Connecting Circles for Line */}
                                    {/* Desktop: Left/Right */}
                                    {index > 0 && (
                                        <>
                                            <div className="lg:hidden absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-gold bg-transparent z-20" />
                                            {/* Desktop Left Circle */}
                                            <div className="hidden lg:block absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-gold bg-transparent z-20" />
                                        </>
                                    )}
                                    {index < steps.length - 1 && (
                                        <>
                                            <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-gold bg-transparent z-20" />
                                        </>
                                    )}

                                    {/* Mobile: Top/Bottom */}
                                    {index > 0 && (
                                        <>
                                            <div className="lg:hidden absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-gold bg-transparent z-20" />
                                        </>
                                    )}
                                    {index < steps.length - 1 && (
                                        <>
                                            <div className="lg:hidden absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-gold bg-transparent z-20" />
                                        </>
                                    )}

                                    <Icon
                                        className="text-gold w-10 h-10 lg:w-20 lg:h-20"
                                        strokeWidth={1.5}
                                    />
                                </div>



                                {/* Text Content */}
                                <div className="flex flex-col items-start lg:items-center text-left lg:text-center pt-2 lg:pt-0 flex-1 w-full lg:min-h-[200px] justify-between">
                                    <div className="flex flex-col items-start lg:items-center w-full">
                                        {/* Title */}
                                        <h3 className="text-gold font-bold text-lg lg:text-xl lg:text-center max-w-[220px] mb-2 lg:mb-4">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Bottom content - Button or Descriptions */}
                                    {index === 0 && (
                                        <div className="flex justify-end lg:justify-center w-full lg:mt-0 mt-4">
                                            <Button className="bg-gold text-white px-12 py-4 rounded-md font-bold uppercase tracking-wider">
                                                OPEN ACCOUNT
                                            </Button>
                                        </div>
                                    )}

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