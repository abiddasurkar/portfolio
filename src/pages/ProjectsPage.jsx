import React, { useState, useMemo } from 'react';
import {
  Search,
  Grid,
  List,
  Filter,
  X,
  ChevronDown,
  SearchX,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Tag
} from 'lucide-react';
import { projects } from '../data/profileData';
import { ProjectCard, ProjectModal, WebsitePreviewModal } from '../components/common/ProjectCard';
import { useAppContext } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';

const ProjectsPage = () => {
  const { user } = useAppContext();
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortOption, setSortOption] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isCarouselAutoPlay, setIsCarouselAutoPlay] = useState(true);

  // Modal state (unchanged)
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Categories with counts
  const categoriesWithCounts = useMemo(() => {
    const cats = projects.reduce((acc, project) => {
      const category = project.category || 'Other';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const allCount = projects.length;
    const categoryList = Object.entries(cats).map(([name, count]) => ({
      name,
      count
    }));

    return [
      { name: 'All', count: allCount },
      ...categoryList
    ];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    const sorted = [...filtered];
    if (sortOption === 'newest') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'oldest') {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === 'alphabetical') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortOption]);

  // Modal functions (unchanged)
  const openDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const openPreview = () => {
    setModalOpen(false);
    setPreviewOpen(true);
  };

  // Carousel functions
  React.useEffect(() => {
    if (!isCarouselAutoPlay || filteredProjects.length === 0) return;
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCarouselAutoPlay, filteredProjects.length]);

  const goToPreviousCarousel = () => {
    setIsCarouselAutoPlay(false);
    setCurrentCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToNextCarousel = () => {
    setIsCarouselAutoPlay(false);
    setCurrentCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const goToCarouselSlide = (index) => {
    setIsCarouselAutoPlay(false);
    setCurrentCarouselIndex(index);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortOption('newest');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All';

  // Integrated Project Card Component
  const IntegratedProjectCard = ({ project, viewMode = 'grid', onOpenDetails }) => {
    const isGrid = viewMode === 'grid';
    const isList = viewMode === 'list';

    return (
      <div
        onClick={() => onOpenDetails(project)}
        className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm border ${
          isDark 
            ? 'bg-gray-900/40 border-white/10 hover:border-cyan-500/30' 
            : 'bg-white/60 border-gray-200/50 hover:border-cyan-400/50'
        } ${
          isGrid 
            ? 'rounded-2xl p-6' 
            : isList 
            ? 'rounded-2xl p-6 flex gap-6 items-start' 
            : 'rounded-3xl p-8'
        }`}
      >
        {/* Header */}
        <div className={`${isList ? 'flex-1' : ''}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className={`font-bold line-clamp-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              } ${
                isGrid ? 'text-xl' : isList ? 'text-2xl' : 'text-3xl'
              }`}>
                {project.title}
              </h3>
              <p className={`mt-1 line-clamp-2 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              } ${isGrid ? 'text-sm' : 'text-base'}`}>
                {project.description}
              </p>
            </div>
            <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium border ${
              project.status === 'Completed'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech?.split(', ').slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded-lg text-xs border ${
                  isDark 
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' 
                    : 'bg-cyan-100/50 border-cyan-300 text-cyan-700'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.tech?.split(', ').length > 4 && (
              <span className={`px-2 py-1 rounded-lg text-xs ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                +{project.tech.split(', ').length - 4} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-between ${
            isList ? 'mt-4' : 'mt-6'
          }`}>
            <div className="flex items-center gap-4 text-xs">
              <span className={`flex items-center gap-1 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Calendar className="w-3 h-3" />
                {new Date(project.date).getFullYear()}
              </span>
              <span className={`flex items-center gap-1 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white' 
                      : 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700 hover:text-cyan-900'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* List view image */}
        {isList && project.image && (
          <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen py-10 sm:py-14 relative overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-200'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}
    >
      {/* Artistic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-80 h-80 rounded-full blur-3xl top-10 left-10 animate-float-slow ${
            isDark
              ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
              : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
          }`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl bottom-10 right-10 animate-float-slower ${
            isDark
              ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
              : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
          }`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4`}
          >
            My Projects
          </h1>
          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Explore my portfolio of modern web applications, showcasing design,
            performance, and scalability.
          </p>
        </div>

        {/* Unified Search & Projects Container */}
        <div
          className={`rounded-2xl shadow-lg backdrop-blur-2xl border transition-colors duration-500 ${
            isDark
              ? 'bg-gray-900/80 border-white/10'
              : 'bg-white/80 border-gray-200/50'
          }`}
        >
          {/* Search & Filters Section */}
          <div className="p-4 sm:p-6 border-b border-gray-600/40">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <div className="flex-1 relative">
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by name, tech, or description..."
                  className={`w-full pl-10 pr-10 py-3 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm text-sm sm:text-base transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/60 text-white placeholder-gray-400 border border-white/10'
                      : 'bg-white/60 text-gray-900 placeholder-gray-500 border border-gray-200'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-cyan-300'
                        : 'text-gray-500 hover:text-cyan-600'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* View & Filter Controls */}
              <div className="flex gap-2 sm:gap-3 justify-between sm:justify-start">
                <div
                  className={`flex gap-1 sm:gap-2 rounded-xl p-1 backdrop-blur-sm ${
                    isDark ? 'bg-gray-800/60' : 'bg-gray-100/70'
                  }`}
                >
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md'
                        : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md'
                        : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('carousel')}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      viewMode === 'carousel'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md'
                        : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                    }`}
                    title="Carousel View"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`px-4 py-2.5 flex items-center gap-2 font-medium rounded-xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/60 text-gray-300 hover:text-white hover:border-cyan-400/40 border-white/10'
                      : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:border-cyan-400/40 border-gray-300/60'
                  }`}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filters</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isFilterOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Filters Section */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-600/40 space-y-4 animate-slideDown">
                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Category
                  </label>
                  <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
                    <div className="flex gap-2 px-1 min-w-max">
                      {categoriesWithCounts.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                            selectedCategory === cat.name
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                              : isDark
                              ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {cat.name}
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-xs ${
                              selectedCategory === cat.name
                                ? 'bg-white/20 text-white'
                                : isDark
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sort Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Sort By
                    </label>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base backdrop-blur-sm ${
                        isDark
                          ? 'bg-gray-800/50 text-white border border-white/10'
                          : 'bg-white text-gray-800 border border-gray-300/50'
                      }`}
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="alphabetical">Alphabetical</option>
                    </select>
                  </div>

                  {hasActiveFilters && (
                    <div className="flex items-end">
                      <button
                        onClick={clearFilters}
                        className="px-4 py-2.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium border border-red-500/20"
                      >
                        <X className="w-4 h-4" />
                        Clear Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Results Summary */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span>Showing</span>
                <span className="font-semibold text-cyan-400">
                  {filteredProjects.length}
                </span>
                <span>of</span>
                <span className="font-semibold text-purple-400">
                  {projects.length}
                </span>
                <span>projects</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Display Section */}
          <div className="p-4 sm:p-6">
            {filteredProjects.length > 0 ? (
              <>
                {viewMode === 'carousel' ? (
                  // CAROUSEL VIEW
                  <div className="relative max-w-5xl mx-auto">
                    {/* Main Carousel */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/5 z-10" />

                      {/* Slides */}
                      <div className="relative w-full h-full">
                        {filteredProjects.map((project, index) => (
                          <div
                            key={project.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                              index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            onClick={() => openDetails(project)}
                          >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-30`} />

                            {/* Content */}
                            <div className={`relative h-full flex flex-col justify-between p-8 md:p-12 border border-white/10 rounded-3xl backdrop-blur-xl ${
                              isDark ? 'bg-gray-900/60' : 'bg-white/60'
                            }`}>
                              {/* Top accent */}
                              <div className={`absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-r-full`} />

                              {/* Header */}
                              <div>
                                <div className="inline-block mb-4">
                                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                                    project.status === 'Completed'
                                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                      : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                                  }`}>
                                    {project.status}
                                  </span>
                                </div>
                                <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {project.title}
                                </h3>
                                <p className={`text-lg leading-relaxed max-w-2xl ${
                                  isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                  {project.description}
                                </p>
                              </div>

                              {/* Bottom content */}
                              <div>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tech?.split(', ').slice(0, 4).map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className={`px-3 py-1 rounded-full text-sm border ${
                                        isDark 
                                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' 
                                          : 'bg-cyan-100/50 border-cyan-300 text-cyan-700'
                                      }`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                  {project.githubUrl && (
                                    <a
                                      href={project.githubUrl}
                                      onClick={(e) => e.stopPropagation()}
                                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                                        isDark 
                                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                                      }`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github className="w-4 h-4" />
                                      Code
                                    </a>
                                  )}
                                  {project.liveUrl && (
                                    <a
                                      href={project.liveUrl}
                                      onClick={(e) => e.stopPropagation()}
                                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                                        isDark 
                                          ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white' 
                                          : 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700 hover:text-cyan-900'
                                      }`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Live Demo
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={goToPreviousCarousel}
                      className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        isDark ? 'bg-gray-800 hover:bg-cyan-600 text-white' : 'bg-white hover:bg-cyan-500 text-gray-900'
                      }`}
                      aria-label="Previous slide"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={goToNextCarousel}
                      className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        isDark ? 'bg-gray-800 hover:bg-cyan-600 text-white' : 'bg-white hover:bg-cyan-500 text-gray-900'
                      }`}
                      aria-label="Next slide"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                      {filteredProjects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToCarouselSlide(index)}
                          className={`transition-all duration-300 rounded-full ${
                            index === currentCarouselIndex
                              ? 'w-10 h-2 bg-gradient-to-r from-cyan-500 to-purple-500'
                              : `w-2 h-2 ${
                                  isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'
                                }`
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Slide Counter */}
                    <div className={`text-center mt-6 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {currentCarouselIndex + 1} / {filteredProjects.length}
                    </div>
                  </div>
                ) : (
                  // GRID/LIST VIEW
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'
                        : 'space-y-4 sm:space-y-6'
                    }
                  >
                    {filteredProjects.map((project) => (
                      <IntegratedProjectCard
                        key={project.id}
                        project={project}
                        viewMode={viewMode}
                        onOpenDetails={openDetails}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // No Results State
              <div
                className={`text-center py-20 rounded-3xl border backdrop-blur-sm ${
                  isDark
                    ? 'bg-gray-900/50 border-white/10'
                    : 'bg-white/70 border-gray-200'
                }`}
              >
                <SearchX
                  className={`w-16 h-16 mx-auto mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  No projects found
                </h3>
                <p
                  className={`text-sm sm:text-base mb-6 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {searchQuery
                    ? `No projects match "${searchQuery}"`
                    : 'Try adjusting your filters to see more projects'}
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Components - UNCHANGED */}
      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        open={modalOpen && !!selectedProject}
        onClose={() => setModalOpen(false)}
        onPreview={openPreview}
      />

      <WebsitePreviewModal
        project={selectedProject}
        isDark={isDark}
        open={previewOpen && !!selectedProject}
        onClose={() => setPreviewOpen(false)}
      />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;