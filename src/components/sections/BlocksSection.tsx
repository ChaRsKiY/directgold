import { Package, UserPlus, RefreshCw, FileSignature } from "lucide-react";
import { Fragment } from "react";

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
            description: "Execution: Goldkauf wird durchgeführt zum nächsten LBMA Preis PM",
        },
        {
            icon: FileSignature,
            title: "Identifikation und Vertragsbestätigung durch digitale Signatur",
            description: "Settlement: Einlagerung und Gutschrift auf dem Kundendepot",
        },
    ];

    return (
        <section className="px-[10%] py-20">
            <h2 className="font-bold text-[var(--color-primary-gold)] mb-12 max-w-7xl mx-auto">
                <p className="text-5xl max-md:text-3xl">So funktioniert</p>
                <p className="text-6xl max-md:text-4xl">DIRECTGOLD</p>
            </h2>
            <div className="flex items-start justify-center pb-4 gap-1 md:gap-2 lg:gap-3 xl:gap-6 max-lg:grid max-lg:grid-cols-2 max-lg:gap-6 max-lg:justify-items-center max-md:grid-cols-1 max-md:gap-8 max-md:items-center max-w-7xl mx-auto">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === steps.length - 1;
                    
                    return (
                        <Fragment key={index}>
                            <div className="flex flex-col items-center flex-shrink-0 w-[140px] min-w-[140px] md:w-[160px] md:min-w-[160px] lg:w-[180px] lg:min-w-[180px] xl:w-[200px] xl:min-w-[200px] max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[250px] box-border overflow-hidden max-lg:w-full max-lg:min-w-0 max-lg:max-w-full">
                                {/* Step Box */}
                                <div className="relative w-full aspect-square rounded-3xl border-3 border-[var(--color-primary-gold)] p-4 md:p-6 lg:p-8 bg-white flex-shrink-0 box-border">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        {/* Icon */}
                                        <Icon 
                                            className="text-[var(--color-primary-gold)] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[84px] xl:h-[84px]" 
                                            size={64}
                                            strokeWidth={1.5}
                                            fill="none"
                                        />
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h3 className="mt-4 md:mt-6 text-center font-bold text-sm md:text-base lg:text-lg text-[var(--color-primary-gold)] w-full break-words overflow-wrap-anywhere box-border">
                                    {step.title}
                                </h3>
                                
                                {/* Description */}
                                {step.description && (
                                    <p className="mt-2 md:mt-3 text-center text-[10px] md:text-xs lg:text-sm text-[var(--color-secondary-text)] w-full leading-relaxed break-words overflow-wrap-anywhere box-border">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                            
                            {/* Connector Line - только на lg и больше, скрыта на max-lg, может уменьшаться */}
                            {!isLast && (
                                <div className="hidden lg:flex items-center justify-center pt-[70px] md:pt-[80px] lg:pt-[90px] xl:pt-[100px] flex-shrink min-w-[8px] md:min-w-[12px] lg:min-w-[16px] xl:min-w-[24px]">
                                    <div className="flex items-center w-full">
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-[var(--color-primary-gold)] flex-shrink-0"></div>
                                        <div className="w-4 md:w-6 lg:w-8 xl:w-16 h-0.5 bg-[var(--color-primary-gold)] flex-shrink"></div>
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-[var(--color-primary-gold)] flex-shrink-0"></div>
                                    </div>
                                </div>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </section>
    )
}

export default BlocksSection;