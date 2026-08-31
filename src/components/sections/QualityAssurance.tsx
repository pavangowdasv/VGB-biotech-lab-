import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Microscope, Sparkles, Activity, ArrowRight, Sun, Droplets, Layers } from 'lucide-react';
import { ClientImage } from '../ClientImage';
import aboutHeroImg from '../../assets/images/about_hero.jpg';
import tissueImg from '../../assets/images/tissue_culture_plantlets.jpg';

interface QualityCheckpoint {
  step: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
}

const QUALITY_CHECKPOINTS: QualityCheckpoint[] = [
  {
    step: '01',
    title: 'Visual Clonal Uniformity Inspection',
    description: 'Leaf phyllotaxy, petiole coloration, and pseudostem symmetry verification to eliminate off-types or weak shoots.',
    metric: 'Morphological Purity',
    icon: 'Microscope',
  },
  {
    step: '02',
    title: 'Pathogen Screening & Contamination Testing',
    description: 'Diagnostic assays ensuring total freedom from Banana Bunchy Top Virus (BBTV), Mosaic Virus, and bacterial endophytes.',
    metric: 'Virus-Free Clearance',
    icon: 'ShieldCheck',
  },
  {
    step: '03',
    title: 'Root & Shoot Vigor Evaluation',
    description: 'Secondary root hair density and pseudostem girth measurement to guarantee high nutrient uptake post-transplant.',
    metric: 'Root-Shoot Ratio',
    icon: 'Activity',
  },
  {
    step: '04',
    title: 'Hardening Stress Tolerance Assessment',
    description: 'Testing sapling adaptation during controlled humidity reductions to verify stomatal regulation and cuticular wax thickness.',
    metric: 'RH Step-Down Fit',
    icon: 'Droplets',
  },
  {
    step: '05',
    title: 'Field Adaptability Testing',
    description: 'Polyhouse solar conditioning ensures zero transplant shock, rapid soil anchorage, and instant vegetative emergence.',
    metric: 'Solar Adaptation',
    icon: 'Sun',
  },
  {
    step: '06',
    title: 'Final Quality Benchmark',
    description: 'Agronomist certification of 5–6 healthy true leaves, sturdy collar girth, and robust root ball before dispatch packaging.',
    metric: 'Field-Ready Gate',
    icon: 'CheckCircle2',
  },
];

