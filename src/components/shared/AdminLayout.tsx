import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  LayoutDashboard, Users, CalendarDays, Image, LogOut, Menu, X, ChevronLeft,
} from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { cn } from '@/lib/utils';

const ADMIN_NAV: { to: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/villagers', label: 'Villagers', icon: Users },
  { to: '/admin/calendar', label: 'Calendar', icon: CalendarDays },
  { to: '/admin/media', label: 'Media', icon: Image },
];

function BackToSite() {
  return (
    <a href="/" className="flex items-center gap-1 text-xs text-saffron-600 hover:underline">
      <ChevronLeft className="h-3 w-3" /> Back to AIRD Website
    </a>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAdmin();
  const [sidebar, setSidebar] = useState(false);
  const pathname = window.location.pathname;

  return (
    <div className="flex h-screen bg-saffron-50/30 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-saffron-100 shadow-sm flex flex-col transition-transform md:translate-x-0 md:static md:z-auto',
          sidebar ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-saffron-100">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/aird-logo.png"
              alt="AIRD emblem"
              className="h-9 w-9 shrink-0 object-contain"
            />
            <div>
              <div className="text-xs font-bold text-saffron-800">AIRD Admin</div>
              <div className="text-[10px] text-ink/40">{user?.name ?? 'Staff'}</div>
            </div>
          </a>
          <button onClick={() => setSidebar(false)} className="md:hidden text-ink/40">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {ADMIN_NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <a
                key={item.to}
                href={item.to}
                onClick={() => setSidebar(false)}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-saffron-100 text-saffron-800'
                    : 'text-ink/60 hover:bg-saffron-50 hover:text-saffron-700',
                )}
              >
                <Icon className="h-4 w-4" /> {item.label}
              </a>
            );
          })}
        </nav>

        <div className="p-3 border-t border-saffron-100 space-y-2">
          <BackToSite />
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink/50 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-saffron-100 bg-white px-4 py-3 md:hidden">
          <button onClick={() => setSidebar(true)} className="text-ink/60">
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-bold text-saffron-800">AIRD Admin</span>
          <div className="w-5" />
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      {sidebar && (
        <div
          className="fixed inset-0 z-20 bg-black/20 md:hidden"
          onClick={() => setSidebar(false)}
        />
      )}
    </div>
  );
}
