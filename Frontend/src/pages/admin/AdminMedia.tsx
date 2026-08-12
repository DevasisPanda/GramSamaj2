import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Image, Film, Upload, Trash2, Play } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface MockMedia {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
  uploadedAt: string;
}

// Seed some mock media items
const SEED_MEDIA: MockMedia[] = [
  { id: 'm1', title: 'Maitri Bhoj Gathering', url: '#', type: 'image', uploadedAt: '2026-03-15T10:00:00Z' },
  { id: 'm2', title: 'Village Survey Drive', url: '#', type: 'image', uploadedAt: '2026-04-20T10:00:00Z' },
  { id: 'm3', title: 'Tree Plantation Day', url: '#', type: 'image', uploadedAt: '2026-05-10T10:00:00Z' },
  { id: 'm4', title: 'Trust Meeting 2026', url: '#', type: 'video', uploadedAt: '2026-06-01T10:00:00Z' },
];

export default function AdminMedia() {
  const [media, setMedia] = useState<MockMedia[]>(SEED_MEDIA);
  const [tab, setTab] = useState<'images' | 'videos' | 'all'>('all');
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = tab === 'all' ? media : media.filter((m) => m.type === (tab === 'videos' ? 'video' : 'image'));

  function handleUpload() {
    // In demo mode, add a mock entry
    const newItem: MockMedia = {
      id: `m${Date.now()}`,
      title: `Upload ${media.length + 1}`,
      url: '#',
      type: tab === 'videos' ? 'video' as const : 'image' as const,
      uploadedAt: new Date().toISOString(),
    };
    setMedia((prev) => [newItem, ...prev]);
    toast.success('Media added (demo mode)');
  }

  function handleDelete(id: string) {
    setMedia((prev) => prev.filter((m) => m.id !== id));
    toast.success('Media removed');
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-saffron-800">Media Center</h1>
          <p className="text-sm text-ink/50">Manage photos and video assets</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setTab('all')} className={tab === 'all' ? 'bg-saffron-50' : ''}>
            All
          </Button>
          <Button variant="outline" onClick={() => setTab('images')} className={tab === 'images' ? 'bg-saffron-50' : ''}>
            <Image className="h-4 w-4 mr-1" /> Images
          </Button>
          <Button variant="outline" onClick={() => setTab('videos')} className={tab === 'videos' ? 'bg-saffron-50' : ''}>
            <Film className="h-4 w-4 mr-1" /> Videos
          </Button>
        </div>
      </div>

      {/* Upload area */}
      <Card
        className="border-dashed border-2 border-saffron-200 hover:border-saffron-400 transition-colors cursor-pointer"
        onClick={() => fileRef.current?.click()}
      >
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Upload className="h-8 w-8 text-saffron-400 mb-3" />
          <p className="text-sm font-medium text-ink/60">Click to upload or drag & drop</p>
          <p className="text-xs text-ink/30 mt-1">Images (PNG, JPG) or Videos (MP4)</p>
        </CardContent>
        <input ref={fileRef} type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />
      </Card>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <Card key={item.id} className="group overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-saffron-50 grid place-items-center relative">
              {item.type === 'video' ? (
                <Play className="h-8 w-8 text-saffron-400" />
              ) : (
                <Image className="h-8 w-8 text-saffron-300" />
              )}
              <Badge
                className="absolute top-2 right-2 text-[10px]"
                variant={item.type === 'video' ? 'default' : 'secondary'}
              >
                {item.type}
              </Badge>
            </div>
            <CardContent className="p-3">
              <p className="text-sm font-medium text-ink/80 truncate">{item.title}</p>
              <p className="text-xs text-ink/40 mt-0.5">{formatDate(item.uploadedAt)}</p>
              <div className="flex justify-end mt-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-3.5 w-3.5 text-red-400" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink/40 py-12">No media items yet. Upload files to get started.</p>
      )}
    </div>
  );
}
