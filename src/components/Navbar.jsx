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

        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
          aria-label="Go to Home"
        >
          K
          <span className="logo-dot">.</span>
        </a>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

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


        {/* =====================================================
            RIGHT ACTIONS
        ===================================================== */}

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


          {/* =================================================
              LET'S TALK BUTTON
          ================================================= */}

          <button
            type="button"
            className="button"
            onClick={handleContactClick}
            aria-label="Let's Talk"
          >
            <span className="button-text">
              Let's Talk
            </span>

            <span className="button-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                />

                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

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


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

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


          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

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
              <span>Let's Talk</span>

              <span className="mobile-talk-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />

                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>

          </div>
        </div>
      )}
    </header>
  );
}