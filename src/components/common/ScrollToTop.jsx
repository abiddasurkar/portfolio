import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 ${isDark
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg hover:shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:ring-cyan-300'
              : 'bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg hover:shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 focus:ring-cyan-200'
            }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;