import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  tagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  tagline = true
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-11 h-11 rounded-2xl',
    lg: 'w-16 h-16 rounded-3xl',
    xl: 'w-24 h-24 rounded-[32px]'
  };

  return (
    <div className="flex items-center gap-3">
      {/* Radiant Lotus & Point of Light Icon */}
      <div
        className={`${iconSizes[size]} bg-gradient-to-br from-[#711D35] via-[#5A1428] to-[#340713] p-1.5 flex items-center justify-center shadow-lg border border-[#B68A45]/30 relative overflow-hidden flex-shrink-0 group`}
      >
        {/* Divine glow backdrop */}
        <div className="absolute inset-0 bg-radial-at-c from-amber-400/25 via-transparent to-transparent opacity-80" />

        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
          {/* Radiant Beams from Supreme Soul */}
          <g opacity="0.6">
            <line x1="50" y1="28" x2="50" y2="10" stroke="#FFE79A" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="28" x2="68" y2="15" stroke="#FFE79A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="50" y1="28" x2="32" y2="15" stroke="#FFE79A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="50" y1="28" x2="72" y2="28" stroke="#FFE79A" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="50" y1="28" x2="28" y2="28" stroke="#FFE79A" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Supreme Point of Light (Jyoti Bindu Shiv Baba) */}
          <circle cx="50" cy="28" r="9" fill="#FF5E62" opacity="0.3" filter="blur(3px)" />
          <circle cx="50" cy="28" r="5.5" fill="#FFF8DB" />
          <circle cx="50" cy="28" r="2.8" fill="#FFFFFF" />

          {/* Golden Lotus Petals */}
          {/* Back outer petals */}
          <path
            d="M50 48 C30 52 14 62 10 76 C28 78 42 66 50 56 C58 66 72 78 90 76 C86 62 70 52 50 48 Z"
            fill="#B68A45"
            opacity="0.85"
          />
          {/* Mid petals */}
          <path
            d="M50 50 C38 56 26 66 22 78 C38 80 46 70 50 62 C54 70 62 80 78 78 C74 66 62 56 50 50 Z"
            fill="#DFC896"
          />
          {/* Center inner blooming petals */}
          <path
            d="M50 52 C44 58 36 68 36 78 C44 80 48 72 50 66 C52 72 56 80 64 78 C64 68 56 58 50 52 Z"
            fill="#FFF3D6"
          />
          {/* Base lotus pod */}
          <ellipse cx="50" cy="79" rx="14" ry="4" fill="#B68A45" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#711D35] drop-shadow-sm">
              Ask Baba
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B68A45]" />
          </div>
          {tagline && (
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8B6E3F]">
              Track · Reflect · Transform
            </span>
          )}
        </div>
      )}
    </div>
  );
};
