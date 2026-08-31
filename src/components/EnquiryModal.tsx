import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Sprout, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BANANA_VARIETIES, COMPANY_INFO } from '../data/vgbData';
import { EnquiryFormState } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVariety?: string;
  initialCount?: number | string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialVariety = '',
  initialCount = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: '',
    phone: '',
    email: '',
    location: '',
    variety: initialVariety || BANANA_VARIETIES[0].name,
    plantCount: initialCount ? String(initialCount) : '1000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialVariety) {
      setFormData((prev) => ({ ...prev, variety: initialVariety }));
    }
    if (initialCount) {
      setFormData((prev) => ({ ...prev, plantCount: String(initialCount) }));
    }
  }, [initialVariety, initialCount]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setErrorMessage('Please provide your name, phone number, and plantation location.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit contact number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate verified booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#78D68D', '#2A7E4F', '#D4EDD9'],
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0B201A] border border-[#2E5A3E]/50 p-6 sm:p-8 shadow-2xl my-6 text-[#FDFBF7]">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#132B22] text-[#BAC5BD] hover:text-white hover:bg-[#1E3A2F] transition-colors cursor-pointer"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2E5A3E] text-[#A3B18A] border border-[#A3B18A]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Enquiry Received Successfully
            </h3>
            <p className="text-sm text-[#BAC5BD] max-w-md mx-auto leading-relaxed font-normal">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. Our agricultural biotechnology team will review your requirement for{' '}
              <span className="text-[#A3B18A] font-semibold">{formData.plantCount} {formData.variety} saplings</span> and call you back on{' '}
              <span className="text-white font-mono">{formData.phone}</span> with batch availability and delivery schedules.
            </p>
            <div className="p-4 rounded-2xl bg-[#132B22] border border-[#2E5A3E]/40 text-xs text-[#BAC5BD] text-left space-y-1 font-normal">
              <div className="font-semibold text-white">VGB Direct Helpline:</div>
              <div>Phone: {COMPANY_INFO.phone}</div>
              <div>Facility: {COMPANY_INFO.address.formatted}</div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="py-3 px-8 rounded-full bg-[#2E5A3E] hover:bg-[#3D7453] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3B18A] uppercase tracking-[0.2em] mb-1 font-bold">
              <Sprout className="w-4 h-4 text-[#A3B18A]" />
              <span>DIRECT NURSERY ALLOTMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Request Tissue-Cultured Plantlets
            </h3>
            <p className="text-xs text-[#BAC5BD] mt-1 mb-6 font-normal">
              Reserve certified disease-free, true-to-type banana saplings direct from our Gundlupete biotechnology nursery.
            </p>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Farmer / Buyer Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white placeholder-[#66776E] text-xs focus:outline-none focus:border-[#A3B18A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white placeholder-[#66776E] text-xs focus:outline-none focus:border-[#A3B18A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. ramesh@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white placeholder-[#66776E] text-xs focus:outline-none focus:border-[#A3B18A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Farm Location / District *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gundlupete / Mysuru / Mandya"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white placeholder-[#66776E] text-xs focus:outline-none focus:border-[#A3B18A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Cultivar Variety
                  </label>
                  <select
                    value={formData.variety}
                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white text-xs focus:outline-none focus:border-[#A3B18A]"
                  >
                    {BANANA_VARIETIES.map((v) => (
                      <option key={v.id} value={v.name} className="bg-[#0B201A] text-white">
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                    Plantlet Count (Approx)
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="50"
                    value={formData.plantCount}
                    onChange={(e) => setFormData({ ...formData, plantCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white text-xs focus:outline-none focus:border-[#A3B18A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A3B18A] uppercase mb-1.5 font-bold">
                  Plantation Notes / Target Planting Date
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention soil type, drip setup or preferred planting month..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#132B22] border border-[#2E5A3E]/40 text-white placeholder-[#66776E] text-xs focus:outline-none focus:border-[#A3B18A]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#2E5A3E] hover:bg-[#3D7453] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer disabled:opacity-50"
                id="submit-enquiry-form-btn"
              >
                {isSubmitting ? (
                  <span>Transmitting Enquiry...</span>
                ) : (
                  <>
                    <span>Send Plantlet Reservation Enquiry</span>
                    <Send className="w-4 h-4 text-[#A3B18A]" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
