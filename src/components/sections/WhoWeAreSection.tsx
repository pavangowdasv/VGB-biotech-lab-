import React from 'react';
import { Microscope, Leaf, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/vgbData';

interface WhoWeAreSectionProps {
  onOpenEnquiry: () => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#FDFBF7] text-[#0B201A] overflow-hidden">
      {/* Background Subtle Leaf Shadow Watermark */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #2E5A3E 10%, transparent 70%)`,
        }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Huge Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#445E2F]/10 border border-[#445E2F]/20 text-[#364C24] text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase">
              <Leaf className="w-4 h-4 text-[#445E2F]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#19271E] leading-[1.06]">
              WHERE SCIENCE <br />
              <span className="font-serif italic font-normal text-[#445E2F]">MEETS THE SOIL.</span>
            </h2>

            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-[#2B3B30] leading-relaxed font-normal">
              <p>
                <strong className="font-bold text-[#19271E]">VGB Bio-Tech Nursery</strong> is a professionally managed agricultural biotechnology nursery dedicated to the scientific development of high-performance, disease-free banana saplings through advanced tissue culture and micropropagation technologies.
              </p>
              <p>
                Our planting material is developed to support crop uniformity, plant health, stronger establishment, and sustainable agricultural growth across South India.
              </p>
            </div>

            {/* Scientific Attributes Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-[#19271E]/10 shadow-sm hover:border-[#445E2F]/40 transition-all">
                <div className="p-2.5 rounded-xl bg-[#EEEDE9] text-[#445E2F] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#19271E] uppercase tracking-wide">Meristem Micropropagation</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D50] mt-1 leading-relaxed">Pure pathogen exclusion at cellular shoot apex</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-[#19271E]/10 shadow-sm hover:border-[#445E2F]/40 transition-all">
                <div className="p-2.5 rounded-xl bg-[#EEEDE9] text-[#445E2F] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#19271E] uppercase tracking-wide">Ex-Vitro Hardening</h4>
                  <p className="text-xs sm:text-sm text-[#4A5D50] mt-1 leading-relaxed">Two-phase humidity and solar conditioning</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-3 py-4 px-9 rounded-full bg-[#19271E] hover:bg-[#364C24] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-lg shadow-[#19271E]/15 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Reserve Certified Saplings</span>
                <ArrowRight className="w-4 h-4 text-[#A3B18A]" />
              </button>

              <div className="text-xs sm:text-sm text-[#4A5D50] font-mono font-semibold">
                Facility: {COMPANY_INFO.address.town}, {COMPANY_INFO.address.state}
              </div>
            </div>

          </div>

          {/* Right Column: Large Macro Plant Photograph Overlapping Bounds */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85"
                alt="Tissue-cultured banana plantlet micropropagation"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B201A]/90 via-[#0B201A]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A] tracking-widest uppercase mb-1 font-semibold">
                  <Microscope className="w-4 h-4 text-[#A3B18A]" />
                  <span>BIOTECHNOLOGY SPECIMEN</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  Acclimatized Ex-Vitro Sapling
                </h4>
                <p className="text-xs text-[#D5DFD8] mt-1 leading-relaxed">
                  Dense white root ball architecture conditioned for instant soil anchorage and vigorous field strike.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block p-4 rounded-2xl bg-[#FDFBF7] border border-[#0B201A]/10 shadow-xl max-w-[240px]">
              <div className="text-[10px] font-mono text-[#2E5A3E] uppercase tracking-wider font-bold">
                CLONAL FIDELITY
              </div>
              <div className="text-sm font-bold text-[#0B201A] mt-0.5">
                True-To-Type Banana Planting Material
              </div>
              <div className="text-[11px] text-[#555555] mt-1">
                Zero off-type propagation protocol.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
