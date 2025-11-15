import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lightweight loading fallback
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

function App() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const basename = isLocal ? '/' : '/portfolio';

  return (
    <AppProvider>
      <Router basename={basename}>
        <ThemeProvider>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </Router>
    </AppProvider>
  );
}

export default App;