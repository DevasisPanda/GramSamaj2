import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export interface BannerItem {
  id: string;
  imageUrl: string;
  alt: string;
  linkTo: string;
  linkLabel?: string;
}

export const BANNER_ITEM: BannerItem = {
  id: 'kranti-banner',
  imageUrl: '/kranti-banner.jpg',
  alt: 'KRANTI for Gram Swaraj - 15th August 2026, village Manpur Lala, Bakshi ka Talab, Lucknow',
  linkTo: '/kranti',
  linkLabel: 'Explore KRANTI Blueprint',
};

export function FeatureBannerSlider() {
  return (
    <div className="bg-white border border-forest-900 p-2 sm:p-3 w-full min-w-0 overflow-hidden box-border shadow-xs space-y-3">
      {/* Official Poster Banner for KRANTI */}
      <div className="govt-header-bar flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-saffron-300" />
          <span>Participatory Action Project: KRANTI</span>
        </span>
        <span className="text-[9px] text-saffron-300 font-normal">
          Gram Swaraj Live Demonstration &bull; Village Manpur Lala
        </span>
      </div>

      {/* Banner & National Initiative Logos Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-2.5 sm:gap-3">
        {/* Main Poster Banner */}
        <div className="relative group overflow-hidden border border-forest-800 rounded-xs bg-stone-100 flex-1 w-full flex flex-col items-center justify-center select-none min-w-0">
          <Link
            to={BANNER_ITEM.linkTo}
            className="block w-full text-center relative focus:outline-hidden focus:ring-2 focus:ring-saffron-500 cursor-pointer"
            aria-label={BANNER_ITEM.alt}
          >
            <img
              src={BANNER_ITEM.imageUrl}
              alt={BANNER_ITEM.alt}
              className="w-full h-auto max-h-[560px] object-contain mx-auto block transition-transform duration-300 group-hover:scale-[1.004]"
            />

            {BANNER_ITEM.linkLabel && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-end p-2 sm:p-3 pointer-events-none">
                <span className="bg-forest-900/90 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-xs shadow-md border border-saffron-400 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span>{BANNER_ITEM.linkLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-saffron-400" />
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* National Initiative Logos — Right on Desktop (lg+), Bottom on Mobile/Tablet */}
        <aside
          aria-label="National Initiatives"
          className="flex flex-row lg:flex-col items-center justify-center gap-3 sm:gap-4 bg-stone-50 border border-forest-800/50 rounded-xs p-2.5 sm:p-3 w-full lg:w-44 xl:w-52 shrink-0 shadow-xs"
        >
          <div className="text-[9px] sm:text-[10px] font-bold text-forest-900 uppercase tracking-wider text-center hidden lg:block border-b border-forest-200/80 pb-1.5 w-full">
            National Initiatives
          </div>

          {/* Bharat Nirman Logo */}
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-white rounded border border-gray-200 shadow-2xs w-full max-w-[150px] sm:max-w-[180px] lg:max-w-none transition-transform hover:scale-[1.02]">
            <img
              src="/bharat-nirman.jpg"
              alt="भारत निर्माण"
              className="h-9 sm:h-11 lg:h-13 w-auto max-w-full object-contain"
              title="भारत निर्माण - चलें नयी आज़ादी की ओर"
            />
            <span className="text-[8px] sm:text-[9px] font-bold text-forest-900 mt-1 hidden sm:block text-center leading-tight">
              भारत निर्माण
            </span>
          </div>

          <div className="hidden lg:block w-full h-px bg-saffron-200" />
          <div className="lg:hidden h-8 w-px bg-saffron-200 shrink-0" />

          {/* Digital India Logo */}
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-white rounded border border-gray-200 shadow-2xs w-full max-w-[150px] sm:max-w-[180px] lg:max-w-none transition-transform hover:scale-[1.02]">
            <img
              src="/digital-india.jpg"
              alt="Digital India"
              className="h-8 sm:h-10 lg:h-12 w-auto max-w-full object-contain"
              title="Digital India - Power To Empower"
            />
            <span className="text-[8px] sm:text-[9px] font-bold text-forest-900 mt-1 hidden sm:block text-center leading-tight">
              Digital India
            </span>
          </div>
        </aside>
      </div>

      {/* Quick Access Bar */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-200 text-[10px] sm:text-xs">
        <span className="text-gray-600 font-medium hidden sm:inline">
          Appropriate Institute of Rural Development &bull; Lucknow
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <Link to="/kranti" className="govt-link font-bold">
            &raquo; KRANTI Blueprint
          </Link>
          <Link to="/activities" className="govt-link font-bold text-forest-800">
            &raquo; Activities Calendar
          </Link>
          <Link to="/kranti/document" className="govt-link font-bold text-saffron-800">
            &raquo; Verbatim Document
          </Link>
          <Link to="/kranti/hindi" className="govt-link font-bold text-forest-900">
            &raquo; हिन्दी संस्करण
          </Link>
        </div>
      </div>
    </div>
  );
}