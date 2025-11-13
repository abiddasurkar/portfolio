import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Clock, User, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/profileData';

const ContactPage = () => {
  const { user } = useAppContext();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-8 sm:py-12 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-10 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-20 right-10 animate-float-slower" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse-slow" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Enhanced Contact Information Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 sticky top-24">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${user.email}`}
                      className="text-white font-medium hover:text-cyan-300 transition-colors duration-300 text-base"
                    >
                      {user.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${user.phone}`}
                      className="text-white font-medium hover:text-cyan-300 transition-colors duration-300 text-base"
                    >
                      {user.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium text-base">{user.location}</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Response Time</p>
                    <p className="text-white font-medium text-base">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Connect on social media</p>
                <div className="flex gap-3">
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 backdrop-blur-sm"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 border border-white/10 hover:border-purple-400/30 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
                Send Me a Message
              </h2>

              {/* Enhanced Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3 animate-slideDown">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-300">Message sent successfully!</h3>
                    <p className="text-sm text-green-400">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {/* Enhanced Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 animate-slideDown">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-300">Something went wrong</h3>
                    <p className="text-sm text-red-400">Please try again or contact me directly via email.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-cyan-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-cyan-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm resize-none transition-all duration-300"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </button>

                {/* Form Note */}
                <p className="text-center text-gray-400 text-sm">
                  I typically respond to all messages within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation for slideDown */}
      <style jsx>{`
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

export default ContactPage;