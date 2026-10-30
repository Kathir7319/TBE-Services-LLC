import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, ArrowRight, CheckCircle2, Building2, HomeIcon, Eye } from 'lucide-react';
import { COMPANY } from '../data/siteContent';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Corporate Campus Manicured Grounds",
      category: "commercial",
      location: "Morrisville Tech Park",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
      description: "Weekly groundskeeping, continuous turf edging, and pristine walkway clearance for multi-building corporate offices."
    },
    {
      id: 2,
      title: "Precision Residential Striping & Edging",
      category: "residential",
      location: "Preston Park, Morrisville",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80",
      description: "Bermuda turf precision cut at 2.5 inches with crisp hard-surface blade edging along the sidewalk and driveway."
    },
    {
      id: 3,
      title: "Seasonal Mulch Styling & Shrub Sculpting",
      category: "residential",
      location: "Morrisville Residential Estate",
      image: "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80",
      description: "Triple-shredded dark hardwood mulch installed with distinct trench bordering and ornamental boxwood shaping."
    },
    {
      id: 4,
      title: "Retail Hub Exterior Maintenance",
      category: "commercial",
      location: "Triangle Retail Center",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      description: "Perimeter lawn care, weed mitigation, and high-visibility entrance upkeep for busy retail shopping districts."
    },
    {
      id: 5,
      title: "Managed Community HOA Common Areas",
      category: "commercial",
      location: "Cary / Morrisville Border",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      description: "Complete neighborhood entranceway maintenance, clubhouse lawn care, and continuous seasonal turf nutrition."
    },
    {
      id: 6,
      title: "Custom Shrub Trimming & Hedge Geometry",
      category: "residential",
      location: "Morrisville Subdivisions",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80",
      description: "Artisan pruning protecting plant health while elevating the home's architectural lines."
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-forest to-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Flawless Lawns & Pristine Properties
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our Property Portfolio
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore recent commercial maintenance contracts and residential lawn transformations throughout Morrisville, NC.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Work ({galleryItems.length})
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              filter === 'commercial' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Commercial Grounds
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              filter === 'residential' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            Residential Lawns
          </button>
        </div>
      </div>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur-md">
                      {item.category === 'commercial' ? 'Commercial Contract' : 'Residential Care'}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 backdrop-blur-sm">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">
                  ✓ Morrisville Verified
                </span>
                <Link
                  to="/estimates"
                  className="text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>Book Similar Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-forest to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Want Your Property Featured in Pristine Condition?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get in touch 24/7 with our Morrisville team for scheduled mowing, crisp edging, shrub trimming, and seasonal mulch styling.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/estimates"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg"
            >
              Get Free Estimate Now
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
