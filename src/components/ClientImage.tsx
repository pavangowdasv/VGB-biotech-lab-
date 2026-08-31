import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ClientImageProps {
  src?: string;
  alt: string;
  assetName?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'wide' | 'tall' | 'auto';
  organicMask?: boolean;
  objectPosition?: string;
  priority?: boolean;
  theme?: 'light' | 'dark';
}

export const ClientImage: React.FC<ClientImageProps> = ({
  src,
  alt,
  assetName,
  className = '',
  aspectRatio = 'auto',
  organicMask = false,
  objectPosition = 'center',
  theme = 'light',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[2/3]',
    auto: '',
  }[aspectRatio];

  const maskStyle = organicMask
    ? {
        borderRadius: '32px 120px 48px 100px',
      }
    : {};

  const showPlaceholder = !src || hasError;

  return (
    <div
      style={maskStyle}
      className={`relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#132B22] border border-[#2E5A3E]/40'
          : 'bg-[#EAE6DF] border border-[#19271E]/10'
      } transition-all group ${aspectRatioClasses} ${className}`}
    >
      {/* Real image if provided and valid */}
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ objectPosition }}
          loading="lazy"
        />
      )}

      {/* Editorial Client Image Placeholder */}
      {showPlaceholder && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#152F24] via-[#0E2319] to-[#0A1A12] text-[#FDFBF7]'
              : 'bg-gradient-to-br from-[#F5F2EC] via-[#EFEBE4] to-[#E3DED5] text-[#19271E]'
          }`}
        >
          {/* Subtle botanical line texture in background */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              theme === 'dark'
                ? 'opacity-[0.06] bg-[radial-gradient(#A3B18A_1px,transparent_1px)]'
                : 'opacity-[0.04] bg-[radial-gradient(#19271E_1px,transparent_1px)]'
            } [background-size:16px_16px]`}
          />

          <div className="relative z-10 flex flex-col items-center max-w-xs">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform duration-300 ${
                theme === 'dark'
                  ? 'bg-[#1C3B2E] border border-[#A3B18A]/20 text-[#A3B18A]'
                  : 'bg-[#FAF8F3] border border-[#19271E]/10 text-[#445E2F]/70'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
            </div>

            <span
              className={`text-[10px] font-sans font-bold tracking-[0.22em] uppercase mb-1 ${
                theme === 'dark' ? 'text-[#A3B18A]' : 'text-[#445E2F]'
              }`}
            >
              CLIENT PHOTOGRAPHY
            </span>

            <span
              className={`text-xs font-serif italic mb-2 font-medium ${
                theme === 'dark' ? 'text-[#D5DFD8]' : 'text-[#19271E]/80'
              }`}
            >
              {alt}
            </span>

            {assetName && (
              <span
                className={`inline-block font-mono text-[9.5px] px-2.5 py-1 rounded tracking-wider ${
                  theme === 'dark'
                    ? 'bg-[#A3B18A]/10 border border-[#A3B18A]/20 text-[#A3B18A]'
                    : 'bg-[#19271E]/6 border border-[#19271E]/10 text-[#19271E]/60'
                }`}
              >
                asset: {assetName}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
