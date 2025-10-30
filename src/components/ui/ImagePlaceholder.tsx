import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  alt?: string;
  gradient?: 'gold' | 'dark' | 'mountain';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = '',
  alt = 'Image placeholder',
  gradient = 'gold',
}) => {
  const gradients = {
    gold: 'from-[var(--color-primary-gold)] to-[var(--color-primary-gold-dark)]',
    dark: 'from-[var(--color-dark-bg)] to-[var(--color-dark-secondary)]',
    mountain: 'from-gray-700 via-gray-800 to-gray-900',
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradients[gradient]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white/20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

