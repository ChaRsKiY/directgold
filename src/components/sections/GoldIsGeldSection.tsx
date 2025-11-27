import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google"

const archivo = Archivo();

const GoldIsGeldSection = () => {
    return (
        <div className="relative py-20 md:py-32 px-[5%] md:px-[10%] overflow-hidden min-h-[50vh] md:min-h-[80vh] flex items-center">
            <div className="relative z-10 flex justify-center max-w-4xl mx-auto w-full">
                <div className="flex flex-col relative w-full">
                    <h1 className="uppercase text-4xl md:text-6xl lg:text-[5.3rem] translate-y-2 md:translate-y-4 font-bold text-center text-[var(--color-primary-text)] tracking-wide mb-2 relative z-10 leading-tight">
                        Gold ist geld.
                    </h1>
                    <h2 className="uppercase text-2xl md:text-4xl lg:text-5xl font-bold text-center text-[var(--color-primary-text)] tracking-wide mb-6 relative z-10 leading-tight">
                        Alles andere ist kredit.
                    </h2>
                    <p className="text-[var(--color-primary-text)] text-base md:text-lg font-medium self-end relative z-10 mt-4 md:mt-0">
                        J.P. Morgan (1837–1913)
                    </p>

                    {/* Background Quote Mark */}
                    <div className={cn(
                        "absolute bottom-0 right-0 translate-y-[20%] md:translate-y-[50%] translate-x-4 md:translate-x-4",
                        "text-[#e5e5e5] text-[10rem] md:text-[15rem] lg:text-[25rem] leading-none select-none pointer-events-none",
                        "font-bold rotate-180",
                        archivo.className
                    )}>
                        “
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoldIsGeldSection;