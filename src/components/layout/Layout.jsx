import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';
import { useTheme } from '../../context/ThemeContext';

const Layout = () => {
  const location = useLocation();
  const { isDark, mounted } = useTheme();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // For soft page transition overlay
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Small debounced route change guard so overlay shows briefly
  useEffect(() => {
    setIsPageLoaded(false);
    setIsTransitioning(true);

    // show overlay then reveal new page
    const overlayTimer = setTimeout(() => {
      setIsPageLoaded(true);
      setIsTransitioning(false);
      if (isFirstLoad) setIsFirstLoad(false);
    }, 220); // 220ms small fade for polish

    // Scroll to top on route change except when there's a hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => clearTimeout(overlayTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // If theme provider hasn't mounted, render simplified layout to avoid flicker
  if (!mounted) {
    return (
      <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <Navbar />
        <div className="flex-grow" />
        <Footer />
      </div>
    );
  }

  return (
    <div
      className={`font-sans min-h-screen flex flex-col relative overflow-hidden transition-colors duration-700 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900'
      }`}
    >
      {/* Background orbs + particles - LOWEST Z-INDEX */}
      <div className="fixed -z-50 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slower" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-random"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${15 + Math.random() * 20}s`
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-slower" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-500/20 rounded-full animate-float-random"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${15 + Math.random() * 20}s`
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Page Transition Overlay - Z-30 (below modals at Z-40 and Z-50) */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <div
          className={`w-full h-full ${
            isDark
              ? 'bg-gradient-to-br from-black/75 via-cyan-800/30 to-purple-900/30'
              : 'bg-gradient-to-br from-white/80 via-cyan-50/30 to-purple-50/30'
          }`}
        />
      </div>

      {/* Main content with accent border glow */}
      <main
        className={`flex-grow transition-all duration-700 ${
          isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div
          className={`mx-auto transition-shadow transition-colors duration-500 h-full ${
            // Accent glow border — subtle, theme-aware
            isDark
              ? 'ring-1 ring-cyan-500/10 hover:ring-cyan-500/20'
              : 'ring-0 hover:ring-cyan-400/10'
          }`}
        >
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enhanced Scroll-to-top (theme-aware) */}
      <ScrollToTop />

      {/* Small accessibility helper: announce route changes to screen readers */}
      <RouteChangeAnnouncer pathname={location.pathname} />

      {/* Inline CSS for custom keyframes and utility animations */}
      <style jsx>{`
        /* Floating orbs */
        @keyframes float-slow {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(6px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes float-slower {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-14px) translateX(-8px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
          100% {
            transform: scale(1);
            opacity: 0.95;
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 14s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        /* tiny random floating particles */
        @keyframes float-random {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.9;
          }
        }
        .animate-float-random {
          animation: float-random linear infinite;
        }

        /* soft overlay shimmer for cards / strips (used elsewhere) */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.6;
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s linear infinite;
        }

        /* Focus outline reset for aesthetics (keep a11y focus-visible in your global styles) */
        :global(.no-focus-outline) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

/**
 * Small SR-only announcer to help screen readers note route changes.
 * It's intentionally tiny and non-invasive.
 */
const RouteChangeAnnouncer = ({ pathname }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    // Create a short announcement describing the route
    const name =
      pathname === '/' ? 'Home' : pathname.replace('/', '').replace('-', ' ');
    setMessage(`Navigated to ${name}`);
    const t = setTimeout(() => setMessage(''), 1500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <p aria-live="polite" className="sr-only" role="status">
      {message}
    </p>
  );
};

export default Layout;