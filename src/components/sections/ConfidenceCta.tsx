import React from 'react';
import { ArrowRight, Sprout, Sparkles, Phone, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/vgbData';

interface ConfidenceCtaProps {
  onOpenEnquiry: () => void;
  onExploreVarieties?: () => void;
}

export const ConfidenceCta: React.FC<ConfidenceCtaProps> = ({
  onOpenEnquiry,
  onExploreVarieties,
}) => {
  const handleExploreVarieties = () => {
    if (onExploreVarieties) {
      onExploreVarieties();
    } else {
      const el = document.querySelector('#varieties');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 lg:py-36 bg-[#FAF8F3] text-[#19271E] overflow-hidden" id="confidence-cta">
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Modern Centered Editorial Showcase Banner with Rich Botanical Background */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#06150E] via-[#0D261A] to-[#143826] text-[#FDFBF7] p-8 sm:p-16 lg:p-24 overflow-hidden shadow-2xl border border-[#2E5A3E]/50 text-center flex flex-col items-center justify-center">
          
          {/* Layer 1: Glowing Ambient Emerald Radial Flares */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2E5A3E]/30 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#A3B18A]/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Layer 2: Subtle Modern Geometric Botanical Grid Lines */}
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#A3B18A_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

          {/* Layer 3: Modern Organic Leaf Vector Geometry */}
          <div className="absolute -left-16 -top-16 w-80 h-80 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#A3B18A]" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 190 C60 140, 140 60, 190 10 C140 60, 60 140, 10 190 Z" />
              <path d="M10 190 L190 10" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#A3B18A]" stroke="currentColor" strokeWidth="1.5">
              <path d="M190 10 C140 60, 60 140, 10 190 C60 140, 140 60, 190 10 Z" />
              <path d="M190 10 L10 190" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Content Container (Centered) */}
          <div className="max-w-4xl space-y-8 relative z-10 flex flex-col items-center">
            
            {/* Top Centered Botanical Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#163526]/90 border border-[#A3B18A]/35 text-[#A3B18A] text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase shadow-inner backdrop-blur-md">
              <Sprout className="w-4 h-4 text-[#A3B18A]" />
              <span>COMMERCIAL PLANTLETS DISPATCH</span>
            </div>

            {/* Large Centered Editorial Heading */}
            <h2 className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-tight text-white leading-[1.02] text-center">
              GROW WITH <br />
              <span className="font-serif italic font-normal text-[#A3B18A]">
                CONFIDENCE.
              </span>
            </h2>

            {/* Centered Thin Leaf Accent Divider */}
            <div className="flex items-center justify-center gap-4 py-2 max-w-[280px] w-full">
              <div className="h-[1.5px] flex-1 rounded-full bg-gradient-to-r from-transparent to-[#A3B18A]/60" />
              <div className="w-2 h-2 rounded-full bg-[#A3B18A]" />
              <div className="h-[1.5px] flex-1 rounded-full bg-gradient-to-l from-transparent to-[#A3B18A]/60" />
            </div>

            {/* Centered Supporting Quote Statement */}
            <p className="text-lg sm:text-2xl md:text-3xl text-[#E0E8E2] leading-relaxed max-w-3xl font-serif italic text-center font-light">
              "Discover scientifically developed banana planting material designed around plant health, consistency, and sustainable agricultural growth."
            </p>

            {/* Trust Pill Group */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-[#BAC5BD]">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3B18A]" />
                100% Virus-Free Screened
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3B18A]" />
                High Survival Rate (95%+)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3B18A]" />
                Certified In-Vitro Clones
              </span>
            </div>

            {/* Centered Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 w-full max-w-md">
              
              {/* Primary: GET PLANTLETS → */}
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-[#A3B18A] hover:bg-[#BAC5BD] text-[#0E1F16] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                id="cta-get-plantlets"
              >
                <span>GET PLANTLETS</span>
                <ArrowRight className="w-4 h-4 text-[#0E1F16]" />
              </button>

              {/* Secondary: EXPLORE VARIETIES → */}
              <button
                onClick={handleExploreVarieties}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-9 py-4.5 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all backdrop-blur-md cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                id="cta-explore-varieties"
              >
                <span>EXPLORE VARIETIES</span>
                <ArrowRight className="w-4 h-4 text-[#A3B18A]" />
              </button>

            </div>

            {/* Direct Contact Meta Line Centered */}
            <div className="pt-8 border-t border-[#2E5A3E]/40 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#D5DFD8]">
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#A3B18A]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-[#2E5A3E] hidden sm:inline">•</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#A3B18A]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <span className="text-[#2E5A3E] hidden sm:inline">•</span>
              <span>Gundlupete, Karnataka, India</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

