import React from 'react';
import { Phone, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/siteContent';

export default function FloatingQuickCall() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6"
    >
      {/* Quick Estimate Button */}
      <Link
        to="/estimates"
        className="flex items-center gap-2 bg-white text-slate-800 hover:text-emerald-700 px-3.5 py-2 rounded-full shadow-lg border border-slate-200 text-xs font-bold transition-all hover:scale-105 active:scale-95"
        title="Quick Free Estimate"
      >
        <Calculator className="w-4 h-4 text-emerald-600" />
        <span className="hidden sm:inline">Free Estimate</span>
      </Link>

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-700/30 transition-all hover:scale-105 active:scale-95 group font-bold text-sm"
        title="Call TBE Services 24/7"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-4 h-4 animate-bounce" />
        <span className="tracking-tight hidden xs:inline sm:inline">Call 24/7</span>
      </a>
    </aside>
  );
}
