import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStrip } from './components/sections/TrustStrip';
import { WhoWeAreSection } from './components/sections/WhoWeAreSection';
import { MissionSection } from './components/sections/MissionSection';
import { MissionVision } from './components/sections/MissionVision';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechnologyInfrastructureSection } from './components/sections/TechnologyInfrastructureSection';
import { VarietiesCatalog } from './components/sections/VarietiesCatalog';
import { QualityAssurance } from './components/sections/QualityAssurance';
import { ConfidenceCta } from './components/sections/ConfidenceCta';
import { ContactSection } from './components/sections/ContactSection';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { Footer } from './components/Footer';

// Modals
import { VarietyDetailModal } from './components/VarietyDetailModal';

import { BananaVariety } from './types';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedVariety, setSelectedVariety] = useState<BananaVariety | null>(null);
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);

  // Track active section for navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyMobileCta(window.scrollY > 400);

      if (currentView !== 'home') return;

      const sectionIds = [
        'hero',
        'about',
        'mission',
        'vision',
        'contact',
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleOpenEnquiry = (varietyName = '') => {
    const text = varietyName
      ? `Hello VGB Bio-Tech Nursery, I would like to enquire about ${varietyName} tissue-cultured banana plants.`
      : 'Hello VGB Bio-Tech Nursery, I would like to enquire about tissue-cultured banana plants.';
    const whatsappUrl = `https://wa.me/919591050890?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavigate = (view: 'home' | 'about', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#19271E] font-sans selection:bg-[#445E2F] selection:text-[#FAF8F3] flex flex-col justify-between">
      {/* Top Floating Navigation */}
      <Navbar
        activeSection={activeSection}
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content View */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentView === 'about' ? (
          /* Dedicated Botanical Editorial About Us Page */
          <AboutUsPage
            onOpenEnquiry={(varietyName) => handleOpenEnquiry(varietyName)}
            onNavigateSection={(sectionId) => handleNavigate('home', sectionId)}
          />
        ) : (
          /* Home Page Sections */
          <>
            {/* 01: Botanical Hero Section */}
            <HeroSection
              onOpenEnquiry={() => handleOpenEnquiry()}
            />

            {/* 02: Verified Trust Strip */}
            <TrustStrip />

            {/* 03: Introduction & Editorial "Where Science Meets the Soil" */}
            <WhoWeAreSection onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* 04: 01 — Mission Section */}
            <MissionSection />

            {/* 04b: 02 — Vision & Mission Dual Panel */}
            <MissionVision />

            {/* 05: 03 — Our Projects Showcase (VGB High-Performance Plantation + Story) */}
            <ProjectsSection onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* 06: 06 — Technology & Nursery Infrastructure (Interactive 7-Stage List + 3D Specimen) */}
            <TechnologyInfrastructureSection />

            {/* 07: 11 — Specialized Banana Cultivars (9 Varieties Horizontal Specimen Catalogue) */}
            <VarietiesCatalog
              onSelectVariety={(v) => setSelectedVariety(v)}
              onEnquireVariety={(name) => handleOpenEnquiry(name)}
            />

            {/* 08: 17 — Quality Assurance & 6-Stage Diagnostic Process (Circular Diagram + Science-to-Field) */}
            <QualityAssurance />

            {/* 09: 23 — Confidence CTA ("Grow with Confidence") */}
            <ConfidenceCta
              onOpenEnquiry={() => handleOpenEnquiry()}
              onExploreVarieties={() => {
                const el = document.getElementById('varieties');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 10: Final Verified Contact Details & Farm Location */}
            <ContactSection onOpenEnquiryModal={() => handleOpenEnquiry()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={() => handleOpenEnquiry()}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Button — Mobile Only */}
      {showStickyMobileCta && (
        <button
          onClick={() => handleOpenEnquiry()}
          className="fixed bottom-5 right-5 z-50 lg:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer animate-in slide-in-from-bottom duration-300 hover:scale-110 active:scale-95 transition-transform"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Logo */}
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.654 4.805 1.795 6.818L2 30l7.37-1.772A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.813-1.588l-.417-.247-4.37 1.05 1.073-4.262-.27-.436A11.39 11.39 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.32-5.136 11.455-11.452 11.455zm6.282-8.574c-.344-.172-2.036-1.003-2.352-1.118-.315-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.454-.536-2.77-1.707-1.023-.913-1.714-2.04-1.914-2.384-.2-.344-.021-.53.15-.7.154-.153.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.563-.58-.776-.59-.2-.01-.43-.013-.66-.013s-.602.086-.916.43c-.315.344-1.2 1.173-1.2 2.86 0 1.688 1.23 3.317 1.4 3.547.173.23 2.42 3.694 5.863 5.18.82.355 1.46.566 1.957.724.822.261 1.57.225 2.162.136.66-.098 2.036-.832 2.323-1.635.286-.803.286-1.49.2-1.633-.086-.143-.315-.23-.66-.4z"/>
          </svg>
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: '#25D366' }} />
        </button>
      )}

      {/* Variety Botanical Detail Modal */}
      <VarietyDetailModal
        variety={selectedVariety}
        onClose={() => setSelectedVariety(null)}
        onEnquire={(name) => handleOpenEnquiry(name)}
      />
    </div>
  );
}
