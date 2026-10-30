import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trees, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ArrowRight,
  Heart,
  Sparkles,
  Users
} from 'lucide-react';
import { COMPANY } from '../data/siteContent';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-forest to-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Trees className="w-3.5 h-3.5" />
            About TBE Services LLC
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Setting the Standard in Property Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Rooted in Morrisville, NC, providing high-standard grounds maintenance, scalable corporate contracts, and meticulous residential care.
          </p>
        </div>
      </section>

      {/* CORE MISSION & STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Flawless Lawns. Pristine Properties. Year-Round Dependability.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900">TBE Services LLC</strong>, we believe every property—whether a bustling corporate headquarters in Research Triangle Park or a tranquil family residence in Morrisville—deserves immaculate presentation without operational friction.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We founded our operations on one non-negotiable principle: <span className="text-emerald-800 font-semibold">absolute reliability</span>. In an industry where contractors frequently miss days, arrive with dull blades, or fail to return calls, TBE Services LLC stands apart with 24/7 client dispatch, modern commercial-grade equipment, and uncompromised precision.
            </p>

            <div className="pt-2 space-y-2.5">
              {[
                "Locally based in Morrisville, NC with full Triangle coverage",
                "Scalable contracts custom-fit for corporate offices, retail hubs, and HOAs",
                "Scheduled mowing, edging, shrub trimming, and seasonal mulch styling",
                "24/7 dedicated support line at (919) 500-9991",
                "Comprehensive commercial liability insurance for total property safety"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80"
                  alt="TBE Services LLC Professional Lawn and Property Care"
                  className="w-full h-[460px] object-cover"
                />
              </div>

              {/* Stat callout badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-800 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-emerald-400">{COMPANY.hours}</div>
                    <div className="text-xs text-slate-400">Continuous Support & Dispatch</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              The TBE Standard of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Precision Workmanship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe clean edges, leveled cuts, and symmetrical shrub trims are the signature of respect. We never rush a job or leave stray grass clippings behind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. Year-Round Dependability</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether mid-summer peak turf growth or mid-winter ice prep, our clients enjoy peace of mind knowing their scheduled route dates will be honored without exception.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. 24/7 Direct Accessibility</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Emergencies and questions don't clock out at 5 PM. Our phone line <strong className="text-slate-900 font-bold">(919) 500-9991</strong> is staffed 24 hours a day, 7 days a week.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE AREAS & MAP HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Local Territory
            </span>
            <h3 className="text-3xl font-black">
              Serving Morrisville, NC & Surrounding Communities
            </h3>
            <p className="text-slate-300 text-sm">
              Our service fleet is strategically dispatched across Wake and Durham counties to provide rapid on-site service.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {COMPANY.serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
                <MapPin className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-200">{area}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need service outside our listed core areas? Give us a call for route feasibility.
            </span>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (919) 500-9991</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
