import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;