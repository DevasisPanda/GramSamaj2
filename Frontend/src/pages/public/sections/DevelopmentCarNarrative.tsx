import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Car } from 'lucide-react';
import { DEV_CAR_HOME } from '@/data/homepage';
import { cn } from '@/lib/utils';

const SLIDES: { title: string; paras: string[] }[] = [
  { title: 'Body and Soul', paras: [DEV_CAR_HOME.intro[0], DEV_CAR_HOME.intro[1]] },
  { title: 'A Fixed Departure', paras: [DEV_CAR_HOME.intro[2], DEV_CAR_HOME.more[0]] },
  { title: 'The Greatest Blessing', paras: [DEV_CAR_HOME.more[1]] },
  { title: 'Thoughts Shape the Journey', paras: [DEV_CAR_HOME.more[2], DEV_CAR_HOME.more[3]] },
  { title: 'The Return Journey', paras: [DEV_CAR_HOME.more[4]] },
  { title: 'Earn Blessings, Not Curses', paras: [DEV_CAR_HOME.more[5], DEV_CAR_HOME.more[6]] },
];

/**
 * Full Development Car narrative ("Development Car.docx" / Contents for HP
 * Final) presented as a slider — one theme per slide — per client decision D5.
 */
export function DevelopmentCarNarrative() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index]);

  const slide = SLIDES[index];

  return (
    <div className="card-surface overflow-hidden p-0">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-forest-700 to-forest-900 px-5 py-4">
        <h3 className="flex items-center gap-2 font-bold text-white">
          <Car className="h-5 w-5 text-saffron-400" /> The Development Car
        </h3>
        <span className="text-xs font-medium text-white/60">
          {index + 1} / {SLIDES.length}
        </span>
      </div>

      {/* Slide body */}
      <div className="relative min-h-[16rem] p-6 sm:p-8">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: 40 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * dir }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-saffron-600">
              {slide.title}
            </p>
            {slide.paras.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-ink/80">
                {p}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between border-t border-saffron-100 px-5 py-3">
        <button
          onClick={() => go(index - 1)}
          className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold text-saffron-700 transition-colors hover:bg-saffron-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-saffron-500' : 'w-2 bg-saffron-200 hover:bg-saffron-300',
              )}
            />
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold text-saffron-700 transition-colors hover:bg-saffron-50"
          aria-label="Next slide"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
