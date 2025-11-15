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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        <nav className="fixed top-0 left-0 right-0 bg-transparent py-4 sm:py-6" style={{ zIndex: 40 }}>
          <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-gray-800 p-2 rounded-full border border-white/10">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent truncate">
                  {user.name || 'Abid Dasurkar'}
                </span>
                <span className="text-xs text-gray-400 font-medium">Frontend Developer</span>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-20 sm:h-28" />
      </>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
          isScrolled
            ? `${isDark ? 'bg-gray-900/90 border-white/10 shadow-purple-500/20' : 'bg-white/90 border-gray-200/50 shadow-gray-200/50'} shadow-2xl py-3 border-b backdrop-blur-2xl`
            : `${isDark ? 'bg-transparent' : 'bg-transparent'} py-4 sm:py-6`
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group relative flex-shrink-0"
            onMouseEnter={() => setIsHovered('logo')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm transition-all duration-700 ${
                  isHovered === 'logo' ? 'opacity-75 scale-110' : 'opacity-0 scale-95'
                }`}
              />

              {/* Main Logo Container */}
              <div
                className={`relative p-2 rounded-full border transition-all duration-500 ${
                  isDark
                    ? 'bg-gray-900 border-white/10 group-hover:border-cyan-400/30'
                    : 'bg-white border-gray-200/50 group-hover:border-cyan-400/50'
                }`}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span
                className={`text-base sm:text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-200 group-hover:to-purple-300 group-hover:translate-x-1 truncate`}
              >
                {user.name || 'Abid Dasurkar'}
              </span>
              <span
                className={`text-xs font-medium transition-all duration-500 ${
                  isDark
                    ? 'text-gray-400 group-hover:text-cyan-300'
                    : 'text-gray-600 group-hover:text-cyan-500'
                }`}
              >
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center space-x-1 backdrop-blur-xl rounded-2xl px-3 py-2 border ${
              isDark
                ? 'bg-gray-800/60 border-white/10 shadow-2xl shadow-black/40'
                : 'bg-white/70 border-gray-200/50 shadow-gray-200/40'
            }`}
          >
            {navLinks.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-500 group min-w-[100px] justify-center ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-gray-900'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onMouseEnter={() => setIsHovered(path)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {/* Animated Background Layer */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                      isActive
                        ? isDark
                          ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/40 shadow-lg shadow-cyan-500/20'
                          : 'bg-gradient-to-r from-cyan-100/50 to-purple-100/50 border border-cyan-300/50 shadow-md shadow-cyan-300/20'
                        : isDark
                        ? 'group-hover:bg-white/10 border border-transparent'
                        : 'group-hover:bg-gray-200/30 border border-transparent'
                    }`}
                  />

                  {/* Icon */}
                  <Icon
                    className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-300 scale-110'
                        : isDark
                        ? 'text-gray-400 group-hover:text-cyan-200 group-hover:scale-110'
                        : 'text-gray-500 group-hover:text-cyan-600 group-hover:scale-110'
                    }`}
                  />

                  {/* Text */}
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle + Mobile Menu Container */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-3 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative ${
                isDark
                  ? 'bg-gray-800/70 border-white/10 hover:bg-gray-700/70'
                  : 'bg-white/70 border-gray-200/50 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle dark mode"
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-md transition-all duration-500 ${
                  isDark
                    ? 'opacity-0 group-hover:opacity-40'
                    : 'opacity-0 group-hover:opacity-30'
                } scale-95 group-hover:scale-105`}
              />

              {/* Icon Container */}
              <div className="relative z-10 transform transition-all duration-500">
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-3 rounded-2xl backdrop-blur-xl border transition-all duration-500 group relative ${
                isDark
                  ? 'bg-gray-800/70 border-white/10 hover:bg-gray-700/70'
                  : 'bg-white/70 border-gray-200/50 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle mobile menu"
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-md transition-all duration-500 ${
                  isMobileMenuOpen
                    ? isDark
                      ? 'opacity-60 scale-105'
                      : 'opacity-50 scale-105'
                    : isDark
                    ? 'opacity-0 scale-95 group-hover:opacity-40 group-hover:scale-105'
                    : 'opacity-0 scale-95 group-hover:opacity-30 group-hover:scale-105'
                }`}
              />

              {/* Icon Container */}
              <div className="relative z-10 transform transition-all duration-500">
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 sm:w-6 sm:h-6 scale-110 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                ) : (
                  <Menu
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}
                  />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`flex flex-col border-t mt-4 rounded-3xl shadow-2xl mx-4 overflow-hidden backdrop-blur-2xl transition-transform duration-300 ${
              isDark
                ? 'bg-gray-900/98 border-white/10'
                : 'bg-white/95 border-gray-200/50'
            } ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}
          >
            {navLinks.map(({ path, label, icon: Icon }, index) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 text-base transition-all duration-200 group overflow-hidden ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-gray-900'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  }}
                >
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? isDark
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-l-4 border-cyan-400'
                          : 'bg-gradient-to-r from-cyan-100/50 to-purple-100/50 border-l-4 border-cyan-500'
                        : isDark
                        ? 'group-hover:bg-white/10 border-l-4 border-transparent'
                        : 'group-hover:bg-gray-200/30 border-l-4 border-transparent'
                    }`}
                  />

                  {/* Icon */}
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? 'text-cyan-300 scale-110'
                        : isDark
                        ? 'text-gray-400 group-hover:text-cyan-200 group-hover:scale-110 group-hover:translate-x-1'
                        : 'text-gray-500 group-hover:text-cyan-600 group-hover:scale-110 group-hover:translate-x-1'
                    }`}
                  />

                  {/* Text */}
                  <span className="relative z-10 font-semibold transition-all duration-300 group-hover:translate-x-2">
                    {label}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className={`absolute right-4 sm:right-6 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg ${
                        isDark ? 'shadow-cyan-400/50' : 'shadow-cyan-300/50'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Dynamic Spacer */}
      <div className={`transition-all duration-700 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-28'}`} />
    </>
  );
};

export default Navbar;