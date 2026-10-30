import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HomeIcon, 
  Clock, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Star, 
  Calendar,
  Trees,
  Award
} from 'lucide-react';
import { COMPANY, SERVICES, TESTIMONIALS } from '../data/siteContent';
import EstimateCalculator from '../components/EstimateCalculator';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-forest-dark text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background Ambient Glow & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Morrisville, NC’s Premier Property Care</span>
                <span className="text-slate-400">|</span>
                <span className="text-white font-bold">{COMPANY.hours}</span>
              </div>

              {/* Exact Main Headline from Blueprint */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Flawless Lawns.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
                  Pristine Properties.
                </span>{' '}
                Year-Round Dependability.
              </h1>

              {/* Exact Sub-Headline from Blueprint */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY.subHeadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/estimates"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-extrabold text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/30 active:scale-95 transition-all"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-extrabold text-base bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-emerald-500/50 shadow transition-all"
                >
                  <Phone className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <span>Call {COMPANY.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {COMPANY.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="text-xl font-black text-emerald-400">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Hero Image Showcase (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80"
                  alt="TBE Services LLC Flawless Lawn Maintenance in Morrisville NC"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4" /> Morrisville, NC Standard
                      </div>
                      <div className="text-sm font-extrabold mt-0.5">
                        Clean Edges • Lush Turf • Zero Hassle
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Phone Line</span>
                      <a href={`tel:${COMPANY.phoneRaw}`} className="text-emerald-400 font-black text-xs hover:underline">
                        (919) 500-9991
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES SHOWCASE (Directly from Blueprint) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Our Core Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Property Maintenance
          </h2>
          <p className="text-slate-600 text-base">
            Engineered specifically for Morrisville, NC commercial assets and distinctive residential properties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: COMMERCIAL PROPERTY MAINTENANCE */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={SERVICES[0].image}
                  alt="Commercial Property Maintenance Morrisville NC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 text-xs font-bold backdrop-blur-md">
                    <Building2 className="w-3.5 h-3.5" />
                    Commercial Contracts
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    COMMERCIAL PROPERTY MAINTENANCE
                  </h3>
                  {/* Exact text from Blueprint */}
                  <p className="text-emerald-800 font-semibold text-sm mt-1 bg-emerald-50 px-3 py-1 rounded-lg inline-block">
                    Scalable contracts for corporate offices, retail hubs, and managed communities.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  First impressions define your business. We deliver turnkey, reliable grounds care to protect your property's value and impress visitors 365 days a year.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {SERVICES[0].features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <Link
                to="/services#commercial"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/estimates"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                Request Commercial RFP
              </Link>
            </div>
          </div>

          {/* Card 2: RESIDENTIAL LAWN CARE */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={SERVICES[1].image}
                  alt="Residential Lawn Care Morrisville NC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 text-xs font-bold backdrop-blur-md">
                    <HomeIcon className="w-3.5 h-3.5" />
                    Residential Care
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    RESIDENTIAL LAWN CARE
                  </h3>
                  {/* Exact text from Blueprint */}
                  <p className="text-emerald-800 font-semibold text-sm mt-1 bg-emerald-50 px-3 py-1 rounded-lg inline-block">
                    Scheduled mowing, edging, shrub trimming, and seasonal mulch styling.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Reclaim your weekends while your lawn becomes the benchmark of the neighborhood. Punctual, neat, and detail-obsessed service every single visit.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {SERVICES[1].features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <Link
                to="/services#residential"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/estimates"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                Get Lawn Estimate
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: ESTIMATE CALCULATOR TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EstimateCalculator />
      </section>

      {/* SECTION 4: WHY CHOOSE TBE SERVICES LLC */}
      <section className="bg-slate-100 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              The TBE Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Why Morrisville Trusts TBE Services LLC
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dependability is in our name. From corporate business parks to residential properties, we never cut corners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Open 24/7 Hours</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emergency response, flexible commercial off-peak scheduling, and 24/7 client dispatch at (919) 500-9991.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Pristine Workmanship</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laser-sharp edging, clean razor blades, artistic shrub shaping, and spotless blow-offs on every single visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Year-Round Dependability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consistent weekly and bi-weekly routes. We show up when promised with zero missed appointments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Locally Rooted in NC</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Based right here in Morrisville, NC, serving Cary, RTP, Raleigh, Apex, and Durham with deep local climate expertise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Verified Feedback
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Hear From Our Commercial & Residential Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                <div className="text-xs text-slate-500">{item.role}</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CONTACT CALLOUT (Blueprint Point 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
              Point 3: Contact & Estimates
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Reach Out 24/7 for Prompt Estimates & Service
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Call us immediately at <strong className="text-emerald-400 font-bold">{COMPANY.phone}</strong> or book an on-site property walkthrough online.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call {COMPANY.phone}</span>
              </a>
              <Link
                to="/estimates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                <span>Online Estimate Form</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
}
