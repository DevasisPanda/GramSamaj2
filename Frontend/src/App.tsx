import { lazy, Suspense, useEffect } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AdminProvider } from '@/contexts/AdminContext';
import { PublicLayout } from '@/components/shared/PublicLayout';
import { queryClient } from '@/lib/queryClient';
import { trpc, trpcClient, getBackendUrl } from '@/lib/trpc';

/* ------------------------------------------------------------------ */
/* Eager — landing pages that must load instantly                      */
/* ------------------------------------------------------------------ */
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Philosophy from '@/pages/public/Philosophy';
import Kranti from '@/pages/public/Kranti';
import Donate from '@/pages/public/Donate';

/* ------------------------------------------------------------------ */
/* Lazy — public pages (sub-sections of the site)                     */
/* ------------------------------------------------------------------ */
const AboutTrust         = lazy(() => import('@/pages/public/AboutTrust'));
const VisionMission      = lazy(() => import('@/pages/public/VisionMission'));
const AimObjectives      = lazy(() => import('@/pages/public/AimObjectives'));
const JourneyTrustee     = lazy(() => import('@/pages/public/JourneyTrustee'));
const BoardTrustees      = lazy(() => import('@/pages/public/BoardTrustees'));
const BoardTrustees2020  = lazy(() => import('@/pages/public/BoardTrustees2020'));
const Strategy           = lazy(() => import('@/pages/public/Strategy'));
const Concept            = lazy(() => import('@/pages/public/Concept'));
const Initiation         = lazy(() => import('@/pages/public/Initiation'));
const Teachings          = lazy(() => import('@/pages/public/Teachings'));
const DevelopmentCar     = lazy(() => import('@/pages/public/DevelopmentCar'));
const History            = lazy(() => import('@/pages/public/History'));
const DecentralizedGov    = lazy(() => import('@/pages/public/DecentralizedGovernance'));
const DevelopmentIndia   = lazy(() => import('@/pages/public/DevelopmentInIndia'));
const Activities          = lazy(() => import('@/pages/public/Activities'));
const Gallery            = lazy(() => import('@/pages/public/Gallery'));
const VideosPage         = lazy(() => import('@/pages/public/VideosPage'));
const DonorsPage         = lazy(() => import('@/pages/public/DonorsPage'));
const VillageDirPage     = lazy(() => import('@/pages/public/VillageDirectoryPage'));
const AnnualReport       = lazy(() => import('@/pages/public/AnnualReport'));
const AnnualReportDetail = lazy(() => import('@/pages/public/AnnualReportDetail'));
const Membership         = lazy(() => import('@/pages/public/Join'));
const Contact            = lazy(() => import('@/pages/public/Contact'));
const SignIn             = lazy(() => import('@/pages/public/SignIn'));
const SignUp             = lazy(() => import('@/pages/public/SignUp'));
const KrantiDocument     = lazy(() => import('@/pages/public/KrantiDocument'));
const PhilosophyFull     = lazy(() => import('@/pages/public/PhilosophyFull'));
const HumanLife          = lazy(() => import('@/pages/public/HumanLife'));
const TrusteeProfile     = lazy(() => import('@/pages/public/TrusteeProfile'));
const Accounts           = lazy(() => import('@/pages/public/Accounts'));

/* ------------------------------------------------------------------ */
/* Helpers & Portal Bridge                                             */
/* ------------------------------------------------------------------ */
function PageSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <img
            src="/aird-logo.png"
            alt=""
            aria-hidden
            className="h-14 w-14 animate-pulse object-contain"
          />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

/**
 * Automatically bridges visitors and members to the full NGO Management System.
 */
