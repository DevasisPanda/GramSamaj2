import { useState, useRef } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Image, Film, Upload, Trash2, Play, Plus, Edit2, Loader2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';

const CATEGORIES = ['Gram Sabha', 'Field Work', 'Tree Plantation', 'Events', 'General'];

export default function AdminMedia() {
  const { data: media = [], isLoading, refetch } = trpc.gallery.adminGetAll.useQuery();

  const [tab, setTab] = useState<'images' | 'videos' | 'all'>('all');
  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('General');
  const [formMediaType, setFormMediaType] = useState<'image' | 'video'>('image');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formRedirectUrl, setFormRedirectUrl] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mutations
  const uploadMut = trpc.upload.image.useMutation();
  const createMut = trpc.gallery.create.useMutation({
    onSuccess: () => {
      toast.success('Media item added successfully');
      refetch();
      handleCloseModal();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to add media'),
  });

  const updateMut = trpc.gallery.update.useMutation({
    onSuccess: () => {
      toast.success('Media item updated successfully');
      refetch();
      handleCloseModal();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to update media'),
  });

  const deleteMut = trpc.gallery.delete.useMutation({
    onSuccess: () => {
      toast.success('Media item deleted');
      refetch();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to delete media'),
  });

  const filtered = tab === 'all' 
    ? media 
    : media.filter((m: any) => m.mediaType === (tab === 'videos' ? 'video' : 'image'));

  function handleOpenNew() {
    setEditingItem(null);
    setFormTitle('');
    setFormCategory('General');
    setFormMediaType('image');
    setFormImageUrl('');
    setFormRedirectUrl('');
    setFormDescription('');
    setOpenModal(true);
  }

  function handleOpenEdit(item: any) {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category || 'General');
    setFormMediaType(item.mediaType || 'image');
    setFormImageUrl(item.imageUrl || '');
    setFormRedirectUrl(item.redirectUrl || '');
    setFormDescription(item.description || '');
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    setEditingItem(null);
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds 5MB limit');
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;
        try {
          const res = await uploadMut.mutateAsync({
            base64: base64Data,
            filename: file.name,
          });
          if (res?.url) {
            setFormImageUrl(res.url);
            toast.success('File uploaded');
          }
        } catch (err: any) {
          toast.error(err?.message || 'Failed to upload image');
        } finally {
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch {
      setIsUploading(false);
      toast.error('Failed to read file');
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!formTitle || !formImageUrl) {
      toast.error('Title and Media URL / Image are required');
      return;
    }

    if (editingItem) {
      updateMut.mutate({
        id: editingItem.id,
        title: formTitle,
        category: formCategory,
        mediaType: formMediaType,
        imageUrl: formImageUrl,
        redirectUrl: formRedirectUrl,
        description: formDescription,
      });
    } else {
      createMut.mutate({
        title: formTitle,
        category: formCategory,
        mediaType: formMediaType,
        imageUrl: formImageUrl,
        redirectUrl: formRedirectUrl,
        description: formDescription,
      });
    }
  }

  function handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this media item?')) {
      deleteMut.mutate({ id });
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-saffron-800">Media Center</h1>
          <p className="text-sm text-ink/50">Manage photos, field recordings, and video assets</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1 border border-saffron-200 rounded-lg p-1 bg-white">
            <Button
              variant={tab === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTab('all')}
              className={tab === 'all' ? 'bg-saffron-600 text-white' : ''}
            >
              All
            </Button>
            <Button
              variant={tab === 'images' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTab('images')}
              className={tab === 'images' ? 'bg-saffron-600 text-white' : ''}
            >
              <Image className="h-4 w-4 mr-1" /> Images
            </Button>
            <Button
              variant={tab === 'videos' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setTab('videos')}
              className={tab === 'videos' ? 'bg-saffron-600 text-white' : ''}
            >
              <Film className="h-4 w-4 mr-1" /> Videos
            </Button>
          </div>

          <Button onClick={handleOpenNew} className="bg-forest-700 hover:bg-forest-800 text-white">
            <Plus className="h-4 w-4 mr-1" /> Add Media
          </Button>
        </div>
      </div>

      {/* Media Items Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-0 aspect-video bg-saffron-50 rounded-t-xl" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item: any) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-saffron-50 relative overflow-hidden flex items-center justify-center">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <Image className="h-8 w-8 text-saffron-300" />
                )}
                {item.mediaType === 'video' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                )}
                <Badge
                  className="absolute top-2 right-2 text-[10px]"
                  variant={item.mediaType === 'video' ? 'default' : 'secondary'}
                >
                  {item.mediaType}
                </Badge>
                {item.category && (
                  <Badge className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] border-0">
                    {item.category}
                  </Badge>
                )}
              </div>

              <CardContent className="p-3">
                <p className="text-sm font-bold text-ink truncate">{item.title}</p>
                <p className="text-xs text-ink/40 mt-0.5">{formatDate(item.createdAt)}</p>
                <div className="flex justify-end gap-1 mt-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-ink/60 hover:text-ink"
                    onClick={() => handleOpenEdit(item)}
                    title="Edit"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!isLoading && filtered.length === 0 && (
        <div className="text-center py-16 px-4 bg-saffron-50/40 rounded-2xl border border-dashed border-saffron-200">
          <Image className="h-10 w-10 text-saffron-300 mx-auto mb-2" />
          <p className="font-semibold text-ink">No media items found</p>
          <p className="text-xs text-ink/50 mt-1">Click "Add Media" to upload photos or link video embeds.</p>
        </div>
      )}

      {/* Add / Edit Media Dialog */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingItem ? 'Edit Media Asset' : 'Add New Media Asset'}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="e.g. Gram Sabha Meeting in Hardoi"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Media Type</Label>
                <Select
                  value={formMediaType}
                  onValueChange={(val: any) => setFormMediaType(val)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image / Photo</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Category</Label>
                <Select value={formCategory} onValueChange={setFormCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Media File or URL *</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://... or upload local file"
                  value={formImageUrl}
                  onChange={(e) => setFormImageUrl(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            {formMediaType === 'video' && (
              <div className="space-y-1.5">
                <Label htmlFor="redirectUrl">Video Embed / YouTube URL</Label>
                <Input
                  id="redirectUrl"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={formRedirectUrl}
                  onChange={(e) => setFormRedirectUrl(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="desc">Description (Optional)</Label>
              <Input
                id="desc"
                placeholder="Brief summary of event or photo"
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
              />
            </div>

            <DialogFooter className="pt-2">
              <Button type="button" variant="ghost" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-saffron-600 hover:bg-saffron-700 text-white"
                disabled={createMut.isPending || updateMut.isPending || isUploading}
              >
                {createMut.isPending || updateMut.isPending ? 'Saving...' : 'Save Media'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
