import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ImageIcon, Play, ExternalLink, Calendar, LayoutGrid, TableProperties, Camera, Eye } from 'lucide-react';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { MODEL_VILLAGE_SUB_NAV } from '@/lib/subNavTree';
import { formatDate, cn } from '@/lib/utils';

const CATEGORIES = [
  'All',
  'Gram Sabha',
  'Field Work',
  'Tree Plantation',
  'Events',
  'Videos',
];

export default function Gallery() {
  const { data: galleryItems = [], isLoading } = trpc.gallery.getPublic.useQuery(undefined, {
    staleTime: 30000,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMedia, setActiveMedia] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filtered = galleryItems.filter((item: any) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Videos') return item.mediaType === 'video';
    return item.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <>
      <PageHero
        title="Photo & Video Gallery"
        subtitle="Moments from the field — Gram Sabha meetings, community workshops, and rural development milestones."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Model village', to: '/village-directory' }, { label: 'Photo Gallery' }]} />

      <section className="container-px section-py">
        <div className="mx-auto max-w-6xl space-y-8">
          <SubNavPills items={MODEL_VILLAGE_SUB_NAV} />

          {/* View mode toggle */}
          <div className="card-surface p-3 rounded-xl border border-saffron-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="text-xs h-8 px-3 rounded-lg"
              >
                <LayoutGrid className="h-3.5 w-3.5 mr-1.5" /> Media Grid
              </Button>
              <Button
                variant={viewMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('table')}
                className="text-xs h-8 px-3 rounded-lg"
              >
                <TableProperties className="h-3.5 w-3.5 mr-1.5" /> Photo Register Directory (Photos.docx)
              </Button>
            </div>

            <div className="text-xs text-ink/60 font-medium">
              Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
            </div>
          </div>

          {viewMode === 'grid' && (
            <>
              {/* Filter tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'rounded-full px-4 text-xs font-semibold transition-all',
                      selectedCategory === cat
                        ? 'bg-forest-700 text-white hover:bg-forest-800'
                        : 'border-saffron-200 text-ink/70 hover:border-saffron-400 hover:bg-saffron-50'
                    )}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl bg-saffron-50 animate-pulse border border-saffron-100" />
              ))}
            </div>
          )}

          {/* Gallery Items Grid */}
          {!isLoading && filtered.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item: any) => {
                const isVideo = item.mediaType === 'video';
                return (
                  <article
                    key={item.id}
                    onClick={() => setActiveMedia(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-saffron-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-saffron-50 text-saffron-300">
                          <ImageIcon className="h-12 w-12" />
                        </div>
                      )}

                      {/* Video Play Overlay */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] transition-colors group-hover:bg-black/20">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 text-white shadow-lg transition-transform group-hover:scale-110">
                            <Play className="h-6 w-6 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Category Badge */}
                      {item.category && (
                        <Badge className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white border-0 text-[10px] uppercase font-bold">
                          {item.category}
                        </Badge>
                      )}

                      <Badge
                        variant={isVideo ? 'default' : 'secondary'}
                        className="absolute top-3 right-3 text-[10px]"
                      >
                        {isVideo ? 'Video' : 'Photo'}
                      </Badge>
                    </div>

                    {/* Meta bar */}
                    <div className="p-4">
                      <h3 className="font-bold text-ink text-base line-clamp-1 group-hover:text-forest-700 transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-1 text-xs text-ink/60 line-clamp-2">{item.description}</p>
                      )}
                      <div className="mt-3 flex items-center justify-between text-[11px] text-ink/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(item.createdAt)}
                        </span>
                        <span className="font-medium text-forest-700 group-hover:underline">
                          View &rarr;
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-saffron-200 bg-saffron-50/40">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100 text-saffron-600 mb-3">
                <ImageIcon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-ink">No media items in this category yet</h3>
              <p className="mt-1 text-sm text-ink/60 max-w-md mx-auto">
                Photos and field recordings are continually being uploaded by the trust administrators.
              </p>
              {selectedCategory !== 'All' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 border-saffron-300 text-saffron-800"
                >
                  Show All Media
                </Button>
              )}
            </div>
          )}
          </>
        )}

        {/* View 2: Tabular Photo Register (Photos.docx) */}
        {viewMode === 'table' && (
          <div className="card-surface bg-white p-4 sm:p-6 rounded-2xl border border-saffron-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-saffron-100 pb-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-saffron-100 text-saffron-800 mb-1">
                  Official Structure • Photos.docx
                </div>
                <h3 className="font-bold text-lg text-ink flex items-center gap-2">
                  <Camera className="h-5 w-5 text-saffron-600" /> Chronological Photo Register
                </h3>
                <p className="text-xs text-ink/60">
                  Schema: Date | Activity | Photos record & descriptions
                </p>
              </div>
              <Badge variant="outline" className="text-xs bg-saffron-50 text-saffron-800 border-saffron-200 self-start sm:self-auto">
                {filtered.length} Records Logged
              </Badge>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[11px] font-bold uppercase text-ink/70 border-b border-slate-200">
                    <th className="py-2.5 px-3 w-12 text-center">#</th>
                    <th className="py-2.5 px-3 w-32">Date</th>
                    <th className="py-2.5 px-3">Activity</th>
                    <th className="py-2.5 px-3">Photos / Description</th>
                    <th className="py-2.5 px-3 w-28 text-center">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-ink/80">
                  {filtered.map((item: any, idx: number) => (
                    <tr key={item.id} className="hover:bg-saffron-50/40 transition-colors">
                      <td className="py-3 px-3 text-center font-semibold text-ink/40">{idx + 1}</td>
                      <td className="py-3 px-3 font-medium text-slate-700 whitespace-nowrap">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-saffron-600" />
                          {formatDate(item.createdAt)}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-ink">{item.title}</div>
                        {item.category && (
                          <Badge variant="secondary" className="text-[10px] mt-0.5">{item.category}</Badge>
                        )}
                      </td>
                      <td className="py-3 px-3 text-ink/70">
                        <p className="line-clamp-2">{item.description || 'Photographic field record'}</p>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setActiveMedia(item)}
                          className="text-[11px] h-7 px-2.5 border-saffron-300 hover:bg-saffron-50 text-saffron-900"
                        >
                          <Eye className="h-3 w-3 mr-1" /> View Photo
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-xs text-ink/40">
                        No photographic records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        </div>
      </section>

      {/* Lightbox / Video Player Modal */}
      <Dialog open={!!activeMedia} onOpenChange={(open) => !open && setActiveMedia(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 text-white border-0">
          {activeMedia && (
            <div className="flex flex-col">
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                {activeMedia.mediaType === 'video' ? (
                  activeMedia.redirectUrl?.includes('youtube') || activeMedia.redirectUrl?.includes('youtu.be') ? (
                    <iframe
                      src={activeMedia.redirectUrl.replace('watch?v=', 'embed/')}
                      title={activeMedia.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={activeMedia.imageUrl}
                      controls
                      autoPlay
                      className="max-h-full max-w-full object-contain"
                    />
                  )
                ) : (
                  <img
                    src={activeMedia.imageUrl}
                    alt={activeMedia.title}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>

              <div className="p-6 bg-slate-900 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-white">{activeMedia.title}</h2>
                    {activeMedia.category && (
                      <Badge className="bg-forest-600 text-white text-xs">{activeMedia.category}</Badge>
                    )}
                  </div>
                  {activeMedia.description && (
                    <p className="text-sm text-white/70 max-w-2xl">{activeMedia.description}</p>
                  )}
                </div>

                {activeMedia.redirectUrl && (
                  <a
                    href={activeMedia.redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-saffron-300 hover:text-saffron-200 font-semibold"
                  >
                    Watch External <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
