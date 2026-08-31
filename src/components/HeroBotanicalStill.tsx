import React from 'react';
import heroLeafImage from '../assets/images/banana_leaf_hero_1788156505531.jpg';
import { ShieldCheck, Sprout } from 'lucide-react';

export const HeroBotanicalStill: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto relative">
      {/* Premium Minimalist Outer Frame */}
      <div className="relative rounded-3xl bg-[#FFFFFF] border border-[#0B201A]/10 p-3 sm:p-4 shadow-2xl shadow-[#0B201A]/10 text-[#0B201A]">
        
        {/* Pure Clean Botanical Photograph Showcase - No Words Over Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0B201A]">
          <img
            src={heroLeafImage}
            alt="Premium Botanical Musa Banana Leaf Specimen"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Minimal Luxury Base Footer */}
        <div className="mt-3.5 px-2.5 pb-1 flex items-center justify-between text-xs font-mono text-[#555555]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#EEEDE9] flex items-center justify-center text-[#2E5A3E]">
              <Sprout className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-bold text-[#0B201A] uppercase tracking-wider">
              VGB Botanical Specimen
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#2E5A3E] bg-[#EEEDE9] px-2.5 py-1 rounded-full border border-[#0B201A]/10">
            <ShieldCheck className="w-3 h-3 text-[#2E5A3E]" />
            <span>Grand Naine Clone</span>
          </div>
        </div>

      </div>
    </div>
  );
};
