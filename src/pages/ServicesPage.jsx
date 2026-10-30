import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  HomeIcon, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Scissors, 
  Trees, 
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import { COMPANY, SERVICES } from '../data/siteContent';
import SafeImage from '../components/SafeImage';

export default function ServicesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'commercial', 'residential'

  useEffect(() => {
    if (location.hash === '#commercial') {
      setActiveTab('commercial');
    } else if (location.hash === '#residential') {
      setActiveTab('residential');
    }
  }, [location.hash]);

  const commercialService = SERVICES.find(s => s.id === 'commercial');
  const residentialService = SERVICES.find(s => s.id === 'residential');

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-forest to-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Blueprint Section 2: Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Comprehensive Property Maintenance & Lawn Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From expansive commercial corporate campuses to premier residential lawns in Morrisville, NC, TBE Services LLC provides unmatched dependability.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-emerald-400">
            <span>✓ Open 24/7</span>
            <span>•</span>
            <span>✓ Scalable Contracts</span>
            <span>•</span>
            <span>✓ Morrisville & RTP Area</span>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveTab('commercial')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'commercial'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Commercial Maintenance
          </button>
          <button
            onClick={() => setActiveTab('residential')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'residential'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            Residential Care
          </button>
        </div>
      </div>

      {/* DETAILED SERVICE 1: COMMERCIAL PROPERTY MAINTENANCE */}
      {(activeTab === 'all' || activeTab === 'commercial') && (
        <section id="commercial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <SafeImage
                  src={commercialService.image}
                  alt="Commercial Property Maintenance Morrisville NC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Corporate & Institutional
                    </span>
                    <h3 className="text-xl font-bold">Research Triangle Park & Morrisville</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    Commercial Division
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Commercial Property Maintenance
                  </h2>
                  <p className="text-base font-bold text-emerald-700 mt-1">
                    Scalable contracts for corporate offices, retail hubs, and managed communities.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  We understand the unique demands placed on commercial facility executives, HOA board directors, and retail property managers. Our flexible service contracts are scaled to your exact site layout, traffic patterns, and seasonal budget cycles.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {commercialService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Scope Box */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Contract Flexibility:
                  </span>
                  <p className="text-xs text-emerald-900">
                    Tailored billing schedules (monthly flat fee, seasonal agreements, or per-visit scope). Fully insured with \$2M+ commercial liability coverage and 24/7 rapid dispatch.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/estimates"
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    Request Commercial RFP / Quote
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 font-bold text-xs sm:text-sm text-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Call (919) 500-9991</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* DETAILED SERVICE 2: RESIDENTIAL LAWN CARE */}
      {(activeTab === 'all' || activeTab === 'residential') && (
        <section id="residential" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full lg:order-last">
                <SafeImage
                  src={residentialService.image}
                  alt="Residential Lawn Care Morrisville NC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Neighborhood Benchmark Care
                    </span>
                    <h3 className="text-xl font-bold">Morrisville, Cary & Surrounding Subdivisions</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <HomeIcon className="w-3.5 h-3.5" />
                    Residential Division
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Residential Lawn Care
                  </h2>
                  <p className="text-base font-bold text-emerald-700 mt-1">
                    Scheduled mowing, edging, shrub trimming, and seasonal mulch styling.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Your home’s curb appeal should bring you pride, not weekend chores. Our residential crews treat your turf with exacting precision: perfectly leveled cutting heights, defined perimeter edging, meticulous shrub pruning, and rich seasonal mulch.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {residentialService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Scope Box */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Our Clean Yard Guarantee:
                  </span>
                  <p className="text-xs text-emerald-900">
                    We never blow debris into flowerbeds or leave clippings on paved surfaces. Gates are always securely re-latched for children and pets.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/estimates"
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    Get Instant Lawn Estimate
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 font-bold text-xs sm:text-sm text-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Call (919) 500-9991</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEASONAL CARE CYCLE IN MORRISVILLE, NC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Year-Round Dependability
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Four Seasons of Care in Morrisville, NC
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              How we keep your commercial grounds and residential lawns immaculate all twelve months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                🌸 Spring
              </span>
              <h4 className="font-bold text-base text-white">Revitalization & Bed Styling</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                De-thatching, weed pre-emergent, crisp bed trenching, and seasonal mulch styling for instant curb pop.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                ☀️ Summer
              </span>
              <h4 className="font-bold text-base text-white">Peak Growth & Sculpting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scheduled weekly mowing at high cut levels to protect roots from heat, plus precision hedge sculpting.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                🍂 Fall
              </span>
              <h4 className="font-bold text-base text-white">Aeration & Leaf Clearing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Core aeration, premium fescue overseeding, and regular leaf cleanouts before turf suffocation occurs.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                ❄️ Winter
              </span>
              <h4 className="font-bold text-base text-white">Dormancy & Property Defense</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Branch pruning, parking lot perimeter clearance, winterizer feeding, and 24/7 storm weather response.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIRECT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Need a Customized Maintenance Agreement?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Whether for a multi-tenant commercial park or a private residence, our property specialists are available 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/estimates"
              className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-slate-900 hover:bg-slate-800 text-white"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
