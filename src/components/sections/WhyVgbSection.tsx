import React from 'react';
import { Sprout, Dna, CalendarCheck2, HeartHandshake } from 'lucide-react';

export const WhyVgbSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'ECO-FRIENDLY',
      text: 'Our tissue-culture production system supports sustainable farming practices while reducing disease-related crop losses.',
      icon: Sprout,
      highlight: 'Reduced chemical dependency through disease-free seedling initiation.'
    },
    {
      num: '02',
      title: 'SCIENCE-DRIVEN',
      text: 'Advanced meristem culture, micropropagation and controlled production processes support uniform and healthy planting material.',
      icon: Dna,
      highlight: 'ISO-class laminar air inoculation and sterile MS nutrient formulation.'
    },
    {
      num: '03',
      title: 'YEAR-ROUND CONSISTENCY',
      text: 'Controlled biotechnology processes support predictable plant development and reliable planting material.',
      icon: CalendarCheck2,
      highlight: 'Continuous batch scheduling regardless of monsoon or climate seasonality.'
    },
    {
      num: '04',
      title: 'FARMER & GROWER SUPPORT',
      text: 'Practical guidance from plantation planning through crop management helps farmers make better cultivation decisions.',
      icon: HeartHandshake,
      highlight: 'Agronomic spacing, fertigation charts, and harvest stage management.'
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B201A] text-[#FDFBF7] overflow-hidden" id="why-vgb">
      {/* Botanical Depth Watermarks */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />
      
      {/* Decorative leaf shadow background shapes */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 pointer-events-none opacity-20 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #2E5A3E 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-10 -right-32 w-96 h-96 pointer-events-none opacity-20 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #A3B18A 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132B22] border border-[#A3B18A]/25 text-[#A3B18A] text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3">
            <span>CORE ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-[1.1]">
            BUILT AROUND <br />
            <span className="font-serif italic font-normal text-[#A3B18A]">BETTER PLANTS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#BAC5BD] mt-4 leading-relaxed font-normal">
            Every step of our tissue-culture cycle is engineered to eliminate systemic crop risks and empower commercial banana growers with genetic uniformity.
          </p>
        </div>

        {/* 4 Large Interactive Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-3xl bg-[#132B22]/80 border border-[#2E5A3E]/40 hover:border-[#A3B18A]/60 p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B201A] flex flex-col justify-between overflow-hidden"
              >
                {/* Oversized Architectural Number Background */}
                <span className="absolute -top-4 -right-2 text-7xl sm:text-8xl font-black text-[#1C3D31]/40 select-none pointer-events-none group-hover:text-[#A3B18A]/10 transition-colors">
                  {item.num}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E5A3E]/50 text-[#A3B18A] border border-[#A3B18A]/30 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-[#2E5A3E] group-hover:text-[#FDFBF7] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-[#A3B18A] uppercase font-semibold">
                      PILLAR {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#FDFBF7] tracking-wide uppercase">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#D5DFD8] mt-3 leading-relaxed font-normal">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2E5A3E]/50 flex items-center gap-2 text-xs text-[#A3B18A] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
