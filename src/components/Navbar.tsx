import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/vgbData';
import vgbLogo from '../assets/images/vgb_logo.png';

interface NavbarProps {
  onOpenEnquiry: () => void;
  activeSection: string;
  currentView?: 'home' | 'about';
  onNavigate?: (view: 'home' | 'about', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  activeSection,
  currentView = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' as const, href: '#hero' },
    { name: 'About us', view: 'about' as const, href: '#about' },
    { name: 'Mission', view: 'home' as const, href: '#mission' },
    { name: 'Vision', view: 'home' as const, href: '#vision' },
    { name: 'Contact Us', view: 'home' as const, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.view === 'about') {
      if (onNavigate) {
        onNavigate('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        onNavigate('home', link.href.substring(1));
      }
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#FAF8F3]/98 backdrop-blur-lg border-b border-[#18261C]/15 shadow-sm text-[#18261C]'
            : 'py-6 sm:py-8 bg-transparent text-[#18261C]'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home', 'hero');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
            id="nav-brand-logo"
          >
            <img
              src={vgbLogo}
              alt="VGB Bio Tech Lab & Nursery Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain rounded-full shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-3xl sm:text-4xl font-bold text-[#19271E] leading-none">
                VGB
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.24em] text-[#445E2F] uppercase font-extrabold mt-1">
                BIO TECH LAB & NURSERY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-12">
            {navLinks.map((link) => {
              const isActive =
                currentView === 'about'
                  ? link.name === 'About us'
                  : activeSection === link.href.substring(1) || (activeSection === 'hero' && link.name === 'Home');

              return (
                <div key={link.name} className="flex flex-col items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-base sm:text-[17px] font-bold tracking-wide transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#445E2F]'
                        : 'text-[#2C3E32] hover:text-[#445E2F]'
                    }`}
                  >
                    {link.name}
                  </a>
                  {isActive ? (
                    <div className="w-6 h-[3px] bg-[#445E2F] rounded-full mt-1.5" />
                  ) : (
                    <div className="w-6 h-[3px] bg-transparent mt-1.5" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Quick Action Button with GST Number below */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center gap-2.5 px-8 py-3.5 bg-[#445E2F] hover:bg-[#364C24] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              id="nav-get-plantlets-btn"
            >
              <span>GET PLANTLETS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#445E2F] pr-3">
              GSTIN: <span className="text-[#19271E] font-extrabold">{COMPANY_INFO.gstin}</span>
            </span>
          </div>

          {/* Mobile Quick Action & Hamburger */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-end">
              <button
                onClick={onOpenEnquiry}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm cursor-pointer"
              >
                GET PLANTLETS
              </button>
              <span className="text-[9px] font-mono font-bold text-[#445E2F] mt-0.5">
                GST: <span className="text-[#19271E] font-bold">{COMPANY_INFO.gstin}</span>
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-[#EEEDE9] border border-[#0B201A]/10 text-[#0B201A] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F3]/98 backdrop-blur-xl lg:hidden flex flex-col pt-28 pb-8 px-6 overflow-y-auto animate-in slide-in-from-top-6 duration-200 text-[#0B201A]">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="py-4 px-5 rounded-2xl text-lg font-bold tracking-wider text-[#0B201A] hover:bg-[#EEEDE9] transition-colors border-b border-[#0B201A]/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-4 pt-4 border-t border-[#0B201A]/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-4 px-6 rounded-full bg-[#445E2F] hover:bg-[#364C24] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <span>GET PLANTLETS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs font-mono font-bold text-[#445E2F]">
              GSTIN: <span className="text-[#19271E] font-extrabold">{COMPANY_INFO.gstin}</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#445E2F]"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
