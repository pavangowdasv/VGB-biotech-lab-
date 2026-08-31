import React, { useState } from 'react';
import { Sprout, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Scale, Clock } from 'lucide-react';
import { BANANA_VARIETIES } from '../../data/vgbData';
import { BananaVariety } from '../../types';

interface VarietiesCatalogProps {
  onSelectVariety: (variety: BananaVariety) => void;
  onEnquireVariety: (varietyName: string) => void;
}

// Clean theme tokens for the 9 varieties
const VARIETY_THEMES: Record<string, {
  accent: string;
  bgGrad: string;
  badgeBg: string;
  subgroup: string;
  highlight: string;
}> = {
  'grand-naine': {
    accent: '#2E5A3E',
    bgGrad: 'from-[#193524] to-[#2E5A3E]',
    badgeBg: 'bg-[#2E5A3E]/15 text-[#2E5A3E]',
    subgroup: 'Cavendish Group',
    highlight: 'High Commercial Yield',
  },
  'yelakki': {
    accent: '#8C6D1F',
    bgGrad: 'from-[#4A390F] to-[#7A5F1C]',
    badgeBg: 'bg-[#8C6D1F]/15 text-[#735714]',
    subgroup: 'Ney Poovan Group',
    highlight: 'Premium Market Price',
  },
  'nati-nendran': {
    accent: '#8A5122',
    bgGrad: 'from-[#45260E] to-[#7A451C]',
    badgeBg: 'bg-[#8A5122]/15 text-[#734017]',
    subgroup: 'Plantain Group',
    highlight: 'Dry-Matter Processing',
  },
  'quintal-nendran': {
    accent: '#445E2F',
    bgGrad: 'from-[#223518] to-[#3E5C2C]',
    badgeBg: 'bg-[#445E2F]/15 text-[#364C24]',
    subgroup: 'Heavy-Clone Selection',
    highlight: 'Extra Large Bunches',
  },
  'poovan': {
    accent: '#606C38',
    bgGrad: 'from-[#2F371A] to-[#596A32]',
    badgeBg: 'bg-[#606C38]/15 text-[#475225]',
    subgroup: 'Mysore Group',
    highlight: 'Soil & Climate Hardy',
  },
  'karpooravalli': {
    accent: '#3D5A50',
    bgGrad: 'from-[#1E302A] to-[#35534A]',
    badgeBg: 'bg-[#3D5A50]/15 text-[#2C423B]',
    subgroup: 'Pisang Awak Group',
    highlight: 'Drought Tolerant',
  },
  'red-banana': {
    accent: '#8B263E',
    bgGrad: 'from-[#4D1421] to-[#802237]',
    badgeBg: 'bg-[#8B263E]/15 text-[#731D31]',
    subgroup: 'Red Dacca Group',
    highlight: 'Specialty Fruit',
  },
  'rasathali': {
    accent: '#7D6337',
    bgGrad: 'from-[#3D3019] to-[#6E572D]',
    badgeBg: 'bg-[#7D6337]/15 text-[#634E2A]',
    subgroup: 'Silk Group',
    highlight: 'Traditional Dessert',
  },
  'madarangi': {
    accent: '#3E5C43',
    bgGrad: 'from-[#213224] to-[#39563E]',
    badgeBg: 'bg-[#3E5C43]/15 text-[#2E4532]',
    subgroup: 'Regional Selection',
    highlight: 'Local Preference',
  },
};

export const VarietiesCatalog: React.FC<VarietiesCatalogProps> = ({
  onSelectVariety,
  onEnquireVariety,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 9 Varieties' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'heritage', label: 'Heritage & Dessert' },
    { id: 'culinary', label: 'Culinary & Processing' },
  ];

  const filteredVarieties = BANANA_VARIETIES.filter((variety) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'commercial') {
      return ['grand-naine', 'yelakki', 'quintal-nendran'].includes(variety.id);
    }
    if (selectedCategory === 'heritage') {
      return ['poovan', 'red-banana', 'rasathali', 'madarangi'].includes(variety.id);
    }
    if (selectedCategory === 'culinary') {
      return ['nati-nendran', 'quintal-nendran', 'karpooravalli'].includes(variety.id);
    }
    return true;
  });

  return (
    <section id="varieties" className="relative py-20 lg:py-28 bg-[#FAF8F3] text-[#19271E] overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#445E2F]/10 border border-[#445E2F]/20 text-[#364C24] text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <Sprout className="w-3.5 h-3.5 text-[#445E2F]" />
            <span>NURSERY CULTIVARS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#19271E] leading-tight">
            NINE VARIETIES. <br />
            <span className="font-serif italic font-normal text-[#445E2F]">
              ONE SCIENTIFIC APPROACH.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#2B3B30] leading-relaxed font-serif italic max-w-2xl">
            "At VGB Bio-Tech Nursery, we scientifically produce a wide range of banana cultivars to suit different soil types, climatic conditions, and market demands."
          </p>

          {/* Simple Category Filter Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#19271E] text-white shadow-sm'
                    : 'bg-white border border-[#19271E]/15 text-[#444444] hover:bg-[#EAE6DF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean 9 Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVarieties.map((variety, idx) => {
            const theme = VARIETY_THEMES[variety.id] || VARIETY_THEMES['grand-naine'];
            const originalIndex = BANANA_VARIETIES.findIndex((v) => v.id === variety.id);

            return (
              <div
                key={variety.id}
                className="rounded-3xl bg-white border border-[#19271E]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Clean Header Bar */}
                <div className={`p-6 bg-gradient-to-r ${theme.bgGrad} text-white space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                      #{String(originalIndex + 1).padStart(2, '0')} • {theme.subgroup}
                    </span>
                    <span className="text-[11px] font-mono text-white/80 font-medium">
                      {theme.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif tracking-tight text-white">
                      {variety.name}
                    </h3>
                    <p className="text-xs font-mono text-white/70 italic mt-0.5">
                      {variety.botanicalName}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  {/* Clean Simple Description */}
                  <p className="text-xs sm:text-sm text-[#3E4E42] leading-relaxed">
                    {variety.tagline}
                  </p>

                  {/* 2 Simple Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#19271E]/10">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#777777] uppercase flex items-center gap-1">
                        <Scale className="w-3 h-3 text-[#445E2F]" />
                        Bunch Yield
                      </span>
                      <strong className="text-xs sm:text-sm font-mono font-bold text-[#19271E] block">
                        {variety.bunchWeight || '25 – 35 kg'}
                      </strong>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#777777] uppercase flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#445E2F]" />
                        Harvest Duration
                      </span>
                      <strong className="text-xs sm:text-sm font-mono font-bold text-[#19271E] block">
                        {variety.duration || '11 – 12 Months'}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Bottom Banner */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#EBE8DF] border border-[#19271E]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-serif italic text-[#19271E] text-center sm:text-left">
            "We also propagate additional commercial and regional varieties as per farmer requirements."
          </p>

          <button
            onClick={() => onEnquireVariety('Custom Variety')}
            className="shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#19271E] hover:bg-[#2E5A3E] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer"
          >
            <span>ENQUIRE CUSTOM VARIETY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A3B18A]" />
          </button>
        </div>

      </div>
    </section>
  );
};

