import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Github, Linkedin, Clock, User, Send,
  CheckCircle, AlertCircle, MessageCircle
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
  const { user } = useAppContext();
  const { isDark } = useTheme(); //
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen py-8 sm:py-12 relative overflow-hidden transition-colors duration-500 ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
        }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-80 h-80 rounded-full blur-3xl top-20 left-10 animate-float-slow ${isDark ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10' : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
            }`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl bottom-20 right-10 animate-float-slower ${isDark ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
            }`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
            Get In Touch
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-base sm:text-lg max-w-2xl mx-auto`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div
            className={`lg:col-span-1 p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 ${isDark
              ? 'bg-gray-900/80 border border-white/10 shadow-2xl'
              : 'bg-white border border-gray-200 shadow-xl'
              }`}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-cyan-400" />
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Info Items */}
              {[
                { icon: Mail, label: 'Email', value: user.email, href: `mailto:${user.email}` },
                { icon: Phone, label: 'Phone', value: user.phone, href: `tel:${user.phone}` },
                { icon: MapPin, label: 'Location', value: user.location },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
              ].map(({ icon: Icon, label, value, href }, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 ${isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'bg-gradient-to-r from-cyan-400 to-purple-400'
                    }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm mb-1`}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className={`font-medium transition-colors duration-300 ${isDark ? 'text-white hover:text-cyan-300' : 'text-gray-800 hover:text-cyan-600'
                          }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-700/30">
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm mb-4`}>
                Connect on social media
              </p>
              <div className="flex gap-3">
                {[{ icon: Github, link: user.github, hover: 'cyan' },
                { icon: Linkedin, link: user.linkedin, hover: 'purple' }]
                  .map(({ icon: Icon, link, hover }, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl border transition-all duration-300 backdrop-blur-sm ${isDark
                        ? 'bg-gray-800/50 border-white/10 text-gray-300 hover:text-white'
                        : 'bg-gray-100 border-gray-200 text-gray-700 hover:text-gray-900'
                        } hover:bg-${hover}-500/20 hover:border-${hover}-400/30`}
                      aria-label={hover}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 ${isDark
              ? 'bg-gray-900/80 border border-white/10 shadow-2xl'
              : 'bg-white border border-gray-200 shadow-xl'
              }`}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Send Me a Message
            </h2>

            {/* Success/Error Message */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 animate-slideDown border ${submitStatus === 'success'
                  ? 'bg-green-500/10 border-green-400/20 text-green-500'
                  : 'bg-red-500/10 border-red-400/20 text-red-400'
                  }`}
              >
                {submitStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                <div>
                  <h3 className="font-semibold">
                    {submitStatus === 'success' ? 'Message sent successfully!' : 'Something went wrong'}
                  </h3>
                  <p className="text-sm">
                    {submitStatus === 'success'
                      ? "I'll get back to you as soon as possible."
                      : 'Please try again or contact me directly.'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                {['name', 'email'].map((field, i) => (
                  <div key={i}>
                    <label
                      htmlFor={field}
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {field === 'name' ? 'Your Name *' : 'Your Email *'}
                    </label>
                    <div className="relative">
                      {(field === 'name' ? <User /> : <Mail />).type &&
                        React.createElement(field === 'name' ? User : Mail, {
                          className: `absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === field ? 'text-cyan-400' : 'text-gray-500'
                            }`,
                        })}
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formState[field]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field)}
                        onBlur={handleBlur}
                        required
                        placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm ${isDark
                          ? 'bg-gray-800/50 border-white/10 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                          }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-500 transition-all duration-300 backdrop-blur-sm ${isDark
                    ? 'bg-gray-800/50 border-white/10 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-cyan-500 resize-none transition-all duration-300 backdrop-blur-sm ${isDark
                    ? 'bg-gray-800/50 border-white/10 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 relative overflow-hidden hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>

              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center text-sm`}>
                I typically respond to all messages within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Animation */}
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
