import React, { useState } from 'react';
import {
  MapPin, Mail, Github, Linkedin, Download, Calendar, Zap, ExternalLink,
  Award, Briefcase, GraduationCap, Code, Star, Phone, Sparkles,
  Heart, Target, Rocket, Cpu, Database, Palette, Globe, Server
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { experience, education, certifications, projects, skills } from '../data/profileData';

const AboutPage = () => {
  const { user } = useAppContext();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('skills');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 3);

  // Mouse move effect for interactive background
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Fixed Quick Stats data with explicit color classes
  const quickStats = [
    {
      count: '3',
      label: 'Experiences',
      color: 'cyan',
      icon: Briefcase,
      borderClass: isDark ? 'border-cyan-500/20 hover:border-cyan-400/40' : 'border-cyan-400/30 hover:border-cyan-400/50',
      textClass: isDark ? 'text-cyan-100' : 'text-cyan-700',
      iconColor: 'text-cyan-400',
      countColor: 'text-cyan-300'
    },
    {
      count: projects?.length || 10,
      label: 'Projects',
      color: 'purple',
      icon: Target,
      borderClass: isDark ? 'border-purple-500/20 hover:border-purple-400/40' : 'border-purple-400/30 hover:border-purple-400/50',
      textClass: isDark ? 'text-purple-100' : 'text-purple-700',
      iconColor: 'text-purple-400',
      countColor: 'text-purple-300'
    },
    {
      count: certifications.length,
      label: 'Certifications',
      color: 'pink',
      icon: Award,
      borderClass: isDark ? 'border-pink-500/20 hover:border-pink-400/40' : 'border-pink-400/30 hover:border-pink-400/50',
      textClass: isDark ? 'text-pink-100' : 'text-pink-700',
      iconColor: 'text-pink-400',
      countColor: 'text-pink-300'
    }
  ];

  return (
    <div
      className={`relative min-h-screen py-8 sm:py-12 overflow-hidden transition-colors duration-500 ${isDark
        ? 'dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
        }`}
      onMouseMove={handleMouseMove}
    >
      {/* 🎨 Enhanced Interactive Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDark ? '' : 'opacity-70'}`}>
        {/* Animated Gradient Orbs */}
        <div className={`absolute w-96 h-96 rounded-full blur-3xl top-20 left-10 animate-float-slow ${isDark
          ? 'bg-gradient-to-r from-cyan-500/15 to-purple-500/15'
          : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
          }`} />
        <div className={`absolute w-80 h-80 rounded-full blur-3xl top-60 right-0 animate-float-slower ${isDark
          ? 'bg-gradient-to-r from-purple-500/15 to-pink-500/15'
          : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
          }`} />
        <div className={`absolute w-64 h-64 rounded-full blur-3xl bottom-10 left-1/3 animate-pulse-slow ${isDark
          ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10'
          : 'bg-gradient-to-r from-blue-400/15 to-cyan-400/15'
          }`} />
        <div className={`absolute w-72 h-72 rounded-full blur-3xl top-1/4 right-1/4 animate-bounce-slow ${isDark
          ? 'bg-gradient-to-r from-pink-500/10 to-orange-500/10'
          : 'bg-gradient-to-r from-pink-400/15 to-orange-400/15'
          }`} />

        {/* Interactive Mouse Follow Effect */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)',
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            opacity: 0.6
          }}
        />

        {/* Animated Grid Pattern */}
        <div className={`absolute inset-0 bg-grid-pattern bg-grid-size ${isDark ? 'opacity-[0.15]' : 'opacity-[0.08]'
          } [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`} />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float ${isDark ? 'bg-cyan-400/40' : 'bg-cyan-500/50'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Animated Border Glow */}
        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl animate-border-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🎯 Enhanced Profile Hero Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border-2 transition-all duration-500 group hover:shadow-3xl ${isDark
          ? 'dark:bg-gray-900/80 dark:border-cyan-500/20 dark:hover:border-purple-500/30'
          : 'bg-white/80 border-cyan-400/20 hover:border-purple-400/30'
          }`}>

          {/* Animated Gradient Header */}
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 h-24 sm:h-28 md:h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            {/* Floating Icons in Header */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white/10 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${8 + Math.random() * 4}s`
                  }}
                >
                  <Code className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 -mt-12 sm:-mt-16">

              {/* Enhanced Profile Image Container */}
              <div className="flex flex-col items-center lg:items-start lg:flex-shrink-0">
                <div className="relative group">
                  {/* Multi-layer Gradient Border */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 animate-pulse" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500" />

                  {!imageError ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500 z-10 ${isDark ? 'border-gray-900' : 'border-white'
                        }`}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 shadow-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold transform group-hover:scale-105 transition-all duration-500 z-10 ${isDark ? 'border-gray-900' : 'border-white'
                      }`}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  {/* Animated Status Indicator */}
                  <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-cyan-400 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 shadow-lg z-20 animate-ping-slow ${isDark ? 'border-gray-900' : 'border-white'
                    }`} />

                  {/* Floating Sparkles */}
                  <div className="absolute -top-2 -left-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
                  </div>
                </div>

                {/* Enhanced Contact Info */}
                <div className="flex flex-col items-center lg:items-start gap-3 mt-4 lg:mt-6 w-full">
                  <div className={`flex items-center gap-2 text-sm rounded-xl px-4 py-2 backdrop-blur-sm border transition-all duration-300 group/contact ${isDark
                    ? 'dark:bg-gray-800/80 dark:text-gray-300 dark:border-cyan-500/20 dark:hover:border-cyan-400/40'
                    : 'bg-gray-200/80 text-gray-700 border-cyan-400/20 hover:border-cyan-400/40'
                    }`}>
                    <MapPin className="w-4 h-4 text-cyan-400 group-hover/contact:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{user.location}</span>
                  </div>
                  <a
                    href={`mailto:${user.email}`}
                    className={`flex items-center gap-2 text-sm rounded-xl px-4 py-2 transition-all duration-300 backdrop-blur-sm border group/email ${isDark
                      ? 'dark:text-gray-300 dark:bg-gray-800/80 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10 dark:border-purple-500/20 dark:hover:border-purple-400/40'
                      : 'text-gray-700 bg-gray-200/80 hover:text-cyan-600 hover:bg-cyan-100/50 border-purple-400/20 hover:border-purple-400/40'
                      }`}
                  >
                    <Mail className="w-4 h-4 text-purple-400 group-hover/email:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{user.email}</span>
                  </a>
                  {user.phone && (
                    <a
                      href={`tel:${user.phone}`}
                      className={`flex items-center gap-2 text-sm rounded-xl px-4 py-2 transition-all duration-300 backdrop-blur-sm border group/phone ${isDark
                        ? 'dark:text-gray-300 dark:bg-gray-800/80 dark:hover:text-pink-300 dark:hover:bg-pink-500/10 dark:border-pink-500/20 dark:hover:border-pink-400/40'
                        : 'text-gray-700 bg-gray-200/80 hover:text-pink-600 hover:bg-pink-100/50 border-pink-400/20 hover:border-pink-400/40'
                        }`}
                    >
                      <Phone className="w-4 h-4 text-pink-400 group-hover/phone:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{user.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Enhanced Info Section */}
              <div className="flex-1 text-center lg:text-left relative z-20">
                <div className="mb-4 sm:mb-6 relative z-20">
                  {/* Name with Gradient Text Effect - Increased z-index and removed background-clip */}
                  <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient-x relative z-30`}>
                    {user.name}
                  </h1>

                  {/* Title with Icon */}
                  <div className="mb-4 sm:mb-5 relative z-20">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 relative z-20">
                      <Code className="w-6 h-6 text-cyan-400 animate-pulse relative z-20" />
                      <p className="text-xl sm:text-2xl text-cyan-300 font-semibold drop-shadow-md relative z-20">
                        Frontend Developer
                      </p>
                    </div>

                    {/* Enhanced Professional Badge */}
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 relative z-20 ${isDark
                      ? 'dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border-cyan-400/40 dark:hover:shadow-cyan-500/25'
                      : 'bg-gradient-to-r from-cyan-200/50 to-purple-200/50 border-cyan-400/50 hover:shadow-cyan-400/25'
                      }`}>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 animate-spin-slow" />
                      <span className="text-cyan-200 text-sm sm:text-base font-medium">Available for Opportunities</span>
                      <Rocket className="w-4 h-4 text-purple-300 animate-bounce" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-20">
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 rounded-xl transition-all duration-500 border hover:transform hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm group/social relative z-20 ${isDark
                      ? 'dark:bg-gray-800/90 dark:text-white dark:border-cyan-500/30 dark:hover:shadow-cyan-500/25 dark:hover:border-cyan-400/50'
                      : 'bg-gray-200/80 text-gray-900 border-cyan-400/50 hover:shadow-cyan-400/25 hover:border-cyan-400/70'
                      }`}
                  >
                    <Github className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base font-medium">GitHub</span>
                  </a>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 rounded-xl transition-all duration-500 border hover:transform hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm group/social relative z-20 ${isDark
                      ? 'dark:bg-gray-800/90 dark:text-white dark:border-purple-500/30 dark:hover:shadow-purple-500/25 dark:hover:border-purple-400/50'
                      : 'bg-gray-200/80 text-gray-900 border-purple-400/50 hover:shadow-purple-400/25 hover:border-purple-400/70'
                      }`}
                  >
                    <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={user.resumeUrl}
                    download
                    className="flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 group hover:transform hover:-translate-y-1 hover:scale-105 relative z-20"
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base font-medium">Download Resume</span>
                  </a>
                </div>

                {/* Fixed Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 relative z-20">
                  {quickStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className={`text-center p-3 sm:p-4 rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 group/stat relative z-20 ${isDark
                          ? `dark:bg-gray-800/90 ${stat.borderClass}`
                          : `bg-gray-200/80 ${stat.borderClass}`
                          }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-2 ${stat.iconColor} group-hover/stat:scale-110 transition-transform`} />
                        <div className={`text-lg sm:text-xl font-bold ${stat.countColor}`}>{stat.count}+</div>
                        <div className={`text-xs ${stat.textClass}`}>{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎯 Integrated About & Experience Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border-2 transition-all duration-500 group hover:shadow-3xl ${isDark
          ? 'dark:bg-gray-900/80 dark:border-cyan-500/20 dark:hover:border-purple-500/30'
          : 'bg-white/80 border-cyan-400/20 hover:border-purple-400/30'
          }`}>

          {/* Unified Header */}
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 animate-pulse" />
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-purple-300 animate-bounce" />
                </div>
                3 Years of Digital Excellence
              </h2>
              <p className="text-sm sm:text-base text-cyan-100">
                Frontend Specialist • React & Next.js Expert • Performance Optimizer
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* About Content */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  My Journey in Tech
                </h3>
              </div>

              <div className={`leading-relaxed text-base sm:text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {user.bio}
              </div>

              {/* Passion & Skills Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Technical Expertise */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
                    <Sparkles className="w-5 h-5" />
                    Technical Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React & Next.js', 'TypeScript', 'Performance Optimization',
                      'Modern UI/UX', 'CI/CD Pipelines', 'Micro Frontends',
                      'State Management', 'REST APIs', 'OAuth 2.0', 'Docker',
                      'Agile Methodology', 'Code Reviews', 'Mentoring'
                    ].map((passion, index) => (
                      <span
                        key={passion}
                        className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer ${isDark
                          ? 'dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-purple-500/10 dark:text-cyan-300 dark:border-cyan-500/20 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/25'
                          : 'bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-700 border-cyan-400/30 hover:border-cyan-400 hover:shadow-cyan-400/25'
                          }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {passion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3-Year Milestones */}
                <div>
                  <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                    <Target className="w-5 h-5" />
                    3-Year Impact
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '3+', label: 'Years Experience', icon: Calendar, color: 'cyan' },
                      { value: '16+', label: 'Apps Modernized', icon: Code, color: 'purple' },
                      { value: '40%', label: 'Performance Gain', icon: Zap, color: 'green' },
                      { value: '60%', label: 'Deployment Speed', icon: Rocket, color: 'pink' }
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className={`p-3 rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 group/stat ${isDark
                          ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-500/30'
                          : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/30'
                          }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <stat.icon className={`w-4 h-4 mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'} group-hover/stat:scale-110 transition-transform`} />
                        <div className={`text-lg font-bold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>{stat.value}</div>
                        <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="border-t border-gray-600/40 pt-8 sm:pt-12">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Professional Timeline
                  </h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${isDark
                  ? 'dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30'
                  : 'bg-cyan-100/50 text-cyan-700 border-cyan-400/30'
                  }`}>
                  3 Years Experience
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative pl-6 sm:pl-8 border-l-2 transition-all duration-500 group/exp hover:scale-[1.02] ${isDark
                      ? 'dark:border-cyan-500/30 dark:hover:border-cyan-400'
                      : 'border-cyan-400/30 hover:border-cyan-400'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Enhanced Timeline Dot */}
                    <div className={`absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 shadow-lg group-hover/exp:scale-110 group-hover/exp:animate-pulse transition-all duration-300 ${isDark ? 'border-gray-900' : 'border-white'
                      }`} />

                    <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 mb-1 group-hover/exp:text-cyan-300 ${isDark
                      ? 'text-white'
                      : 'text-gray-900'
                      }`}>
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{exp.company}</p>

                    <div className={`flex flex-wrap gap-2 sm:gap-3 mt-2 text-xs sm:text-sm backdrop-blur-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <div className={`flex items-center gap-1 rounded-lg px-2 sm:px-3 py-1 transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                        }`}>
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className={`rounded-lg px-2 sm:px-3 py-1 transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                        }`}>
                        {exp.location}
                      </div>
                      <div className={`rounded-lg px-2 sm:px-3 py-1 font-medium transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-green-500/10 dark:text-green-400' : 'bg-green-100/50 text-green-700'
                        }`}>
                        {exp.employmentType}
                      </div>
                    </div>

                    {/* Role Specializations */}
                    {exp.roles && (
                      <div className="mt-3">
                        <h4 className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
                          <Zap className="w-4 h-4 text-yellow-400" />
                          Role Focus
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.roles.map((role, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 ${isDark
                                ? 'dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20'
                                : 'bg-yellow-100/50 text-yellow-700 border-yellow-400/30'
                                }`}
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Achievements */}
                    <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                      <h4 className={`text-sm font-semibold flex items-center gap-2 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
                        <Award className="w-4 h-4 text-yellow-400" />
                        Key Achievements
                      </h4>
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className={`flex items-start gap-2 sm:gap-3 group/achievement text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0 group-hover/achievement:scale-150 transition-transform duration-300" />
                          <span className={`transition-all duration-300 group-hover/achievement:translate-x-2 ${isDark ? 'dark:group-hover/achievement:text-white' : 'group-hover/achievement:text-gray-900'
                            }`}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Stack */}
                    <div className="mt-4 sm:mt-5">
                      <h4 className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        <Code className="w-4 h-4" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.slice(0, 10).map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${isDark
                              ? 'dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20 dark:hover:bg-cyan-500/20 dark:hover:border-cyan-400/30'
                              : 'bg-cyan-100/50 text-cyan-700 border-cyan-400/30 hover:bg-cyan-200/50 hover:border-cyan-400'
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3-Year Career Progress */}
              <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-600/40">
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-lg font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
                    3-Year Career Journey
                  </h4>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {experience.length} Positions • Continuous Growth
                  </span>
                </div>

                {/* Timeline Visualization */}
                <div className="relative">
                  <div className={`w-full h-2 rounded-full mb-4 ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-1000"
                      style={{ width: '100%' }}
                    />
                  </div>

                  {/* Milestone Markers */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                  </div>
                </div>

                {/* Career Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className={`p-4 rounded-xl border text-center ${isDark
                    ? 'dark:bg-cyan-500/5 dark:border-cyan-500/20'
                    : 'bg-cyan-50 border-cyan-200'
                    }`}>
                    <div className="text-2xl font-bold text-cyan-400">2</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                  </div>
                  <div className={`p-4 rounded-xl border text-center ${isDark
                    ? 'dark:bg-purple-500/5 dark:border-purple-500/20'
                    : 'bg-purple-50 border-purple-200'
                    }`}>
                    <div className="text-2xl font-bold text-purple-400">16+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Apps Modernized</div>
                  </div>
                  <div className={`p-4 rounded-xl border text-center ${isDark
                    ? 'dark:bg-pink-500/5 dark:border-pink-500/20'
                    : 'bg-pink-50 border-pink-200'
                    }`}>
                    <div className="text-2xl font-bold text-pink-400">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Developers Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎯 Enhanced Skills & Education Tabs */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border-2 transition-all duration-500 group hover:shadow-3xl ${isDark
          ? 'dark:bg-gray-900/80 dark:border-pink-500/20 dark:hover:border-cyan-500/30'
          : 'bg-white/80 border-pink-400/20 hover:border-cyan-400/30'
          }`}>

          {/* Enhanced Tab Headers */}
          <div className={`flex border-b ${isDark ? 'dark:border-gray-800' : 'border-gray-200'}`}>
            {['skills', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all duration-500 relative overflow-hidden text-sm sm:text-base group/tab ${activeTab === tab
                  ? isDark
                    ? 'dark:text-white dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border-b-2 dark:border-cyan-400'
                    : 'text-gray-900 bg-gradient-to-r from-cyan-200/50 to-purple-200/50 border-b-2 border-cyan-500'
                  : isDark
                    ? 'dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
              >
                {tab === 'skills' ? 'Technical Skills' : 'Education'}
                <div className={`absolute bottom-0 left-0 w-0 group-hover/tab:w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300`} />
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === 'skills' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((group, i) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={i}
                      className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 transition-all duration-500 group/skill hover:scale-105 hover:shadow-xl ${isDark
                        ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                        : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover/skill:scale-110 group-hover/skill:rotate-12 transition-all duration-500 shadow-lg">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className={`text-base sm:text-lg font-bold group-hover/skill:text-cyan-300 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{group.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {group.items.map((skill, idx) => (
                          <span
                            key={idx}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`px-2 sm:px-3 py-1 rounded-lg text-xs border transition-all duration-300 flex items-center gap-1 hover:scale-110 hover:-translate-y-0.5 ${hoveredSkill === skill
                              ? isDark
                                ? 'dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border-cyan-400/50 dark:text-white shadow-lg'
                                : 'bg-gradient-to-r from-cyan-200 to-purple-200 border-cyan-400 text-gray-900 shadow-lg'
                              : isDark
                                ? 'dark:bg-gray-900/80 dark:text-gray-300 dark:border-white/10 dark:hover:border-cyan-400/30'
                                : 'bg-gray-200/50 text-gray-700 border-gray-300/50 hover:border-cyan-400'
                              }`}
                          >
                            <span className="text-xs">{skill.icon}</span>
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu) => {
                  const Icon = edu.icon;
                  return (
                    <div
                      key={edu.id}
                      className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 transition-all duration-500 group/edu hover:scale-105 hover:shadow-xl ${isDark
                        ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                        : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                        }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover/edu:scale-110 group-hover/edu:rotate-12 transition-all duration-500 shadow-lg">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg sm:text-xl font-bold mb-1 group-hover/edu:text-cyan-300 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                          <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{edu.institution}</p>
                          <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4 backdrop-blur-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            <div className={`flex items-center gap-1 rounded-lg px-2 sm:px-3 py-1 transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                              }`}>
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className={`rounded-lg px-2 sm:px-3 py-1 transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                              }`}>
                              {edu.location}
                            </div>
                            <div className={`rounded-lg px-2 sm:px-3 py-1 font-medium transition-all duration-300 hover:scale-105 ${isDark ? 'dark:bg-green-500/10 dark:text-green-400' : 'bg-green-100/50 text-green-700'
                              }`}>
                              {edu.score}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 🏆 Enhanced Certifications Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 transition-all duration-500 group hover:shadow-3xl ${isDark
          ? 'dark:bg-gray-900/80 dark:border-cyan-500/20 dark:hover:border-purple-500/30'
          : 'bg-white/80 border-cyan-400/20 hover:border-purple-400/30'
          }`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400 animate-bounce" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayedCerts.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 transition-all duration-500 group/cert hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${isDark
                    ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                    : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover/cert:scale-110 group-hover/cert:rotate-12 transition-all duration-500 shadow-lg ${isDark ? '' : 'shadow-md'
                      }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold mb-1 text-sm sm:text-base group-hover/cert:text-cyan-300 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {cert.name}
                      </h3>
                      <p className={`text-xs sm:text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{cert.issuer}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}>{cert.date}</p>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-xs sm:text-sm font-medium group/link transition-all duration-300 hover:translate-x-1 ${isDark
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-cyan-600 hover:text-cyan-700'
                        }`}
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          {certifications.length > 3 && (
            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className={`px-6 py-2 sm:py-3 rounded-xl transition-all duration-500 border-2 font-medium text-sm sm:text-base hover:scale-105 hover:shadow-lg ${isDark
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border-cyan-500/20 hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/40'
                  : 'bg-gradient-to-r from-cyan-200/50 to-purple-200/50 text-cyan-600 border-cyan-400/30 hover:from-cyan-300/50 hover:to-purple-300/50 hover:border-cyan-500/50'
                  }`}
              >
                {showAllCerts ? 'Show Less' : `Show All ${certifications.length} Certifications`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.3); }
          50% { box-shadow: 0 0 40px rgba(168,85,247,0.4); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0,0,0.2,1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;