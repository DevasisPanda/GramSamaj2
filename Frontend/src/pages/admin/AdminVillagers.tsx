import { useState, useMemo } from 'react';
import { useVillagers, useDeleteVillager, useUpdateVillager } from '@/hooks/useApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Search, Download, Pencil, Trash2, X, Save } from 'lucide-react';

const PAGE_SIZE = 10;

export default function AdminVillagers() {
  const { data: villagers, isLoading } = useVillagers();
  const deleteMut = useDeleteVillager();
  const updateMut = useUpdateVillager();

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<Record<string, string>>({});
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!villagers) return [];
    const q = search.toLowerCase();
    return villagers.filter(
      (v) =>
        v.headOfHousehold.toLowerCase().includes(q) ||
        v.houseNumber.toLowerCase().includes(q) ||
        v.contactNumber?.includes(q),
    );
  }, [villagers, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function startEdit(id: string) {
    const v = villagers?.find((x) => x.id === id);
    if (!v) return;
    setEditing(id);
    setEditDraft({
      headOfHousehold: v.headOfHousehold,
      contactNumber: v.contactNumber ?? '',
    });
  }

  function cancelEdit() {
    setEditing(null);
    setEditDraft({});
  }

  function saveEdit(id: string) {
    updateMut.mutate(
      { id, patch: { headOfHousehold: editDraft.headOfHousehold, contactNumber: editDraft.contactNumber || undefined } },
      {
        onSuccess: () => {
          toast.success('Villager updated');
          cancelEdit();
        },
      },
    );
  }

  function confirmDelete() {
    if (!deleteId) return;
    deleteMut.mutate(deleteId, {
      onSuccess: () => {
        toast.success('Villager removed');
        setDeleteId(null);
      },
    });
  }

  function exportCSV() {
    if (!villagers) return;
    const header = 'House No,Head of Household,Family Count,Contact,POP,MGNREGA\n';
    const rows = villagers
      .map(
        (v) =>
          `${v.houseNumber},"${v.headOfHousehold}",${v.familyCount},${v.contactNumber ?? ''},${v.isPop ? 'Yes' : 'No'},${v.mgnregaJobCard ? 'Yes' : 'No'}`,
      )
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'villagers.csv';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CSV exported');
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-saffron-800">Villagers</h1>
          <p className="text-sm text-ink/50">
            Manage village census data ({filtered.length} records)
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={exportCSV}>
          <Download className="h-4 w-4 mr-1" /> Export CSV
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30" />
        <Input
          placeholder="Search by name, house number..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-saffron-100 text-left text-ink/50">
                <th className="p-3 font-medium">House No</th>
                <th className="p-3 font-medium">Head of Household</th>
                <th className="p-3 font-medium">Family</th>
                <th className="p-3 font-medium">Contact</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={6} className="p-3 h-12 bg-saffron-50/50" />
                    </tr>
                  ))
                : paged.map((v) => (
                    <tr key={v.id} className="border-b border-saffron-50 hover:bg-saffron-50/30 transition-colors">
                      <td className="p-3 font-mono text-xs">{v.houseNumber}</td>
                      <td className="p-3 font-medium">
                        {editing === v.id ? (
                          <Input
                            value={editDraft.headOfHousehold}
                            onChange={(e) => setEditDraft((d) => ({ ...d, headOfHousehold: e.target.value }))}
                            className="h-7 text-sm"
                          />
                        ) : (
                          v.headOfHousehold
                        )}
                      </td>
                      <td className="p-3">{v.familyCount}</td>
                      <td className="p-3 text-ink/60">
                        {editing === v.id ? (
                          <Input
                            value={editDraft.contactNumber}
                            onChange={(e) => setEditDraft((d) => ({ ...d, contactNumber: e.target.value }))}
                            className="h-7 text-sm"
                            placeholder="Phone"
                          />
                        ) : (
                          v.contactNumber ?? '—'
                        )}
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          {v.isPop && <Badge variant="destructive">PoP</Badge>}
                          {v.mgnregaJobCard && <Badge className="bg-forest-600">MGNREGA</Badge>}
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        {editing === v.id ? (
                          <div className="flex justify-end gap-1">
                            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={cancelEdit}>
                              <X className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7"
                              onClick={() => saveEdit(v.id)}
                              disabled={updateMut.isPending}
                            >
                              <Save className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex justify-end gap-1">
                            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => startEdit(v.id)}>
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setDeleteId(v.id)}>
                              <Trash2 className="h-3.5 w-3.5 text-red-500" />
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button size="sm" variant="outline" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </Button>
          <span className="text-sm text-ink/50">
            Page {page} of {totalPages}
          </span>
          <Button
            size="sm"
            variant="outline"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}

      {/* Delete confirmation */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Villager</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-ink/60">Are you sure you want to remove this villager? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={deleteMut.isPending}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
