import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ImageIcon } from 'lucide-react';

/**
 * Gallery page — photo placeholder grid.
 * Production images will be uploaded by the admin and served via the
 * media management API. For now we show a tasteful placeholder grid.
 */
const PLACEHOLDER_COUNT = 12;

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Moments from the field — Gram Sabha meetings, community events, and rural development activities."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Photo Gallery' }]} />

      <section className="container-px section-py">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] items-center justify-center rounded-xl border border-saffron-100 bg-saffron-50/50 text-ink/30"
              >
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-xs">Photo {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink/40">
            Photos will be uploaded by the admin. Please check back soon.
          </p>
        </div>
      </section>
    </>
  );
}
