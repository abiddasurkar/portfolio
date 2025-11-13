import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <AppProvider>
      {/* Use dynamic basename for different environments */}
      <Router basename={process.env.NODE_ENV === 'production' ? '/portfolio' : '/'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          {/* Add a catch-all route for GitHub Pages 404 handling */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;