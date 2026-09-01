import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  bgGradient: string;
  linkTo: string;
  linkText: string;
}

export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'gram-swaraj',
    badge: 'Gram Swaraj • 73rd Amendment',
    title: "Gram Swaraj & People's Governance",
    subtitle: 'Strengthening decentralized governance, Gram Sabha institutions, and community-led local decision making not on paper, but at the village level.',
    imageUrl: '/dandi-march-bg.jpeg',
    bgGradient: 'from-forest-950/90 via-forest-900/80 to-forest-950/90',
    linkTo: '/kranti/decentralized-governance',
    linkText: 'Explore Governance Guidelines',
  },
  {
    id: 'village-directory',
    badge: 'Rural Database • Census & Household Data',
    title: 'Official Village Directory & Supporter Database',
    subtitle: 'Comprehensive house-wise census data, MGNREGA job card tracking, and participatory community profiles for demonstration villages.',
    imageUrl: '/site-bg.jpg',
    bgGradient: 'from-forest-900/90 via-saffron-950/80 to-forest-950/90',
    linkTo: '/village-directory',
    linkText: 'View Village Directory',
  },
  {
    id: 'kranti-roadmap',
    badge: 'Project KRANTI • 7-Phase Action Matrix',
    title: 'Key to Reform & Adopt Noble Treatment Initiatives',
    subtitle: 'A comprehensive 7-phase action roadmap demonstrating participatory development, local resource management, and model village creation.',
    imageUrl: '/dandi-march-bg.jpeg',
    bgGradient: 'from-forest-950/85 via-forest-900/85 to-saffron-950/80',
    linkTo: '/kranti',
    linkText: 'Explore KRANTI Blueprint',
  },
  {
    id: 'rural-philosophy',
    badge: 'Core Philosophy • Service & Humanity',
    title: 'Humanity Before Division • Path of Selfless Service',
    subtitle: 'Every person is born first as a human being. AIRD unites communities through ethical leadership, participatory action, and spiritual wisdom.',
    imageUrl: '/site-bg.jpg',
    bgGradient: 'from-saffron-950/90 via-forest-950/85 to-forest-900/90',
    linkTo: '/philosophy',
    linkText: 'Read Full Philosophy',
  },
];

export function FeatureBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  const slide = BANNER_SLIDES[current];

  return (
    <div className="bg-white border border-forest-900 p-1.5 sm:p-2 w-full min-w-0 overflow-hidden box-border">
      {/* Official Government Header Bar */}
      <div className="govt-header-bar mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-saffron-300" />
          <span>Key Initiatives &amp; Feature Highlights</span>
        </span>
        <span className="text-[9px] text-saffron-300 font-normal">
          AIRD Portal &bull; Slide {current + 1} of {total}
        </span>
      </div>

      {/* Banner Slider Container */}
      <div
        className="relative overflow-hidden border border-forest-800 rounded-sm min-h-[170px] sm:min-h-[190px] md:min-h-[210px] flex items-center justify-between text-white select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-105"
          style={{ backgroundImage: `url(${slide.imageUrl || '/dandi-march-bg.jpeg'})` }}
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div className={cn('absolute inset-0 bg-gradient-to-r transition-all duration-700', slide.bgGradient)} />

        {/* Content Box */}
        <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-6 max-w-3xl flex-1">
          {/* Badge */}
          <div className="inline-block bg-saffron-500/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm mb-1.5 shadow-sm border border-saffron-300/40">
            {slide.badge}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wide leading-tight drop-shadow-md text-white">
            {slide.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1.5 text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl drop-shadow line-clamp-2 sm:line-clamp-3 font-normal">
            {slide.subtitle}
          </p>

          {/* Action Link Button */}
          <div className="mt-3 sm:mt-4">
            <Link
              to={slide.linkTo}
              className="inline-flex items-center gap-1.5 bg-saffron-600 hover:bg-saffron-700 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-sm border border-saffron-400 shadow-md transition-all group"
            >
              <span>{slide.linkText}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors border border-white/20 shadow"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors border border-white/20 shadow"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/10">
          {BANNER_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(idx)}
              className={cn(
                'h-1.5 rounded-full transition-all cursor-pointer',
                idx === current
                  ? 'w-5 bg-saffron-400 shadow'
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}