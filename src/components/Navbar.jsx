import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, ArrowRight, Trees, Clock } from 'lucide-react';
import { COMPANY } from '../data/siteContent';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Estimates & Contact', path: '/estimates' },
    { name: 'Property Gallery', path: '/gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="group focus:outline-none" aria-label="TBE Services LLC Home">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 shadow-sm'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Action & Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all text-slate-800 font-bold group"
              title="Call TBE Services 24/7"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-400 leading-none">
                  24/7 Dispatch
                </span>
                <span className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700">
                  {COMPANY.phone}
                </span>
              </div>
            </a>

            <Link
              to="/estimates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white shadow-md shadow-emerald-700/25 hover:shadow-lg hover:shadow-emerald-700/35 active:scale-95 transition-all"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
              aria-label="Call (919) 500-9991"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between py-2 px-3 bg-emerald-50 rounded-xl mb-3 text-xs font-semibold text-emerald-900">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              Hours: {COMPANY.hours}
            </span>
            <span className="text-emerald-700 font-bold">{COMPANY.location}</span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold text-base transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us: {COMPANY.phone}</span>
            </a>
            <Link
              to="/estimates"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-green-700 shadow-md shadow-emerald-700/20"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
