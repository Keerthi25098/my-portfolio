import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar({ siteSettings, onOpenContactModal }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          K<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="active-pill" />}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Resume Download CTA */}
          <a
            href={siteSettings?.resume_url || '/resumee-keerthika.pdf'}
            download="resumee-keerthika.pdf"
            className="btn-cv-download"
          >
            <Download size={15} />
            <span>CV</span>
          </a>

          {/* Let's Talk CTA */}
          <button class="button">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Let's Talk
</button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-actions">
            <a
              href={siteSettings?.resume_url || '/resumee-keerthika.pdf'}
              download="resumee-keerthika.pdf"
              className="btn-cv-download w-full"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
