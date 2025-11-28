import Image from "next/image";
import { MotionH2, MotionDiv } from "../motion";
import { LuShieldCheck } from "react-icons/lu";
import Button from "../ui/Button";
import { Archivo } from "next/font/google"
import { cn } from "@/lib/utils";

const archivo = Archivo();

const GoldBenefitsSection = () => {
    return (
        <section className="py-12 md:py-20 relative text-white px-[5%] md:px-[10%]">
            <Image src="/mockups/mock2.jpg" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-7xl gap-8 md:gap-12 h-auto md:h-[60vh] md:max-h-[600px]">
                <div className="flex flex-col h-full">
                    <MotionH2
                        className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 max-w-7xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Essential Gold Benefits.
                    </MotionH2>
                    <div className="flex flex-1 gap-4 md:gap-8">
                        <div className="w-1 h-full bg-[#5D9BC9]/40 rounded-full shrink-0" />
                        <div className="flex-1 flex flex-col justify-between relative gap-8 md:gap-0">
                            <MotionDiv
                                className={cn(
                                    "absolute top-0 left-0 w-full h-full text-[var(--color-primary-gold)] rounded-full opacity-30 font-bold -z-1 pointer-events-none",
                                    "text-[12rem] md:text-[22rem]",
                                    "-translate-x-[20px] md:-translate-x-[80px]",
                                    "-translate-y-[40px] md:-translate-y-[110px]",
                                    archivo.className
                                )}
                                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                                whileInView={{ opacity: 0.3, scale: 1, x: -20 }} // Adjust x based on responsive logic if needed, but here we use classNames for final position, so maybe just opacity/scale
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                4
                            </MotionDiv>
                            <div />
                            <MotionDiv
                                className="flex-col flex gap-4 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h2 className="font-bold text-xl">Sicherste Lagerung</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique earum aperiam ratione dolorum totam in porro sunt recusandae, vitae, provident vero quis nulla id est quibusdam, qui ad quo?</p>
                            </MotionDiv>
                            <MotionDiv
                                className="flex items-center justify-start md:justify-center mt-4 md:mt-0 relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Button variant="white">Get in touch</Button>
                            </MotionDiv>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 mt-8 md:mt-0">
                    <MotionDiv
                        className="h-64 md:h-full text-6xl md:text-9xl w-full flex items-center justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#5D9BC9] before:to-transparent before:opacity-40 before:-z-10 p-8 md:p-12 pb-16 md:pb-32 rounded-2xl md:rounded-none overflow-hidden md:overflow-visible"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <LuShieldCheck />
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}

export default GoldBenefitsSection
