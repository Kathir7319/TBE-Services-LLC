import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Send, 
  Building2, 
  HomeIcon,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { COMPANY, FAQS } from '../data/siteContent';
import EstimateCalculator from '../components/EstimateCalculator';

export default function EstimatesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Residential Lawn Care',
    propertyAddress: '',
    preferredSchedule: 'Weekly Maintenance',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-forest to-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Blueprint Section 3: Contact & Estimates
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Get Your Free Estimate & Connect 24/7
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to upgrade your curb appeal with guaranteed year-round dependability? Contact our Morrisville, NC team at any hour.
          </p>
        </div>
      </section>

      {/* THREE CONTACT PILLARS (Phone, Hours, Location) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: PHONE */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/90 text-center space-y-3 hover:border-emerald-500 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Direct Phone Hotline
            </span>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 block transition-colors"
            >
              {COMPANY.phone}
            </a>
            <p className="text-xs text-slate-500">
              Instant access for routine quotes or commercial dispatch.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-block mt-2 text-xs font-bold text-emerald-700 hover:underline"
            >
              Tap to Call Now →
            </a>
          </div>

          {/* Pillar 2: HOURS (Open 24/7) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/90 text-center space-y-3 hover:border-emerald-500 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Operating Availability
            </span>
            <div className="text-2xl font-black text-emerald-700">
              {COMPANY.hours}
            </div>
            <p className="text-xs text-slate-500">
              Always on call 24 hours a day, 7 days a week, 365 days a year.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Dispatch Active
            </span>
          </div>

          {/* Pillar 3: LOCATION */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/90 text-center space-y-3 hover:border-emerald-500 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Service Territory
            </span>
            <div className="text-2xl font-black text-slate-900">
              {COMPANY.location}
            </div>
            <p className="text-xs text-slate-500">
              Serving Morrisville, Cary, RTP, Raleigh, Durham, and Apex.
            </p>
            <span className="text-xs font-bold text-slate-700 block mt-2">
              Commercial & Residential Grounds
            </span>
          </div>

        </div>
      </section>

      {/* ESTIMATE REQUEST FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-lg">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Fast Turnaround
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Request a Custom Property Proposal
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Fill out the form below and our Morrisville team will follow up promptly with your custom quote.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-emerald-950">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Your estimate request for <strong>{formData.serviceType}</strong> in <strong>{formData.propertyAddress || 'Morrisville area'}</strong> has been routed to our dispatch team. We will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Immediately: (919) 500-9991</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(919) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Type *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Residential Lawn Care">Residential Lawn Care</option>
                      <option value="Commercial Property Maintenance">Commercial Property Maintenance</option>
                      <option value="Corporate Office Grounds Contract">Corporate Office Grounds Contract</option>
                      <option value="HOA / Managed Community RFP">HOA / Managed Community RFP</option>
                      <option value="Seasonal Mulch Styling & Trimming">Seasonal Mulch Styling & Trimming</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Property Address / Location in Morrisville or Triangle
                  </label>
                  <input
                    type="text"
                    placeholder="123 Park Center Dr, Morrisville, NC"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Details or Scope Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property size, specific requests (e.g. shrub trimming, mulching, mowing frequency), or commercial contract RFP guidelines..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-700/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Direct Contact
              </span>
              <h3 className="text-2xl font-black">
                Need Immediate Help or Emergency Property Response?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our phones are never routed to an offshore voicemail system. When you call <strong className="text-white">(919) 500-9991</strong>, you speak directly with grounds specialists ready to act.
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg transition-colors"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-200 block">Open 24/7 Hotline</span>
                    <span>{COMPANY.phone}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                The TBE Commitment
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Free Quotes:</strong> No obligation and transparent pricing with zero surprise add-ons.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Year-Round Dependability:</strong> Guaranteed service dates and reliable weekly routes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fully Insured:</strong> Full commercial general liability coverage for property owner security.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CALCULATOR EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EstimateCalculator />
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
