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
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
