import { useMemo, useState } from 'react';
import { Search, MapPin, Users, Home, Phone } from 'lucide-react';
import { useVillagers } from '@/hooks/useApi';
import type { Villager } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 6;

/**
 * Interactive Village Map & Directory.
 * Left: searchable, paginated house-wise villager directory.
 * Right: SVG visualization of the village — hovering a directory row
 * highlights the matching polygon; clicking opens a census dialog.
 */
export function VillageDirectory() {
  const { data: villagers = [], isLoading } = useVillagers();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Villager | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return villagers;
    return villagers.filter(
      (v) =>
        v.houseNumber.toLowerCase().includes(q) ||
        v.headOfHousehold.toLowerCase().includes(q) ||
        String(v.familyCount).includes(q),
    );
  }, [villagers, query]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const pageItems = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  // SVG house polygons keyed by mapNodeId. A simple stylized village layout.
  const houses: { id: string; label: string; d: string }[] = villagers.map((v, i) => {
    const cols = 4;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 30 + col * 95;
    const y = 40 + row * 80;
    return {
      id: v.mapNodeId,
      label: v.houseNumber,
      d: `M${x},${y + 30} L${x},${y + 8} L${x + 25},${y} L${x + 50},${y + 8} L${x + 50},${y + 30} Z`,
    };
  });

  return (
    <section className="section-py">
      <div className="container-px">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
            <MapPin className="h-3.5 w-3.5" /> Village Directory
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gradient-forest">
            Barhi Garhi, Malihabad &mdash; House-wise Census
          </h2>
          <p className="mt-2 text-ink/60 max-w-2xl mx-auto">
            Search by house number, head of household, or family count. Hover a row to locate the home on the map; click for full census details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT — Directory */}
          <div className="card-surface p-0 overflow-hidden">
            <div className="p-4 border-b border-saffron-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
                <Input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(0);
                  }}
                  placeholder="Search house no., name, or family count..."
                  className="pl-9"
                />
              </div>
            </div>

            <div className="divide-y divide-saffron-50 max-h-[420px] overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center text-sm text-ink/40 animate-pulse">Loading directory...</div>
              ) : pageItems.length === 0 ? (
                <div className="p-8 text-center text-sm text-ink/40">No households found.</div>
              ) : (
                pageItems.map((v) => (
                  <button
                    key={v.id}
                    onMouseEnter={() => setHovered(v.mapNodeId)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(v)}
                    className={cn(
                      'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors',
                      hovered === v.mapNodeId ? 'bg-saffron-50' : 'hover:bg-saffron-50/50',
                    )}
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-saffron-100 text-xs font-bold text-saffron-700">
                      {v.houseNumber}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-ink truncate">{v.headOfHousehold}</div>
                      <div className="text-xs text-ink/50">Family of {v.familyCount}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {v.isPop && <Badge variant="destructive" className="text-[10px]">PoP</Badge>}
                      {v.mgnregaJobCard && <Badge variant="secondary" className="text-[10px]">MGNREGA</Badge>}
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex items-center justify-between border-t border-saffron-100 px-4 py-3 text-xs">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="text-saffron-600 disabled:opacity-30 hover:underline"
                >
                  &larr; Prev
                </button>
                <span className="text-ink/40">
                  Page {page + 1} of {pageCount}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                  disabled={page >= pageCount - 1}
                  className="text-saffron-600 disabled:opacity-30 hover:underline"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — SVG Map */}
          <div className="card-surface p-4 flex flex-col">
            <div className="text-xs font-semibold text-ink/50 mb-2 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-forest-600" /> Village Layout
            </div>
            <div className="relative flex-1 rounded-xl bg-gradient-to-br from-forest-50 to-saffron-50 overflow-hidden">
              <svg viewBox="0 0 400 340" className="w-full h-full">
                {/* River/road decorations */}
                <path d="M0,300 Q100,280 200,300 T400,290" fill="none" stroke="#93c5fd" strokeWidth="8" opacity="0.5" strokeLinecap="round" />
                <text x="200" y="328" textAnchor="middle" className="fill-blue-300" fontSize="9">River / Stream</text>
                {/* Houses */}
                {houses.map((h) => {
                  const isHover = hovered === h.id;
                  return (
                    <g key={h.id} className="cursor-pointer">
                      <path
                        d={h.d}
                        className={cn(
                          'transition-all',
                          isHover ? 'fill-saffron-500 stroke-saffron-700' : 'fill-white stroke-forest-400',
                        )}
                        strokeWidth={isHover ? 2.5 : 1.5}
                        onMouseEnter={() => setHovered(h.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => {
                          const v = villagers.find((x) => x.mapNodeId === h.id);
                          if (v) setSelected(v);
                        }}
                      />
                      <text
                        x={(Number(h.d.match(/L(\d+),/)?.[1] ?? 55)) + 25}
                        y={(Number(h.d.match(/M\d+,(\d+)/)?.[1] ?? 70)) + 18}
                        textAnchor="middle"
                        className={isHover ? 'fill-white' : 'fill-ink/60'}
                        fontSize="8"
                        fontWeight="600"
                      >
                        {h.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-ink/50">
              <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-white border border-forest-400" /> House</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-saffron-500" /> Highlighted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Census dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-saffron-600" />
              House {selected?.houseNumber} &mdash; {selected?.headOfHousehold}
            </DialogTitle>
            <DialogDescription>Census details from the household directory.</DialogDescription>
          </DialogHeader>
          {selected && (
            <div className="grid grid-cols-2 gap-3 py-2 text-sm">
              <Detail icon={Users} label="Head of Household" value={selected.headOfHousehold} />
              {selected.spouseOf && <Detail icon={Users} label="Spouse Of" value={selected.spouseOf} />}
              <Detail icon={Users} label="Family Members" value={String(selected.familyCount)} />
              {selected.age != null && <Detail icon={Users} label="Age" value={String(selected.age)} />}
              {selected.caste && <Detail icon={Users} label="Category" value={selected.caste} />}
              {selected.qualification && <Detail icon={Users} label="Qualification" value={selected.qualification} />}
              {selected.occupation && <Detail icon={Users} label="Occupation" value={selected.occupation} />}
              {selected.contactNumber && <Detail icon={Phone} label="Contact" value={`+91 ${selected.contactNumber}`} />}
              <div className="col-span-2 flex flex-wrap gap-2 pt-2">
                {selected.isPop && <Badge variant="destructive">Poorest of the Poor</Badge>}
                {selected.mgnregaJobCard && <Badge variant="secondary">MGNREGA Job Card Holder</Badge>}
                <Badge variant="outline">Census Verified</Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="h-4 w-4 text-saffron-500 mt-0.5 shrink-0" />
      <div>
        <div className="text-[11px] text-ink/40">{label}</div>
        <div className="font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}
