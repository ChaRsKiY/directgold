import Image from "next/image";
import { MotionH2 } from "@/components/motion/MotionH2";
import { MotionH3 } from "../motion";

const DominanzSection = () => {
    return (
        <section className="py-12 md:py-20 relative text-white px-[5%] md:px-[10%]">
            <Image src="/mockups/mock7.png" alt="Dominanz" fill className="object-cover -z-10" />
            <div className="absolute inset-0 bg-black/30 -z-5" />
            <div className="grid grid-cols-1 lg:grid-cols-2 m-auto max-w-7xl gap-8 md:gap-12 min-h-[60vh]">
                <div>
                    <MotionH2
                        className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 max-w-7xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Dominanz in nobler Form.
                    </MotionH2>
                    <div className="w-[100px] h-[3px] bg-[var(--color-primary-gold)]" />
                    <MotionH3
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl mt-8 md:mt-12 max-w-7xl mx-auto"
                    >
                        Was hebt uns vor?
                    </MotionH3>
                </div>
                <div className="flex items-center justify-center gap-16 max-md:gap-4">
                    <div className="w-full h-full relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#5D9BC9] before:to-transparent before:opacity-40 before:-z-10 p-8 md:p-12 pb-16 md:pb-32 overflow-hidden md:overflow-visible">
                        <h2 className="text-center text-xl md:text-2xl font-bold pb-4 md:pb-8">Zu welchen Preisen kaufe und verkaufe ich?</h2>
                        <p className="text-base md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio atque ex nisi suscipit animi qui recusandae veritatis. Enim eligendi beatae eveniet reprehenderit porro ad sequi fuga nulla at, similique pariatur?</p>
                    </div>
                    <div className="w-1 h-full bg-[var(--color-primary-gold)] rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default DominanzSection;
