import React from 'react';
import { FlaskConical, Microscope, ShieldCheck, Wind, Sun, Activity, Layers } from 'lucide-react';

interface FacilityItem {
  num: string;
  title: string;
  category: string;
  description: string;
  spec: string;
  icon: React.ElementType;
}

const FACILITIES: FacilityItem[] = [
  {
    num: '01',
    title: 'Aseptic Tissue Culture Laboratories',
    category: 'Class-100 Cleanrooms',
    description: 'Sterile multi-room micropropagation facility with positive pressure air handling and automated UV decontamination for zero-contamination seedling initiation.',
    spec: 'HEPA 99.99% Air Filtration',
    icon: Microscope,
  },
  {
    num: '02',
    title: 'Laminar Airflow Workstations',
    category: 'ISO Class 5 Inoculation',
    description: 'High-precision sterile operating zones where trained technicians perform delicate apical meristem excisions under continuous laminar air purity.',
    spec: 'ISO Class 5 Purity Standards',
    icon: Wind,
  },
  {
    num: '03',
    title: 'Thermal Autoclave Sterilization',
    category: 'Substrate Decontamination',
    description: 'Automated high-pressure autoclaves operating at 121°C and 15 PSI to completely sterilize nutrient media, glass vessels, tools, and substrates.',
    spec: '121°C Microprocessor Cycles',
    icon: Layers,
  },
  {
    num: '04',
    title: 'Culture Media Preparation Units',
    category: 'Biochemical Formulations',
    description: 'Calibrated analytical balances, reverse-osmosis deionized water systems, and pH telemetry ensure tailored macro and micronutrient blends.',
    spec: 'Deionized RO Formulation',
    icon: FlaskConical,
  },
  {
    num: '05',
    title: 'Automated Growth Incubation',
    category: 'Photoperiod & Thermal Regulation',
    description: 'Climate-controlled incubation rooms equipped with full-spectrum photosynthetic LED arrays (25°C ± 2°C) to foster vigorous shoot proliferation.',
    spec: '16h Photoperiod • 25°C Constant',
    icon: Activity,
  },
  {
    num: '06',
    title: 'Acclimatization & Shade Houses',
    category: 'Primary & Secondary Hardening',
    description: 'Climate-monitored tunnels with automated ultrasonic foggers and shade-net polyhouses where plantlets develop sturdy root systems before field dispatch.',
    spec: '85–90% RH Micro-Fogging & Sunlight Prep',
    icon: Sun,
  },
];

export const TechnologyInfrastructureSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0A1A12] text-[#FDFBF7] overflow-hidden" id="infrastructure">
      {/* Subtle Dark Ambient Glow */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E5A3E]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A3B18A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142E21] border border-[#A3B18A]/35 text-[#A3B18A] text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>OUR TECHNOLOGY & INFRASTRUCTURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-tight">
            THE SCIENCE <br />
            <span className="font-serif italic font-normal text-[#A3B18A]">
              BEHIND THE PLANT.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#D5DFD8] leading-relaxed font-serif italic max-w-2xl">
            "Our nursery is supported by advanced biotechnology & nursery infrastructure designed to maintain maximum plant health and productivity."
          </p>
        </div>

        {/* Clean 6-Pillar Infrastructure Grid — Fully Explained Directly On-Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => {
            const IconComponent = facility.icon;

            return (
              <div
                key={facility.num}
                className="p-7 rounded-3xl bg-[#11271C] border border-[#2E5A3E]/40 shadow-lg space-y-4 hover:border-[#A3B18A]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#183929] border border-[#A3B18A]/30 flex items-center justify-center text-[#A3B18A]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-bold tracking-wider text-[#A3B18A] bg-[#183929] px-3 py-1 rounded-full border border-[#2E5A3E]/50">
                      PHASE {facility.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[11px] font-mono text-[#A3B18A] uppercase tracking-wider block font-semibold">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#FDFBF7] mt-1">
                      {facility.title}
                    </h3>
                  </div>

                  {/* Direct Explanation */}
                  <p className="text-xs sm:text-sm text-[#BAC5BD] leading-relaxed font-normal">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom Technical Spec Highlight */}
                <div className="pt-4 border-t border-[#2E5A3E]/40 flex items-center gap-2 text-[11px] font-mono text-[#A3B18A]">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#A3B18A]" />
                  <span>{facility.spec}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
