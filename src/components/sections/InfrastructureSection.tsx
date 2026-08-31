import React from 'react';
import { Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { INFRASTRUCTURE_LIST } from '../../data/vgbData';

export const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="relative py-24 lg:py-32 bg-[#0B201A] text-[#FDFBF7] overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132B22] border border-[#A3B18A]/25 text-[#A3B18A] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>NURSERY CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-[1.1]">
            THE INFRASTRUCTURE <br />
            <span className="font-serif italic font-normal text-[#A3B18A]">BEHIND EVERY PLANT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#BAC5BD] mt-4 leading-relaxed font-normal">
            From Class-100 cleanrooms and autoclave sterilization to automated mist-fogging tunnels, explore the bio-facilities powering VGB production in Gundlupete.
          </p>
        </div>

        {/* Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INFRASTRUCTURE_LIST.map((item, idx) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-[#132B22] border border-[#2E5A3E]/30 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#0B201A] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#06140E]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132B22] via-[#132B22]/30 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B201A]/90 text-[#A3B18A] text-[10px] font-mono tracking-widest uppercase font-bold backdrop-blur-sm border border-[#A3B18A]/20">
                  FACILITY 0{idx + 1}
                </span>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-[#A3B18A] block font-semibold">
                    {item.tagline}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#FDFBF7] group-hover:text-[#A3B18A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BAC5BD] mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2E5A3E]/40 flex items-center gap-2 text-[11px] font-mono text-[#A3B18A] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A3B18A] shrink-0" />
                  <span className="truncate">{item.spec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
