import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroBackdrop from '../../assets/images/vgb_hero_leaf_backdrop_1788156820259.jpg';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
}) => {
  const scrollToVarieties = () => {
    const el = document.querySelector('#varieties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 lg:pt-32 pb-20 overflow-hidden bg-[#FAF8F3]"
    >
      {/* Layer 1: Photorealistic Hero Backdrop matching reference composition */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${heroBackdrop})`,
        }}
      />

      {/* Layer 2: Subtle soft gradient fill on mobile/tablet to ensure pristine typography legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/95 via-[#FAF8F3]/80 to-transparent lg:from-[#FAF8F3]/60 lg:via-transparent pointer-events-none" />

      {/* Main Content Container matching user's layout */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full relative z-10">
        <div className="max-w-4xl text-left space-y-4">
          
          {/* Main Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-normal tracking-tight text-[#19271E] leading-[1.03]">
            Grow Smarter. <br />
            <span className="text-[#364C24] italic font-serif">Live Greener.</span>
          </h1>

          {/* Delicate Leaf Icon Divider */}
          <div className="flex items-center gap-4 py-1 max-w-[260px]">
            <div className="h-[2px] flex-1 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #445E2F)' }} />
            <svg
              className="w-7 h-7 text-[#445E2F] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <div className="h-[2px] flex-1 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #445E2F)' }} />
          </div>

          {/* Supporting Statement Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#3A4E3D] max-w-lg font-normal leading-snug tracking-[0.01em]">
            VGB Bio-Tech Nursery produces high-performance, disease-free banana saplings through advanced tissue culture, providing farmers with genetically superior plants that boost yield, uniformity, and long-term profitability.
          </p>

          {/* Action Button Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            {/* Primary CTA */}
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#445E2F]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              id="hero-get-plantlets-cta"
            >
              <span>GET PLANTLETS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToVarieties}
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border-2 border-[#19271E]/20 hover:border-[#445E2F] bg-[#FAF8F3]/80 hover:bg-[#FAF8F3] text-[#19271E] font-bold text-sm tracking-widest uppercase transition-all backdrop-blur-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              id="hero-explore-varieties-cta"
            >
              <div className="w-6 h-6 rounded-full border border-[#19271E]/40 flex items-center justify-center shrink-0 bg-white/50">
                <Play className="w-3 h-3 fill-[#19271E] text-[#19271E] ml-0.5" />
              </div>
              <span>EXPLORE VARIETIES</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

