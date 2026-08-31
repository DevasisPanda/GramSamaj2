import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Plus, CheckCircle2, Circle, Trash2, Edit2, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function AdminCalendar() {
  const { data: rawEvents = [], isLoading, refetch } = trpc.event.getAll.useQuery();

  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('AIRD Trust Lucknow');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'upcoming' | 'ongoing' | 'completed' | 'cancelled'>('upcoming');

  // Mutations
  const createMut = trpc.event.create.useMutation({
    onSuccess: () => {
      toast.success('Event created successfully');
      refetch();
      handleCloseModal();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to create event'),
  });

  const updateMut = trpc.event.update.useMutation({
    onSuccess: () => {
      toast.success('Event updated successfully');
      refetch();
      handleCloseModal();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to update event'),
  });

  const statusMut = trpc.event.updateStatus.useMutation({
    onSuccess: () => {
      toast.success('Status updated');
      refetch();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to update status'),
  });

  const deleteMut = trpc.event.delete.useMutation({
    onSuccess: () => {
      toast.success('Event deleted');
      refetch();
    },
    onError: (err: any) => toast.error(err?.message || 'Failed to delete event'),
  });

  function handleOpenNew() {
    setEditingItem(null);
    setTitle('');
    setDate(new Date().toISOString().split('T')[0]);
    setLocation('AIRD Center, Lucknow');
    setDescription('');
    setStatus('upcoming');
    setOpenModal(true);
  }

  function handleOpenEdit(ev: any) {
    setEditingItem(ev);
    setTitle(ev.title);
    setDate(ev.eventDate ? new Date(ev.eventDate).toISOString().split('T')[0] : '');
    setLocation(ev.location || 'AIRD Center, Lucknow');
    setDescription(ev.description || '');
    setStatus(ev.status || 'upcoming');
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    setEditingItem(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !date) {
      toast.error('Title and Date are required');
      return;
    }

    if (editingItem) {
      updateMut.mutate({
        id: editingItem.id,
        title,
        description,
        eventDate: new Date(date),
        location,
        status,
      });
    } else {
      createMut.mutate({
        title,
        description,
        eventDate: new Date(date),
        location,
      });
    }
  }

  function handleToggleStatus(ev: any) {
    const nextStatus = ev.status === 'completed' ? 'upcoming' : 'completed';
    statusMut.mutate({ id: ev.id, status: nextStatus });
  }

  function handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      deleteMut.mutate({ id });
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-saffron-800">Event &amp; Activities Calendar</h1>
          <p className="text-sm text-ink/50">Schedule, organize, and publish trust activities</p>
        </div>

        <Button onClick={handleOpenNew} className="bg-forest-700 hover:bg-forest-800 text-white">
          <Plus className="h-4 w-4 mr-1" /> New Activity
        </Button>
      </div>

      {/* Timeline List */}
      <div className="space-y-3">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="h-24 bg-saffron-50/50 rounded-xl" />
            </Card>
          ))
        ) : (
          rawEvents.map((ev: any) => {
            const isDone = ev.status === 'completed';
            return (
              <Card key={ev.id} className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <button
                      onClick={() => handleToggleStatus(ev)}
                      className="mt-1 flex-shrink-0 text-ink/40 hover:text-forest-600 transition-colors"
                      title={isDone ? 'Mark as Upcoming' : 'Mark as Completed'}
                    >
                      {isDone ? (
                        <CheckCircle2 className="h-5 w-5 text-forest-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-saffron-400" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-saffron-800 bg-saffron-50 px-2 py-0.5 rounded border border-saffron-200">
                          {formatDate(ev.eventDate || ev.createdAt)}
                        </span>
                        <Badge
                          variant={isDone ? 'default' : 'secondary'}
                          className={isDone ? 'bg-forest-600' : 'bg-saffron-100 text-saffron-800'}
                        >
                          {ev.status || 'upcoming'}
                        </Badge>
                        {ev.location && (
                          <span className="text-xs text-ink/50 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {ev.location}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-ink text-base">{ev.title}</h3>
                      {ev.description && (
                        <p className="text-sm text-ink/60 mt-0.5 line-clamp-2">{ev.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 self-end sm:self-center">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-ink/60 hover:text-ink"
                      onClick={() => handleOpenEdit(ev)}
                      title="Edit"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(ev.id)}
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}

        {!isLoading && rawEvents.length === 0 && (
          <div className="text-center py-16 px-4 bg-saffron-50/40 rounded-2xl border border-dashed border-saffron-200">
            <CalendarIcon className="h-10 w-10 text-saffron-300 mx-auto mb-2" />
            <p className="font-semibold text-ink">No scheduled activities</p>
            <p className="text-xs text-ink/50 mt-1">Click "New Activity" to schedule an event on the public calendar.</p>
          </div>
        )}
      </div>

      {/* Add / Edit Dialog */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingItem ? 'Edit Activity' : 'Schedule New Activity'}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="ev-title">Activity Title *</Label>
              <Input
                id="ev-title"
                placeholder="e.g. Gram Sabha Foundation Day"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="ev-date">Date *</Label>
                <Input
                  id="ev-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {editingItem && (
                <div className="space-y-1.5">
                  <Label>Status</Label>
                  <Select value={status} onValueChange={(val: any) => setStatus(val)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ev-loc">Location</Label>
              <Input
                id="ev-loc"
                placeholder="e.g. Village Panchayat Bhavan, Hardoi"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ev-desc">Description</Label>
              <Input
                id="ev-desc"
                placeholder="Details of planned agenda or outcomes"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <DialogFooter className="pt-2">
              <Button type="button" variant="ghost" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-saffron-600 hover:bg-saffron-700 text-white"
                disabled={createMut.isPending || updateMut.isPending}
              >
                {createMut.isPending || updateMut.isPending ? 'Saving...' : 'Save Activity'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
