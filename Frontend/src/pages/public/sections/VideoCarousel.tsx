import { useState } from 'react';
import { Play, Calendar } from 'lucide-react';
import { useVideos } from '@/hooks/useApi';
import { formatDate } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

/**
 * Video Carousel — custom responsive grid player with a modal player.
 * Sourced from backend (Cloudinary/S3); mock data in dev.
 */
export function VideoCarousel() {
  const { data: videos = [], isLoading } = useVideos();
  const [active, setActive] = useState<string | null>(null);

  const current = videos.find((v) => v.id === active) ?? null;

  return (
    <section className="section-py bg-gradient-to-b from-saffron-50/40 to-white">
      <div className="container-px">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-saffron">From the Field</h2>
            <p className="text-ink/60 mt-1">Stories of Gram Swaraj in action, updated monthly.</p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-2xl bg-saffron-100/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActive(video.id)}
                className="group relative aspect-video overflow-hidden rounded-2xl border border-saffron-100 bg-black text-left shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-saffron-600 shadow-lg group-hover:scale-110 group-hover:bg-saffron-500 group-hover:text-white transition-all">
                    <Play className="h-5 w-5 ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-sm font-semibold leading-tight">{video.title}</h3>
                  <p className="text-[11px] text-white/70 flex items-center gap-1 mt-1">
                    <Calendar className="h-3 w-3" /> {formatDate(video.date)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal player */}
      <Dialog open={!!current} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
          {current && (
            <>
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                className="w-full aspect-video bg-black"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-ink">{current.title}</h3>
                <p className="text-sm text-ink/60 mt-1">{current.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
