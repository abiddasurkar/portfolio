import React, { useState } from 'react';
import {
  MapPin, Mail, Github, Linkedin, Download, Calendar, Zap, ExternalLink,
  Award, Briefcase, GraduationCap, Code, Star, Phone, Sparkles
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

  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 3);

  return (
    <div className={`relative min-h-screen py-8 sm:py-12 overflow-hidden transition-colors duration-300 ${isDark
      ? 'dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'
      : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}>
      {/* 🌟 Enhanced Animated Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDark ? '' : 'opacity-60'}`}>
        <div className={`absolute w-80 h-80 rounded-full blur-3xl top-20 left-10 animate-float-slow ${isDark
          ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
          : 'bg-gradient-to-r from-cyan-400/15 to-purple-400/15'
          }`} />
        <div className={`absolute w-96 h-96 rounded-full blur-3xl top-60 right-0 animate-float-slower ${isDark
          ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
          : 'bg-gradient-to-r from-purple-400/15 to-pink-400/15'
          }`} />
        <div className={`absolute w-64 h-64 rounded-full blur-3xl bottom-10 left-1/3 animate-pulse-slow ${isDark
          ? 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5'
          : 'bg-gradient-to-r from-blue-400/10 to-cyan-400/10'
          }`} />

        {/* Grid Overlay */}
        <div className={`absolute inset-0 bg-grid-pattern bg-grid-size ${isDark ? 'opacity-20' : 'opacity-10'
          } [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🎯 Profile Hero Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border transition-colors duration-300 ${isDark
          ? 'dark:bg-gray-900/90 dark:border-white/10'
          : 'bg-white/80 border-gray-200/50'
          }`}>
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 h-24 sm:h-28 md:h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 -mt-12 sm:-mt-16">

              {/* Profile Image Container */}
              <div className="flex flex-col items-center lg:items-start lg:flex-shrink-0">
                <div className="relative group">
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500" />

                  {!imageError ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500 ${isDark ? 'border-gray-900' : 'border-white'
                        }`}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 shadow-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold transform group-hover:scale-105 transition-all duration-500 ${isDark ? 'border-gray-900' : 'border-white'
                      }`}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  {/* Online Status Indicator */}
                  <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-cyan-400 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 shadow-lg ${isDark ? 'border-gray-900' : 'border-white'
                    }`} />
                </div>

                {/* Quick Contact Info */}
                <div className="flex flex-col items-center lg:items-start gap-2 mt-4 lg:mt-6 w-full">
                  <div className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 backdrop-blur-sm ${isDark
                    ? 'dark:bg-gray-800/80 dark:text-gray-300'
                    : 'bg-gray-200/80 text-gray-700'
                    }`}>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <a
                    href={`mailto:${user.email}`}
                    className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm border ${isDark
                      ? 'dark:text-gray-300 dark:bg-gray-800/80 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10 dark:border-white/10'
                      : 'text-gray-700 bg-gray-200/80 hover:text-cyan-600 hover:bg-cyan-100/50 border-gray-300/50'
                      }`}
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{user.email}</span>
                  </a>
                  {user.phone && (
                    <a
                      href={`tel:${user.phone}`}
                      className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm border ${isDark
                        ? 'dark:text-gray-300 dark:bg-gray-800/80 dark:hover:text-cyan-300 dark:hover:bg-pink-500/10 dark:border-white/10'
                        : 'text-gray-700 bg-gray-200/80 hover:text-cyan-600 hover:bg-pink-100/50 border-gray-300/50'
                        }`}
                    >
                      <Phone className="w-4 h-4 text-pink-400" />
                      <span className="text-sm">{user.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4 sm:mb-6">
                  {/* Name */}
                  <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 drop-shadow-lg ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {user.name}
                  </h1>

                  {/* Title */}
                  <div className="mb-4 sm:mb-5">
                    <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-3 drop-shadow-md">
                      Frontend Developer
                    </p>

                    {/* Professional Badge */}
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm border transition-colors duration-300 ${isDark
                      ? 'dark:bg-cyan-500/20 dark:border-cyan-400/40'
                      : 'bg-cyan-200/50 border-cyan-400/50'
                      }`}>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                      <span className="text-cyan-200 text-sm sm:text-base font-medium">Available for Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 border hover:transform hover:-translate-y-0.5 backdrop-blur-sm ${isDark
                      ? 'dark:bg-gray-800/90 dark:text-white dark:border-cyan-500/30 dark:hover:shadow-lg dark:hover:border-cyan-400/50'
                      : 'bg-gray-200/80 text-gray-900 border-cyan-400/50 hover:shadow-lg hover:border-cyan-400/70'
                      }`}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm sm:text-base font-medium">GitHub</span>
                  </a>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 border hover:transform hover:-translate-y-0.5 backdrop-blur-sm ${isDark
                      ? 'dark:bg-gray-800/90 dark:text-white dark:border-purple-500/30 dark:hover:shadow-lg dark:hover:border-purple-400/50'
                      : 'bg-gray-200/80 text-gray-900 border-purple-400/50 hover:shadow-lg hover:border-purple-400/70'
                      }`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm sm:text-base font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={user.resumeUrl}
                    download
                    className="flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 group hover:transform hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base font-medium">Download Resume</span>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  <div className={`text-center p-3 sm:p-4 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${isDark
                    ? 'dark:bg-gray-800/90 dark:border-cyan-500/20'
                    : 'bg-gray-200/80 border-cyan-400/30'
                    }`}>
                    <div className="text-lg sm:text-xl font-bold text-cyan-300">{experience.length}+</div>
                    <div className={`text-xs ${isDark ? 'text-cyan-100' : 'text-cyan-700'}`}>Experiences</div>
                  </div>
                  <div className={`text-center p-3 sm:p-4 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${isDark
                    ? 'dark:bg-gray-800/90 dark:border-purple-500/20'
                    : 'bg-gray-200/80 border-purple-400/30'
                    }`}>
                    <div className="text-lg sm:text-xl font-bold text-purple-300">{projects?.length || 10}+</div>
                    <div className={`text-xs ${isDark ? 'text-purple-100' : 'text-purple-700'}`}>Projects</div>
                  </div>
                  <div className={`text-center p-3 sm:p-4 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${isDark
                    ? 'dark:bg-gray-800/90 dark:border-pink-500/20'
                    : 'bg-gray-200/80 border-pink-400/30'
                    }`}>
                    <div className="text-lg sm:text-xl font-bold text-pink-300">{certifications.length}+</div>
                    <div className={`text-xs ${isDark ? 'text-pink-100' : 'text-pink-700'}`}>Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📖 About Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border transition-all duration-500 ${isDark
          ? 'dark:bg-gray-900/80 dark:border-white/10 dark:hover:border-white/20'
          : 'bg-white/80 border-gray-200/50 hover:border-gray-300/70'
          }`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            About Me
          </h2>
          <p className={`leading-relaxed text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>{user.bio}</p>
        </div>

        {/* 💼 Experience Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border transition-colors duration-300 ${isDark
          ? 'dark:bg-gray-900/80 dark:border-white/10'
          : 'bg-white/80 border-gray-200/50'
          }`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 sm:mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Professional Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-6 sm:pl-8 border-l-2 transition-all duration-500 group ${isDark
                  ? 'dark:border-cyan-500/30 dark:hover:border-cyan-400'
                  : 'border-cyan-400/30 hover:border-cyan-400'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ${isDark ? 'border-gray-900' : 'border-white'
                  }`} />

                <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 mb-1 ${isDark
                  ? 'text-white dark:group-hover:text-cyan-300'
                  : 'text-gray-900 group-hover:text-cyan-600'
                  }`}>
                  {exp.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{exp.company}</p>

                <div className={`flex flex-wrap gap-2 sm:gap-3 mt-2 text-xs sm:text-sm backdrop-blur-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  <div className={`flex items-center gap-1 rounded-lg px-2 sm:px-3 py-1 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                    }`}>
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className={`rounded-lg px-2 sm:px-3 py-1 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                    }`}>
                    {exp.location}
                  </div>
                  <div className={`rounded-lg px-2 sm:px-3 py-1 font-medium ${isDark ? 'dark:bg-green-500/10 dark:text-green-400' : 'bg-green-100/50 text-green-700'
                    }`}>
                    {exp.employmentType}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className={`flex items-start gap-2 sm:gap-3 group/achievement text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0 mt-1 group-hover/achievement:scale-110 transition-transform duration-300" />
                      <span className={`transition-colors duration-300 ${isDark ? 'dark:group-hover/achievement:text-white' : 'group-hover/achievement:text-gray-900'
                        }`}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  {exp.technologies.slice(0, 8).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${isDark
                        ? 'dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20 dark:hover:bg-cyan-500/20 dark:hover:border-cyan-400/30'
                        : 'bg-cyan-100/50 text-cyan-700 border-cyan-400/30 hover:bg-cyan-200/50 hover:border-cyan-400'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Skills & Education Tabs */}
      <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border transition-colors duration-300 ${isDark
        ? 'dark:bg-gray-900/80 dark:border-white/10'
        : 'bg-white/80 border-gray-200/50'
        }`}>
        {/* Tab Headers */}
        <div className={`flex border-b ${isDark ? 'dark:border-gray-800' : 'border-gray-200'}`}>
          {['skills', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all duration-500 relative overflow-hidden text-sm sm:text-base ${activeTab === tab
                ? isDark
                  ? 'dark:text-white dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border-b-2 dark:border-cyan-400'
                  : 'text-gray-900 bg-gradient-to-r from-cyan-200/50 to-purple-200/50 border-b-2 border-cyan-500'
                : isDark
                  ? 'dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
            >
              {tab === 'skills' ? 'Technical Skills' : 'Education'}
              {activeTab === tab && (
                <div className={`absolute inset-0 animate-pulse ${isDark ? 'dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-purple-500/10' : 'bg-gradient-to-r from-cyan-200/30 to-purple-200/30'}`} />
              )}
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
                    className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-500 group ${isDark
                      ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                      : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{group.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {group.items.map((skill, idx) => (
                        <span
                          key={idx}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-2 sm:px-3 py-1 rounded-lg text-xs border transition-all duration-300 flex items-center gap-1 ${hoveredSkill === skill
                            ? isDark
                              ? 'dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border-cyan-400/50 dark:text-white scale-105'
                              : 'bg-gradient-to-r from-cyan-200 to-purple-200 border-cyan-400 text-gray-900 scale-105'
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
                    className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-500 group ${isDark
                      ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                      : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                      }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                        <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{edu.institution}</p>
                        <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4 backdrop-blur-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                          <div className={`flex items-center gap-1 rounded-lg px-2 sm:px-3 py-1 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                            }`}>
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className={`rounded-lg px-2 sm:px-3 py-1 ${isDark ? 'dark:bg-white/5' : 'bg-gray-200/50'
                            }`}>
                            {edu.location}
                          </div>
                          <div className={`rounded-lg px-2 sm:px-3 py-1 font-medium ${isDark ? 'dark:bg-green-500/10 dark:text-green-400' : 'bg-green-100/50 text-green-700'
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

        {/* 🏆 Certifications Section */}
        <div className={`backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border transition-colors duration-300 ${isDark
          ? 'dark:bg-gray-900/80 dark:border-white/10'
          : 'bg-white/80 border-gray-200/50'
          }`}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayedCerts.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-500 group hover:transform hover:-translate-y-1 ${isDark
                    ? 'dark:bg-gray-800/50 dark:border-white/10 dark:hover:border-cyan-400/30'
                    : 'bg-gray-100/50 border-gray-300/50 hover:border-cyan-400/50'
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isDark ? '' : 'shadow-md'
                      }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold mb-1 text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
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
                      className={`flex items-center gap-2 text-xs sm:text-sm font-medium group/link ${isDark
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
                className={`px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 border font-medium text-sm sm:text-base ${isDark
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
    </div>
  );
};

export default AboutPage;