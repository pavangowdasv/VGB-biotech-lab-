import React from 'react';
import { Sprout, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, BANANA_VARIETIES } from '../data/vgbData';
import vgbLogo from '../assets/images/vgb_logo.png';

interface FooterProps {
  onOpenEnquiry: () => void;
  onNavigate?: (view: 'home' | 'about', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'about', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, sectionId);
      if (view === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#071713] text-[#BAC5BD] border-t border-[#2E5A3E]/40 pt-16 pb-12 overflow-hidden">
      {/* Oversized Botanical Background Watermark */}
      <div 
        className="absolute -bottom-24 -right-24 w-[480px] h-[480px] pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(circle, #A3B18A 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-12">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={vgbLogo}
                alt="VGB Bio Tech Lab & Nursery Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full bg-white p-0.5 shadow-md"
              />
              <div>
                <span className="font-bold text-xl tracking-wider text-white block leading-none">
                  VGB BIO TECH
                </span>
                <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#A3B18A] uppercase block font-semibold mt-1">
                  LAB & NURSERY • GUNDLUPETE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BAC5BD] leading-relaxed font-normal">
              {COMPANY_INFO.tagline}. Producing certified true-to-type, disease-screened tissue-cultured banana saplings with comprehensive field guidance.
            </p>

            <div className="pt-2 text-xs font-mono text-[#A3B18A]">
              GSTIN: <span className="text-white font-bold">{COMPANY_INFO.gstin}</span>
            </div>
          </div>

          {/* Quick Navigation - Identical to Header */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-normal text-[#D5DFD8]">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, 'home', 'hero')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#mission" onClick={(e) => handleNavClick(e, 'home', 'mission')} className="hover:text-white transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#vision" onClick={(e) => handleNavClick(e, 'home', 'vision')} className="hover:text-white transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'home', 'contact')} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Banana Cultivars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Cultivars Produced
            </h4>
            <ul className="space-y-1.5 text-xs font-normal text-[#D5DFD8]">
              {BANANA_VARIETIES.map((v) => (
                <li key={v.id}>
                  <a href="#varieties" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                    <span>{v.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Nursery Office
            </h4>
            <div className="space-y-2.5 text-xs text-[#D5DFD8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Bendgalli+Road,+Gundlupete,+Karnataka+571111,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.address.formatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-mono font-medium">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919591050890?text=Hello%20VGB%20Bio-Tech%20Nursery,%20I%20would%20like%20to%20enquire%20about%20tissue-cultured%20banana%20plants."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#132B22] border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold hover:bg-[#25D366] hover:text-black transition-all"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={COMPANY_INFO.instagram || 'https://www.instagram.com/vgb_biotech?igsi=ajY5NXg5bmc0c2Fr'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#132B22] border border-[#E1306C]/40 text-[#E1306C] text-xs font-mono font-bold hover:bg-[#E1306C] hover:text-white transition-all"
              >
                <span>Instagram</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 px-4 rounded-full bg-[#2E5A3E] hover:bg-[#3D7453] text-white text-xs font-bold font-mono tracking-wider transition-colors cursor-pointer"
              >
                REQUEST SAPLINGS →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E3A2F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8FA899]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Registered Agricultural Biotechnology Nursery in Karnataka.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#132B22] border border-[#2E5A3E]/40 text-[#BAC5BD] hover:text-white hover:border-[#A3B18A]/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A3B18A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
