import Image from "next/image";
import classNames from "classnames";
import { IoMdArrowDropright } from "react-icons/io";

const ImageBlock = ({ side, image, title, description }: { side: "left" | "right", image: string, title: string, description: string }) => {
  return (
    <section className={classNames("px-[10%] py-20 flex flex-col gap-12", side === "right" ? "bg-[var(--color-light-bg)]" : "")}>
        <h2 className={classNames("text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] max-w-7xl mx-auto", side === "right" ? "text-right max-lg:text-left" : "text-left")}>{title}</h2>

        <div className={classNames("flex gap-12 justify-between w-full max-lg:flex-col max-lg:gap-6 max-w-7xl mx-auto", side === "right" ? "flex-row-reverse" : "")}>
            <p className={classNames("text-[var(--color-secondary-text)] w-[55%] max-lg:w-full", side === "right" ? "text-right max-lg:text-left" : "text-left")}>{description}</p>
            <IoMdArrowDropright size={60} className={classNames("text-[var(--color-primary-gold)] self-center max-lg:hidden", side === "right" ? "" : "rotate-180")} />
            <div className="w-[45%] relative aspect-square max-lg:w-full">
                <Image src={image} alt="Image" fill className="w-full object-cover" />
            </div>
        </div>
    </section>
  )
}

export default ImageBlock;