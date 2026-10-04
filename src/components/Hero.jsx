import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ArrowDown,
    Mail,
    Sparkles,
    Code,
    Terminal
} from 'lucide-react';

import profileImg from '../assets/profile.png';
import './Hero.css';

export default function Hero({ heroContent, siteSettings }) {

    /* =====================================================
       ROTATING ROLES
    ===================================================== */

    const roles = heroContent?.roles?.length
        ? heroContent.roles
        : [
            'Frontend Developer',
            'React Developer',
            'Junior Software Developer'
        ];

    const [roleIndex, setRoleIndex] = useState(0);

    const [profileImageSrc, setProfileImageSrc] =
        useState(profileImg);


    /* =====================================================
       ROLE ANIMATION
    ===================================================== */

    useEffect(() => {

        const interval = setInterval(() => {

            setRoleIndex(
                (prev) => (prev + 1) % roles.length
            );

        }, 2800);

        return () => clearInterval(interval);

    }, [roles.length]);


    /* =====================================================
       RESET PROFILE IMAGE
    ===================================================== */

    useEffect(() => {

        setProfileImageSrc(profileImg);

    }, []);


    return (

        <section
            className="hero-section"
            id="home"
        >

            {/* =================================================
                BACKGROUND AMBIENT ORBS
            ================================================= */}

            <div
                className="hero-orb orb-1"
                aria-hidden="true"
            />

            <div
                className="hero-orb orb-2"
                aria-hidden="true"
            />

            <div
                className="hero-orb orb-3"
                aria-hidden="true"
            />


            {/* =================================================
                HERO CONTAINER
            ================================================= */}

            <div className="section-container hero-grid">


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <motion.div
                    className="hero-content-col"

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >

                    {/* =============================================
                        AVAILABILITY BADGE
                    ============================================= */}

                    {siteSettings?.availability_badge_visible !== false && (

                        <div className="hero-badge">

                            <span className="badge-pulse" />

                            <Sparkles
                                size={14}
                                className="badge-sparkle"
                            />

                            <span>
                                {siteSettings?.availability_status ||
                                    'Open to Opportunities'}
                            </span>

                        </div>

                    )}


                    {/* =============================================
                        GREETING
                    ============================================= */}

                    <p className="hero-greeting">

                        {heroContent?.greeting ||
                            "Hello, I'm"}

                    </p>


                    {/* =============================================
                        MAIN HEADLINE
                    ============================================= */}

                    <h1 className="hero-headline">

                        {heroContent?.headline ||
                            'Keerthika KT'}

                    </h1>


                    {/* =============================================
                        ROTATING ROLE
                    ============================================= */}

                    <div className="hero-role-wrapper">

                        <span className="role-prefix">
                            I am a
                        </span>

                        <div className="role-ticker">

                            <AnimatePresence mode="wait">

                                <motion.span

                                    key={roles[roleIndex]}

                                    initial={{
                                        y: 20,
                                        opacity: 0
                                    }}

                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}

                                    exit={{
                                        y: -20,
                                        opacity: 0
                                    }}

                                    transition={{
                                        duration: 0.4
                                    }}

                                    className="role-text"

                                >

                                    {roles[roleIndex]}

                                </motion.span>

                            </AnimatePresence>

                        </div>

                    </div>


                    {/* =============================================
                        INTRODUCTION
                    ============================================= */}

                    <p className="hero-bio">

                        {heroContent?.bio ||
                            'I am a passionate frontend developer dedicated to crafting clean, responsive, and intuitive web applications with modern technologies.'}

                    </p>


                    {/* =============================================
                        CTA BUTTONS
                    ============================================= */}

                    <div className="hero-cta-group">

                        {/* View Projects */}

                        <a
                            href="#projects"
                            className="button"
                        >

                            <svg
                                className="svgIcon"
                                viewBox="0 0 512 512"
                                height="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >

                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 0 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.2-18.4 18.4zM288 256a32 32 0 1 0-64 0 32 32 0 0 0 64 0z" />

                            </svg>

                            View my work

                        </a>


                        {/* Let's Talk */}

                        <a
                            href="#contact"
                            className="btn-secondary-glass"
                        >

                            <span>
                                {heroContent?.cta_secondary_label ||
                                    "Let's Talk"}
                            </span>

                        </a>

                    </div>


                    {/* =============================================
                        SOCIAL LINKS
                    ============================================= */}

                    <div className="hero-social-links">


                        {/* GitHub */}

                        <a
                            href={
                                siteSettings?.github_url ||
                                'https://github.com/Keerthi25098'
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="GitHub Profile"

                            className="social-icon-btn"
                        >

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >

                                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.66.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.79-1.65 2.76-1.65.9 0 1.64.3 2.05.77.1-.76.35-1.28.64-1.58-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.27-5.14 5.55.36.31.69.92.69 1.85v2.74c0 .3.2.65.78.54a11.27 11.27 0 0 0 7.68-10.66C23.25 5.48 18.27.5 12 .5Z" />

                            </svg>

                        </a>


                        {/* LinkedIn */}

                        <a
                            href={
                                siteSettings?.linkedin_url ||
                                'https://linkedin.com/in/keerthika25'
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="LinkedIn Profile"

                            className="social-icon-btn"
                        >

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >

                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />

                            </svg>

                        </a>


                        {/* Email */}

                        <a
                            href={`mailto:${
                                siteSettings?.email ||
                                'keerthikeerthi32155@gmail.com'
                            }`}

                            aria-label="Email Me"

                            className="social-icon-btn"
                        >

                            <Mail size={18} />

                        </a>

                    </div>

                </motion.div>


                {/* =================================================
                    RIGHT PROFILE CARD
                ================================================= */}

                <motion.div

                    className="hero-visual-col"

                    initial={{
                        opacity: 0,
                        scale: 0.95
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}

                >

                    <div className="hero-card-wrapper">


                        {/* =============================================
                            DECORATIVE ELEMENTS
                        ============================================= */}

                        <div
                            className="hero-decoration"
                            aria-hidden="true"
                        >

                            <span className="decoration-ring ring-one" />

                            <span className="decoration-ring ring-two" />

                            <span className="decoration-dot dot-one" />

                            <span className="decoration-dot dot-two" />

                            <span className="decoration-dot dot-three" />

                            <span className="decoration-star star-one">
                                ✦
                            </span>

                            <span className="decoration-star star-two">
                                ✦
                            </span>

                        </div>


                        {/* =============================================
                            PROFILE CARD
                        ============================================= */}

                        <div className="hero-profile-card">


                            {/* Image */}

                            <div className="hero-image-wrapper">

                                <div
                                    className="image-glow"
                                    aria-hidden="true"
                                />

                                <img
                                    src={profileImageSrc}
                                    alt="Keerthika KT"
                                    className="hero-profile-img"
                                    loading="eager"
                                    fetchPriority="high"

                                    onError={(event) => {

                                        console.error(
                                            'Profile image failed to load:',
                                            event.currentTarget.src
                                        );

                                    }}

                                />


                                {/* Availability Badge */}

                                <div className="floating-role-badge">

                                    <span className="role-status-dot" />

                                    Available for opportunities

                                </div>

                            </div>


                            {/* Card Content */}

                            <div className="hero-card-content">

                                <div className="hero-card-name">
                                    Keerthika KT
                                </div>

                                <div className="hero-card-role">
                                    Junior Software Developer
                                </div>


                                {/* Technology Badges */}

                                <div className="card-tech-stack">

                                    <span className="tech-badge">

                                        <Code size={13} />

                                        React.js

                                    </span>


                                    <span className="tech-badge">

                                        <Terminal size={13} />

                                        JavaScript

                                    </span>


                                    <span className="tech-badge">

                                        Bootstrap

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>


            {/* =================================================
                SCROLL INDICATOR
            ================================================= */}

            <a
                href="#about"
                className="scroll-down-indicator"
                aria-label="Scroll to About section"
            >

                <ArrowDown
                    size={18}
                    className="scroll-arrow"
                />

            </a>

        </section>

    );
}