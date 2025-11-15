import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Zap,
  Star,
  Calendar,
  X,
  DollarSign,
  BookOpen,
  ShoppingCart,
  User,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/* -------------------------
   Icon mapping helper
--------------------------- */
const IconFromName = ({ name, className = 'w-5 h-5 text-white' }) => {
  const map = {
    DollarSign: <DollarSign className={className} />,
    BookOpen: <BookOpen className={className} />,
    ShoppingCart: <ShoppingCart className={className} />,
    User: <User className={className} />,
  };
  return map[name] ?? <span className={className} aria-hidden>🔷</span>;
};

/* -------------------------
   ProjectCard Component (grid & list)
--------------------------- */
const ProjectCard = ({ project, viewMode = 'grid', onOpenDetails }) => {
  const [hover, setHover] = useState(false);
  const { isDark } = useTheme();

  if (!project) return null;

  const cardBase = `rounded-2xl border backdrop-blur-xl transition-shadow duration-300 ${
    isDark ? 'bg-gray-900/60 border-white/10' : 'bg-white/60 border-gray-200/50'
  }`;

  // Render common content
  const Content = () => (
    <div className={`p-6 ${viewMode === 'grid' ? 'space-y-5' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              <IconFromName name={project.icon} className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`text-lg font-semibold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <div className={`flex items-center gap-3 mt-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 flex-shrink-0" />
                  <span>{project.date}</span>
                </div>
              )}
              {project.featured && (
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className={`${isDark ? 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/40' : 'bg-gray-200/50 text-gray-600 hover:bg-gray-300/50'} p-1.5 rounded-lg transition-colors`}
              aria-label="Open GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className={`${isDark ? 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/40' : 'bg-gray-200/50 text-gray-600 hover:bg-gray-300/50'} p-1.5 rounded-lg transition-colors`}
              aria-label="Open live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'} line-clamp-3`}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech?.split(', ').slice(0, 6).map((t, i) => (
          <span
            key={i}
            className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
              isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-cyan-100/50 border-cyan-300 text-cyan-700'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="space-y-2">
          {project.highlights.slice(0, 2).map((h, idx) => (
            <div key={idx} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{h}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className={`flex items-center justify-between pt-2 border-t ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails?.(project);
          }}
          className={`inline-flex items-center gap-2 font-medium text-sm ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} transition-colors`}
          aria-label={`Open details for ${project.title}`}
        >
          <span>{viewMode === 'list' ? 'View details' : 'View Project'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {project.status && (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
              project.status === 'Completed'
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
  );

  // Grid view with gradient strip
  if (viewMode === 'grid') {
    return (
      <article
        role="article"
        className={`group ${cardBase} overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => onOpenDetails?.(project)}
      >
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        <Content />
      </article>
    );
  }

  // List view
  return (
    <article
      role="article"
      className={`${cardBase} cursor-pointer transition-transform duration-300 hover:scale-[1.01]`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpenDetails?.(project)}
    >
      <Content />
    </article>
  );
};

/* -------------------------
   Project Modal (animated) - FIXED CENTERING
--------------------------- */
const ProjectModal = ({ project, isDark, open, onClose, onPreview }) => {
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60"
            style={{ zIndex: 9998 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container - FIXED TO VIEWPORT */}
          <motion.div
            key="modal-container"
            className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto"
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border backdrop-blur-xl my-8 ${
                isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'
              }`}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
            >
              {/* Header */}
              <div className={`flex items-start justify-between p-6 border-b ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
                <div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h2>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                    {project.category}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-md transition flex-shrink-0 ${
                    isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body - Scrollable */}
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Description */}
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed`}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech?.split(', ').map((t, i) => (
                      <span
                        key={i}
                        className={`text-sm px-3 py-1.5 rounded-md border ${
                          isDark
                            ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
                            : 'bg-cyan-100/50 border-cyan-300 text-cyan-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h3 className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Key features
                    </h3>
                    <div className="mt-3 space-y-2">
                      {project.highlights.map((h, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div
                  className={`grid grid-cols-2 gap-4 p-4 rounded-md ${
                    isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
                  }`}
                >
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Status</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.status}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Date</p>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`flex gap-3 p-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border transition-colors ${
                      isDark
                        ? 'bg-gray-800/50 border-white/10 text-gray-300 hover:bg-gray-700/50'
                        : 'bg-gray-200/50 border-gray-300 text-gray-700 hover:bg-gray-300/50'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}

                {project.liveUrl && (
                  <button
                    onClick={onPreview}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Preview Website
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

/* -------------------------
   Website Preview Modal - FIXED CENTERING
--------------------------- */
const WebsitePreviewModal = ({ project, isDark, open, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open, onClose]);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60"
            style={{ zIndex: 9998 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container - FIXED TO VIEWPORT */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden border backdrop-blur-xl flex flex-col ${
                isDark ? 'bg-gray-900/95 border-white/10' : 'bg-white/95 border-gray-200'
              }`}
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header */}
              <div className={`flex items-center justify-between p-4 border-b flex-shrink-0 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.liveUrl}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    Open Full
                  </a>
                  <button
                    onClick={onClose}
                    className={`p-2 rounded-md transition ${
                      isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    aria-label="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* iframe Container */}
              <div className="flex-1 relative bg-white overflow-hidden">
                {loading && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800/60">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-4 border-cyan-400 border-t-purple-400 rounded-full animate-spin" />
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Loading website…
                      </p>
                    </div>
                  </div>
                )}

                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  onLoad={handleLoad}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export { ProjectCard, ProjectModal, WebsitePreviewModal };
export default ProjectCard;