import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/dandi-march-bg.jpeg',
    title: 'Gram Swaraj & Rural Governance Mission',
    subtitle: 'Empowering Gram Sabhas under the 73rd Constitutional Amendment Act, 1992.',
    badge: 'Flagship Program',
  },
  {
    image: '/aird-logo.png',
    title: 'Appropriate Institute of Rural Development (AIRD)',
    subtitle: 'Registered Public Charitable Trust (PCTA 1882) | NGO Darpan: UP/2020/0268484',
    badge: 'Trust Overview',
  },
  {
    image: '/dandi-march-bg.jpeg',
    title: 'Project KRANTI — 7-Phase Strategic Roadmap',
    subtitle: 'Key to Reform and Adopt Noble Treatment Initiatives for Model Villages.',
    badge: 'Action Blueprint',
  },
];

export function HomeHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="bg-white border border-forest-900 mb-2 relative overflow-hidden">
      <div className="govt-header-bar">
        <span>AIRD Key Initiatives &amp; Portal Banners</span>
        <span className="text-[9px] text-saffron-300 font-normal">
          {current + 1} / {SLIDES.length}
        </span>
      </div>

      {/* Main Slide Viewport */}
      <div className="relative h-44 sm:h-52 md:h-60 bg-forest-950 flex items-center justify-center overflow-hidden">
        <img
          src={SLIDES[current].image}
          alt={SLIDES[current].title}
          className="w-full h-full object-cover opacity-45 transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent p-3 flex flex-col justify-end">
          <span className="bg-saffron-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 w-fit mb-1">
            {SLIDES[current].badge}
          </span>
          <h2 className="text-sm sm:text-base font-bold text-white leading-tight">
            {SLIDES[current].title}
          </h2>
          <p className="text-[11px] text-cream/90 mt-0.5 leading-snug max-w-xl">
            {SLIDES[current].subtitle}
          </p>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-forest-900/80 text-white p-1 hover:bg-saffron-600 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-forest-900/80 text-white p-1 hover:bg-saffron-600 transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="bg-forest-900 p-1 flex justify-center items-center gap-1.5 border-t border-forest-800">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 transition-all ${
              idx === current ? 'bg-saffron-400 w-5' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
