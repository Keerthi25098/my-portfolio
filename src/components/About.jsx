
import React from 'react';
import { motion } from 'motion/react';
import {
    Award,
    Briefcase,
    Code,
    CheckCircle,
    Sparkles
} from 'lucide-react';

import profileImg from '../assets/profile.png';
import './About.css';

export default function About({ aboutContent }) {

    // Always use the local imported profile image.
    // This prevents an invalid profile_image_url from overriding it.
    const profileImage = profileImg;

    const stats = [
        {
            icon: Briefcase,
            label:
                aboutContent?.years_experience_label ||
                '1+ Years Experience',
            sub: 'In Web Development'
        },
        {
            icon: Code,
            label:
                aboutContent?.projects_completed_label ||
                '10+ Featured Projects',
            sub: 'Built & Deployed'
        },
        {
            icon: Award,
            label:
                aboutContent?.internships_completed_label ||
                '3+ Industry Internships',
            sub: 'Hands-on Learning'
        }
    ];

    return (
        <section className="about-section" id="about">

            <div className="section-container">

                {/* ================================
                    SECTION HEADER
                ================================= */}
                <div className="section-header">

                    <span className="section-tag">
                        <Sparkles size={14} />
                        <span>About Me</span>
                    </span>

                    <h2 className="section-title">
                        {aboutContent?.heading ||
                            'I Create Products, Not Just Interfaces.'}
                    </h2>

                    <p className="section-subtitle">
                        {aboutContent?.subheading ||
                            'A quick introduction about who I am, my philosophy, and my journey.'}
                    </p>

                </div>


                {/* ================================
                    MAIN ABOUT GRID
                ================================= */}
                <div className="about-grid">

                    {/* =================================
                        LEFT COLUMN
                    ================================= */}
                    <motion.div
                        className="about-visual-col"
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <div className="about-card glass-panel">

                            {/* Profile Image */}
                            <div className="about-img-frame">

                                <img
                                    src={profileImage}
                                    alt="Keerthika KT"
                                    className="about-profile-img"
                                    loading="eager"
                                    decoding="async"
                                    onError={(event) => {
                                        console.error(
                                            'About profile image failed to load:',
                                            event.currentTarget.src
                                        );
                                    }}
                                />

                            </div>


                            {/* Highlights */}
                            <div className="about-highlights-list">

                                <div className="highlight-item">

                                    <CheckCircle
                                        size={18}
                                        className="check-icon"
                                    />

                                    <span>
                                        React.js & Modern Frontend Engineering
                                    </span>

                                </div>


                                <div className="highlight-item">

                                    <CheckCircle
                                        size={18}
                                        className="check-icon"
                                    />

                                    <span>
                                        Responsive Glassmorphic UI/UX Design
                                    </span>

                                </div>


                                <div className="highlight-item">

                                    <CheckCircle
                                        size={18}
                                        className="check-icon"
                                    />

                                    <span>
                                        Full Stack Integration
                                        (PHP, Laravel, MySQL)
                                    </span>

                                </div>

                            </div>

                        </div>

                    </motion.div>


                    {/* =================================
                        RIGHT COLUMN
                    ================================= */}
                    <motion.div
                        className="about-text-col"
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        {/* About Paragraphs */}
                        <div className="about-paragraphs">

                            <p className="bio-p">
                                {aboutContent?.bio_paragraph_1 ||
                                    'I am Keerthika KT, a React.js Frontend Developer passionate about building clean, performant, and responsive web applications. I enjoy converting creative ideas into real working products.'}
                            </p>


                            <p className="bio-p">
                                {aboutContent?.bio_paragraph_2 ||
                                    'My focus centers on high usability, pixel-perfect layouts, fast load times, and seamless interactive experiences. I pay strict attention to design details and intuitive navigation.'}
                            </p>


                            <p className="bio-p">
                                {aboutContent?.bio_paragraph_3 ||
                                    'From working on client landing pages at Cloudi5 Technologies to building web applications during internships, I continuously expand my skill set across React, PHP, Laravel, MySQL, and modern web tooling.'}
                            </p>

                        </div>


                        {/* =================================
                            STAT CARDS
                        ================================= */}
                        <div className="about-stats-grid">

                            {stats.map((item, idx) => {

                                const IconComponent = item.icon;

                                return (
                                    <div
                                        key={idx}
                                        className="stat-card glass-panel"
                                    >

                                        <div className="stat-icon-box">

                                            <IconComponent
                                                size={20}
                                            />

                                        </div>


                                        <div>

                                            <h4 className="stat-label">
                                                {item.label}
                                            </h4>

                                            <p className="stat-sub">
                                                {item.sub}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
