import Image from "next/image";

const DBadge = () => {
  return (
    <div className="bg-[var(--color-primary-gold)] py-2 px-20 rounded-lg">
      <Image src="/DG Icon White.png" alt="DBadge" width={70} height={70} />
    </div>
  )
}

export default DBadge;