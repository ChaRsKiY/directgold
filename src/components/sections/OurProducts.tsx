import Image from "next/image";
import Button from "../ui/Button";
import DBadge from "../ui/DBadge";

const OurProducts = () => {
  return (
    <section className="px-[10%] py-20">
      <h2 className="text-center text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] mb-12 max-w-7xl mx-auto">Unsere Produkte</h2>
      <div className="grid grid-cols-2 justify-between gap-12 items-center h-fit max-lg:grid-cols-1 max-w-7xl mx-auto">
        <div className="p-6 border-3 border-[var(--color-primary-gold)] rounded-md flex flex-col justify-between gap-6">
            <div className="flex gap-3 items-center">
                <div className="bg-[var(--color-primary-gold)] p-2 rounded-md">
                 <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} />
                </div>
                <h3 className="font-bold text-3xl text-[var(--color-primary-gold)]">Goldkaufplan</h3>
            </div>
            <p className="text-[var(--color-secondary-text)]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Button className="w-full">Mehr erfahren</Button>
        </div>
        <div className="p-6 border-3 border-[var(--color-primary-gold)] rounded-md flex flex-col justify-between gap-6">
            <div className="flex gap-3 items-center">
                <div className="bg-[var(--color-primary-gold)] p-2 rounded-md">
                 <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} />
                </div>
                <h3 className="font-bold text-3xl text-[var(--color-primary-gold)]">Einzelkauf</h3>
            </div>
            <p className="text-[var(--color-secondary-text)]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Button className="w-full">Mehr erfahren</Button>
        </div>
      </div>
      <div className="mt-24 flex justify-center">
        <DBadge />
      </div>
    </section>
  );
};

export default OurProducts;