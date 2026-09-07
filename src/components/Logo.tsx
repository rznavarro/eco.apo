import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isDarkBg = variant === 'light';

  // Sizing scales
  const sizeClasses = {
    sm: {
      container: 'h-8',
      svg: 'h-8 w-auto',
      title: 'text-lg',
      tagline: 'text-[9px] tracking-wider',
    },
    md: {
      container: 'h-10 sm:h-11',
      svg: 'h-10 sm:h-11 w-auto',
      title: 'text-xl sm:text-2xl',
      tagline: 'text-[10px] sm:text-[11px] tracking-wide',
    },
    lg: {
      container: 'h-14',
      svg: 'h-14 w-auto',
      title: 'text-3xl',
      tagline: 'text-xs tracking-wider',
    },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${sizeClasses.container} ${className}`}>
      {/* Official EA Vector Emblem with Sprouting Leaves & Inner Leaf Counter */}
      <svg
        viewBox="0 0 100 80"
        className={`${sizeClasses.svg} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="EcoApo Logo EA"
      >
        {/* Vibrant Green Gradient for Emblem */}
        <defs>
          <linearGradient id="eaGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* E Letterform */}
        <path
          d="M14 16 H44 V26 H26 V34 H40 V44 H26 V54 H44 V64 H14 Z"
          fill="url(#eaGreenGrad)"
        />

        {/* Sprouting leaf curving outward from E's spine */}
        <path
          d="M14 42 C7 40 2 34 2 27 C2 21 6 18 8 18 C7 23 9 27 15 29"
          stroke="url(#eaGreenGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Leftmost small sprout leaf */}
        <path
          d="M3 28 C-1 25 0 19 6 18 C7 23 5 27 3 28 Z"
          fill="url(#eaGreenGrad)"
        />
        {/* Upper sprout leaf nested in the E notch */}
        <path
          d="M8 22 C9 15 17 14 20 18 C17 21 11 23 8 22 Z"
          fill="url(#eaGreenGrad)"
        />

        {/* A Letterform with slanted legs */}
        <path
          d="M48 64 L67 16 H79 L98 64 H84 L80 52 H64 L60 64 H48 Z"
          fill="url(#eaGreenGrad)"
        />

        {/* Outer triangle counter cutout inside A */}
        <path
          d="M72 26 C66 35 65 44 65 47 H79 C79 44 78 35 72 26 Z"
          fill={isDarkBg ? '#06120e' : '#ffffff'}
        />

        {/* Delicate leaf silhouette nested inside A counter */}
        <path
          d="M72 27 C67 35 67 43 67 46 H77 C77 43 77 35 72 27 Z"
          fill="url(#eaGreenGrad)"
        />
        {/* Leaf central vein stem */}
        <path
          d="M72 29 V46"
          stroke={isDarkBg ? '#06120e' : '#ffffff'}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-display font-extrabold tracking-tight ${sizeClasses.title} ${
              isDarkBg ? 'text-white' : 'text-[#06120e]'
            }`}
          >
            Ecoapo
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] self-baseline mb-1 shrink-0" />
        </div>

        {showTagline && (
          <span
            className={`font-medium uppercase -mt-0.5 ${sizeClasses.tagline} ${
              isDarkBg ? 'text-emerald-300/85' : 'text-emerald-800'
            }`}
          >
            Tecnología Solar
          </span>
        )}
      </div>
    </div>
  );
};
