import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = () => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  // Handle page load and route change animations
  useEffect(() => {
    setIsPageLoaded(false);
    
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
      if (isFirstLoad) {
        setIsFirstLoad(false);
      }
    }, 150);
    
    // Scroll to top on route change except when there's a hash in URL
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Main Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Particles */}
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
      </div>

      <Navbar />
      
      <main className={`flex-grow transition-all duration-700 ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}>
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Enhanced Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;