import React from 'react';

export default function Logo({ variant = 'full', size = 'md', className = '' }) {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[11px] tracking-wide',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest',
  };

  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SHIELD CREST EMBLEM */}
      <div className={`relative ${iconSizes[size] || iconSizes.md} rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-950 p-2 shadow-md shadow-emerald-900/20 shrink-0 border border-emerald-400/30 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`}>
        {/* Subtle Ambient Background Ring */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>

        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          {/* Left Grass Blade */}
          <path
            d="M 32 75 C 30 52, 38 40, 48 30 C 44 45, 42 62, 38 75 Z"
            fill="#a7f3d0"
            opacity="0.9"
          />
          {/* Center Tall Turf Blade */}
          <path
            d="M 48 76 C 45 46, 52 24, 66 18 C 60 38, 58 58, 52 76 Z"
            fill="#ffffff"
          />
          {/* Right Grass Blade */}
          <path
            d="M 54 75 C 57 56, 68 45, 78 38 C 70 52, 64 65, 58 75 Z"
            fill="#6ee7b7"
            opacity="0.85"
          />
          {/* Precision Laser Cut Horizon Edge (Amber/Gold) */}
          <path
            d="M 20 76 L 80 76"
            stroke="#fbbf24"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Pristine Quality Sparkle */}
          <path
            d="M 72 24 Q 72 29 77 29 Q 72 29 72 34 Q 72 29 67 29 Q 72 29 72 24 Z"
            fill="#f59e0b"
          />
        </svg>
      </div>

      {/* TYPOGRAPHY (When not icon-only) */}
      {variant !== 'icon' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight ${textSizes[size] || textSizes.md} ${
                isWhite ? 'text-white' : 'text-slate-900'
              }`}
            >
              TBE<span className="text-emerald-500 ml-1">SERVICES</span>
            </span>
            <span
              className={`font-extrabold text-[10px] px-1.5 py-0.5 rounded border uppercase leading-none ${
                isWhite
                  ? 'bg-slate-800 text-slate-300 border-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-300'
              }`}
            >
              LLC
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-bold uppercase ${subSizes[size] || subSizes.md} ${
                isWhite ? 'text-emerald-300/90' : 'text-slate-500'
              }`}
            >
              Property Care • Morrisville, NC
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
