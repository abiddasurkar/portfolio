import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Mail, Phone, TrendingUp, Target, Layers,
  ArrowRight, Sparkles, Code, Globe, Zap
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/profileData';
import ProjectCard from '../components/common/ProjectCard';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const { isDark } = useTheme();


  const stats = [
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Performance Improvement',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Target,
      value: '100%',
      label: 'Document Processing Accuracy',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Layers,
      value: '16+',
      label: 'Legacy Pages Modernized',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const topSkills = [
    { name: 'React 18+', icon: Code },
    { name: 'Next.js 15', icon: Globe },
    { name: 'TypeScript', icon: Zap },
    { name: 'Tailwind CSS', icon: Sparkles },
    { name: 'Azure', icon: Cloud },
    { name: 'Docker', icon: Layers },
    { name: 'WebAssembly', icon: Cpu },
    { name: 'GraphQL', icon: Database }
  ];

  const featuredProjects = projects.slice(0, 4);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
    >
      {/* Soft background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-20 right-10 animate-float-slower" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse-slow" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border transition-all duration-300 backdrop-blur-sm ${isDark
                ? 'bg-gray-800/50 border-white/10 text-gray-300'
                : 'bg-white/70 border-gray-300 text-gray-700'
                }`}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
            >
              {user.name}
            </h1>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ${isDark ? 'text-cyan-100' : 'text-cyan-700'
                }`}
            >
              {user.title}
            </p>
            <p
              className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              {user.bio}
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-sm">
              <div
                className={`flex items-center gap-2 rounded-lg px-4 py-2 border transition-all duration-300 ${isDark
                  ? 'bg-gray-800/50 border-white/10 text-gray-300'
                  : 'bg-white border-gray-300 text-gray-700'
                  }`}
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{user.location}</span>
              </div>

              <a
                href={`mailto:${user.email}`}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 border transition-all duration-300 ${isDark
                  ? 'bg-gray-800/50 border-white/10 hover:border-cyan-400/30 text-gray-300 hover:text-white'
                  : 'bg-white border-gray-300 hover:border-cyan-400/50 text-gray-700 hover:text-gray-900'
                  }`}
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{user.email}</span>
              </a>

              <div
                className={`flex items-center gap-2 rounded-lg px-4 py-2 border ${isDark
                  ? 'bg-gray-800/50 border-white/10 text-gray-300'
                  : 'bg-white border-gray-300 text-gray-700'
                  }`}
              >
                <Phone className="w-4 h-4 text-pink-400" />
                <span>{user.phone}</span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className={`px-8 py-4 rounded-xl font-semibold border transition-all duration-300 ${isDark
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

      {/* STATS SECTION */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border backdrop-blur-2xl group transition-all duration-500 hover:-translate-y-2 ${isDark
                  ? 'bg-gray-900/80 border-white/10 hover:border-cyan-400/30'
                  : 'bg-white/70 border-gray-200 hover:border-cyan-400/40'
                  }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent`}>
            Featured Projects
          </h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-2xl mx-auto`}>
            Explore some of my recent work showcasing modern web development and innovative solutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} viewMode="grid" />
            ))}
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

/* Custom Lucide-like icons */
const Cloud = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const Cpu = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2M15 2v2M9 22v-2M15 22v-2M2 9h2M2 15h2M22 9h-2M22 15h-2" />
  </svg>
);

const Database = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
  </svg>
);

export default HomePage;