import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Filter, X, ChevronDown, SearchX, SlidersHorizontal } from 'lucide-react';
import { projects } from '../data/profileData';
import ProjectCard from '../components/common/ProjectCard';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortOption, setSortOption] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = projects.map(p => p.category || 'Other');
    return ['All', ...new Set(cats)];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Apply sorting
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-8 sm:py-12 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-10 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-10 right-10 animate-float-slower" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore my portfolio of web applications, featuring modern technologies and innovative solutions
          </p>
        </div>

        {/* Enhanced Controls - Mobile Optimized */}
        <div className="sticky top-20 z-30 bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/10">
          {/* Top Row - Search and Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-0">
            {/* Search - Full width on mobile */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tech, or description..."
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Action Buttons - Horizontal on mobile, better spacing */}
            <div className="flex gap-2 sm:gap-3 justify-between sm:justify-start">
              {/* View Mode Toggle */}
              <div className="flex gap-1 sm:gap-2 bg-gray-800/50 rounded-xl p-1 backdrop-blur-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-3 sm:px-4 py-2.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium text-gray-300 hover:text-white border border-white/10 hover:border-cyan-400/30 backdrop-blur-sm"
              >
                <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline text-sm sm:text-base">Filters</span>
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Enhanced Expandable Filters - Better mobile layout */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t border-gray-700 space-y-4 animate-slideDown">
              {/* Category Filter - Horizontal scroll on mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
                  <div className="flex gap-2 px-1 min-w-max">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                          selectedCategory === cat
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white text-sm sm:text-base backdrop-blur-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2.5 bg-red-500/10 text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium border border-red-500/20 hover:border-red-500/30"
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

        {/* Enhanced Results Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
            <span>Showing</span>
            <span className="font-semibold text-cyan-300">{filteredProjects.length}</span>
            <span>of</span>
            <span className="font-semibold text-purple-300">{projects.length}</span>
            <span>projects</span>
          </div>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          )}
        </div>

        {/* Enhanced Projects Grid/List with better responsive layout */}
        {filteredProjects.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
                : 'space-y-4 sm:space-y-6'
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                viewMode={viewMode}
                className="transform hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10">
            <div className="max-w-md mx-auto px-4">
              <SearchX className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                No projects found
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                {searchQuery 
                  ? `No projects match "${searchQuery}"` 
                  : 'Try adjusting your filters to see more projects'
                }
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Floating Action Button for Filters */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="Toggle filters"
          >
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Add custom CSS for scrollbar and animations */}
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