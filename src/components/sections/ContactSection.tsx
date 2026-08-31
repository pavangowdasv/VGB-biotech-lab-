import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sprout,
  ArrowRight,
  ExternalLink,
  Instagram,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/vgbData';

interface ContactSectionProps {
  onOpenEnquiryModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquiryModal }) => {
  const whatsappUrl = `https://wa.me/919591050890?text=${encodeURIComponent(
    'Hello VGB Bio-Tech Nursery, I would like to enquire about tissue-cultured banana plants.'
  )}`;
  const instagramUrl = COMPANY_INFO.instagram || 'https://www.instagram.com/vgb_biotech?igsi=ajY5NXg5bmc0c2Fr';
  const googleMapsUrl = 'https://maps.google.com/?q=VM3H%2BWH+Gundlupete,+Karnataka';
  const googleMapsEmbedUrl = 'https://maps.google.com/maps?q=VM3H%2BWH,+Gundlupete,+Karnataka&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#081711] text-[#FDFBF7] overflow-hidden">
      {/* Subtle Grain & Ambient Lighting */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-40" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#2E5A3E]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full bg-[#A3B18A]/15 blur-[130px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-14">
        
        {/* Top Headline */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132B22] border border-[#A3B18A]/25 text-[#A3B18A] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-3">
            <Sprout className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>CONNECT WITH VGB NURSERY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDFBF7] leading-[1.08]">
            LET'S GROW <br />
            <span className="font-serif italic font-normal text-[#A3B18A]">WHAT'S NEXT.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#BAC5BD] mt-4 leading-relaxed max-w-2xl font-normal">
            Looking for reliable tissue-cultured banana planting material? Connect directly through WhatsApp, Instagram, Email, or visit our nursery in Gundlupete, Karnataka.
          </p>
        </div>

        {/* 01: 3 Direct Social & Quick Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-3xl bg-gradient-to-br from-[#103022] to-[#164430] border border-[#25D366]/40 hover:border-[#25D366] transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  {/* Official WhatsApp SVG Icon */}
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.188 8.188 0 01-5.82 2.41c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.188 8.188 0 01-1.25-4.43c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#25D366] uppercase px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30">
                  FAST RESPONSE
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">WhatsApp Chat</h3>
                <p className="text-xs text-[#BAC5BD] mt-1.5 leading-relaxed">
                  Chat directly with our nursery specialists for live batch availability, photos, and sapling quotations.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between text-xs font-mono font-bold text-[#25D366] border-t border-[#25D366]/20 mt-6">
              <span>+91 95910 50890</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-3xl bg-gradient-to-br from-[#241320] to-[#36152B] border border-[#E1306C]/40 hover:border-[#E1306C] transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C]">
                  <Instagram className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#E1306C] uppercase px-3 py-1 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/30">
                  FOLLOW UPDATES
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Instagram</h3>
                <p className="text-xs text-[#BAC5BD] mt-1.5 leading-relaxed">
                  Watch our lab culture batches, hardening mist shade-houses, and farmer harvest reels.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between text-xs font-mono font-bold text-[#E1306C] border-t border-[#E1306C]/20 mt-6">
              <span>{COMPANY_INFO.instagramHandle || '@vgb_biotech'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-7 rounded-3xl bg-gradient-to-br from-[#10241B] to-[#153427] border border-[#A3B18A]/40 hover:border-[#A3B18A] transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#A3B18A]/20 border border-[#A3B18A]/40 flex items-center justify-center text-[#A3B18A]">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#A3B18A] uppercase px-3 py-1 rounded-full bg-[#A3B18A]/10 border border-[#A3B18A]/30">
                  OFFICIAL INQUIRY
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Official Email</h3>
                <p className="text-xs text-[#BAC5BD] mt-1.5 leading-relaxed">
                  Send corporate supply inquiries, institutional tenders, and commercial plantation proposals.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between text-xs font-mono font-bold text-[#A3B18A] border-t border-[#A3B18A]/20 mt-6">
              <span>{COMPANY_INFO.email}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

        </div>

        {/* 02: Full-Width Full-Color Google Map & Business Verification Section */}
        <div className="rounded-3xl bg-[#132B22] border border-[#2E5A3E]/40 overflow-hidden shadow-2xl">
          
          {/* Full-Color Working Google Map Iframe */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full bg-[#E5E3DF]">
            <iframe
              title="VGB Bio-Tech Nursery Location Map - Gundlupete"
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Map Floating Location Pin Badge */}
            <div className="absolute top-5 left-5 bg-[#081711]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#A3B18A]/40 text-xs font-mono text-white flex items-center gap-3 shadow-2xl pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[#A3B18A] animate-ping" />
              <div>
                <span className="font-bold block text-sm">{COMPANY_INFO.name}</span>
                <span className="text-[#A3B18A] text-[11px] font-mono font-bold">Plus Code: VM3H+WH Gundlupete, Karnataka</span>
              </div>
            </div>

            {/* Open in Google Maps External Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 bg-[#2E5A3E] hover:bg-[#3D7453] text-white px-6 py-3.5 rounded-2xl text-xs font-bold font-mono tracking-wider flex items-center gap-2 shadow-2xl transition-all hover:scale-105"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Location & Facility Information Strip */}
          <div className="p-8 sm:p-10 bg-[#132B22] border-t border-[#2E5A3E]/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* Complex Title & GSTIN */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#A3B18A] tracking-widest uppercase block font-bold">
                  PRIMARY NURSERY COMPLEX
                </span>
                <h3 className="text-2xl font-bold text-white font-serif">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-[#BAC5BD] font-mono">
                  GSTIN: <span className="text-white font-bold">{COMPANY_INFO.gstin}</span>
                </p>
              </div>

              {/* Physical Address & Plus Code */}
              <div className="space-y-1.5 text-xs text-[#D5DFD8]">
                <div className="flex items-center gap-2 text-[#A3B18A] font-bold font-mono uppercase text-[11px] mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address & Plus Code</span>
                </div>
                <p className="leading-relaxed">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.town},<br />
                  {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}
                </p>
                <span className="inline-block font-mono text-[11px] text-[#A3B18A] font-bold">
                  Plus Code: VM3H+WH Gundlupete
                </span>
              </div>

              {/* Operating Hours & Dispatch Notice */}
              <div className="space-y-1.5 text-xs text-[#D5DFD8]">
                <div className="flex items-center gap-2 text-[#A3B18A] font-bold font-mono uppercase text-[11px] mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <p className="leading-relaxed">
                  {COMPANY_INFO.hours}
                </p>
                <span className="inline-block mt-1 text-[11px] font-mono text-[#A3B18A] bg-[#1E3A2F] px-2.5 py-1 rounded-full">
                  ✓ Open for Direct Farmer Visits & Batch Inspection
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


