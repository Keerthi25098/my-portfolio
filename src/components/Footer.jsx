
import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import './Footer.css';

// =====================================================
// BRAND ICONS
// GitHub and LinkedIn are not available in lucide-react
// =====================================================

function GithubIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.66.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.79-1.65 2.76-1.65.9 0 1.64.3 2.05.77.1-.76.35-1.28.64-1.58-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.27-5.14 5.55.36.31.69.92.69 1.85v2.74c0 .3.2.65.78.54a11.27 11.27 0 0 0 7.68-10.66C23.25 5.48 18.27.5 12 .5Z" />
        </svg>
    );
}

function LinkedinIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0-4.12ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
        </svg>
    );
}

export default function Footer({ siteSettings }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="footer-container">
            <div className="section-container footer-content">

                {/* ================= FOOTER TOP ================= */}
                <div className="footer-top">

                    {/* BRAND */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            K<span>.</span>
                        </a>

                        <p className="footer-tagline">
                            {siteSettings?.name || 'Keerthika KT'} —{' '}
                            {siteSettings?.role_title || 'Frontend Developer'}
                        </p>

                        <p className="footer-location">
                            {siteSettings?.location ||
                                'Coimbatore, Tamil Nadu, India'}
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="footer-links-group">

                        {/* NAVIGATION */}
                        <div className="footer-nav">
                            <span className="footer-nav-title">
                                Navigation
                            </span>

                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#education">Education</a>
                            <a href="#contact">Contact</a>
                        </div>

                        {/* SOCIALS */}
                        <div className="footer-social">
                            <span className="footer-nav-title">
                                Socials
                            </span>

                            <a
                                href={
                                    siteSettings?.github_url ||
                                    'https://github.com/Keerthi25098'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon size={16} />
                                GitHub
                            </a>

                            <a
                                href={
                                    siteSettings?.linkedin_url ||
                                    'https://linkedin.com/in/keerthika25'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedinIcon size={16} />
                                LinkedIn
                            </a>

                            <a
                                href={`mailto:${
                                    siteSettings?.email ||
                                    'keerthikeerthi32155@gmail.com'
                                }`}
                            >
                                <Mail size={16} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* ================= FOOTER BOTTOM ================= */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Keerthika KT. All rights
                        reserved.
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="back-to-top-btn"
                        aria-label="Back to Top"
                    >
                        <span>Back to Top</span>
                        <ArrowUp size={16} />
                    </button>

                </div>
            </div>
        </footer>
    );
}

