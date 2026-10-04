import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
    Award,
    Code,
    CheckCircle,
    Sparkles
} from 'lucide-react';

import profileImg from '../assets/journey/currently.jpeg';
import './About.css';

export default function About({ aboutContent }) {

    /* ============================================
       PROFILE IMAGE
    ============================================ */

    const profileImage = profileImg;


    /* ============================================
       COUNTER STATE
    ============================================ */

    const [hasCounted, setHasCounted] = useState(false);

    const [counters, setCounters] = useState({
        experience: 0,
        projects: 0,
        internships: 0,
        achievement: 0
    });


    /* ============================================
       COUNTER TARGETS
    ============================================ */

    const counterTargets = {
        experience: 6,
        projects: 10,
        internships: 3,
        achievement: 2
    };


    /* ============================================
       COUNTER ANIMATION
    ============================================ */

    useEffect(() => {

        const section = document.getElementById('about');

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting && !hasCounted) {

                    setHasCounted(true);

                    const duration = 1600;
                    const startTime = performance.now();

                    const animateCounters = (currentTime) => {

                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const easeOut =
                            1 - Math.pow(1 - progress, 3);

                        setCounters({
                            experience: Math.floor(
                                counterTargets.experience * easeOut
                            ),

                            projects: Math.floor(
                                counterTargets.projects * easeOut
                            ),

                            internships: Math.floor(
                                counterTargets.internships * easeOut
                            ),

                            achievement: Math.floor(
                                counterTargets.achievement * easeOut
                            )
                        });

                        if (progress < 1) {
                            requestAnimationFrame(
                                animateCounters
                            );
                        }
                    };

                    requestAnimationFrame(
                        animateCounters
                    );
                }
            },
            {
                threshold: 0.25
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };

    }, [hasCounted]);


    return (

        <section
            className="about-section"
            id="about"
        >

            <div className="section-container">

                {/* ============================================
                    MAIN ABOUT GRID
                ============================================ */}

                <div className="about-grid">


                    {/* ========================================
                        LEFT IMAGE COLUMN
                    ======================================== */}

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

                        <div className="about-card">

                            <div className="about-img-frame">

                                <img
                                    src={profileImage}
                                    alt="Keerthika KT at Cloudi5 Technologies"
                                    className="about-profile-img"

                                    loading="lazy"
                                    decoding="async"

                                    onError={(event) => {

                                        console.error(
                                            'About image failed to load:',
                                            event.currentTarget.src
                                        );

                                    }}
                                />

                            </div>

                        </div>

                    </motion.div>


                    {/* ========================================
                        RIGHT CONTENT COLUMN
                    ======================================== */}

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


                        {/* ==================================
                            ABOUT HEADER
                        ================================== */}

                        <div className="about-content-header">



                            <h2 className="section-title">

                                {aboutContent?.heading ||
                                    'I Create Products, Not Just Interfaces.'}

                            </h2>


                            <p className="section-subtitle">

                                {aboutContent?.subheading ||
                                    'A quick introduction about who I am, my philosophy, and my journey.'}

                            </p>

                        </div>


                        {/* ==================================
                            ABOUT PARAGRAPHS
                        ================================== */}

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


                        {/* ==================================
                            MINI SKILL POINTS
                        ================================== */}

                        <div className="about-mini-points">

                            <div className="mini-point">

                                <Code size={17} />

                                <span>
                                    Clean & Reusable Code
                                </span>

                            </div>


                            <div className="mini-point">

                                <CheckCircle size={17} />

                                <span>
                                    Responsive Development
                                </span>

                            </div>


                            <div className="mini-point">

                                <Award size={17} />

                                <span>
                                    Continuous Learning
                                </span>

                            </div>

                        </div>

                    </motion.div>

                </div>


                {/* ============================================
                    COUNTERS
                ============================================ */}

                <motion.div
                    className="about-counters"

                    initial={{
                        opacity: 0,
                        y: 25
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >

                    {/* EXPERIENCE */}

                    <div className="counter-item">

                        <div className="counter-number">
                            {counters.experience}+
                        </div>

                        <div className="counter-label">
                            Months Experience
                        </div>

                    </div>


                    {/* PROJECTS */}

                    <div className="counter-item">

                        <div className="counter-number">
                            {counters.projects}+
                        </div>

                        <div className="counter-label">
                            Featured Projects
                        </div>

                    </div>


                    {/* INTERNSHIPS */}

                    <div className="counter-item">

                        <div className="counter-number">
                            {counters.internships}+
                        </div>

                        <div className="counter-label">
                            Industry Internships
                        </div>

                    </div>


                    {/* ACHIEVEMENT */}

                    <div className="counter-item">

                        <div className="counter-number">

                            {counters.achievement}

                            <sup>
                                nd
                            </sup>

                        </div>

                        <div className="counter-label">
                            National Competition
                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}