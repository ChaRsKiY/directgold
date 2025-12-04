interface ProgressIndicatorProps {
    activeIndex: number;
    totalSteps?: number;
}

const ProgressIndicator = ({ activeIndex, totalSteps = 8 }: ProgressIndicatorProps) => {
    return (
        <div className="flex gap-0.5 items-center justify-center">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={`w-1 h-2 transition-colors duration-300 ${index === activeIndex
                        ? 'bg-gold'
                        : 'bg-indicator-inactive'
                        }`}
                />
            ))}
        </div>
    );
};

export default ProgressIndicator;
