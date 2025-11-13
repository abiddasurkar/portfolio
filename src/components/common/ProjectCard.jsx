import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Zap, Star, Calendar } from 'lucide-react';

const ProjectCard = ({ project, viewMode = 'grid', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  if (viewMode === 'list') {
    return (
      <div
        className={`bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 flex flex-col sm:flex-row items-start gap-6 cursor-pointer group border border-white/10 hover:border-cyan-400/30 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Icon */}
        <div className="flex-shrink-0 relative">
          <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`} />
          <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transition-all duration-500 ${isHovered ? 'rotate-6 scale-110' : ''} group-hover:shadow-lg group-hover:shadow-cyan-500/25`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Header with title and metadata */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3 className={`text-xl font-bold transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent' : 'text-white'}`}>
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400">
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

            <p className="text-gray-300 leading-relaxed line-clamp-2">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.split(', ').slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-lg text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 group/highlight">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5 group-hover/highlight:scale-110 transition-transform duration-300" />
                <span className="group-hover/highlight:text-white transition-colors duration-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <div className={`flex items-center gap-2 text-cyan-400 font-medium text-sm transition-all duration-500 ${isHovered ? 'translate-x-2' : ''}`}>
              <span>View details</span>
              <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Project Links */}
            <div className="flex items-center gap-2 ml-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-white/10 hover:border-cyan-400/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-white/10 hover:border-purple-400/30"
                  onClick={(e) => e.stopPropagation()}
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

  // Enhanced Grid View
  return (
    <div
      className={`bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer group border border-white/10 hover:border-cyan-400/30 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient accent with animation */}
      <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      <div className="p-6 space-y-5">
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`} />
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''} group-hover:shadow-lg group-hover:shadow-cyan-500/25`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent' : 'text-white'}`}>
                {project.title}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
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

          {/* Quick Action Links */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.split(', ').slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg text-xs font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.split(', ').length > 5 && (
            <span className="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs font-medium border border-purple-500/20">
              +{project.tech.split(', ').length - 5} more
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-gray-300 group/highlight">
              <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5 group-hover/highlight:scale-110 transition-transform duration-300" />
              <span className="group-hover/highlight:text-white transition-colors duration-300">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className={`flex items-center gap-2 text-cyan-400 font-medium text-sm transition-all duration-500 ${isHovered ? 'translate-x-2' : ''}`}>
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Status Badge */}
          {project.status && (
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : project.status === 'In Progress'
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}>
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;