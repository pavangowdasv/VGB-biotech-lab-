import React from 'react';
import { Target, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ClientImage } from '../ClientImage';
import tissueImg from '../../assets/images/tissue_culture_plantlets.jpg';

export const MissionSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0E1F16] text-[#FDFBF7] overflow-hidden" id="mission">
      {/* Subtle Grain & Ambient Glow */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#2E5A3E]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#A3B18A]/10 blur-3xl pointer-events-none" />

      {/* Subtle 3D Botanical Watermark in Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[540px] h-[540px] opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
          <path d="M100 10 C60 50, 40 90, 40 140 C60 170, 140 170, 160 140 C160 90, 140 50, 100 10 Z" stroke="#A3B18A" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M100 10 C90 60, 90 120, 100 180" stroke="#A3B18A" strokeWidth="1.5" />
          <path d="M100 60 C80 80, 60 100, 50 120" stroke="#A3B18A" strokeWidth="1" />
          <path d="M100 90 C120 110, 140 125, 150 140" stroke="#A3B18A" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Main Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163526] border border-[#A3B18A]/35 text-[#A3B18A] text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase">
              <Target className="w-4 h-4 text-[#A3B18A]" />
              <span>MISSION</span>
            </div>

            {/* Large Heading */}
            <div className="space-y-1">
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#FDFBF7] leading-[1.02]">
                SCIENCE <br />
                <span className="font-serif italic font-normal text-[#A3B18A]">THAT EMPOWERS</span> <br />
                FARMERS.
              </h2>
            </div>

            {/* Mission Statement */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-[#EAEFEA] font-serif italic leading-relaxed pl-6 border-l-4 border-[#A3B18A]">
              "To scientifically empower farmers with reliable, high-yield, disease-free planting material through advanced biotechnology, ultimately improving rural income and promoting sustainable agriculture."
            </blockquote>

            {/* Botanical Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm font-mono text-[#BAC5BD]">
              <div className="flex items-center gap-3.5 p-4.5 rounded-2xl bg-[#142C20] border border-[#2E5A3E]/40 hover:border-[#A3B18A]/50 transition-all">
                <ShieldCheck className="w-5 h-5 text-[#A3B18A] shrink-0" />
                <span className="font-semibold text-white">Certified In-Vitro Disease Freedom</span>
              </div>
              <div className="flex items-center gap-3.5 p-4.5 rounded-2xl bg-[#142C20] border border-[#2E5A3E]/40 hover:border-[#A3B18A]/50 transition-all">
                <Sparkles className="w-5 h-5 text-[#A3B18A] shrink-0" />
                <span className="font-semibold text-white">True-To-Type Genetic Fidelity</span>
              </div>
            </div>

          </div>

          {/* Right Organic Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Layered Banana Leaves Silhouettes behind image */}
            <div className="absolute -inset-6 opacity-30 pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Organic Leaf Vector Path 1 */}
                <path
                  d="M50 350 C100 220, 220 120, 360 40 C320 150, 250 280, 110 380 Z"
                  fill="#2E5A3E"
                  fillOpacity="0.4"
                />
                {/* Organic Leaf Vector Path 2 */}
                <path
                  d="M380 340 C310 240, 200 130, 40 80 C110 180, 180 300, 320 370 Z"
                  fill="#A3B18A"
                  fillOpacity="0.2"
                />
              </svg>
            </div>

            {/* Organic Container for mission-plant.jpg */}
            <div className="relative w-full max-w-md">
              <ClientImage
                src={tissueImg}
                alt="Scientifically cultured young banana specimen"
                assetName="assets/mission/mission-plant.jpg"
                aspectRatio="portrait"
                organicMask={true}
                theme="dark"
                className="w-full shadow-2xl border-2 border-[#A3B18A]/30"
              />

              {/* Floating Scientific Specimen Tag */}
              <div className="absolute -bottom-4 right-4 bg-[#0A1A12]/95 backdrop-blur-md border border-[#A3B18A]/30 text-[#FDFBF7] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#A3B18A] animate-ping" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3B18A] block font-bold">
                    IN-VITRO MERISTEM
                  </span>
                  <span className="text-xs font-serif italic text-white/90">
                    Musa spp. Micropropagation
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 02 — MISSION TRANSITION STATEMENT */}
        <div className="mt-20 pt-10 border-t border-[#2E5A3E]/30">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A3B18A] uppercase font-bold">
            <span className="hover:text-white transition-colors">SCIENCE</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A]/60 shrink-0 animate-pulse" />
            <span className="hover:text-white transition-colors">PLANTS</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A]/60 shrink-0 animate-pulse" />
            <span className="hover:text-white transition-colors">FARMERS</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A]/60 shrink-0 animate-pulse" />
            <span className="hover:text-white transition-colors">SUSTAINABILITY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
