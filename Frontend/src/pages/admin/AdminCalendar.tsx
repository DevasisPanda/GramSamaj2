import { useState } from 'react';
import { useEvents, useCreateEvent } from '@/hooks/useApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Plus, CheckCircle2, Circle } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { EventCategory } from '@/lib/types';

const CATEGORY_COLORS: Record<EventCategory, string> = {
  spiritual: 'bg-purple-100 text-purple-800',
  environmental: 'bg-green-100 text-green-800',
  planning: 'bg-blue-100 text-blue-800',
  administrative: 'bg-amber-100 text-amber-800',
};

interface EventForm {
  date: string;
  title: string;
  description: string;
  category: EventCategory;
}

const EMPTY_FORM: EventForm = { date: '', title: '', description: '', category: 'planning' };

export default function AdminCalendar() {
  const { data: events, isLoading } = useEvents();
  const createMut = useCreateEvent();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EventForm>(EMPTY_FORM);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    createMut.mutate(
      { ...form, isCompleted: false },
      {
        onSuccess: () => {
          toast.success('Event created');
          setOpen(false);
          setForm(EMPTY_FORM);
        },
        onError: () => toast.error('Failed to create event'),
      },
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-saffron-800">Event Calendar</h1>
          <p className="text-sm text-ink/50">Schedule and manage activities</p>
        </div>
        <Button onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4 mr-1" /> New Event
        </Button>
      </div>

      {/* Timeline list */}
      <div className="space-y-3">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="h-20 animate-pulse bg-saffron-50/50 rounded-xl" />
              </Card>
            ))
          : events?.map((ev) => (
              <Card key={ev.id} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 mt-0.5">
                    {ev.isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-forest-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-saffron-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-ink/40 font-mono">{formatDate(ev.date, { weekday: true })}</span>
                      <Badge className={CATEGORY_COLORS[ev.category]}>{ev.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-ink/80">{ev.title}</h3>
                    <p className="text-sm text-ink/50 mt-0.5 line-clamp-2">{ev.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
        {events?.length === 0 && (
          <p className="text-center text-ink/40 py-12">No events scheduled yet. Click "New Event" to add one.</p>
        )}
      </div>

      {/* New event dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Event</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="ev-date">Date</Label>
                <Input
                  id="ev-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ev-cat">Category</Label>
                <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v as EventCategory }))}>
                  <SelectTrigger id="ev-cat"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spiritual">Spiritual</SelectItem>
                    <SelectItem value="environmental">Environmental</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ev-title">Title</Label>
              <Input
                id="ev-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="e.g. Maitri Bhoj — Pooranmasi"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ev-desc">Description</Label>
              <textarea
                id="ev-desc"
                className="flex min-h-[80px] w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-ink/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-400 resize-none"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Event details..."
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={createMut.isPending}>
                {createMut.isPending ? 'Creating...' : 'Create Event'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
