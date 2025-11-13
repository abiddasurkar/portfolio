import React, { useState } from 'react';
import {
  MapPin, Mail, Github, Linkedin, Download, Calendar, Zap, ExternalLink,
  Award, Briefcase, GraduationCap, Code, Star, Phone, Sparkles
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { experience, education, certifications, projects, skills } from '../data/profileData';

const AboutPage = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState('skills');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 3);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-8 sm:py-12 overflow-hidden">
      {/* 🌟 Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl top-60 right-0 animate-float-slower" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl bottom-10 left-1/3 animate-pulse-slow" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🎯 FIXED Profile Hero Section - Name & Title Now Prominent */}
        <div className="bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border border-white/10 relative">
          {/* Enhanced Gradient Header with Better Contrast */}
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 h-24 sm:h-28 md:h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 -mt-12 sm:-mt-16">

              {/* Enhanced Profile Image Container */}
              <div className="flex flex-col items-center lg:items-start lg:flex-shrink-0">
                <div className="relative group">
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500" />

                  {!imageError ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 border-gray-900 shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border-4 border-gray-900 shadow-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold transform group-hover:scale-105 transition-all duration-500">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-cyan-400 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-gray-900 shadow-lg" />
                </div>

                {/* Quick Contact Info - Mobile Optimized */}
                <div className="flex flex-col items-center lg:items-start gap-2 mt-4 lg:mt-6 w-full">
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/80 rounded-lg px-3 py-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <a
                    href={`mailto:${user.email}`}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-300 transition-colors duration-300 bg-gray-800/80 rounded-lg px-3 py-2 hover:bg-cyan-500/10"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{user.email}</span>
                  </a>
                  {user.phone && (
                    <a
                      href={`tel:${user.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-300 transition-colors duration-300 bg-gray-800/80 rounded-lg px-3 py-2 hover:bg-pink-500/10"
                    >
                      <Phone className="w-4 h-4 text-pink-400" />
                      <span className="text-sm">{user.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* FIXED Info Section - Name & Title Now Prominent */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4 sm:mb-6">
                  {/* Enhanced Name with Better Contrast */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                    {user.name}
                  </h1>

                  {/* Enhanced Title with Better Visibility */}
                  <div className="mb-4 sm:mb-5">
                    <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-3 drop-shadow-md">
                      Frontend Developer
                    </p>

                    {/* Professional Badge with Better Contrast */}
                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                      <span className="text-cyan-200 text-sm sm:text-base font-medium">Available for Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links with Better Spacing */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 bg-gray-800/90 text-white rounded-xl hover:shadow-lg hover:border-cyan-400/50 transition-all duration-300 border border-cyan-500/30 hover:transform hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm sm:text-base font-medium">GitHub</span>
                  </a>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-6 py-3 bg-gray-800/90 text-white rounded-xl hover:shadow-lg hover:border-purple-400/50 transition-all duration-300 border border-purple-500/30 hover:transform hover:-translate-y-0.5 backdrop-blur-sm"
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

                {/* Enhanced Quick Stats Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="text-center p-3 sm:p-4 bg-gray-800/90 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl font-bold text-cyan-300">{experience.length}+</div>
                    <div className="text-xs text-cyan-100">Experiences</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/90 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl font-bold text-purple-300">{projects?.length || 10}+</div>
                    <div className="text-xs text-purple-100">Projects</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/90 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl font-bold text-pink-300">{certifications.length}+</div>
                    <div className="text-xs text-pink-100">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📖 Enhanced About Section */}
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/10 hover:border-white/20 transition-all duration-500">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{user.bio}</p>
        </div>

        {/* 💼 Enhanced Experience Section */}
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 sm:mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Professional Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300" />

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">
                  {exp.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{exp.company}</p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-1 backdrop-blur-sm bg-white/5 rounded-lg px-2 sm:px-3 py-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-lg px-2 sm:px-3 py-1">
                    {exp.location}
                  </div>
                  <div className="backdrop-blur-sm bg-green-500/10 rounded-lg px-2 sm:px-3 py-1 text-green-400 font-medium">
                    {exp.employmentType}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300 group/achievement text-sm sm:text-base">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0 mt-1 group-hover/achievement:scale-110 transition-transform duration-300" />
                      <span className="group-hover/achievement:text-white transition-colors duration-300">
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
                      className="px-2 sm:px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Enhanced Skills & Education Tabs */}
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border border-white/10">
          {/* Premium Tab Headers */}
          <div className="flex border-b border-gray-800">
            {['skills', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all duration-500 relative overflow-hidden text-sm sm:text-base ${activeTab === tab
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab === 'skills' ? 'Technical Skills' : 'Education'}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
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
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">{group.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {group.items.map((skill, idx) => (
                          <span
                            key={idx}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`px-2 sm:px-3 py-1 bg-gray-900/80 text-gray-300 rounded-lg text-xs border transition-all duration-300 ${hoveredSkill === skill
                                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 text-white scale-105'
                                : 'border-white/10 hover:border-cyan-400/30'
                              }`}
                          >
                            {skill}
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
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degree}</h3>
                          <p className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">{edu.institution}</p>
                          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                            <div className="flex items-center gap-1 backdrop-blur-sm bg-white/5 rounded-lg px-2 sm:px-3 py-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="backdrop-blur-sm bg-white/5 rounded-lg px-2 sm:px-3 py-1">
                              {edu.location}
                            </div>
                            <div className="backdrop-blur-sm bg-green-500/10 rounded-lg px-2 sm:px-3 py-1 text-green-400 font-medium">
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

        {/* 🏆 Enhanced Certifications */}
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/10">
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
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-medium group/link"
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
                className="px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 rounded-xl hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/40 font-medium text-sm sm:text-base"
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