import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid, Layers,
  Download, FileText, Play, Pause, RotateCcw
} from 'lucide-react';
import { ContentPage } from '@/components/shared/ContentPage';
import { DevelopmentCarNarrative } from './sections/DevelopmentCarNarrative';
import { DevelopmentCarSlider } from './sections/DevelopmentCarSlider';
import { cn } from '@/lib/utils';
import { TEACHINGS_SUB_NAV } from '@/lib/subNavTree';

const TOTAL_SLIDES = 15;
const SLIDES = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
  number: i + 1,
  src: `/ppt-slides/slide-${i + 1}.png`,
  alt: `Development Car Presentation - Slide ${i + 1} of ${TOTAL_SLIDES}`,
}));

export function PptPresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState<'presentation' | 'grid'>('presentation');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : TOTAL_SLIDES));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Slideshow auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentSlide - 1] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentSlide]);

  // Fullscreen change listener
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  function toggleFullscreen() {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'bg-white border border-forest-900 rounded-sm shadow-md overflow-hidden box-border transition-all',
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0 bg-black flex flex-col justify-between p-4' : 'w-full mb-8'
      )}
    >
      {/* Top Header Bar */}
      <div className="govt-header-bar px-3 py-2 flex flex-wrap items-center justify-between gap-2 border-b border-forest-800">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-bold text-xs sm:text-sm uppercase tracking-wide truncate">
            Development Car &bull; Official Presentation
          </span>
          <span className="text-[10px] text-saffron-300 font-semibold bg-forest-950 px-2 py-0.5 rounded-xs border border-saffron-400/30 shrink-0">
            Slide {currentSlide} of {TOTAL_SLIDES}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
              'px-2 py-1 text-[10px] font-bold rounded-xs flex items-center gap-1 border transition-colors cursor-pointer',
              isPlaying ? 'bg-saffron-500 text-white border-saffron-300' : 'bg-forest-950 text-white/90 border-forest-700 hover:bg-forest-900'
            )}
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          <button
            onClick={() => setViewMode(viewMode === 'presentation' ? 'grid' : 'presentation')}
            className="px-2 py-1 text-[10px] font-bold bg-forest-950 text-white/90 hover:bg-forest-900 rounded-xs flex items-center gap-1 border border-forest-700 transition-colors cursor-pointer"
            title={viewMode === 'presentation' ? 'View All Slides in Grid' : 'Switch to Presentation Mode'}
          >
            {viewMode === 'presentation' ? <Grid className="h-3 w-3" /> : <Layers className="h-3 w-3" />}
            <span className="hidden sm:inline">{viewMode === 'presentation' ? 'Grid View' : 'Slide View'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="px-2 py-1 text-[10px] font-bold bg-forest-950 text-white/90 hover:bg-forest-900 rounded-xs flex items-center gap-1 border border-forest-700 transition-colors cursor-pointer"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>

          <a
            href="/development-car.pdf"
            download="Development-Car.pdf"
            className="px-2 py-1 text-[10px] font-bold bg-saffron-600 hover:bg-saffron-700 text-white rounded-xs flex items-center gap-1 border border-saffron-400 shadow-xs transition-colors"
            title="Download PDF"
          >
            <FileText className="h-3 w-3" />
            <span className="hidden md:inline">PDF</span>
          </a>

          <a
            href="/development-car.ppt"
            download="Development-Car.ppt"
            className="px-2 py-1 text-[10px] font-bold bg-forest-800 hover:bg-forest-700 text-white rounded-xs flex items-center gap-1 border border-forest-600 shadow-xs transition-colors"
            title="Download Original PowerPoint Presentation"
          >
            <Download className="h-3 w-3" />
            <span className="hidden md:inline">PPT</span>
          </a>
        </div>
      </div>

      {/* Main Slide Presentation View */}
      {viewMode === 'presentation' ? (
        <div className="flex flex-col flex-1 min-h-0 bg-stone-900">
          {/* Main Slide Display */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 min-h-[300px] sm:min-h-[460px] md:min-h-[540px] select-none">
            <img
              src={SLIDES[currentSlide - 1].src}
              alt={SLIDES[currentSlide - 1].alt}
              className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-xs shadow-2xl transition-all duration-300 border border-stone-800"
            />

            {/* Left Nav Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-xl cursor-pointer"
              aria-label="Previous Slide (Arrow Left)"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20 shadow-xl cursor-pointer"
              aria-label="Next Slide (Arrow Right)"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="bg-stone-950 border-t border-stone-800 p-2 select-none">
            <div
              ref={thumbnailsRef}
              className="flex items-center gap-2 overflow-x-auto py-1 px-1 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900"
            >
              {SLIDES.map((s) => (
                <button
                  key={s.number}
                  onClick={() => setCurrentSlide(s.number)}
                  className={cn(
                    'relative shrink-0 rounded-xs overflow-hidden border-2 transition-all cursor-pointer w-20 sm:w-24 md:w-28 aspect-video bg-stone-800',
                    currentSlide === s.number
                      ? 'border-saffron-400 ring-2 ring-saffron-400/50 scale-105 shadow-md'
                      : 'border-stone-700 opacity-60 hover:opacity-100 hover:border-stone-400'
                  )}
                  title={`Go to Slide ${s.number}`}
                >
                  <img
                    src={s.src}
                    alt={`Thumbnail ${s.number}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-0.5 right-1 bg-black/80 text-[9px] font-bold text-white px-1 rounded-xs">
                    {s.number}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Grid View — All 15 Slides */
        <div className="p-3 sm:p-5 bg-stone-100 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SLIDES.map((s) => (
              <div
                key={s.number}
                onClick={() => {
                  setCurrentSlide(s.number);
                  setViewMode('presentation');
                }}
                className={cn(
                  'group bg-white rounded-xs border p-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer',
                  currentSlide === s.number ? 'border-saffron-500 ring-2 ring-saffron-400/40' : 'border-stone-300 hover:border-forest-700'
                )}
              >
                <div className="relative aspect-video bg-stone-200 overflow-hidden rounded-xs border border-stone-200">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-200"
                    loading="lazy"
                  />
                  <span className="absolute top-1 left-1 bg-forest-900/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
                    Slide {s.number}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] font-medium text-stone-700 px-1">
                  <span>Slide {s.number} of {TOTAL_SLIDES}</span>
                  <span className="text-forest-800 font-bold group-hover:underline">Open &raquo;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      {!isFullscreen && (
        <div className="bg-stone-50 border-t border-stone-200 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-forest-900">Keyboard Shortcuts:</span>
            <span>&larr; Previous &bull; &rarr; Next &bull; Space: Advance &bull; F: Fullscreen</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide(1)}
              className="text-forest-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset to First Slide</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DevelopmentCar() {
  return (
    <ContentPage
      title="Development Car"
      subtitle="The journey of the soul — a spiritual metaphor for selfless service."
      gradient="forest"
      crumbs={[{ label: 'Teachings', to: '/teachings' }, { label: 'Development Car' }]}
      subNavItems={TEACHINGS_SUB_NAV}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Full PPT Presentation Projection */}
        <PptPresentationViewer />

        {/* Narrative & Blessings Metaphor */}
        <div className="max-w-3xl mx-auto space-y-8">
          <DevelopmentCarNarrative />
          <div>
            <h2 className="mb-4 text-xl font-bold text-saffron-800 md:text-2xl">
              Blessings strengthen the journey
            </h2>
            <p className="mb-5 leading-relaxed text-ink/70">
              Using the metaphor of the Development Car: blessings earned through kindness,
              compassion, honesty, and service strengthen and maintain the vehicle that carries
              the soul &mdash; while harmful intentions weaken it. Try it below.
            </p>
            <DevelopmentCarSlider />
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
