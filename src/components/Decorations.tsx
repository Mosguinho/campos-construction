import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: 'sm' | 'md' }> = ({
  className = '',
  size = 'md',
}) => {
  const imgSize = size === 'sm' ? 'h-11 w-11' : 'h-13 w-13 sm:h-14 sm:w-14';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${imgSize} shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-[#C0C7D1]/50 shadow-md shadow-black/40`}
      >
        <img
          src="/images/logo-campos.png"
          alt="W Campos Construções Logo"
          className="h-full w-full object-cover scale-105"
        />
      </div>
      <div className="leading-none">
        <div className="font-serif text-[19px] sm:text-[22px] font-semibold tracking-[0.12em] text-metallic-silver">
          W CAMPOS
        </div>
        <div className="mt-1 text-[9px] font-semibold tracking-[0.26em] text-[#E0313F] uppercase">
          Construction Co.
        </div>
      </div>
    </div>
  );
};

/**
 * Organic S-curve wave transition matching the reference design
 */
export const WaveDivider: React.FC<{
  fill: string;
  flip?: boolean;
  className?: string;
}> = ({ fill, flip = false, className = '' }) => (
  <div
    className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
      flip ? 'rotate-180' : ''
    } ${className}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="block w-full h-[46px] sm:h-[68px] md:h-[84px]"
    >
      <path
        d="M0,32 C280,88 520,0 820,42 C1080,78 1280,18 1440,38 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  </div>
);

/**
 * Subtle architectural crane wireframe SVG in metallic silver for dark sections
 */
export const CraneWireframe: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g stroke="#CBD5E1" strokeWidth="1" strokeOpacity="0.22">
      <rect x="85" y="45" width="22" height="210" />
      <path d="M85 65L107 85M107 65L85 85M85 95L107 115M107 95L85 115M85 125L107 145M107 125L85 145M85 155L107 175M107 155L85 175M85 185L107 205M107 185L85 205" />
      <path d="M10 60L300 45L290 65L10 72Z" />
      <path d="M96 18L10 60M96 18L240 48M96 18L96 45" />
      <path d="M130 55L150 68M150 54L170 67M170 53L190 66M190 52L210 65M210 51L230 64M230 50L250 63" />
      <line x1="255" y1="64" x2="255" y2="140" strokeDasharray="3 3" />
      <path d="M250 140H260L257 152C257 155 253 155 253 152V148" stroke="#E0313F" strokeOpacity="0.45" />
    </g>
  </svg>
);

/**
 * Subtle architectural blueprint lines in brushed steel/silver
 */
export const BlueprintAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 280 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g stroke="#94A3B8" strokeWidth="0.9" strokeOpacity="0.28">
      <rect x="30" y="50" width="140" height="90" />
      <path d="M30 50L100 18L170 50" />
      <rect x="65" y="78" width="32" height="62" />
      <rect x="115" y="75" width="38" height="32" />
      <line x1="15" y1="140" x2="230" y2="140" />
      <line x1="170" y1="68" x2="245" y2="68" strokeDasharray="4 4" />
      <circle cx="195" cy="115" r="32" strokeDasharray="3 3" />
    </g>
  </svg>
);

/**
 * Delicate cool slate botanical accent for silver-mist sections
 */
export const BotanicalAccent: React.FC<{ className?: string; flip?: boolean }> = ({
  className = '',
  flip = false,
}) => (
  <svg
    viewBox="0 0 120 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${flip ? '-scale-x-100' : ''} ${className}`}
    aria-hidden="true"
  >
    <g opacity="0.16">
      <path d="M18 170C36 120 55 75 95 20" stroke="#475569" strokeWidth="1.5" />
      <path d="M44 115C22 106 12 88 18 68C38 75 48 92 44 115Z" fill="#64748B" />
      <path d="M62 82C84 78 102 64 106 44C86 44 68 58 62 82Z" fill="#475569" />
      <path d="M35 142C56 144 74 132 82 114C62 110 44 122 35 142Z" fill="#64748B" />
      <path d="M76 52C58 42 52 24 62 8C78 16 84 34 76 52Z" fill="#475569" />
    </g>
  </svg>
);
