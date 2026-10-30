import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Trees, Mail, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { COMPANY } from '../data/siteContent';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-400/30">
              Morrisville & Research Triangle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready for a pristine property with year-round dependability?
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base mt-2">
              Speak with our grounds specialists now or get a free custom quote for your commercial or residential space.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold hover:bg-slate-100 transition-transform active:scale-95 shadow-lg shadow-black/20"
            >
              <Phone className="w-5 h-5 text-emerald-600 animate-pulse" />
              <span>{COMPANY.phone}</span>
            </a>
            <Link
              to="/estimates"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-white font-bold border border-emerald-400/40 transition-colors"
            >
              <span>Instant Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" aria-label="TBE Services LLC Home" className="inline-block group">
              <Logo variant="white" size="md" />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-slate-200">Flawless Lawns. Pristine Properties. Year-Round Dependability.</strong>
              <br />
              {COMPANY.subHeadline}
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Operating Hours: <strong className="text-emerald-400 font-bold">{COMPANY.hours}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Primary Hub: <strong className="text-white font-medium">{COMPANY.location}</strong> (Serving the Triangle)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed & Insured Professional Grounds Maintenance</span>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About TBE Services
                </Link>
              </li>
              <li>
                <Link to="/estimates" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact & Estimates
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Property Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#commercial" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Commercial Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#residential" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Residential Lawn Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Precision Mowing & Edging
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Shrub & Hedge Trimming
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Seasonal Mulch Styling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Corporate Grounds Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Phone Hotline</span>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-lg font-black text-emerald-400 hover:text-emerald-300 transition-colors inline-block"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Availability</span>
                <span className="text-xs font-bold text-slate-200">24 Hours / 7 Days a Week</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Service Area</span>
                <span className="text-xs text-slate-300">Morrisville, Cary, RTP, Raleigh, Durham, Apex</span>
              </div>
              <Link
                to="/estimates"
                className="block text-center text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} TBE Services LLC. All rights reserved. Morrisville, NC.</p>
          <div className="flex items-center gap-6">
            <span>Commercial & Residential Property Maintenance</span>
            <span>•</span>
            <span className="text-slate-400">Open 24/7: (919) 500-9991</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
