import Image from "next/image";
import { MotionH2 } from "@/components/motion/MotionH2";
import { LuShieldCheck } from "react-icons/lu";
import Button from "../ui/Button";
import { Archivo } from "next/font/google"
import { cn } from "@/lib/utils";

const archivo = Archivo();

const GoldBenefitsSection = () => {
    return (
        <section className="py-20 relative text-white px-[10%]">
            <Image src="/mockups/mock2.jpg" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />
            <div className="grid grid-cols-2 m-auto max-w-7xl gap-12 h-[60vh] max-h-[600px]">
                <div className="flex flex-col h-full">
                    <MotionH2
                        className="text-6xl max-md:text-4xl font-bold mb-12 max-w-7xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Essential Gold Benefits.
                    </MotionH2>
                    <div className="flex flex-1 gap-8">
                        <div className="w-1 h-full bg-[#5D9BC9]/40 rounded-full" />
                        <div className="flex-1 flex flex-col justify-between relative">
                            <div className={cn("-translate-x-[80px] -translate-y-[110px] absolute top-0 left-0 w-full h-full text-[var(--color-primary-gold)] rounded-full opacity-30 font-bold text-[22rem] -z-1", archivo.className)}>
                                4
                            </div>
                            <div />
                            <div className="flex-col flex gap-4">
                                <h2 className="font-bold text-xl">Sicherste Lagerung</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique earum aperiam ratione dolorum totam in porro sunt recusandae, vitae, provident vero quis nulla id est quibusdam, qui ad quo?</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button variant="white">Get in touch</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <div className="h-full text-9xl w-full flex items-center justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#5D9BC9] before:to-transparent before:opacity-40 before:-z-10 p-12 pb-32">
                        <LuShieldCheck />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoldBenefitsSection
