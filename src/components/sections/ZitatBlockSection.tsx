import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google"
import Image from "next/image";

const archivo = Archivo();

const ZitatBlockSection = () => {
    return (
        <div className="py-20 px-[10%] relative">
            <div className="absolute inset-0 bg-white mix-blend-saturation -z-1" />
            <div className="m-auto max-w-7xl">
                <div className="w-1/2 pr-24 relative">
                        <div className={cn("absolute right-0 bottom-0 font-bold rotate-180 text-[var(--color-primary-text)] text-[20rem] -translate-x-10 translate-y-24", archivo.className)}>
                            “
                        </div>
                    <div className="bg-[#e1e1e1] p-12 py-32 flex flex-col justify-center items-center">
                        <h2 className="text-center text-[var(--color-primary-text)] text-bold text-3xl">
                            Wer Sicherheit will, darf sich nicht in Illusionen wiegen.
                        </h2>
                        <div className="w-32 h-1 bg-[var(--color-primary-gold)] my-12" />
                        <div className="flex gap-5 items-center">
                            <Image src="/zitat.png" alt="Zitat" width={80} height={80} />
                            <p className="text-[var(--color-secondary-text)]">Lucius Annaeus Seneca<br/>römischer Philosoph, Staatsmann,<br/>
                            4 v. Chr. - 65 n. Chr.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ZitatBlockSection;
