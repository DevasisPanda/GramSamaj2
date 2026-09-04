import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SubNavPills } from '@/components/shared/SubNavPills';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Calendar, Video as VideoIcon, Search, LayoutGrid, TableProperties } from 'lucide-react';
import { MODEL_VILLAGE_SUB_NAV } from '@/lib/subNavTree';
import { useVideos } from '@/hooks/useApi';
import { formatDate } from '@/lib/utils';
import { VideoCarousel } from './sections/VideoCarousel';

export default function VideosPage() {
  const { data: videos = [], isLoading } = useVideos();
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<any | null>(null);

  const filteredVideos = videos.filter(
    (v: any) =>
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.description && v.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      v.date.includes(searchQuery)
  );

  return (
    <>
      <PageHero
        title="Video Directory"
        subtitle="Documentary presentations, field recordings, and media coverage of AIRD's rural development and Gram Swaraj initiatives."
        gradient="forest"
      />
      <Breadcrumb items={[{ label: 'Model village', to: '/village-directory' }, { label: 'Video directory' }]} />

      <div className="container-px max-w-6xl mx-auto pt-8 space-y-6">
        <SubNavPills items={MODEL_VILLAGE_SUB_NAV} />

        {/* View mode toggle & search bar */}
        <div className="card-surface p-4 rounded-xl border border-saffron-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="text-xs h-8 px-3 rounded-lg"
            >
              <LayoutGrid className="h-3.5 w-3.5 mr-1.5" /> Video Showcase
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="text-xs h-8 px-3 rounded-lg"
            >
              <TableProperties className="h-3.5 w-3.5 mr-1.5" /> Video Directory Register (Vedios.docx)
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/40" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos or activities..."
              className="pl-8 text-xs h-8 w-full sm:w-64"
            />
          </div>
        </div>

        {/* View 1: Grid Carousel */}
        {viewMode === 'grid' && (
          <VideoCarousel />
        )}

        {/* View 2: Tabular Register (Date | Activity | Video) */}
        {viewMode === 'table' && (
          <div className="card-surface bg-white p-4 sm:p-6 rounded-2xl border border-saffron-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-saffron-100 pb-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-saffron-100 text-saffron-800 mb-1">
                  Official Structure • Vedios.docx
                </div>
                <h3 className="font-bold text-lg text-ink flex items-center gap-2">
                  <VideoIcon className="h-5 w-5 text-saffron-600" /> Chronological Video Register
                </h3>
                <p className="text-xs text-ink/60">
                  Schema: Date | Activity | Video record link & metadata
                </p>
              </div>
              <Badge variant="outline" className="text-xs bg-saffron-50 text-saffron-800 border-saffron-200 self-start sm:self-auto">
                {filteredVideos.length} Video Records Logged
              </Badge>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[11px] font-bold uppercase text-ink/70 border-b border-slate-200">
                    <th className="py-2.5 px-3 w-12 text-center">#</th>
                    <th className="py-2.5 px-3 w-32">Date</th>
                    <th className="py-2.5 px-3">Activity</th>
                    <th className="py-2.5 px-3">Video Title & Description</th>
                    <th className="py-2.5 px-3 w-28 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-ink/80">
                  {filteredVideos.map((video: any, idx: number) => (
                    <tr key={video.id} className="hover:bg-saffron-50/40 transition-colors">
                      <td className="py-3 px-3 text-center font-semibold text-ink/40">{idx + 1}</td>
                      <td className="py-3 px-3 font-medium text-slate-700 whitespace-nowrap">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-saffron-600" />
                          {formatDate(video.date)}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-ink">
                        {video.title}
                      </td>
                      <td className="py-3 px-3 text-ink/70">
                        <p className="line-clamp-2">{video.description || 'Field documentary documentation'}</p>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setActiveVideo(video)}
                          className="text-[11px] h-7 px-2.5 border-saffron-300 hover:bg-saffron-50 text-saffron-900"
                        >
                          <Play className="h-3 w-3 mr-1 fill-current" /> Watch
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {filteredVideos.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-xs text-ink/40">
                        {isLoading ? 'Loading video directory...' : 'No video records matched your search.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal Video Player */}
      <Dialog open={!!activeVideo} onOpenChange={(o) => !o && setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
          {activeVideo && (
            <>
              {activeVideo.src?.includes('youtube') || activeVideo.src?.includes('youtu.be') ? (
                <iframe
                  src={activeVideo.src.replace('watch?v=', 'embed/')}
                  title={activeVideo.title}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.src}
                  poster={activeVideo.poster}
                  controls
                  autoPlay
                  className="w-full aspect-video bg-black"
                />
              )}
              <div className="p-5 bg-white text-left">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-ink">{activeVideo.title}</h3>
                  <span className="text-xs text-ink/50">{formatDate(activeVideo.date)}</span>
                </div>
                {activeVideo.description && (
                  <p className="text-xs text-ink/70 mt-1">{activeVideo.description}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
