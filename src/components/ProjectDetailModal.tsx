import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Calendar, Sprout, TrendingUp, Sparkles } from 'lucide-react';
import { ClientImage } from './ClientImage';
import aboutPlantationImg from '../assets/images/about_plantation.jpg';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0E1F16]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F3] rounded-3xl shadow-2xl border border-[#19271E]/15 z-10 overflow-hidden flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#19271E]/10 flex items-start justify-between bg-white">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#445E2F] uppercase">
              <Sprout className="w-4 h-4 text-[#445E2F]" />
              <span>PROJECT CASE STUDY</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#19271E]">
              VGB High-Performance Banana Plantation
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#19271E]/5 hover:bg-[#19271E]/10 border border-[#19271E]/10 flex items-center justify-center text-[#19271E] transition-colors cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
          
          {/* Main Visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <ClientImage
              src={aboutPlantationImg}
              alt="VGB High-Performance Banana Plantation Project in Mysuru"
              assetName="assets/projects/project-banana-plantation.jpg"
              aspectRatio="wide"
              className="w-full"
            />
          </div>

          {/* Project Story Breakdown: CHALLENGE → VGB APPROACH → PLANTATION → RESULT → IMPACT */}
          <div className="space-y-8">
            
            {/* 01: CHALLENGE */}
            <div className="p-6 rounded-2xl bg-white border border-[#19271E]/10 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#8B3A3A] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#8B3A3A]" />
                <span>01 — CHALLENGE</span>
              </div>
              <h3 className="text-lg font-bold text-[#19271E]">
                Traditional Sucker Propagation & Disease Transmission
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Conventional banana farmers often rely on field-sourced suckers, which inherently carry soil-borne fungal pathogens, nematodes, and latent viral infections (such as Banana Bunchy Top Virus). This results in erratic field mortality, asynchronous bunch emergence, and unpredictable farmer revenues.
              </p>
            </div>

            {/* 02: VGB APPROACH */}
            <div className="p-6 rounded-2xl bg-[#F0EFE9] border border-[#19271E]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#445E2F] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#445E2F]" />
                <span>02 — VGB APPROACH</span>
              </div>
              <h3 className="text-lg font-bold text-[#19271E]">
                Micropropagated Meristem Isolation & Dual-Stage Hardening
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                VGB deployed certified in-vitro tissue-culture propagation utilizing shoot-tip meristems isolated in Class-100 cleanrooms. The plantlets underwent rigorous diagnostic pathogen indexing followed by automated 90% humidity mist-fogging primary hardening and secondary shade-net solar adaptation.
              </p>
            </div>

            {/* 03: PLANTATION */}
            <div className="p-6 rounded-2xl bg-white border border-[#19271E]/10 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#2E5A3E] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2E5A3E]" />
                <span>03 — PLANTATION</span>
              </div>
              <h3 className="text-lg font-bold text-[#19271E]">
                Field Establishment in Mysuru Agro-Climatic Zone
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                The hardened plantlets were transplanted under scientific 6 ft × 6 ft spacing with pre-treated organic pit compost and calibrated drip fertigation schedules. Complete agronomic support regarding de-suckering, leaf management, and bunch propping was provided directly to growers.
              </p>
            </div>

            {/* 04: RESULT */}
            <div className="p-6 rounded-2xl bg-[#EBE8DF] border border-[#19271E]/15 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#19271E] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#19271E]" />
                <span>04 — RESULT</span>
              </div>
              <h3 className="text-lg font-bold text-[#19271E]">
                95%+ Field Survival Rate & Uniform Bunch Development
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                The plantation demonstrated exceptional seedling vigor with rapid root strike, complete absence of juvenile mortality, and true-to-type pseudostem architecture. The uniform canopy resulted in synchronized flowering and grade-A cylindrical bunch formation.
              </p>
            </div>

            {/* 05: IMPACT */}
            <div className="p-6 rounded-2xl bg-[#19271E] text-[#FDFBF7] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#A3B18A] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#A3B18A]" />
                <span>05 — IMPACT</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Predictable Harvest & Sustainable Rural Prosperity
              </h3>
              <ul className="space-y-2 text-sm text-[#D5DFD8]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                  <span>Stable, predictable commercial yield through true-to-type, disease-free planting material.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                  <span>Substantially elevated farm profitability through rapid turnaround and superior grade fruit bunch realization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                  <span>Long-term agricultural sustainability through biotechnology-driven crop management.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 sm:p-8 border-t border-[#19271E]/10 bg-[#FAF8F3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#666666]">
            Have a commercial plantation project in Karnataka?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-[#19271E]/20 text-[#19271E] text-xs font-bold uppercase tracking-wider hover:bg-[#19271E]/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#19271E] hover:bg-[#2E5A3E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A3B18A]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
