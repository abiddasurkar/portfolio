import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      hoverColor: 'dark:hover:text-white hover:text-gray-900'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      hoverColor: 'dark:hover:text-blue-400 hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'abiddasurkar@gmail.com',
      label: 'Email',
      hoverColor: 'dark:hover:text-cyan-300 hover:text-cyan-600'
    },
  ];

  return (
    <footer className={`relative transition-colors duration-300 ${'dark:bg-gray-900/50 bg-white/50 dark:backdrop-blur-xl backdrop-blur-lg dark:border-t dark:border-white/10 border-t border-gray-200/50'
      }`}>
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r dark:from-transparent dark:via-cyan-500/20 dark:to-transparent from-gray-200 via-cyan-400 to-gray-200"></div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`transition-all duration-300 ${hoverColor
                  } dark:text-gray-400 text-gray-600 group relative`}
              >
                {/* Hover Background Circle */}
                <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-purple-500/10 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-125"></div>

                {/* Icon */}
                <Icon className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </a>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-16 h-px dark:bg-gradient-to-r dark:from-cyan-500/30 dark:to-purple-500/30 bg-gradient-to-r from-cyan-300 to-purple-300"></div>

          {/* Copyright and Links */}
          <div className="text-center space-y-4">
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              © {currentYear} <span className="bg-gradient-to-r from-cyan-300 to-purple-400 dark:to-purple-300 bg-clip-text text-transparent font-semibold">Abid Dasurkar</span>. All rights reserved.
            </p>

            {/* Footer Links */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#privacy"
                className="dark:text-gray-400 text-gray-600 hover:dark:text-cyan-300 hover:text-cyan-600 transition-colors duration-300 text-xs font-medium"
              >
                Privacy
              </a>
              <span className="dark:text-gray-600 text-gray-300">•</span>
              <a
                href="#terms"
                className="dark:text-gray-400 text-gray-600 hover:dark:text-cyan-300 hover:text-cyan-600 transition-colors duration-300 text-xs font-medium"
              >
                Terms
              </a>
              <span className="dark:text-gray-600 text-gray-300">•</span>
              <a
                href="#sitemap"
                className="dark:text-gray-400 text-gray-600 hover:dark:text-cyan-300 hover:text-cyan-600 transition-colors duration-300 text-xs font-medium"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Scroll Indicator - Optional */}
          <div className="pt-4 text-center">
            <p className="dark:text-gray-500 text-gray-400 text-xs font-light tracking-wide">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;