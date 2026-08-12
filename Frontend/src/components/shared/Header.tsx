import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Type } from 'lucide-react';

import { AIRD, NAV_TREE } from '@/lib/constants';
import type { NavItem } from '@/lib/constants';
import { TranslateWidget } from './TranslateWidget';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* Accessibility: font-size toggle (A- A A+)                           */
/* ------------------------------------------------------------------ */
const FONT_SIZES = ['15px', '16px', '17px', '18px', '19px'];
const FONT_KEY = 'aird-font-idx';

function useFontScale() {
  const [idx, setIdx] = useState(1);
  useEffect(() => {
    const saved = Number(localStorage.getItem(FONT_KEY));
    if (!Number.isNaN(saved) && saved >= 0 && saved < FONT_SIZES.length) {
      setIdx(saved);
      document.documentElement.style.fontSize = FONT_SIZES[saved];
    }
  }, []);
  const apply = (next: number) => {
    const clamped = Math.max(0, Math.min(FONT_SIZES.length - 1, next));
    setIdx(clamped);
    localStorage.setItem(FONT_KEY, String(clamped));
    document.documentElement.style.fontSize = FONT_SIZES[clamped];
  };
  return { idx, apply };
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function isItemActive(pathname: string, item: NavItem): boolean {
  if (item.to && (pathname === item.to)) return true;
  if (pathname === '/') return false;
  return (item.children ?? []).some((c) => pathname === c.to || pathname.startsWith(c.to + '/'));
}

/* ------------------------------------------------------------------ */
/* Desktop mega-menu trigger                                           */
/* ------------------------------------------------------------------ */
function DesktopNavItem({
  item,
  pathname,
  isLast = false,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  pathname: string;
  isLast?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const active = isItemActive(pathname, item);
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        to={item.to!}
        onClick={onClose}
        className={cn(
          'inline-flex items-center px-3 lg:px-4 py-2.5 text-sm font-semibold transition-colors border-b-[3px] -mb-px',
          active
            ? 'text-white border-cream bg-forest-700'
            : 'text-white/90 border-transparent hover:bg-forest-600 hover:text-white',
        )}
      >
        {item.label}
      </Link>
    );
  }

  const triggerClasses = cn(
    'inline-flex items-center gap-1 px-3 lg:px-4 py-2.5 text-sm font-semibold transition-colors border-b-[3px] -mb-px cursor-pointer select-none',
    active
      ? 'text-white border-cream bg-forest-700'
      : 'text-white/90 border-transparent hover:bg-forest-600 hover:text-white',
  );

  return (
    <div className="relative" onMouseEnter={onOpen}>
      {item.to ? (
        <div className="inline-flex items-center">
          <Link
            to={item.to}
            onClick={onClose}
            onFocus={onOpen}
            className={triggerClasses}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <span>{item.label}</span>
          </Link>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggle();
            }}
            className={cn(triggerClasses, 'px-1 lg:px-1.5 border-l-0 -ml-1')}
            aria-label={`Toggle ${item.label} menu`}
          >
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-200',
                isOpen && 'rotate-180',
              )}
            />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          onFocus={onOpen}
          className={triggerClasses}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
          />
        </button>
      )}

      {/* Dropdown panel — multi-column mega-menu when many children */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-full z-50 pt-2 transition-all duration-150',
            isLast ? 'right-0 left-auto' : 'left-0',
            (item.children ?? []).length > 7
              ? 'w-[560px] max-w-[calc(100vw-2rem)]'
              : 'w-[280px] max-w-[calc(100vw-2rem)]',
          )}
        >
          <div className="overflow-hidden rounded-b-xl border border-saffron-100 bg-white shadow-xl ring-1 ring-black/5">
            {item.to && (
              <Link
                to={item.to}
                onClick={onClose}
                className="block border-b border-saffron-100 bg-saffron-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-saffron-700 hover:bg-saffron-100 transition-colors"
              >
                {item.label} &mdash; Overview
              </Link>
            )}
            <ul
              className={cn(
                'max-h-[70vh] overflow-y-auto p-1.5',
                (item.children ?? []).length > 7 && 'grid grid-cols-2 gap-x-1',
              )}
            >
              {item.children!.map((c) => {
                const cActive = pathname === c.to;
                return (
                  <li key={c.to}>
                    <Link
                      to={c.to}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-sm transition-colors',
                        cActive
                          ? 'bg-saffron-50 font-semibold text-saffron-800'
                          : 'text-ink/80 hover:bg-saffron-50 hover:text-saffron-700',
                      )}
                    >
                      <span className="block font-medium">{c.label}</span>
                      {c.desc && <span className="mt-0.5 block text-xs text-ink/50 leading-normal">{c.desc}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile accordion nav                                                */
/* ------------------------------------------------------------------ */
function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = isItemActive(pathname, item);
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        to={item.to!}
        onClick={onNavigate}
        className={cn(
          'block rounded-lg px-3 py-3 text-sm font-semibold',
          active ? 'bg-saffron-100 text-saffron-800' : 'text-ink/80 hover:bg-saffron-50',
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="py-0.5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors',
          active ? 'bg-saffron-100 text-saffron-800' : 'text-ink/80 hover:bg-saffron-50',
        )}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {open && (
        <ul className="mt-1 ml-3 border-l-2 border-saffron-200 pl-3 space-y-1">
          {item.to && (
            <li>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-saffron-700 hover:bg-saffron-50"
              >
                {item.label} &mdash; Overview
              </Link>
            </li>
          )}
          {item.children!.map((c) => {
            const cActive = pathname === c.to;
            return (
              <li key={c.to}>
                <Link
                  to={c.to}
                  onClick={onNavigate}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-sm transition-colors',
                    cActive ? 'bg-saffron-50 font-semibold text-saffron-800' : 'text-ink/70 hover:bg-saffron-50 hover:text-saffron-700',
                  )}
                >
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const { idx, apply } = useFontScale();

  // Close mobile menu & desktop dropdowns on route change
  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Outside click listener to close desktop dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Tricolor top strip — saffron / white / green */}
      <div className="flex h-1.5 w-full" aria-hidden>
        <div className="flex-1 bg-saffron-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-forest-600" />
      </div>

      {/* Accessibility + utility bar */}
      <div className="bg-forest-700 text-cream">
        <div className="container-px flex h-9 items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-3">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-1.5 focus:text-sm focus:font-semibold focus:text-forest-800"
            >
              Skip to Main Content
            </a>
            <span className="hidden sm:inline text-cream/80">
              Screen Reader Compatible &nbsp;|&nbsp; Accessible
            </span>
            {/* Font size toggle */}
            <div className="flex items-center gap-1.5">
              <Type className="h-3.5 w-3.5 text-cream/70" aria-hidden />
              <span className="hidden sm:inline text-cream/70">Text:</span>
              <button
                onClick={() => apply(idx - 1)}
                disabled={idx === 0}
                aria-label="Decrease text size"
                className="rounded px-1.5 py-0.5 font-bold text-cream/90 hover:bg-forest-600 disabled:opacity-40"
              >
                A-
              </button>
              <button
                onClick={() => apply(1)}
                aria-label="Normal text size"
                className="rounded px-1.5 py-0.5 font-semibold text-cream/90 hover:bg-forest-600"
              >
                A
              </button>
              <button
                onClick={() => apply(idx + 1)}
                disabled={idx === FONT_SIZES.length - 1}
                aria-label="Increase text size"
                className="rounded px-1.5 py-0.5 font-bold text-cream/90 hover:bg-forest-600 disabled:opacity-40"
              >
                A+
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TranslateWidget />
            <a
              href="/admin"
              className="hidden sm:inline text-cream/80 hover:text-white hover:underline"
            >
              Admin
            </a>
          </div>
        </div>
      </div>

      {/* Emblem header row */}
      <div className="border-b border-saffron-100">
        <div className="container-px flex items-center justify-between gap-3 py-2.5 md:py-3">
          {/* Logo + name */}
          <Link to="/" className="flex items-center gap-3">
            <Logo size="lg" />
            <div className="min-w-0">
              <div className="font-display text-sm leading-tight font-bold text-ink sm:text-lg md:text-xl">
                Appropriate Institute of Rural Development
              </div>
              {/* Tagline hidden on smallest screens to avoid inflating header height */}
              <div className="mt-0.5 hidden text-[10px] leading-tight text-saffron-700 sm:block sm:text-xs">
                <span className="font-semibold">{AIRD.shortName}</span> &bull; {AIRD.tagline}
              </div>
              <div className="mt-0.5 hidden text-[10px] text-ink/45 lg:block">
                Reg. under {AIRD.registeredUnder} &nbsp;|&nbsp; NGO Darpan {AIRD.ngoDarpanId}
              </div>
            </div>
          </Link>

          {/* Contact (tablet+) — always reachable without scrolling to footer */}
          <div className="hidden flex-col items-end text-right text-xs md:flex">
            <a href={`tel:+91${AIRD.contactMobile}`} className="flex items-center justify-end gap-1.5 font-semibold text-forest-700 hover:text-forest-800">
              <Phone className="h-3.5 w-3.5" /> +91 {AIRD.contactMobile}
            </a>
            <a href={`mailto:${AIRD.email}`} className="flex items-center justify-end gap-1.5 text-ink/60 hover:text-saffron-700">
              <Mail className="h-3 w-3" /> {AIRD.email}
            </a>
          </div>



          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-2 text-ink/70 hover:bg-saffron-50 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Primary navigation (desktop) */}
      <nav
        ref={navRef}
        onMouseLeave={() => setActiveMenu(null)}
        className="hidden bg-forest-700 md:block"
        aria-label="Primary"
      >
        <div className="container-px flex items-center gap-0.5 overflow-visible">
          {NAV_TREE.map((item, index) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              isLast={index === NAV_TREE.length - 1}
              isOpen={activeMenu === item.label}
              onOpen={() => setActiveMenu(item.label)}
              onClose={() => setActiveMenu(null)}
              onToggle={() =>
                setActiveMenu((prev) => (prev === item.label ? null : item.label))
              }
            />
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-saffron-100 bg-white md:hidden">
          <nav className="container-px max-h-[75vh] overflow-y-auto py-4" aria-label="Mobile">
            {NAV_TREE.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <a
              href="/admin"
              className="mt-3 block rounded-lg bg-saffron-50 px-3 py-3 text-sm font-semibold text-saffron-700 text-center"
            >
              Admin Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

