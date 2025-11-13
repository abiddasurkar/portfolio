import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronUp, Code, Heart } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAppContext();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      url: user.github, 
      label: 'GitHub',
      color: 'hover:text-cyan-300'
    },
    { 
      icon: Linkedin, 
      url: user.linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-300'
    },
    { 
      icon: Mail, 
      url: `mailto:${user.email}`, 
      label: 'Email',
      color: 'hover:text-purple-300'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-white/10">
      {/* Simple gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple centered layout */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-gray-800/50 border border-white/10 text-gray-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-gray-700/50 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright - Minimal */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center gap-2 flex-wrap justify-center">
              <span>© {currentYear} {user.name || 'Abid Dasurkar'}</span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> 
                <Code className="w-4 h-4 text-cyan-400" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;