import React, { useState, useMemo } from 'react';
import {
  Search,
  Grid,
  List,
  Filter,
  X,
  ChevronDown,
  SearchX,
  SlidersHorizontal
} from 'lucide-react';
import { projects } from '../data/profileData';
import ProjectCard from '../components/common/ProjectCard';
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

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category || 'Other');
    return ['All', ...new Set(cats)];
  }, []);

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

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortOption('newest');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All';

  return (
    <div
      className={`min-h-screen py-10 sm:py-14 relative overflow-hidden transition-colors duration-500 ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-200'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
        }`}
    >
      {/* Artistic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-80 h-80 rounded-full blur-3xl top-10 left-10 animate-float-slow ${isDark
            ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
            : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
            }`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl bottom-10 right-10 animate-float-slower ${isDark
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
            className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
          >
            Explore my portfolio of modern web applications, showcasing design,
            performance, and scalability.
          </p>
        </div>

        {/* Search & Filters */}
        <div
          className={`sticky top-20 z-30 rounded-2xl shadow-lg p-4 sm:p-6 mb-8 backdrop-blur-2xl border transition-colors duration-500 ${isDark
            ? 'bg-gray-900/80 border-white/10'
            : 'bg-white/80 border-gray-200/50'
            }`}
        >
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
            <div className="flex-1 relative">
              <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tech, or description..."
                className={`w-full pl-10 pr-10 py-3 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm text-sm sm:text-base transition-all duration-300 ${isDark
                  ? 'bg-gray-800/60 text-white placeholder-gray-400 border border-white/10'
                  : 'bg-white/60 text-gray-900 placeholder-gray-500 border border-gray-200'
                  }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${isDark
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
                className={`flex gap-1 sm:gap-2 rounded-xl p-1 backdrop-blur-sm ${isDark ? 'bg-gray-800/60' : 'bg-gray-100/70'
                  }`}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'grid'
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
                  className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'list'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md'
                    : isDark
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`px-4 py-2.5 flex items-center gap-2 font-medium rounded-xl border transition-all duration-300 ${isDark
                  ? 'bg-gray-800/60 text-gray-300 hover:text-white hover:border-cyan-400/40 border-white/10'
                  : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:border-cyan-400/40 border-gray-300/60'
                  }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''
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
                  className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Category
                </label>
                <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
                  <div className="flex gap-2 px-1 min-w-max">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                          : isDark
                            ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                  >
                    Sort By
                  </label>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base backdrop-blur-sm ${isDark
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
        </div>

        {/* Results Summary */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'
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

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'
                : 'space-y-4 sm:space-y-6'
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
                isDark={isDark}
                className="transform hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-20 rounded-3xl border backdrop-blur-sm ${isDark
              ? 'bg-gray-900/50 border-white/10'
              : 'bg-white/70 border-gray-200'
              }`}
          >
            <SearchX
              className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
            />
            <h3
              className={`text-xl sm:text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'
                }`}
            >
              No projects found
            </h3>
            <p
              className={`text-sm sm:text-base mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'
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
      `}</style>
    </div>
  );
};

export default ProjectsPage;
