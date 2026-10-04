import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download
} from 'lucide-react';

import './Navbar.css';

export default function Navbar({
  siteSettings,
  onOpenContactModal
}) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'skills',
        'education',
        'services',
        'contact'
      ];

      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPos >= top &&
            scrollPos < top + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const navLinks = [
    {
      label: 'Home',
      href: '#home',
      id: 'home'
    },
    {
      label: 'About',
      href: '#about',
      id: 'about'
    },
    {
      label: 'Experience',
      href: '#experience',
      id: 'experience'
    },
    {
      label: 'Projects',
      href: '#projects',
      id: 'projects'
    },
    {
      label: 'Skills',
      href: '#skills',
      id: 'skills'
    },
    {
      label: 'Education',
      href: '#education',
      id: 'education'
    },
    {
      label: 'Services',
      href: '#services',
      id: 'services'
    },
    {
      label: 'Contact',
      href: '#contact',
      id: 'contact'
    }
  ];

  const handleContactClick = () => {
    setMobileMenuOpen(false);

    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const contactSection =
        document.getElementById('contact');

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`navbar-header ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
          aria-label="Go to Home"
        >
          K
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${
                activeSection === link.id
                  ? 'active'
                  : ''
              }`}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">

          {/* CV */}
          <a
            href={
              siteSettings?.resume_url ||
              '/resumee-keerthika.pdf'
            }
            download="resumee-keerthika.pdf"
            className="btn-cv-download"
          >
            <Download size={15} />
            <span>CV</span>
          </a>

          {/* Let's Talk */}
          <button
            type="button"
            className="button"
            onClick={handleContactClick}
          >
            <svg
              className="svgIcon"
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 0 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0-64 0 32 32 0 0 0 64 0z" />
            </svg>

            <span>Let's Talk</span>
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${
                  activeSection === link.id
                    ? 'active'
                    : ''
                }`}
                onClick={handleNavClick}
              >
                <span>{link.label}</span>

                {activeSection === link.id && (
                  <span className="mobile-active-dot" />
                )}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-actions">

            {/* Mobile CV */}
            <a
              href={
                siteSettings?.resume_url ||
                '/resumee-keerthika.pdf'
              }
              download="resumee-keerthika.pdf"
              className="btn-cv-download mobile-cv"
              onClick={handleNavClick}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            {/* Mobile Let's Talk */}
            <button
              type="button"
              className="mobile-talk-button"
              onClick={handleContactClick}
            >
              Let's Talk
            </button>

          </div>
        </div>
      )}
    </header>
  );
}