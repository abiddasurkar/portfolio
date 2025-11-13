import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, TrendingUp, Target, Layers, ArrowRight, Sparkles, Code, Globe, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/profileData';
import ProjectCard from '../components/common/ProjectCard';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-20 right-10 animate-float-slower" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse-slow" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative text-white overflow-hidden py-16 md:py-28 lg:py-32">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Profile Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              {user.name}
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-cyan-100">
              {user.title}
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {user.bio}
            </p>

            {/* Enhanced Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">{user.location}</span>
              </div>
              <a
                href={`mailto:${user.email}`}
                className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 hover:text-white">{user.email}</span>
              </a>
              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">{user.phone}</span>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-cyan-400/30 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Achievements Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group hover:transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3">{stat.value}</h3>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                  
                  {/* Animated background effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore some of my recent work showcasing modern web development and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode="grid"
                className="hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Expertise */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Modern tech stack for building scalable, high-performance applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {topSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-white font-semibold text-sm lg:text-base">{skill.name}</span>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Call-to-Action Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 text-center border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate to create something amazing. I'm passionate about turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </button>
              <a
                href={`mailto:${user.email}`}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-cyan-400/30 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add missing Lucide icons
const Cloud = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const Cpu = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2" />
    <path d="M15 2v2" />
    <path d="M9 22v-2" />
    <path d="M15 22v-2" />
    <path d="M2 9h2" />
    <path d="M2 15h2" />
    <path d="M22 9h-2" />
    <path d="M22 15h-2" />
  </svg>
);

const Database = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </svg>
);

export default HomePage;