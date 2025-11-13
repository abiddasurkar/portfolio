import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Mail, Code, Sparkles, Moon, Sun } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { user } = useAppContext();
  const { isDark, toggleTheme } = useTheme();

  // Handle scroll with throttling
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    setMounted(true);
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  if (!mounted) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 p-2 rounded-full border border-white/10">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  {user.name || 'Abid Dasurkar'}
                </span>
                <span className="text-xs text-gray-400 font-medium">Frontend Developer</span>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-28" />
      </>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? 'dark:bg-gray-900/90 bg-white/90 dark:shadow-purple-500/20 shadow-gray-200/50 py-3 border-b dark:border-white/10 border-gray-200/50 dark:backdrop-blur-2xl backdrop-blur-xl shadow-2xl'
          : 'bg-transparent dark:bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Enhanced Logo with Better Animations */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative"
            onMouseEnter={() => setIsHovered('logo')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm transition-all duration-700 ${isHovered === 'logo' ? 'opacity-75 scale-110' : 'opacity-0 scale-95'
                }`} />

              {/* Main Logo Container */}
              <div className="relative dark:bg-gray-900 bg-white p-2 rounded-full dark:border-white/10 border-gray-200/50 group-hover:dark:border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-500">
                <Sparkles className="w-5 h-5 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-200 group-hover:to-purple-300 group-hover:translate-x-1">
                {user.name || 'Abid Dasurkar'}
              </span>
              <span className="text-xs dark:text-gray-400 text-gray-600 font-medium transition-all duration-500 group-hover:dark:text-cyan-300 group-hover:text-cyan-500">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 dark:bg-gray-800/60 bg-white/70 backdrop-blur-xl rounded-2xl dark:border-white/10 border-gray-200/50 px-3 py-2 dark:shadow-2xl dark:shadow-black/40 shadow-gray-200/40">
            {navLinks.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-500 group min-w-[100px] justify-center ${isActive
                    ? 'dark:text-white text-gray-900'
                    : 'dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900'
                    }`}
                  onMouseEnter={() => setIsHovered(path)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {/* Animated Background Layer */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${isActive
                    ? 'dark:bg-gradient-to-r dark:from-cyan-500/30 dark:to-purple-500/30 bg-gradient-to-r from-cyan-100/50 to-purple-100/50 dark:border-cyan-500/40 border-cyan-300/50 dark:shadow-cyan-500/20 shadow-cyan-300/20 border dark:shadow-lg shadow-md'
                    : 'dark:group-hover:bg-white/10 group-hover:bg-gray-200/30 border border-transparent'
                    }`} />

                  {/* Gradient Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 transition-all duration-500 blur-lg group-hover:dark:opacity-25 group-hover:opacity-20 ${isHovered === path ? 'scale-105' : 'scale-100'
                    }`} />

                  {/* Icon with Enhanced Animation */}
                  <Icon className={`w-4 h-4 relative z-10 transition-all duration-300 ${isActive
                    ? 'text-cyan-300 scale-110'
                    : 'dark:text-gray-400 text-gray-500 dark:group-hover:text-cyan-200 group-hover:text-cyan-600 group-hover:scale-110'
                    }`} />

                  {/* Text */}
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">
                    {label}
                  </span>

                  {/* Active Indicator */}
                  {/* {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full dark:shadow-cyan-400/50 shadow-cyan-300/50 dark:shadow-lg shadow-md" />
                  )} */}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle + Mobile Menu Container */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl dark:bg-gray-800/70 bg-white/70 backdrop-blur-xl dark:border-white/10 border-gray-200/50 dark:hover:bg-gray-700/70 hover:bg-gray-100/70 transition-all duration-500 group relative"
              aria-label="Toggle dark mode"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-md transition-all duration-500 opacity-0 group-hover:dark:opacity-40 group-hover:opacity-30 scale-95 group-hover:scale-105`} />

              {/* Icon Container */}
              <div className="relative z-10 transform transition-all duration-500">
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400 scale-100" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 scale-100" />
                )}
              </div>
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-2xl dark:bg-gray-800/70 bg-white/70 backdrop-blur-xl dark:border-white/10 border-gray-200/50 dark:hover:bg-gray-700/70 hover:bg-gray-100/70 transition-all duration-500 group relative"
              aria-label="Toggle mobile menu"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-md transition-all duration-500 ${isMobileMenuOpen ? 'dark:opacity-60 opacity-50 scale-105' : 'opacity-0 scale-95 group-hover:dark:opacity-40 group-hover:opacity-30 group-hover:scale-105'
                }`} />

              {/* Icon Container */}
              <div className="relative z-10 transform transition-all duration-500">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 dark:text-white text-gray-900 scale-110" />
                ) : (
                  <Menu className="w-5 h-5 dark:text-gray-300 text-gray-700 dark:group-hover:text-white group-hover:text-gray-900 transition-colors duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${isMobileMenuOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
            }`}
        >
          <div className="flex flex-col dark:bg-gray-900/98 bg-white/95 backdrop-blur-2xl dark:border-t dark:border-white/10 border-t border-gray-200/50 mt-4 rounded-3xl shadow-2xl mx-4 overflow-hidden">
            {navLinks.map(({ path, label, icon: Icon }, index) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center gap-4 px-6 py-5 text-base transition-all duration-500 group overflow-hidden ${isActive
                    ? 'dark:text-white text-gray-900'
                    : 'dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900'
                    }`}
                  style={{
                    transitionDelay: `${isMobileMenuOpen ? index * 80 : 0}ms`,
                    transform: `translateX(${isMobileMenuOpen ? 0 : -20}px)`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 transition-all duration-500 ${isActive
                    ? 'dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 bg-gradient-to-r from-cyan-100/50 to-purple-100/50 dark:border-l-4 dark:border-cyan-400 border-l-4 border-cyan-500'
                    : 'dark:group-hover:bg-white/10 group-hover:bg-gray-200/30 border-l-4 border-transparent'
                    }`} />

                  {/* Ripple Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 transition-all duration-500 dark:group-hover:opacity-15 group-hover:opacity-10" />

                  {/* Icon with Enhanced Animation */}
                  <Icon className={`w-5 h-5 relative z-10 transition-all duration-300 ${isActive
                    ? 'text-cyan-300 scale-110'
                    : 'dark:text-gray-400 text-gray-500 dark:group-hover:text-cyan-200 group-hover:text-cyan-600 group-hover:scale-110 group-hover:translate-x-1'
                    }`} />

                  {/* Text */}
                  <span className="relative z-10 font-semibold transition-all duration-300 group-hover:translate-x-2">
                    {label}
                  </span>

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <div className="absolute right-6 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full dark:shadow-cyan-400/50 shadow-cyan-300/50 dark:shadow-lg shadow-md" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Dynamic Spacer with Smooth Transition */}
      <div className={`transition-all duration-700 ${isScrolled ? 'h-20' : 'h-28'
        }`} />
    </>
  );
};

export default Navbar;