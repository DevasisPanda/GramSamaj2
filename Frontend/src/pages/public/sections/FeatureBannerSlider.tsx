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

      <div className="relative group overflow-hidden border border-forest-800 rounded-xs bg-stone-100 flex flex-col items-center select-none">
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