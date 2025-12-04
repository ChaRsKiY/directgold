import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google"
import { MotionH1, MotionH2, MotionDiv } from "../motion";

const archivo = Archivo();

const GoldIsGeldSection = () => {
    return (
        <div className="relative py-20 md:py-32 px-[5%] md:px-[10%] overflow-hidden min-h-[50vh] md:min-h-[80vh] flex items-center">
            <div className="relative z-10 flex justify-center max-w-4xl mx-auto w-full">
                <div className="flex flex-col relative w-fit mx-auto">
                    <MotionH1
                        className="uppercase text-4xl md:text-6xl lg:text-[5.3rem] translate-y-2 md:translate-y-4 font-bold text-center text-primary-text tracking-wide mb-2 relative z-10 leading-tight"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Gold ist geld.
                    </MotionH1>
                    <MotionH2
                        className="uppercase text-xl md:text-4xl lg:text-5xl font-bold text-center text-primary-text tracking-wide mb-6 max-md:mb-2 relative z-10 leading-tight"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Alles andere ist kredit.
                    </MotionH2>
                    <MotionDiv
                        className="text-primary-text text-base md:text-lg font-medium self-end relative z-10 mt-2 md:mt-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        J.P. Morgan (1837–1913)
                    </MotionDiv>

                    {/* Background Quote Mark */}
                    <MotionDiv
                        className={cn(
                            "absolute bottom-0 right-0 translate-y-[50%] translate-x-4 md:translate-x-4",
                            "text-quote-mark text-[10rem] md:text-[15rem] lg:text-[25rem] leading-none select-none pointer-events-none",
                            "font-bold",
                            archivo.className
                        )}
                        initial={{ opacity: 0, rotate: 180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 180, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        “
                    </MotionDiv>
                </div>
            </div>
        </div>
    )
}

export default GoldIsGeldSection;