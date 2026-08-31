import React from 'react';
import { X, Sprout, Clock, Weight, Maximize2, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import { BananaVariety } from '../types';

interface VarietyDetailModalProps {
  variety: BananaVariety | null;
  onClose: () => void;
  onEnquire: (varietyName: string) => void;
}

export const VarietyDetailModal: React.FC<VarietyDetailModalProps> = ({
  variety,
  onClose,
  onEnquire,
}) => {
  if (!variety) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B201A] border border-[#2E5A3E]/50 shadow-2xl overflow-hidden text-[#FDFBF7] my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header with Botanical Specimen Design (Photo-free) */}
        <div className="relative p-8 sm:p-10 w-full overflow-hidden bg-gradient-to-br from-[#122A1E] via-[#1E4330] to-[#2E5A3E] border-b border-[#2E5A3E]/40">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-black/30 border border-[#A3B18A]/40 text-xs font-mono text-[#A3B18A] uppercase tracking-wider font-bold">
              {variety.category}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif">
              {variety.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#BAC5BD] italic">
              {variety.botanicalName}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tagline */}
          <div className="p-4 rounded-2xl bg-[#132B22] border-l-4 border-[#A3B18A] text-sm text-[#FDFBF7] font-normal leading-relaxed">
            {variety.tagline}
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {variety.bunchWeight && (
              <div className="p-3.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#BAC5BD] uppercase font-bold">
                  <Weight className="w-3.5 h-3.5 text-[#A3B18A]" />
                  <span>Bunch Weight</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">{variety.bunchWeight}</div>
              </div>
            )}

            {variety.duration && (
              <div className="p-3.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#BAC5BD] uppercase font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#A3B18A]" />
                  <span>Harvest Cycle</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">{variety.duration}</div>
              </div>
            )}

            {variety.spacingRecommended && (
              <div className="p-3.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#BAC5BD] uppercase font-bold">
                  <Maximize2 className="w-3.5 h-3.5 text-[#A3B18A]" />
                  <span>Recommended Spacing</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">{variety.spacingRecommended}</div>
              </div>
            )}
          </div>

          {/* Botanical Characteristics */}
          <div>
            <h4 className="text-xs font-mono text-[#A3B18A] uppercase tracking-wider mb-3 font-bold">
              Tissue-Culture Biological Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {variety.characteristics.map((char, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#BAC5BD] font-normal">
                  <ShieldCheck className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Suitability */}
          <div className="p-4 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40">
            <span className="text-[10px] font-mono text-[#A3B18A] uppercase tracking-wider block mb-1 font-bold">
              Cultivation & Market Fit
            </span>
            <p className="text-xs text-[#BAC5BD] leading-relaxed font-normal">{variety.idealFor}</p>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onEnquire(variety.name);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <span>Enquire on WhatsApp ({variety.name.split('(')[0].trim()})</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-full bg-[#132B22] hover:bg-[#1E3A2F] text-[#BAC5BD] font-bold text-xs uppercase tracking-wider border border-[#2E5A3E]/40 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
