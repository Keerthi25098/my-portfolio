import React from "react";
import "./Footer.css";

function GithubIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function LinkedinIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M5.2 3.5A2.7 2.7 0 1 1 5.2 8.9a2.7 2.7 0 0 1 0-5.4ZM2.8 10.8h4.8V21H2.8V10.8ZM10.5 10.8h4.6v1.4h.07c.64-1.1 2.2-2.25 4.53-2.25 4.84 0 5.74 3.19 5.74 7.34V21h-4.8v-3.28c0-1.56-.03-3.57-2.17-3.57-2.17 0-2.5 1.69-2.5 3.45V21h-4.8V10.8Z" />
        </svg>
    );
}

function MailIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function ArrowUpIcon({ size = 15 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
        </svg>
    );
}

const Footer = ({ siteSettings }) => {
    const github =
        siteSettings?.github || "https://github.com/Keerthi25098";

    const linkedin =
        siteSettings?.linkedin || "https://linkedin.com/in/keerthika25";

    const email =
        siteSettings?.email || "keerthikeerthi32155@gmail.com";

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Main Footer */}
                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            K<span>.</span>
                        </a>

                        <div>
                            <h3>Keerthika KT</h3>
                            <p>React.js Developer</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    {/* Socials */}
                    <div className="footer-socials">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <GithubIcon />
                        </a>

                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon />
                        </a>

                        <a
                            href={`mailto:${email}`}
                            aria-label="Email"
                        >
                            <MailIcon />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} Keerthika KT. All rights reserved.
                    </p>

                    <p className="footer-built">
                        Built with <span>React</span> &amp; JavaScript
                    </p>

                    <button
                        className="footer-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <span>Back to top</span>
                        <ArrowUpIcon />
                    </button>

                </div>
            </div>
        </footer>
    );
};

export default Footer;