import React from 'react';
import { Eye, Target, Sparkles, Sprout } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B201A] text-[#FDFBF7] overflow-hidden" id="vision">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Editorial Dual-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* VISION PANEL */}
          <div className="relative rounded-3xl bg-[#FFFFFF] text-[#0B201A] border border-[#0B201A]/10 p-8 sm:p-12 shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#2E5A3E]/30 transition-all">
            <span className="absolute -top-6 -right-6 text-9xl font-black text-[#F4F1EA] select-none pointer-events-none group-hover:text-[#EEEDE9] transition-colors">
              01
            </span>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEEDE9] text-[#2E5A3E] border border-[#0B201A]/10 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2E5A3E] uppercase">
                  OUR PURPOSE
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#0B201A] tracking-tight">
                VISION
              </h3>

              <blockquote className="text-base sm:text-lg text-[#444444] font-serif italic font-normal leading-relaxed mt-4">
                "To become one of India’s most trusted plant biotechnology nurseries, setting national benchmarks in nursery quality, plant health innovation, and farmer-centric agricultural development."
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-[#0B201A]/10 flex items-center gap-2 text-xs font-mono text-[#2E5A3E] font-bold">
              <Sprout className="w-4 h-4 text-[#2E5A3E]" />
              <span>National Benchmarks in Plant Health Innovation</span>
            </div>
          </div>

          {/* MISSION PANEL */}
          <div className="relative rounded-3xl bg-[#132B22] text-[#FDFBF7] border border-[#2E5A3E]/40 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-[#A3B18A]/40 transition-all">
            <span className="absolute -top-6 -right-6 text-9xl font-black text-[#0B201A] select-none pointer-events-none group-hover:text-[#1A3A2D] transition-colors">
              02
            </span>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2E5A3E] text-[#FDFBF7] border border-[#A3B18A]/30 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A3B18A] uppercase">
                  OUR COMMITMENT
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#FDFBF7] tracking-tight">
                MISSION
              </h3>

              <blockquote className="text-base sm:text-lg text-[#D5DFD8] font-serif italic font-normal leading-relaxed mt-4">
                "To scientifically empower farmers with reliable, high-yield, disease-free planting material through advanced biotechnology, ultimately improving rural income and promoting sustainable agriculture."
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2E5A3E]/50 flex items-center gap-2 text-xs font-mono text-[#A3B18A] font-bold">
              <Sparkles className="w-4 h-4 text-[#A3B18A]" />
              <span>Sustaining Rural Prosperity Across Karnataka & Beyond</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
