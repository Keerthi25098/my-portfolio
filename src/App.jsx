import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';

// Admin CMS Pages
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import DashboardOverview from './admin/DashboardOverview';
import HeroAboutEditor from './admin/HeroAboutEditor';
import ProjectsManager from './admin/ProjectsManager';
import ExperienceManager from './admin/ExperienceManager';
import SkillsManager from './admin/SkillsManager';
import EducationManager from './admin/EducationManager';
import ServicesManager from './admin/ServicesManager';
import EnquiriesInbox from './admin/EnquiriesInbox';
import SiteSettingsEditor from './admin/SiteSettingsEditor';

import './styles/theme.css';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Portfolio Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Admin CMS Authentication */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin CMS Dashboard Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="dashboard" element={<DashboardOverview />} />
              <Route path="hero" element={<HeroAboutEditor />} />
              <Route path="about" element={<HeroAboutEditor />} />
              <Route path="projects" element={<ProjectsManager />} />
              <Route path="experience" element={<ExperienceManager />} />
              <Route path="skills" element={<SkillsManager />} />
              <Route path="education" element={<EducationManager />} />
              <Route path="services" element={<ServicesManager />} />
              <Route path="enquiries" element={<EnquiriesInbox />} />
              <Route path="settings" element={<SiteSettingsEditor />} />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
