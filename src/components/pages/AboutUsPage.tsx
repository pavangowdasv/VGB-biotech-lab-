import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  TreePine,
  Layers,
  Compass,
} from 'lucide-react';
import { ClientImage } from '../ClientImage';
import { COMPANY_INFO } from '../../data/vgbData';
import vgbLogo from '../../assets/images/vgb_logo.png';
import aboutHeroImg from '../../assets/images/about_hero.jpg';
import aboutPlantationImg from '../../assets/images/about_plantation.jpg';
import tissueImg from '../../assets/images/tissue_culture_plantlets.jpg';
import mysuruImg from '../../assets/images/mysuru_nursery.jpg';

interface AboutUsPageProps {
  onOpenEnquiry: (varietyName?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

// Animated Stat Counter Component
const AnimatedStat: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}> = ({ value, suffix = '', prefix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 40;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="font-serif">
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onOpenEnquiry,
  onNavigateSection,
}) => {
  // Active Stage for Tissue Culture Timeline
  const [activeStage, setActiveStage] = useState(0);

  const stageImages = [aboutHeroImg, tissueImg, tissueImg, mysuruImg, mysuruImg, aboutPlantationImg];

  const stages = [
    {
      id: '01',
      title: 'INITIATION',
      subtitle: 'Meristem Extraction & Sterilization',
      desc: 'Disease-free apical meristem dome is meticulously dissected in ISO Class-5 laminar airflow hoods and initiated into sterile nutrient agar.',
      assetName: 'stage-01.jpg',
    },
    {
      id: '02',
      title: 'MULTI CULTURE',
      subtitle: 'Controlled Axillary Proliferation',
      desc: 'Explants undergo rapid, hormone-regulated shoot multiplying under continuous 25°C thermal control and 16-hour botanical photoperiods.',
      assetName: 'stage-02.jpg',
    },
    {
      id: '03',
      title: 'ROOTING STAGE',
      subtitle: 'Rhizogenesis Induction',
      desc: 'Robust root primordial elongation is induced using proprietary auxin nutrient solutions, building a vigorous fibrous foundation.',
      assetName: 'stage-03.jpg',
    },
    {
      id: '04',
      title: 'HARDENING',
      subtitle: 'Primary Ex-Vitro Acclimatization',
      desc: 'In-vitro plantlets transition to climate-controlled greenhouse mist chambers in sterilized coco-peat plugs to develop cuticle waxy layers.',
      assetName: 'stage-04.jpg',
    },
    {
      id: '05',
      title: 'ACCLIMATIZATION',
      subtitle: 'Secondary Shade-House Conditioning',
      desc: 'Saplings expand foliar canopy and root mass under 50% photosynthetic shading to withstand natural field thermal swings.',
      assetName: 'stage-05.jpg',
    },
    {
      id: '06',
      title: 'FIELD-READY PLANT',
      subtitle: 'Final Sorting & Dispatch Quality Gate',
      desc: 'Rigorous pathogen verification and morphological grading ensure 100% true-to-type, certified plantlets ready for high-yield plantation.',
      assetName: 'stage-06.jpg',
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F3] text-[#19271E] font-sans selection:bg-[#445E2F] selection:text-[#FAF8F3] overflow-x-hidden">
      
      {/* =========================================================================
          01 — PAGE HERO
          Warm ivory / light botanical green background, large real-photo placeholder
          ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 lg:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Hero Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Label with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EAE6DF] border border-[#19271E]/15 shadow-xs">
              <img src={vgbLogo} alt="VGB Logo" className="w-6 h-6 object-contain rounded-full" />
              <span className="text-xs font-sans font-bold tracking-[0.22em] text-[#19271E] uppercase">
                ABOUT VGB BIO TECH LAB & NURSERY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-normal tracking-[-0.015em] text-[#19271E] leading-[1.05]">
              BRINGING <br />
              <span className="italic font-light text-[#445E2F]">SCIENCE BACK</span> <br />
              TO THE SOIL.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#3E4E42] max-w-xl font-normal leading-relaxed pt-2">
              At VGB Bio-Tech Nursery, we believe every farmer deserves access to superior, disease-free planting material for a more productive future.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white font-semibold text-xs tracking-wider uppercase shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>GET PLANTLETS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#introduction"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#19271E]/20 hover:border-[#19271E]/60 text-[#19271E] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>DISCOVER OUR STORY</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Large Real-Photo Placeholder (about-hero.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Soft Botanical Shadow */}
            <div className="absolute -inset-4 bg-[#445E2F]/10 rounded-[40px] blur-2xl -z-10 transform rotate-2" />
            
            <ClientImage
              src={aboutHeroImg}
              alt="VGB Nursery laboratory technician inspecting in-vitro banana tissue cultures"
              assetName="about-hero.jpg"
              aspectRatio="portrait"
              className="w-full shadow-lg rounded-[28px] border border-[#19271E]/15"
            />
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          02 — INTRODUCTION
          Two-column editorial layout with client content
          ========================================================================= */}
      <section id="introduction" className="py-20 sm:py-28 border-t border-[#19271E]/10 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-[1.1] tracking-tight">
                GROWING <br />
                <span className="text-[#445E2F] italic">BETTER PLANTS</span> <br />
                THROUGH SCIENCE.
              </h2>

              <div className="pt-6">
                <div className="w-16 h-[2px] bg-[#445E2F]" />
              </div>
            </div>

            {/* Right Column: Visually digestible client-provided paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-[#3E4E42] text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#19271E]">
                At VGB Bio-Tech Nursery, we are committed to making high-quality, scientifically developed banana plants accessible to growers across India. Built on the foundation of advanced plant biotechnology, our nursery combines meristem culture, micropropagation, and rigorous quality testing to deliver genetically pure, high-performance plantlets.
              </p>

              <p>
                Whether it’s a small farm, a commercial plantation, or an institutional project, our tissue-cultured plants are designed to ensure stronger growth, higher yields, and long-term sustainability. By reducing disease risks and improving crop uniformity, we help farmers save time, resources, and effort—while increasing farm profitability.
              </p>

              <p>
                But we don’t just provide superior plants—we support growers at every step. From plantation guidance to crop care and farm planning, we work closely with farming communities to build a more resilient and science-driven agricultural ecosystem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — BOTANICAL IMAGE BREAK
          Full-width visual section with about-plantation.jpg
          ========================================================================= */}
      <section className="relative w-full py-12 sm:py-16 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-md">
            <ClientImage
              src={aboutPlantationImg}
              alt="Panoramic view of hardened G9 banana plantation in Mysuru"
              assetName="about-plantation.jpg"
              aspectRatio="wide"
              className="w-full min-h-[300px] sm:min-h-[420px]"
            />
            {/* Subtle Overlay Strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#19271E]/80 via-transparent to-transparent flex items-end justify-center p-6 sm:p-10">
              <div className="px-6 py-2.5 rounded-full bg-[#FAF8F3]/90 backdrop-blur-md border border-[#FAF8F3]/40 shadow-sm">
                <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.26em] text-[#19271E] uppercase text-center block">
                  SCIENCE • PLANTS • FARMERS • SUSTAINABILITY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — IMPACT / TRUST STATISTICS
          Editorial grid with client-provided metrics and animated counters
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#19271E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
              OUR IMPACT & TRUST
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
              HEALTHY PLANTS <br />
              <span className="italic text-[#445E2F]">THRIVING.</span>
            </h2>
          </div>

          {/* Editorial 2x2 Grid with Huge Typography & Subtle Lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Stat 1: 10K+ */}
            <div className="pb-8 md:pb-12 border-b border-[#19271E]/15 space-y-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#19271E] tracking-tight flex items-baseline">
                <AnimatedStat value={10} suffix="K+" />
              </div>
              <div className="w-12 h-[2px] bg-[#445E2F]" />
              <span className="text-xs font-mono tracking-widest text-[#445E2F] uppercase font-bold block">FARMERS IMPACTED</span>
              <p className="text-sm sm:text-base text-[#3E4E42] max-w-md leading-relaxed font-normal">
                Farmers and growers have benefited from our high-quality, disease-free tissue-cultured banana plants across Karnataka and neighboring states.
              </p>
            </div>

            {/* Stat 2: 95% */}
            <div className="pb-8 md:pb-12 border-b border-[#19271E]/15 space-y-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#19271E] tracking-tight flex items-baseline">
                <AnimatedStat value={95} suffix="%" />
              </div>
              <div className="w-12 h-[2px] bg-[#445E2F]" />
              <span className="text-xs font-mono tracking-widest text-[#445E2F] uppercase font-bold block">FIELD SURVIVAL RATE</span>
              <p className="text-sm sm:text-base text-[#3E4E42] max-w-md leading-relaxed font-normal">
                Our propagation and hardening processes ensure exceptional survival rates, thanks to strict pathogen screening and scientifically controlled growth conditions.
              </p>
            </div>

            {/* Stat 3: 9 Varieties */}
            <div className="pt-2 md:pt-4 space-y-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#19271E] tracking-tight flex items-baseline">
                <AnimatedStat value={9} />
              </div>
              <div className="w-12 h-[2px] bg-[#445E2F]" />
              <span className="text-xs font-mono tracking-widest text-[#445E2F] uppercase font-bold block">VARIETIES</span>
              <p className="text-sm sm:text-base text-[#3E4E42] max-w-md leading-relaxed font-normal">
                From G9 and Yelakki to Nendran, Poovan, Red Banana, and more—our nursery produces a wide range of true-to-type banana cultivars suited for diverse climates and markets.
              </p>
            </div>

            {/* Stat 4: 500K+ Happy Growers */}
            <div className="pt-2 md:pt-4 space-y-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#19271E] tracking-tight flex items-baseline">
                <AnimatedStat value={500} suffix="K+" />
              </div>
              <div className="w-12 h-[2px] bg-[#445E2F]" />
              <span className="text-xs font-mono tracking-widest text-[#445E2F] uppercase font-bold block">HAPPY GROWERS</span>
              <p className="text-sm sm:text-base text-[#3E4E42] max-w-md leading-relaxed font-normal">
                Hundreds of thousands of genetically stable, high-performance banana plantlets are supplied every year, helping farms achieve improved yield and long-term profitability.
              </p>
            </div>

          </div>

          {/* Client-Provided Verification Subtext */}
          <div className="mt-14 pt-6 border-t border-[#19271E]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#445E2F]" />
              <span className="text-xs font-mono text-[#3E4E42] tracking-wider uppercase">
                Verified Client Performance Metrics
              </span>
            </div>
            <span className="text-xs text-[#3E4E42]/70 font-mono">
              VGB Bio-Tech Operations Data (2020–2025)
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          05 — MYSURU / LOCATION STORY
          Immersive location section with mysuru-nursery.jpg
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Location Photo Placeholder */}
            <div className="lg:col-span-6 relative">
              <ClientImage
                src={mysuruImg}
                alt="VGB Bio-Tech Nursery research facility and hardening shade houses in Mysuru"
                assetName="mysuru-nursery.jpg"
                aspectRatio="landscape"
                className="w-full rounded-[24px] shadow-md border border-[#19271E]/15"
              />
              
              {/* Location Badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#FAF8F3] border border-[#19271E]/15 px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#445E2F]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#445E2F]" />
                </div>
                <div>
                  <span className="text-xs font-serif font-bold text-[#19271E] block leading-tight">
                    MYSURU
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#445E2F] uppercase block">
                    KARNATAKA • INDIA
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
                STRATEGIC LOCATION
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
                ROOTED IN <br />
                <span className="italic text-[#445E2F]">MYSURU.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
                Located in the fertile agro-climatic zone of Mysuru, Karnataka, our nursery operates with a strong research-driven foundation, combining modern plant science with practical agricultural expertise.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="inline-flex items-center gap-2 text-xs font-bold font-sans tracking-[0.2em] text-[#19271E] hover:text-[#445E2F] uppercase transition-colors group cursor-pointer"
                >
                  <span>EXPLORE OUR SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#445E2F] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — OUR PLANTS
          Image-led section with organic mask and tissue-culture-plantlets.jpg
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#19271E]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
                OUR PLANTLETS
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-[1.1]">
                SCIENTIFICALLY <br />
                <span className="text-[#445E2F] italic">DEVELOPED.</span> <br />
                FIELD-READY.
              </h2>

              <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
                Our scientifically developed, tissue-cultured banana plants are ideal for compact spaces and controlled environments, offering reliable growth, strong structure, and consistent performance—even for urban growers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#19271E]/10">
                  <span className="text-xs font-bold text-[#19271E] block mb-1">Virus Screened</span>
                  <span className="text-[11px] text-[#3E4E42] block">Certified pathogen-free mother stock</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#19271E]/10">
                  <span className="text-xs font-bold text-[#19271E] block mb-1">Genetic Purity</span>
                  <span className="text-[11px] text-[#3E4E42] block">100% true-to-type micropropagation</span>
                </div>
              </div>
            </div>

            {/* Right: Organic Mask Image overlapping */}
            <div className="lg:col-span-6 relative">
              <ClientImage
                src={tissueImg}
                alt="Close-up of secondary-hardened tissue-cultured banana plantlets ready for field planting"
                assetName="tissue-culture-plantlets.jpg"
                aspectRatio="portrait"
                organicMask={true}
                className="w-full max-w-md mx-auto shadow-xl border-2 border-[#19271E]/15"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — SUPPORT SECTION
          Visually calm section with 3 minimalist botanical items
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          
          <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
            FARMER & GROWER SUPPORT
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight max-w-3xl mx-auto">
            MORE THAN <br />
            <span className="italic text-[#445E2F]">JUST PLANTS.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#3E4E42] max-w-2xl mx-auto leading-relaxed">
            From planting guidance to crop management, we provide expert support backed by biotechnology-driven processes—ensuring every grower benefits from high survival rates, strong root systems, and predictable harvest outcomes.
          </p>

          {/* Three Support Items with Minimalist Botanical Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 max-w-4xl mx-auto">
            
            {/* Item 1 */}
            <div className="p-8 rounded-2xl bg-[#F4EFE6] border border-[#19271E]/10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F3] border border-[#19271E]/10 flex items-center justify-center mx-auto shadow-xs">
                <Sprout className="w-5 h-5 text-[#445E2F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#19271E] tracking-tight uppercase">
                PLANTING GUIDANCE
              </h3>
              <p className="text-xs text-[#3E4E42] leading-relaxed">
                Pit preparation, spacing calibration, nutrient baseline establishment, and initial irrigation management.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-8 rounded-2xl bg-[#F4EFE6] border border-[#19271E]/10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F3] border border-[#19271E]/10 flex items-center justify-center mx-auto shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#445E2F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#19271E] tracking-tight uppercase">
                CROP CARE
              </h3>
              <p className="text-xs text-[#3E4E42] leading-relaxed">
                Fertigation schedules, foliar disease prevention protocols, sucker de-shooting, and bunch management.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-8 rounded-2xl bg-[#F4EFE6] border border-[#19271E]/10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F3] border border-[#19271E]/10 flex items-center justify-center mx-auto shadow-xs">
                <Compass className="w-5 h-5 text-[#445E2F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#19271E] tracking-tight uppercase">
                FARM PLANNING
              </h3>
              <p className="text-xs text-[#3E4E42] leading-relaxed">
                Acreage planning, variety market matching, harvest forecasting, and long-term soil health optimization.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          08 — VISION & MISSION
          Major visual transition to deep botanical green background
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#0E1F16] text-[#E8EFE9] overflow-hidden">
        {/* Subtle Ambient Leaf Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#A3B18A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.28em] text-[#8EA877] uppercase block">
              VISION & MISSION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              WITH WATER WE'LL SWAY, <br />
              <span className="italic text-[#8EA877]">GROWING PLANTS EVERY DAY.</span>
            </h2>
          </div>

          {/* Two Large Vertical Editorial Compositions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Panel 01: VISION */}
            <div className="relative p-8 sm:p-12 rounded-3xl bg-[#142A1F] border border-[#234433] shadow-xl space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl sm:text-6xl font-serif text-[#8EA877]/30 font-bold">
                    01
                  </span>
                  <div className="px-3.5 py-1 rounded-full bg-[#1C3A2B] border border-[#2B543F] text-[10px] font-mono tracking-widest text-[#8EA877] uppercase">
                    OUR HORIZON
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-4">
                  VISION
                </h3>

                <p className="text-base sm:text-lg text-[#C5D6C9] leading-relaxed font-light">
                  "To become one of India’s most trusted plant biotechnology nurseries, setting national benchmarks in nursery quality, plant health innovation, and farmer-centric agricultural development."
                </p>
              </div>

              <div className="pt-6 border-t border-[#234433] flex items-center justify-between text-xs text-[#8EA877] font-mono">
                <span>NATIONAL BENCHMARK</span>
                <span>BIOTECH INNOVATION</span>
              </div>
            </div>

            {/* Panel 02: MISSION */}
            <div className="relative p-8 sm:p-12 rounded-3xl bg-[#142A1F] border border-[#234433] shadow-xl space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl sm:text-6xl font-serif text-[#8EA877]/30 font-bold">
                    02
                  </span>
                  <div className="px-3.5 py-1 rounded-full bg-[#1C3A2B] border border-[#2B543F] text-[10px] font-mono tracking-widest text-[#8EA877] uppercase">
                    OUR COMMITMENT
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-4">
                  MISSION
                </h3>

                <p className="text-base sm:text-lg text-[#C5D6C9] leading-relaxed font-light">
                  "To scientifically empower farmers with reliable, high-yield, disease-free planting material through advanced biotechnology, ultimately improving rural income and promoting sustainable agriculture."
                </p>
              </div>

              <div className="pt-6 border-t border-[#234433] flex items-center justify-between text-xs text-[#8EA877] font-mono">
                <span>FARMER EMPOWERMENT</span>
                <span>RURAL PROSPERITY</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          09 — WHY CHOOSE US
          Warm ivory background, vertical editorial layout with alternating features
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
              THE VGB ADVANTAGE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
              YOUR NEW PATH <br />
              <span className="italic text-[#445E2F]">TO A GREENER FUTURE.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
              With VGB Bio-Tech Nursery, growing healthy, high-performing plants is simple, reliable, and truly sustainable—powered by advanced biotechnology and field-tested expertise.
            </p>
          </div>

          {/* Editorial 4 Features */}
          <div className="space-y-12">
            
            {/* Feature 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#19271E]/10">
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#445E2F]/40 block">
                  01
                </span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#19271E] font-medium">
                  ECO-FRIENDLY
                </h3>
                <p className="text-sm sm:text-base text-[#3E4E42] leading-relaxed">
                  Our tissue-culture production system eliminates pathogens, reduces crop loss, and supports sustainable farming practices with minimal resource waste.
                </p>
              </div>
              <div className="lg:col-span-4">
                <ClientImage
                  src={aboutPlantationImg}
                  alt="Sustainable bio-farming eco-friendly micropropagation"
                  assetName="about-eco.jpg"
                  aspectRatio="video"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Feature 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#19271E]/10">
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#445E2F]/40 block">
                  02
                </span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#19271E] font-medium">
                  SCIENCE-DRIVEN
                </h3>
                <p className="text-sm sm:text-base text-[#3E4E42] leading-relaxed">
                  Every plantlet is developed using meristem culture, genetic stability checks, and controlled hardening—ensuring strong, uniform growth in any space.
                </p>
              </div>
              <div className="lg:col-span-4">
                <ClientImage
                  src={aboutHeroImg}
                  alt="Laboratory meristem culture and genetic testing"
                  assetName="about-science.jpg"
                  aspectRatio="video"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Feature 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#19271E]/10">
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#445E2F]/40 block">
                  03
                </span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#19271E] font-medium">
                  YEAR-ROUND CONSISTENCY
                </h3>
                <p className="text-sm sm:text-base text-[#3E4E42] leading-relaxed">
                  Our biotechnology process guarantees predictable performance with faster establishment, vigorous roots, and high survival rates throughout the year.
                </p>
              </div>
              <div className="lg:col-span-4">
                <ClientImage
                  src={mysuruImg}
                  alt="High root density year-round hardened plantlets"
                  assetName="about-consistency.jpg"
                  aspectRatio="video"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Feature 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#19271E]/10">
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#445E2F]/40 block">
                  04
                </span>
              </div>
              <div className="lg:col-span-6 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#19271E] font-medium">
                  FARMER & GROWER SUPPORT
                </h3>
                <p className="text-sm sm:text-base text-[#3E4E42] leading-relaxed">
                  From plantation guidance to crop management, our expert team empowers growers with practical, science-backed support for long-term success.
                </p>
              </div>
              <div className="lg:col-span-4">
                <ClientImage
                  src={mysuruImg}
                  alt="On-field agronomist guidance with commercial farmers"
                  assetName="farmer-support.jpg"
                  aspectRatio="video"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10 & 11 — TISSUE CULTURE PROCESS
          Horizontal timeline with interactive stage selector & placeholders
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#19271E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
              FROM CULTURE <br />
              <span className="italic text-[#445E2F]">TO CULTIVATION.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#3E4E42] font-mono">
              Different stages in tissue culture production
            </p>
          </div>

          {/* Desktop & Mobile Interactive Stage Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {stages.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeStage === idx
                    ? 'bg-[#445E2F] text-white shadow-sm'
                    : 'bg-[#FAF8F3] text-[#3E4E42] hover:bg-[#EAE6DF] border border-[#19271E]/10'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{st.id}</span>
                <span>{st.title}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Display Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAF8F3] p-6 sm:p-10 rounded-3xl border border-[#19271E]/10 shadow-sm">
            
            {/* Left: Stage Information */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-[#445E2F]">
                  {stages[activeStage].id}
                </span>
                <div className="h-6 w-[1px] bg-[#19271E]/20" />
                <span className="text-xs font-mono tracking-widest text-[#3E4E42] uppercase font-semibold">
                  STAGE {activeStage + 1} OF 6
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#19271E] font-medium">
                {stages[activeStage].title}
              </h3>

              <p className="text-xs sm:text-sm font-mono text-[#445E2F] font-semibold uppercase">
                {stages[activeStage].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#3E4E42] leading-relaxed pt-2">
                {stages[activeStage].desc}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="px-4 py-2 rounded-full border border-[#19271E]/20 text-xs font-bold text-[#19271E] hover:bg-[#EAE6DF] cursor-pointer"
                >
                  ← PREVIOUS STAGE
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full bg-[#19271E] text-xs font-bold text-white hover:bg-[#445E2F] cursor-pointer"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>

            {/* Right: Stage Image */}
            <div className="lg:col-span-6">
              <ClientImage
                src={stageImages[activeStage]}
                alt={`Stage ${stages[activeStage].id}: ${stages[activeStage].title} in tissue culture process`}
                assetName={stages[activeStage].assetName}
                aspectRatio="landscape"
                className="w-full rounded-2xl shadow-md border border-[#19271E]/10"
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW — TECHNOLOGY & INFRASTRUCTURE
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
              OUR PROJECTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
              ADVANCED PLANT BIOTECHNOLOGY <br />
              <span className="italic text-[#445E2F]">FOR SUSTAINABLE GROWTH.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed max-w-2xl pt-2">
              Our nursery is supported by advanced biotechnology &amp; nursery infrastructure designed to maintain maximum plant health and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Overview label + Infrastructure list */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#445E2F]/10 border border-[#445E2F]/20">
                <span className="w-2 h-2 rounded-full bg-[#445E2F]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#364C24] uppercase">Overview</span>
              </div>

              <div className="space-y-4">
                {[
                  'Aseptic Tissue Culture Laboratories',
                  'Laminar Airflow Workstations',
                  'Autoclave Sterilization Systems',
                  'Culture Media Preparation Units',
                  'Automated Growth Chambers',
                  'Fogging & Mist-Based Hardening Chambers',
                  'UV-Sterilized Acclimatization Greenhouses',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#F4EFE6] border border-[#19271E]/10 hover:border-[#445E2F]/40 transition-colors">
                    <span className="text-xs font-mono font-bold text-[#445E2F] w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold text-[#19271E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Impact badge + description */}
            <div className="lg:col-span-7 space-y-6 lg:pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#19271E]/8 border border-[#19271E]/15">
                <span className="w-2 h-2 rounded-full bg-[#19271E]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#19271E] uppercase">Impact</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {[
                  { stat: '7', label: 'Core Infrastructure Units', desc: 'State-of-the-art laboratories and controlled environment chambers.' },
                  { stat: '100%', label: 'Sterile Propagation', desc: 'Every plantlet originates from pathogen-screened, certified mother stock.' },
                  { stat: '6', label: 'Production Stages', desc: 'Initiation to field-ready dispatch — all under strict quality control.' },
                  { stat: '∞', label: 'Scalable Capacity', desc: 'Infrastructure built to scale with seasonal and commercial demand.' },
                ].map((card, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#19271E]/10 space-y-2">
                    <span className="font-serif text-4xl text-[#445E2F] font-bold">{card.stat}</span>
                    <p className="text-xs font-bold text-[#19271E] uppercase tracking-wider">{card.label}</p>
                    <p className="text-xs text-[#3E4E42] leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          NEW — BANANA VARIETIES
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0E1F16] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#A3B18A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="max-w-2xl mb-14 space-y-4">
            <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#8EA877] uppercase block">
              OUR SPECIALIZED BANANA VARIETIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              CULTIVARS FOR <br />
              <span className="italic text-[#8EA877]">EVERY CLIMATE.</span>
            </h2>
            <p className="text-base text-[#C5D6C9] leading-relaxed">
              At VGB Bio-Tech Nursery, we scientifically produce a wide range of banana cultivars to suit different soil types, climatic conditions, and market demands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              'G9 (Grand Naine)',
              'Yelakki',
              'Nati Nendran',
              'Quintal Nendran',
              'Poovan',
              'Karpooravalli',
              'Red Banana',
              'Rasathali',
              'Madarangi Banana',
            ].map((variety, i) => (
              <div
                key={i}
                className="px-4 py-4 rounded-2xl bg-[#142A1F] border border-[#234433] hover:border-[#8EA877]/50 hover:bg-[#1C3A2B] transition-all text-center space-y-1 cursor-default"
              >
                <span className="text-[10px] font-mono text-[#8EA877]/60 block">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-white block leading-tight">{variety}</span>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#142A1F] border border-[#234433] space-y-3">
            <p className="text-sm sm:text-base text-[#C5D6C9] leading-relaxed">
              We also propagate additional commercial and regional varieties as per farmer and institutional requirements.
              All plants are produced through certified in-vitro propagation systems, ensuring true-to-type growth and genetic consistency.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#8EA877]" />
              <span className="text-xs font-mono text-[#8EA877] font-bold uppercase tracking-widest">Certified In-Vitro Propagation</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW — QUALITY ASSURANCE PROCESS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#19271E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Header */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
                QUALITY ASSURANCE PROCESS
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#19271E] leading-tight">
                STRICT QUALITY. <br />
                <span className="italic text-[#445E2F]">EVERY PLANT.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#3E4E42] leading-relaxed">
                Every plant developed at VGB Bio-Tech Nursery passes through a multi-level quality assessment protocol. Only plants that meet strict quality benchmarks are dispatched for plantation.
              </p>
              <div className="p-5 rounded-2xl bg-[#445E2F]/10 border border-[#445E2F]/20 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#445E2F] mt-1.5 shrink-0" />
                <p className="text-sm text-[#364C24] font-semibold leading-relaxed">
                  Only plants that meet strict quality benchmarks are dispatched for plantation.
                </p>
              </div>
            </div>

            {/* Right: QA Steps */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { step: '01', title: 'Visual Clonal Uniformity Inspection', desc: 'Each batch is visually assessed for morphological consistency and true-to-type characteristics.' },
                { step: '02', title: 'Pathogen Screening & Contamination Testing', desc: 'Rigorous pathogen and bacterial contamination testing performed at multiple growth stages.' },
                { step: '03', title: 'Root & Shoot Vigor Evaluation', desc: 'Root density, shoot height, and biomass are measured against benchmark standards.' },
                { step: '04', title: 'Hardening Stress Tolerance Assessment', desc: 'Plants are stress-tested during acclimatization to ensure robust ex-vitro adaptability.' },
                { step: '05', title: 'Field Adaptability Testing', desc: 'Final batch testing under simulated field conditions before certification and dispatch.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 p-5 rounded-2xl bg-[#FAF8F3] border border-[#19271E]/10 hover:border-[#445E2F]/40 hover:shadow-sm transition-all">
                  <span className="font-serif text-2xl font-bold text-[#445E2F]/40 shrink-0 w-10">{item.step}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#19271E] uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-[#3E4E42] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          13 — FINAL CTA
          Warm botanical hero CTA with about-cta.jpg placeholder
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#12241A] text-white overflow-hidden">
        {/* Placeholder for about-cta.jpg */}
        <div className="absolute inset-0 bg-[#0E1B13]/90 -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          <span className="text-[11px] font-sans font-bold tracking-[0.28em] text-[#8EA877] uppercase block">
            JOIN VGB BIO-TECH
          </span>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-tight">
            START <br />
            <span className="italic text-[#8EA877]">GROWING TODAY.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C5D6C9] max-w-xl mx-auto leading-relaxed">
            Join our growing community and experience the benefits of disease-free, tissue-cultured banana plants.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white font-semibold text-xs tracking-widest uppercase shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact-strip"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/25 hover:border-white text-white font-semibold text-xs tracking-widest uppercase transition-colors"
            >
              CONTACT US →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14 — CONTACT STRIP
          Minimal contact strip with direct phone, email, and action buttons
          ========================================================================= */}
      <section id="contact-strip" className="py-16 sm:py-20 bg-[#FAF8F3] border-t border-[#19271E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[10px] font-sans font-bold tracking-[0.24em] text-[#445E2F] uppercase block">
                CONNECT DIRECTLY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#19271E]">
                REACH OUT TO OUR TEAM.
              </h3>
              <p className="text-sm text-[#3E4E42]">
                Reach out to our team and we’ll respond ASAP. Interested in VGB biotech for your business? Reach out to discuss pricing and solutions.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex-1 px-5 py-3.5 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=VGB%20Bio-Tech%20Inquiry`}
                className="flex-1 px-5 py-3.5 rounded-full bg-[#EAE6DF] hover:bg-[#E0DBD2] text-[#19271E] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#19271E]/10"
              >
                <Mail className="w-3.5 h-3.5 text-[#445E2F]" />
                <span>EMAIL US</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
