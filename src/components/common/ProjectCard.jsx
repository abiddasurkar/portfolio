import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Zap, Star, Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ project, viewMode = 'grid', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  const Icon = project.icon;

  const baseCard = `rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border backdrop-blur-xl ${className}`;

  const themeCard = isDark
    ? 'bg-gray-900/60 border-white/10 hover:border-cyan-400/30'
    : 'bg-white/60 border-gray-200/50 hover:border-cyan-400/50';

  if (viewMode === 'list') {
    return (
      <div
        className={`${baseCard} ${themeCard} flex flex-col sm:flex-row items-start gap-6 cursor-pointer group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Section */}
        <div className="flex-shrink-0 relative">
          <div
            className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 ${isHovered ? 'scale-110' : ''
              }`}
          />
          <div
            className={`relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transition-all duration-500 ${isHovered ? 'rotate-6 scale-110' : ''
              } group-hover:shadow-lg group-hover:shadow-cyan-500/25`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Title + Meta */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3
                className={`text-xl font-bold transition-all duration-500 ${isHovered
                    ? 'bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent'
                    : isDark
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
              >
                {project.title}
              </h3>

              <div
                className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                {project.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                )}
                {project.featured && (
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
            </div>

            <p
              className={`leading-relaxed line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech
              .split(', ')
              .slice(0, 6)
              .map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 ${isDark
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/30'
                      : 'bg-cyan-100/50 text-cyan-700 border-cyan-300/50 hover:bg-cyan-200/50 hover:border-cyan-400/50'
                    }`}
                >
                  {tech}
                </span>
              ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 text-sm group/highlight ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
              >
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5 group-hover/highlight:scale-110 transition-transform duration-300" />
                <span
                  className={`transition-colors duration-300 ${isDark
                      ? 'group-hover/highlight:text-white'
                      : 'group-hover/highlight:text-gray-900'
                    }`}
                >
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 pt-2">
            <div
              className={`flex items-center gap-2 font-medium text-sm transition-all duration-500 ${isDark ? 'text-cyan-400' : 'text-cyan-600'
                } ${isHovered ? 'translate-x-2' : ''}`}
            >
              <span>View details</span>
              <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg border transition-all duration-300 ${isDark
                      ? 'bg-gray-800/50 border-white/10 text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-cyan-400/30'
                      : 'bg-gray-200/50 border-gray-300/50 text-gray-600 hover:text-gray-900 hover:bg-gray-300/50 hover:border-cyan-400/50'
                    }`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg border transition-all duration-300 ${isDark
                      ? 'bg-gray-800/50 border-white/10 text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-purple-400/30'
                      : 'bg-gray-200/50 border-gray-300/50 text-gray-600 hover:text-gray-900 hover:bg-gray-300/50 hover:border-purple-400/50'
                    }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- GRID VIEW ---
  return (
    <div
      className={`${baseCard} ${themeCard} overflow-hidden cursor-pointer group relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Gradient Strip */}
      <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 ${isHovered ? 'scale-110' : ''
                  }`}
              />
              <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''
                  } group-hover:shadow-lg group-hover:shadow-cyan-500/25`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-bold transition-all duration-500 ${isHovered
                    ? 'bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent'
                    : isDark
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
              >
                {project.title}
              </h3>
              <div
                className={`flex items-center gap-3 mt-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                {project.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>
                )}
                {project.featured && (
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`p-1.5 rounded-lg transition-all duration-300 ${isDark
                    ? 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-cyan-500/20'
                    : 'bg-gray-200/50 text-gray-600 hover:text-gray-900 hover:bg-cyan-100/50'
                  }`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`p-1.5 rounded-lg transition-all duration-300 ${isDark
                    ? 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-purple-500/20'
                    : 'bg-gray-200/50 text-gray-600 hover:text-gray-900 hover:bg-purple-100/50'
                  }`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed line-clamp-3 transition-all duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'
            } group-hover:line-clamp-none`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.split(', ').slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-300 ${isDark
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/30'
                  : 'bg-cyan-100/50 text-cyan-700 border-cyan-300/50 hover:bg-cyan-200/50 hover:border-cyan-400/50'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 text-sm group/highlight ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5 group-hover/highlight:scale-110 transition-transform duration-300" />
              <span
                className={`transition-colors duration-300 ${isDark
                    ? 'group-hover/highlight:text-white'
                    : 'group-hover/highlight:text-gray-900'
                  }`}
              >
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between pt-2 border-t ${isDark ? 'border-white/10' : 'border-gray-200/50'
            }`}
        >
          <div
            className={`flex items-center gap-2 font-medium text-sm transition-all duration-500 ${isDark ? 'text-cyan-400' : 'text-cyan-600'
              } ${isHovered ? 'translate-x-2' : ''}`}
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {project.status && (
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.status === 'Completed'
                  ? isDark
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : 'bg-green-100/50 text-green-700 border-green-300/50'
                  : project.status === 'In Progress'
                    ? isDark
                      ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      : 'bg-yellow-100/50 text-yellow-700 border-yellow-300/50'
                    : isDark
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : 'bg-blue-100/50 text-blue-700 border-blue-300/50'
                }`}
            >
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