export const QualityAssurance: React.FC = () => {
  const [activeCheckpointIdx, setActiveCheckpointIdx] = useState<number>(0);
  const activeCheckpoint = QUALITY_CHECKPOINTS[activeCheckpointIdx];

  return (
    <section id="quality" className="relative py-24 lg:py-32 bg-[#0E1F16] text-[#FDFBF7] overflow-hidden">
      {/* Dark Botanical Grain */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163526] border border-[#A3B18A]/35 text-[#A3B18A] text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-[#A3B18A]" />
            <span>QUALITY ASSURANCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDFBF7] leading-[1.05]">
            QUALITY <br />
            <span className="font-serif italic font-normal text-[#A3B18A]">
              IS ENGINEERED.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#E0E8E2] mt-4 leading-relaxed font-serif italic max-w-2xl mx-auto">
            "Every plant developed at VGB Bio-Tech Nursery passes through a multi-level quality assessment protocol."
          </p>
        </div>

        {/* 19 — Circular / Sequential Botanical Quality Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Checkpoints: 01, 02, 03 */}
          <div className="lg:col-span-4 space-y-4">
            {QUALITY_CHECKPOINTS.slice(0, 3).map((item, idx) => {
              const isSelected = activeCheckpointIdx === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveCheckpointIdx(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#153424] border-[#A3B18A] shadow-xl text-white scale-[1.02]'
                      : 'bg-[#10241A]/70 border-[#2E5A3E]/30 text-[#BAC5BD] hover:border-[#A3B18A]/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#A3B18A]">
                      CHECKPOINT {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#BAC5BD] uppercase">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#D5DFD8] mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Circular Visual Diagram (quality-control.jpg backdrop) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative p-6 rounded-3xl bg-[#0A1A12] border border-[#2E5A3E]/40 shadow-2xl overflow-hidden min-h-[420px]">
            
            {/* Split Laboratory Quality Visual Placeholder */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-[#A3B18A]/30 shadow-inner mb-6 relative">
              <ClientImage
                src={aboutHeroImg}
                alt="Quality assessment in sterile bio-laboratory"
                assetName="assets/quality/quality-control.jpg"
                aspectRatio="auto"
                theme="dark"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A12] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Live Active Inspection Telemetry */}
            <div className="w-full p-4 rounded-2xl bg-[#142E21] border border-[#A3B18A]/25 text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D4431] text-[#A3B18A] text-[10px] font-mono font-bold">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ACTIVE INSPECTION PROTOCOL {activeCheckpoint.step}</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1">
                {activeCheckpoint.title}
              </h4>
              <p className="text-xs font-mono text-[#D5DFD8]">
                Standard: 100% Zero-Tolerance Benchmark
              </p>
            </div>

            {/* Leads Visually Toward Field-Ready Plants */}
            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono font-bold text-[#A3B18A] uppercase">
              <span>LEADS TOWARD</span>
              <ArrowRight className="w-3.5 h-3.5" />
              <span>FIELD-READY PLANTS</span>
            </div>

          </div>

          {/* Right Checkpoints: 04, 05, 06 */}
          <div className="lg:col-span-4 space-y-4">
            {QUALITY_CHECKPOINTS.slice(3, 6).map((item, idx) => {
              const actualIdx = idx + 3;
              const isSelected = activeCheckpointIdx === actualIdx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveCheckpointIdx(actualIdx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#153424] border-[#A3B18A] shadow-xl text-white scale-[1.02]'
                      : 'bg-[#10241A]/70 border-[#2E5A3E]/30 text-[#BAC5BD] hover:border-[#A3B18A]/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#A3B18A]">
                      CHECKPOINT {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#BAC5BD] uppercase">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#D5DFD8] mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* 21 — QUALITY CONCLUSION & FIELD-READY PLANT PLACEHOLDER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08150E] border border-[#2E5A3E]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#A3B18A] uppercase">
              FINAL RELEASE PROTOCOL
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-white leading-snug">
              "Only plants that meet strict quality benchmarks are dispatched for plantation."
            </h3>
            <p className="text-xs sm:text-sm text-[#BAC5BD] leading-relaxed">
              Every dispatched crate includes verified batch certification, guaranteeing vigorous primary roots, pest-free stems, and true-to-type yield characteristics.
            </p>
          </div>

          <div className="w-full md:w-64 shrink-0 rounded-2xl overflow-hidden border border-[#A3B18A]/30 shadow-lg">
            <ClientImage
              src={tissueImg}
              alt="Field-ready certified banana plantlet"
              assetName="assets/quality/field-ready-plant.jpg"
              aspectRatio="portrait"
              theme="dark"
              className="w-full"
            />
          </div>

        </div>

        {/* 22 — SCIENCE → FIELD TRANSITION (Warm Ivory to Botanical Green Shift with Floating Leaf Vector) */}
        <div className="mt-16 pt-12 border-t border-[#2E5A3E]/30 relative">
          
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#A3B18A] uppercase">
              THE BIOLOGICAL JOURNEY
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono tracking-widest text-[#FDFBF7] uppercase font-bold">
            <span className="p-2 rounded-xl bg-[#142E21] border border-[#A3B18A]/20">LABORATORY</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A] shrink-0" />
            <span className="p-2 rounded-xl bg-[#142E21] border border-[#A3B18A]/20">TISSUE CULTURE</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A] shrink-0" />
            <span className="p-2 rounded-xl bg-[#142E21] border border-[#A3B18A]/20">HARDENING</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A] shrink-0" />
            <span className="p-2 rounded-xl bg-[#142E21] border border-[#A3B18A]/20">QUALITY CHECK</span>
            <ArrowRight className="w-4 h-4 text-[#A3B18A] shrink-0" />
            <span className="p-2 rounded-xl bg-[#2E5A3E] border border-[#A3B18A] text-white">FIELD</span>
          </div>

        </div>

      </div>
    </section>
  );
};
