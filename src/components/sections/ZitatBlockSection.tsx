import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google"
import Image from "next/image";
import { MotionDiv } from "../motion";

const archivo = Archivo();

const ZitatBlockSection = () => {
    return (
        <div className="py-12 md:py-20 px-[5%] md:px-[10%] relative overflow-hidden">
            {/* Grayscale layer for cross-browser support */}
            <div className="absolute inset-0 bg-white z-10 mix-blend-color pointer-events-none" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-quote-gradient-end z-10 mix-blend-multiply pointer-events-none" />
            <div className="m-auto max-w-7xl">
                <div className="w-full md:w-3/4 lg:w-1/2 md:pr-24 relative z-20">
                    <MotionDiv
                        className={cn("absolute right-0 bottom-0 font-bold text-[#777674] text-[10rem] md:text-[20rem] -translate-x-4 md:-translate-x-10 translate-y-12 md:translate-y-24 z-10 pointer-events-none font-extralight scale-x-250", archivo.className)}
                        initial={{ opacity: 0, rotate: 180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 180, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        “
                    </MotionDiv>
                    <MotionDiv
                        className="bg-quote-bg p-8 md:p-12 py-16 md:py-32 flex flex-col justify-center items-center relative z-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-center text-quote-text text-bold text-xl md:text-3xl">
                            Wer Sicherheit will, darf sich nicht in Illusionen wiegen.
                        </h2>
                        <div className="w-24 md:w-32 h-1 bg-gold my-8 md:my-12" />
                        <div className="flex flex-col md:flex-row gap-5 items-center text-center md:text-left">
                            <Image src="/quote.png" alt="Zitat" width={80} height={80} className="shrink-0" />
                            <p className="text-quote-text text-sm md:text-base">Lucius Annaeus Seneca<br />römischer Philosoph, Staatsmann,<br />
                                4 v. Chr. - 65 n. Chr.</p>
                        </div>
                    </MotionDiv>
                </div>
            </div>

        </div>
    );
};

export default ZitatBlockSection;
