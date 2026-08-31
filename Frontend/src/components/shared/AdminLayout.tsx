import type { ReactNode } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, CalendarDays, Image, LogOut, Menu, X, ChevronLeft, ShieldCheck, ExternalLink,
} from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { cn } from '@/lib/utils';
import { trpc, getBackendUrl } from '@/lib/trpc';
import { toast } from 'sonner';

const ADMIN_NAV: { to: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/villagers', label: 'Villagers', icon: Users },
  { to: '/admin/calendar', label: 'Calendar', icon: CalendarDays },
  { to: '/admin/media', label: 'Media', icon: Image },
];

function BackToSite() {
  return (
    <Link to="/" className="flex items-center gap-1 text-xs text-saffron-600 hover:underline">
      <ChevronLeft className="h-3 w-3" /> Back to AIRD Website
    </Link>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAdmin();
  const [sidebar, setSidebar] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const { pathname } = useLocation();

  const createHandoffMut = trpc.auth.createHandoff.useMutation();

  async function handleLaunchOperationsPortal() {
    setIsLaunching(true);
    try {
      const backendUrl = getBackendUrl();
      try {
        const res = await createHandoffMut.mutateAsync();
        if (res?.handoffCode) {
          window.open(`${backendUrl}/sso?code=${res.handoffCode}&role=admin&redirect=/admin`, '_blank');
          return;
        }
      } catch (handoffErr) {
        console.warn('Backend handoff fallback:', handoffErr);
      }
      const token = localStorage.getItem('authToken') || localStorage.getItem('token');
      window.open(`${backendUrl}/sso?token=${token || ''}&role=admin&redirect=/admin`, '_blank');
    } catch {
      toast.error('Failed to launch Operations Suite');
    } finally {
      setIsLaunching(false);
    }
  }

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
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/aird-logo.png"
              alt="AIRD emblem"
              className="h-9 w-9 shrink-0 object-contain"
            />
            <div>
              <div className="text-xs font-bold text-saffron-800">AIRD Admin</div>
              <div className="text-[10px] text-ink/40">{user?.name ?? 'Staff'}</div>
            </div>
          </Link>
          <button onClick={() => setSidebar(false)} className="md:hidden text-ink/40">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {ADMIN_NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebar(false)}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-saffron-100 text-saffron-800'
                    : 'text-ink/60 hover:bg-saffron-50 hover:text-saffron-700',
                )}
              >
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-saffron-100">
            <p className="px-3 text-[10px] font-bold text-ink/40 uppercase tracking-wider mb-1.5">
              Advanced Back-Office
            </p>
            <button
              onClick={handleLaunchOperationsPortal}
              disabled={isLaunching}
              className="flex w-full items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-saffron-600 to-forest-700 p-3 text-xs font-bold text-white shadow-md hover:from-saffron-700 hover:to-forest-800 transition-all text-left group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-saffron-200" />
                <span>{isLaunching ? 'Opening...' : 'Operations Suite'}</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <p className="px-3 text-[9px] text-ink/40 mt-1.5">
              Certificates, expenses, bulk SMS, and system registry
            </p>
          </div>
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

        <main className="flex-1 overflow-y-auto p-3 sm:p-6">{children}</main>
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
