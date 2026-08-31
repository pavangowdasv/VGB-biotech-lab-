import React from 'react';
import { Microscope, ShieldCheck, Dna, Users2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: 'SCIENCE-DRIVEN',
      subtitle: 'Meristem micropropagation & molecular screening',
      icon: Microscope,
    },
    {
      title: 'DISEASE-FREE',
      subtitle: 'Systemic pathogen & virus indexed mother stock',
      icon: ShieldCheck,
    },
    {
      title: 'TRUE-TO-TYPE',
      subtitle: 'Genetically stable clones with uniform bunching',
      icon: Dna,
    },
    {
      title: 'FARMER-CENTRIC',
      subtitle: 'Field-ready hardening & comprehensive agro guidance',
      icon: Users2,
    },
  ];

  return (
    <section className="relative z-20 py-8 bg-[#0B201A] border-y border-[#2E5A3E]/30" id="trust-strip">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#132B22]/60 border border-[#A3B18A]/15 hover:border-[#A3B18A]/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2E5A3E]/40 text-[#A3B18A] border border-[#A3B18A]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#2E5A3E] group-hover:text-[#FDFBF7] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#FDFBF7] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#BAC5BD] leading-snug mt-0.5 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
