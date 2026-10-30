import React from 'react';
import { Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { COMPANY } from '../data/siteContent';

export default function TopBanner() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Location & 24/7 badge */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{COMPANY.hours}</span>
            <span className="text-slate-400 font-normal">| Live Dispatch</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Serving {COMPANY.location} & The Triangle</span>
          </div>
        </div>

        {/* Right: Phone & CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-text text-slate-400 text-xs">
            Commercial & Residential Grounds Care
          </span>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-emerald-400 transition-colors bg-emerald-700/40 hover:bg-emerald-700/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
