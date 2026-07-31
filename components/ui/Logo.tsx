import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Dimension mapping
  const imageSizes = {
    sm: { width: 40, height: 40, className: 'w-10 h-10' },
    md: { width: 48, height: 48, className: 'w-12 h-12 sm:w-14 sm:h-14' },
    lg: { width: 64, height: 64, className: 'w-16 h-16 sm:w-20 sm:h-20' },
  };

  const currentSize = imageSizes[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official College Emblem Image */}
      <div className={`relative ${currentSize.className} rounded-full overflow-hidden bg-white p-0.5 shadow-md ring-2 ${isLight ? 'ring-white/40' : 'ring-bilaal-primary/20'} shrink-0`}>
        <Image
          src="/images/logo.png"
          alt="Bilaal Health Science College Official Emblem"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* College Typography */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold tracking-tight leading-none ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          } ${isLight ? 'text-white' : 'text-[#1E5AA8]'}`}
        >
          BILAAL
        </span>
        <span
          className={`font-heading font-bold uppercase tracking-wider leading-tight ${
            size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
          } ${isLight ? 'text-blue-100' : 'text-[#2E8BCB]'}`}
        >
          HEALTH SCIENCE COLLEGE
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`text-[10px] tracking-normal ${
                isLight ? 'text-blue-200/90' : 'text-gray-500'
              }`}
            >
              Garowe • Puntland • Somalia
            </span>
            <span
              className={`text-[10px] font-semibold font-arabic dir-rtl ${
                isLight ? 'text-emerald-300' : 'text-bilaal-accent'
              }`}
            >
              كلية بلال للعلوم الصحية
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
