import { lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AdminProvider, useAdmin } from '@/contexts/AdminContext';
import { PublicLayout } from '@/components/shared/PublicLayout';
import { AdminLayout } from '@/components/shared/AdminLayout';
import { queryClient } from '@/lib/queryClient';

/* ------------------------------------------------------------------ */
/* Eager — landing pages that must load instantly                      */
/* ------------------------------------------------------------------ */
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Philosophy from '@/pages/public/Philosophy';
import Kranti from '@/pages/public/Kranti';
import Donate from '@/pages/public/Donate';
import AdminLogin from '@/pages/admin/AdminLogin';

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

/* ------------------------------------------------------------------ */
/* Lazy — admin panels                                                 */
/* ------------------------------------------------------------------ */
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const KrantiDocument   = lazy(() => import('@/pages/public/KrantiDocument'));
const PhilosophyFull   = lazy(() => import('@/pages/public/PhilosophyFull'));
const HumanLife        = lazy(() => import('@/pages/public/HumanLife'));
const TrusteeProfile   = lazy(() => import('@/pages/public/TrusteeProfile'));
const AdminVillagers = lazy(() => import('@/pages/admin/AdminVillagers'));
const AdminCalendar  = lazy(() => import('@/pages/admin/AdminCalendar'));
const AdminMedia     = lazy(() => import('@/pages/admin/AdminMedia'));

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
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

function AdminGate({ children }: { children: ReactNode }) {
  const { user } = useAdmin();
  if (!user) return <Navigate to="/admin/login" replace />;
  return <AdminLayout>{children}</AdminLayout>;
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

        {/* About Us */}
        <Route path="/about" element={<About />} />
        <Route path="/about/trust" element={<PageSuspense><AboutTrust /></PageSuspense>} />
        <Route path="/about/vision-mission" element={<PageSuspense><VisionMission /></PageSuspense>} />
        <Route path="/about/aim-objectives" element={<PageSuspense><AimObjectives /></PageSuspense>} />

        {/* Trustee */}
        <Route path="/trustee/journey" element={<PageSuspense><JourneyTrustee /></PageSuspense>} />
        <Route path="/trustee/board" element={<PageSuspense><BoardTrustees /></PageSuspense>} />
        <Route path="/trustee/board-2020-2025" element={<PageSuspense><BoardTrustees2020 /></PageSuspense>} />
        {/* Legacy slug (file was named "2020-2026"; document heading says FY 2020-25) */}
        <Route path="/trustee/board-2020-2026" element={<Navigate to="/trustee/board-2020-2025" replace />} />
        <Route path="/strategy" element={<PageSuspense><Strategy /></PageSuspense>} />

        {/* KRANTI */}
        <Route path="/kranti" element={<Kranti />} />
        <Route path="/kranti/document" element={<PageSuspense><KrantiDocument /></PageSuspense>} />
        <Route path="/kranti/decentralized-governance" element={<PageSuspense><DecentralizedGov /></PageSuspense>} />
        <Route path="/development-in-india" element={<PageSuspense><DevelopmentIndia /></PageSuspense>} />

        {/* Philosophy */}
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/philosophy/full" element={<PageSuspense><PhilosophyFull /></PageSuspense>} />
        <Route path="/human-and-humanity" element={<PageSuspense><HumanLife /></PageSuspense>} />
        <Route path="/trustee/profile" element={<PageSuspense><TrusteeProfile /></PageSuspense>} />
        <Route path="/concept" element={<PageSuspense><Concept /></PageSuspense>} />
        <Route path="/initiation" element={<PageSuspense><Initiation /></PageSuspense>} />
        <Route path="/teachings" element={<PageSuspense><Teachings /></PageSuspense>} />
        <Route path="/development-car" element={<PageSuspense><DevelopmentCar /></PageSuspense>} />
        <Route path="/history" element={<PageSuspense><History /></PageSuspense>} />

        {/* Activities */}
        <Route path="/activities" element={<PageSuspense><Activities /></PageSuspense>} />
        <Route path="/gallery" element={<PageSuspense><Gallery /></PageSuspense>} />
        <Route path="/videos" element={<PageSuspense><VideosPage /></PageSuspense>} />
        <Route path="/donors" element={<PageSuspense><DonorsPage /></PageSuspense>} />
        <Route path="/village-directory" element={<PageSuspense><VillageDirPage /></PageSuspense>} />
        <Route path="/annual-report" element={<PageSuspense><AnnualReport /></PageSuspense>} />
        <Route path="/annual-report/:reportId" element={<PageSuspense><AnnualReportDetail /></PageSuspense>} />

        {/* Get Involved */}
        <Route path="/membership" element={<PageSuspense><Membership /></PageSuspense>} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<PageSuspense><Contact /></PageSuspense>} />

        {/* Legacy redirect: /join → /membership */}
        <Route path="/join" element={<Navigate to="/membership" replace />} />
      </Route>

      {/* ── Admin ── */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={<AdminGate><PageSuspense><AdminDashboard /></PageSuspense></AdminGate>}
      />
      <Route
        path="/admin/villagers"
        element={<AdminGate><PageSuspense><AdminVillagers /></PageSuspense></AdminGate>}
      />
      <Route
        path="/admin/calendar"
        element={<AdminGate><PageSuspense><AdminCalendar /></PageSuspense></AdminGate>}
      />
      <Route
        path="/admin/media"
        element={<AdminGate><PageSuspense><AdminMedia /></PageSuspense></AdminGate>}
      />

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AdminProvider>
          <AppRoutes />
          <Toaster position="bottom-right" richColors closeButton />
        </AdminProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
