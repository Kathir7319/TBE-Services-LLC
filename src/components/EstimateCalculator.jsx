import React, { useState } from 'react';
import { Calculator, CheckCircle2, Phone, Sparkles, Building2, HomeIcon, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/siteContent';

export default function EstimateCalculator() {
  const [propertyType, setPropertyType] = useState('residential'); // 'residential' | 'commercial'
  const [propertySize, setPropertySize] = useState('medium'); // small, medium, large, estate/commercial
  const [frequency, setFrequency] = useState('weekly'); // weekly, biweekly, monthly
  const [selectedServices, setSelectedServices] = useState({
    mowing: true,
    edging: true,
    trimming: true,
    mulching: false,
    cleanup: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Dynamic estimate calculation logic
  const calculateEstimate = () => {
    let base = propertyType === 'residential' ? 45 : 160;

    // Size multiplier
    if (propertySize === 'small') base *= 0.85;
    if (propertySize === 'medium') base *= 1.0;
    if (propertySize === 'large') base *= 1.45;
    if (propertySize === 'estate') base *= 2.3;

    // Add-on services
    let addOns = 0;
    if (selectedServices.trimming) addOns += propertyType === 'residential' ? 25 : 75;
    if (selectedServices.mulching) addOns += propertyType === 'residential' ? 50 : 140;
    if (selectedServices.cleanup) addOns += propertyType === 'residential' ? 40 : 110;

    let totalPerVisit = base + addOns;

    // Frequency discount
    let discount = 1;
    if (frequency === 'weekly') discount = 0.90; // 10% discount for weekly regular care
    if (frequency === 'biweekly') discount = 0.95;

    const finalLow = Math.round((totalPerVisit * discount) * 0.9);
    const finalHigh = Math.round((totalPerVisit * discount) * 1.15);

    return { low: finalLow, high: finalHigh };
  };

  const estimate = calculateEstimate();

  const toggleService = (key) => {
    setSelectedServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number so we can reach you!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-slate-900 via-forest to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Instant Free Price Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Interactive Property Estimate Calculator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Select your property parameters for an instant ballpark calculation in Morrisville & Triangle area.
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-400 block font-semibold">Ready to book immediately?</span>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-emerald-400 font-extrabold text-lg hover:underline flex items-center gap-1.5 justify-end"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Type Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              1. Property Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setPropertyType('residential');
                  if (propertySize === 'estate') setPropertySize('medium');
                }}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
                  propertyType === 'residential'
                    ? 'border-emerald-600 bg-emerald-50/50 text-emerald-950 font-bold shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${propertyType === 'residential' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold">Residential Lawn</div>
                  <div className="text-xs text-slate-500 font-normal">Homes, Townhomes, Estates</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setPropertyType('commercial');
                  if (propertySize === 'small') setPropertySize('medium');
                }}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
                  propertyType === 'commercial'
                    ? 'border-emerald-600 bg-emerald-50/50 text-emerald-950 font-bold shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${propertyType === 'commercial' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold">Commercial Facility</div>
                  <div className="text-xs text-slate-500 font-normal">Offices, Retail, HOAs</div>
                </div>
              </button>
            </div>
          </div>

          {/* Step 2: Property Size */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              2. Approximate Property Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'small', label: 'Compact Lot', desc: propertyType === 'residential' ? '< 0.25 Acre' : '< 10k sq ft' },
                { id: 'medium', label: 'Standard Lot', desc: propertyType === 'residential' ? '0.25 - 0.50 Acre' : '10k - 25k sq ft' },
                { id: 'large', label: 'Spacious Lot', desc: propertyType === 'residential' ? '0.50 - 1.0 Acre' : '25k - 50k sq ft' },
                { id: 'estate', label: propertyType === 'residential' ? 'Estate Grounds' : 'Campus / HOA', desc: propertyType === 'residential' ? '1.0+ Acre' : '50k+ sq ft' },
              ].map(size => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setPropertySize(size.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    propertySize === size.id
                      ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">{size.label}</div>
                  <div className={`text-[10px] mt-0.5 ${propertySize === size.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {size.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Required Services */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              3. Services Desired (Select All That Apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { key: 'mowing', label: 'Precision Mowing & Hard Edge Trimming', desc: 'Turf cut at optimal height' },
                { key: 'trimming', label: 'Artisan Shrub & Hedge Trimming', desc: 'Pruning & ornamental shape' },
                { key: 'mulching', label: 'Seasonal Mulch Styling', desc: 'Bed weed barrier & rich mulch' },
                { key: 'cleanup', label: 'Debris & Seasonal Cleanout', desc: 'Beds & hard surface clear' }
              ].map(srv => (
                <label
                  key={srv.key}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedServices[srv.key]
                      ? 'border-emerald-500 bg-emerald-50/60 text-slate-900'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedServices[srv.key]}
                    onChange={() => toggleService(srv.key)}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                  <div>
                    <div className="text-xs font-bold leading-tight">{srv.label}</div>
                    <div className="text-[11px] text-slate-500">{srv.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 4: Maintenance Frequency */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              4. Service Cadence
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'weekly', label: 'Weekly', tag: 'Most Popular (10% Off)' },
                { id: 'biweekly', label: 'Bi-Weekly', tag: 'Standard Maintenance' },
                { id: 'monthly', label: 'Monthly / Custom', tag: 'As Needed Care' }
              ].map(freq => (
                <button
                  key={freq.id}
                  type="button"
                  onClick={() => setFrequency(freq.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    frequency === freq.id
                      ? 'border-emerald-600 bg-emerald-100/70 text-emerald-950 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{freq.label}</div>
                  <div className="text-[9px] text-emerald-700 font-semibold mt-0.5">{freq.tag}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output & Contact Submission (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Estimated Price Range
              </span>
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                {frequency.toUpperCase()} VISIT
              </span>
            </div>

            {/* Price Display */}
            <div className="my-5 text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">
                Estimated Ballpark Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                ${estimate.low} – ${estimate.high}
                <span className="text-xs font-medium text-slate-500 ml-1">/ visit</span>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium mt-1">
                ✓ Includes equipment, labor, disposal & full hard-surface blow-off
              </p>
            </div>

            {/* Quick Submission or Success Notice */}
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-emerald-900 text-base">
                  Estimate Request Received!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. A TBE Services property specialist will contact you shortly at <strong>{formData.phone}</strong> to confirm your address and lock in your price.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-700 text-white px-4 py-2 rounded-xl hover:bg-emerald-800 shadow"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Now for Immediate Dispatch
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="text-xs font-bold text-slate-700">
                  Lock in this estimate or request an on-site visit:
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 919-500-9991) *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Morrisville / Triangle Property Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-slate-900 hover:bg-emerald-700 text-white transition-all shadow-md active:scale-95"
                >
                  <span>Submit for Exact On-Site Quote</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              </form>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Free • No Obligation
            </span>
            <span className="font-semibold text-slate-700">Open 24/7 Hotline</span>
          </div>
        </div>

      </div>
    </div>
  );
}
