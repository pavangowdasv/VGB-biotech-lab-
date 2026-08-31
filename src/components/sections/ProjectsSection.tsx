import React from 'react';
import { Layers, MapPin, Calendar, CheckCircle2, ShieldCheck, TrendingUp, Droplets, Sprout, Sparkles, Scale, Clock } from 'lucide-react';
import { ClientImage } from '../ClientImage';
import aboutPlantationImg from '../../assets/images/about_plantation.jpg';

interface ProjectsSectionProps {
  onOpenEnquiry?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FAF8F3] text-[#19271E] overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#445E2F]/10 border border-[#445E2F]/20 text-[#364C24] text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <Layers className="w-3.5 h-3.5 text-[#445E2F]" />
            <span>OUR PROJECTS & AGRICULTURAL BENCHMARKS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#19271E] leading-tight">
            ADVANCED PLANT <br />
            BIOTECHNOLOGY FOR <br />
            <span className="font-serif italic font-normal text-[#445E2F]">
              SUSTAINABLE AGRICULTURAL GROWTH
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed font-serif italic max-w-3xl">
            "VGB Bio-Tech Nursery combines certified true-to-type micropropagation with comprehensive field cultivation guidance to guarantee uniform flowering, high bunch weights, and sustainable farmer profitability."
          </p>
        </div>

        {/* Plantation Banner Visual */}
        <div className="relative rounded-3xl overflow-hidden border border-[#19271E]/10 shadow-xl bg-[#EBE8DF]">
          <div className="relative h-72 sm:h-96 lg:h-[450px] w-full">
            <ClientImage
              src={aboutPlantationImg}
              alt="VGB High-Performance Banana Plantation in Karnataka"
              assetName="assets/projects/project-banana-plantation.jpg"
              aspectRatio="wide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F16]/75 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-2 bg-[#0E1F16]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#A3B18A]" />
                <span>Mysuru & Gundlupete Agricultural Belt, Karnataka</span>
              </div>
              <div className="bg-[#0E1F16]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-[#A3B18A] font-bold">
                ✓ 100% Commercial Field Success Benchmark
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Below — Simple, Direct, and Complete */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: High-Performance Clonal Planting Material */}
          <div className="p-7 rounded-3xl bg-white border border-[#19271E]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#445E2F]/10 border border-[#445E2F]/20 flex items-center justify-center text-[#445E2F]">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#19271E]">
                Certified True-To-Type Clones
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B4E] leading-relaxed">
                Propagated directly from genetically screened elite mother stock through strict in-vitro micropropagation protocols, ensuring uniform plant height, synchronous shooting, and zero somaclonal mutations.
              </p>
            </div>

            <div className="pt-3 border-t border-[#19271E]/10 space-y-2 text-xs font-mono text-[#333333]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>Meristem Tip Virus Clearance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>100% Pedigree Traceability</span>
              </div>
            </div>
          </div>

          {/* Card 2: Precision Agronomic Canopy & Drip Management */}
          <div className="p-7 rounded-3xl bg-white border border-[#19271E]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#445E2F]/10 border border-[#445E2F]/20 flex items-center justify-center text-[#445E2F]">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#19271E]">
                Precision Fertigation & Spacing
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B4E] leading-relaxed">
                Optimized high-density cultivation schedules (1,200 plants/acre) paired with calibrated micro-drip fertigation, moisture retention mulching, and balanced macronutrient delivery.
              </p>
            </div>

            <div className="pt-3 border-t border-[#19271E]/10 space-y-2 text-xs font-mono text-[#333333]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>6 ft × 6 ft High-Density Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>Calibrated Micronutrient Protocol</span>
              </div>
            </div>
          </div>

          {/* Card 3: Superior Yield & Commercial Harvest Realization */}
          <div className="p-7 rounded-3xl bg-white border border-[#19271E]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#445E2F]/10 border border-[#445E2F]/20 flex items-center justify-center text-[#445E2F]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#19271E]">
                High-Yield Harvest Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B4E] leading-relaxed">
                Delivers 32–38 kg bunch averages with cylindrical, uniform hands and pristine fruit quality, enabling farmers to achieve top-tier market price realization with shortened 11–12 month harvest turnaround.
              </p>
            </div>

            <div className="pt-3 border-t border-[#19271E]/10 space-y-2 text-xs font-mono text-[#333333]">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>32 – 38 kg Average Bunch Weight</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#445E2F] shrink-0" />
                <span>11 – 12 Months Turnaround Time</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
