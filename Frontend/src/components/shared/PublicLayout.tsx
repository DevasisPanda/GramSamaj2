import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <img
          src="/aird-logo.png"
          alt=""
          aria-hidden
          className="h-14 w-14 animate-pulse object-contain"
        />
        <span className="animate-pulse text-sm text-ink/40">Loading...</span>
      </div>
    </div>
  );
}

/**
 * Public layout — wraps all public pages with Header + Footer + ScrollToTop.
 * Child pages are rendered via React Router's <Outlet> inside a <Suspense>
 * boundary so lazy loading works seamlessly.
 */
export function PublicLayout() {
  return (
    <div className="relative min-h-screen max-w-full overflow-x-hidden">
      {/* Fixed Background — Rich artwork background per client request */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div
          className="absolute -inset-x-2 -bottom-2 -top-20 bg-cover bg-no-repeat opacity-80"
          style={{
            backgroundImage: "url('/site-bg.jpg')",
            backgroundPosition: 'center -50px',
          }}
        />
        {/* Soft ambient overlay to ensure text contrast across all device displays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#F8FAF5]/30 to-[#F8FAF5]/45" />
      </div>

      <ScrollToTop />
      <Header />
      <main id="main-content" className="relative z-0 max-w-full overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