function RedirectToManagementPortal({ path = '/login' }: { path?: string }) {
  useEffect(() => {
    const portalUrl = getBackendUrl();
    window.location.href = `${portalUrl}${path}`;
  }, [path]);

  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center gap-3 p-6 text-center">
      <img src="/aird-logo.png" alt="AIRD" className="h-16 w-16 animate-pulse object-contain" />
      <h3 className="text-lg font-bold text-forest-900">Connecting to AIRD Management Portal...</h3>
      <p className="text-xs text-gray-600 max-w-sm">
        Transferring to the centralized NGO administration and member management system.
      </p>
      <a
        href={`${getBackendUrl()}${path}`}
        className="mt-2 text-xs font-semibold text-saffron-700 underline hover:text-saffron-900"
      >
        Click here if you are not redirected automatically &rarr;
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Routes                                                              */
/* ------------------------------------------------------------------ */
function AppRoutes() {
  return (
    <Routes>
      {/* ── Public ── */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        {/* 1. About Us */}
        <Route path="/about" element={<About />} />
        <Route path="/about/vision" element={<PageSuspense><VisionMission /></PageSuspense>} />
        <Route path="/about/vision-mission" element={<Navigate to="/about/vision" replace />} />
        <Route path="/about/aim" element={<Navigate to="/about/aim-objectives" replace />} />
        <Route path="/about/objectives" element={<Navigate to="/about/aim-objectives" replace />} />
        <Route path="/about/aim-objectives" element={<PageSuspense><AimObjectives /></PageSuspense>} />
        <Route path="/about/accounts" element={<PageSuspense><Accounts /></PageSuspense>} />
        <Route path="/accounts" element={<Navigate to="/about/accounts" replace />} />

        {/* 2. Teachings */}
        <Route path="/teachings" element={<PageSuspense><Teachings /></PageSuspense>} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/philosophy/full" element={<PageSuspense><PhilosophyFull /></PageSuspense>} />
        <Route path="/human-and-humanity" element={<PageSuspense><HumanLife /></PageSuspense>} />
        <Route path="/development-car" element={<PageSuspense><DevelopmentCar /></PageSuspense>} />

        {/* 3. Trust */}
        <Route path="/about/trust" element={<PageSuspense><AboutTrust /></PageSuspense>} />
        <Route path="/trust" element={<Navigate to="/about/trust" replace />} />
        <Route path="/trust/brief" element={<Navigate to="/about/trust" replace />} />
        <Route path="/trustee" element={<Navigate to="/trustee/profile" replace />} />
        <Route path="/trustee/profile" element={<PageSuspense><TrusteeProfile /></PageSuspense>} />
        <Route path="/trustee/journey" element={<PageSuspense><JourneyTrustee /></PageSuspense>} />
        <Route path="/trustee/board-2020-2025" element={<PageSuspense><BoardTrustees2020 /></PageSuspense>} />
        <Route path="/trustee/board-2020-2026" element={<Navigate to="/trustee/board-2020-2025" replace />} />
        <Route path="/trustee/board" element={<PageSuspense><BoardTrustees /></PageSuspense>} />

        {/* 4. KRANTI */}
        <Route path="/development-in-india" element={<PageSuspense><DevelopmentIndia /></PageSuspense>} />
        <Route path="/history" element={<PageSuspense><History /></PageSuspense>} />
        <Route path="/kranti/history" element={<Navigate to="/development-in-india" replace />} />
        <Route path="/concept" element={<PageSuspense><Concept /></PageSuspense>} />
        <Route path="/kranti/concept" element={<Navigate to="/concept" replace />} />
        <Route path="/strategy" element={<PageSuspense><Strategy /></PageSuspense>} />
        <Route path="/kranti/strategy" element={<Navigate to="/strategy" replace />} />
        <Route path="/initiation" element={<PageSuspense><Initiation /></PageSuspense>} />
        <Route path="/kranti/initiation" element={<Navigate to="/initiation" replace />} />

        {/* 5. Project */}
        <Route path="/kranti" element={<Kranti />} />
        <Route path="/project" element={<Navigate to="/kranti" replace />} />
        <Route path="/project/kranti" element={<Navigate to="/kranti" replace />} />
        <Route path="/kranti/document" element={<PageSuspense><KrantiDocument /></PageSuspense>} />
        <Route path="/project/document" element={<Navigate to="/kranti/document" replace />} />
        <Route path="/kranti/decentralized-governance" element={<PageSuspense><DecentralizedGov /></PageSuspense>} />

        {/* 6. Activities */}
        <Route path="/activities" element={<PageSuspense><Activities /></PageSuspense>} />
        <Route path="/gallery" element={<PageSuspense><Gallery /></PageSuspense>} />
        <Route path="/videos" element={<PageSuspense><VideosPage /></PageSuspense>} />
        <Route path="/donors" element={<PageSuspense><DonorsPage /></PageSuspense>} />
        <Route path="/village-directory" element={<PageSuspense><VillageDirPage /></PageSuspense>} />
        <Route path="/villages" element={<Navigate to="/village-directory" replace />} />
        <Route path="/annual-report" element={<PageSuspense><AnnualReport /></PageSuspense>} />
        <Route path="/annual-report/:reportId" element={<PageSuspense><AnnualReportDetail /></PageSuspense>} />

        {/* 7. Join Hands & Take Action / Support */}
        <Route path="/membership" element={<PageSuspense><Membership /></PageSuspense>} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/support" element={<Navigate to="/donate" replace />} />
        <Route path="/contact" element={<PageSuspense><Contact /></PageSuspense>} />

        {/* Auth & Profile -> Frontend Branded Login/Signup with SSO Handoff */}
        <Route path="/login" element={<PageSuspense><SignIn /></PageSuspense>} />
        <Route path="/signin" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<PageSuspense><SignUp /></PageSuspense>} />
        <Route path="/register" element={<Navigate to="/signup" replace />} />
        <Route path="/profile" element={<RedirectToManagementPortal path="/member-dashboard" />} />
        <Route path="/member/profile" element={<Navigate to="/profile" replace />} />
        <Route path="/member-dashboard" element={<RedirectToManagementPortal path="/member-dashboard" />} />

        {/* Legacy redirect: /join → /membership */}
        <Route path="/join" element={<Navigate to="/membership" replace />} />
      </Route>

      {/* ── Admin Portal -> Direct bridge to NGO Management System ── */}
      <Route path="/admin/login" element={<Navigate to="/login" replace />} />
      <Route path="/admin" element={<RedirectToManagementPortal path="/admin-dashboard" />} />
      <Route path="/admin/*" element={<RedirectToManagementPortal path="/admin-dashboard" />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/* ------------------------------------------------------------------ */
/* App root                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AdminProvider>
            <AppRoutes />
            <Toaster position="bottom-right" richColors closeButton />
          </AdminProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
