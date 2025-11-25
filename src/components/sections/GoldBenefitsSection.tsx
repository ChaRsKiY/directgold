import Image from "next/image";
import { MotionH2 } from "@/components/motion/MotionH2";
import { MotionH3 } from "@/components/motion/MotionH3";
import { } from "react-icons"
import { LuShieldCheck } from "react-icons/lu";

const GoldBenefitsSection = () => {
    return (
        <section className="py-20 relative text-white px-[10%]">
            <Image src="/mockups/mock2.jpg" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />
            <div className="grid grid-cols-2 m-auto max-w-7xl gap-12">
                <div>
                    <MotionH2
                        className="text-6xl max-md:text-4xl font-bold mb-12 max-w-7xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Essential Gold Benefits.
                    </MotionH2>
                    <div className="w-[100px] h-[3px] bg-[var(--color-primary-gold)]" />
                    <MotionH3
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl max-md:text-xl mt-12 max-w-7xl mx-auto"
                    >
                        Was hebt uns vor?
                    </MotionH3>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-8xl w-full h-full flex items-center justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#045589] before:to-transparent before:opacity-40 before:-z-10 p-12 pb-32">
                        <LuShieldCheck />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoldBenefitsSection
