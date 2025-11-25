const ZitatBlockSection = () => {
    return (
        <div className="py-20 px-[10%] relative">
            <div className="absolute inset-0 bg-white mix-blend-saturation -z-1" />
            <div className="m-auto max-w-7xl">
                <div className="w-1/2 pr-24">
                    <div className="bg-[#e1e1e1] p-12 py-24 flex flex-col justify-center items-center">
                        <h2 className="text-center text-[var(--color-primary-text)] text-bold text-3xl">
                            Wer Sicherheit will, darf sich nicht in Illusionen wiegen.
                        </h2>
                        <div className="w-32 h-1 bg-[var(--color-primary-gold)] my-12" />
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ZitatBlockSection;
