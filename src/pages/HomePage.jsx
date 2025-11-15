import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Mail, Phone, TrendingUp, Target, Layers,
  ArrowRight, Sparkles, Code, Globe, Zap, ArrowLeft
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/profileData';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay || projects.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  // Get prev, current, next project indices
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const stats = [
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Performance Improvement',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Document Processing Accuracy',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Layers,
      value: '16+',
      label: 'Legacy Pages Modernized',
      color: 'from-orange-500 to-red-500',
    }
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-20 right-10 animate-float-slower" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse-slow" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border transition-all duration-300 backdrop-blur-sm ${isDark
                  ? 'bg-gray-800/50 border-white/10 text-gray-300'
                  : 'bg-white/70 border-gray-300 text-gray-700'
                }`}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {user.name}
            </h1>

            <p className={`text-lg sm:text-xl md:text-2xl font-semibold mb-3 ${isDark ? 'text-cyan-100' : 'text-cyan-700'}`}>
              {user.title}
            </p>

            <p className={`text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {user.bio}
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 text-xs sm:text-sm">
              <div className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 border ${isDark ? 'bg-gray-800/50 border-white/10 text-gray-300' : 'bg-white border-gray-300 text-gray-700'}`}>
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{user.location}</span>
              </div>

              <a
                href={`mailto:${user.email}`}
                className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 border transition-all duration-300 ${isDark
                    ? 'bg-gray-800/50 border-white/10 hover:border-cyan-400/30 text-gray-300 hover:text-white'
                    : 'bg-white border-gray-300 hover:border-cyan-400/50 text-gray-700 hover:text-gray-900'
                  }`}
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate hidden sm:inline">{user.email}</span>
                <span className="truncate sm:hidden text-xs">Email</span>
              </a>

              <div className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 border ${isDark ? 'bg-gray-800/50 border-white/10 text-gray-300' : 'bg-white border-gray-300 text-gray-700'}`}>
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                <span className="truncate hidden sm:inline">{user.phone}</span>
                <span className="truncate sm:hidden text-xs">Phone</span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/projects')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold border transition-all duration-300 ${isDark
                    ? 'bg-gray-800/50 border-white/20 text-gray-300 hover:bg-gray-700/50 hover:border-cyan-400/30 hover:text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-400 hover:text-gray-900'
                  }`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION REMOVED */}

      {/* FEATURED PROJECTS CAROUSEL - 3 VISIBLE */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className={`text-sm sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore my latest work
            </p>
          </div>

          {/* 3-Project Carousel Container */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              {/* LEFT PROJECT (30% size) */}
              <div className="hidden lg:block flex-shrink-0 w-1/5 transform scale-75 opacity-60 hover:opacity-80 transition-all duration-300">
                <ProjectCardCompact project={projects[prevIndex]} isDark={isDark} />
              </div>

              {/* CENTER PROJECT (Large - 100% interaction) */}
              <div className="flex-shrink-0 w-full lg:w-3/5">
                <ProjectCardLarge
                  project={projects[currentIndex]}
                  isDark={isDark}
                  onNavigate={(path) => navigate(path)}
                />
              </div>

              {/* RIGHT PROJECT (30% size) */}
              <div className="hidden lg:block flex-shrink-0 w-1/5 transform scale-75 opacity-60 hover:opacity-80 transition-all duration-300">
                <ProjectCardCompact project={projects[nextIndex]} isDark={isDark} />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 z-20 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-cyan-600 text-white' : 'bg-white hover:bg-cyan-500 text-gray-900'
                }`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={goToNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 z-20 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-cyan-600 text-white' : 'bg-white hover:bg-cyan-500 text-gray-900'
                }`}
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-purple-500'
                    : `w-2 h-2 ${isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'}`
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className={`text-center mt-4 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {currentIndex + 1} / {projects.length}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Large Center Card
const ProjectCardLarge = ({ project, isDark, onNavigate }) => {
  const colors = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-purple-500'
  ];
  const color = colors[Math.random() * colors.length | 0];

  return (
    <div className={`relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl group cursor-pointer transition-all duration-500 hover:shadow-2xl ${isDark ? 'bg-gray-900/60' : 'bg-white/60'
      }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
      <div className={`absolute top-0 left-0 w-1 h-32 bg-gradient-to-b ${color} rounded-r-full`} />

      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="inline-block mb-3">
            <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border ${project.status === 'Completed'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
              }`}>
              {project.status}
            </span>
          </div>
          <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
            {project.highlights?.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className={`flex items-center gap-1.5 text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech?.split(', ').slice(0, 3).map((tech, idx) => (
              <span key={idx} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs border ${isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' : 'bg-cyan-100/50 border-cyan-300 text-cyan-700'
                }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay with CTA */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <button
          onClick={() => onNavigate('/projects')}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transform scale-90 group-hover:scale-100 transition-transform"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// Compact Side Cards
const ProjectCardCompact = ({ project, isDark }) => {
  const colors = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-purple-500'
  ];
  const color = colors[Math.random() * colors.length | 0];

  return (
    <div className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl ${isDark ? 'bg-gray-900/60' : 'bg-white/60'
      }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
        <div>
          <h4 className={`text-sm sm:text-base font-bold line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h4>
          <p className={`text-xs line-clamp-1 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.category}
          </p>
        </div>
        <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${project.status === 'Completed'
            ? 'bg-green-500/10 border-green-500/30 text-green-400'
            : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
          }`}>
          {project.status}
        </div>
      </div>
    </div>
  );
};

export default HomePage;