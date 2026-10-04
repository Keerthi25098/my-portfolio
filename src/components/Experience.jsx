import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Calendar,
    Award,
    Sparkles,
    X,
    ArrowUpRight,
    CheckCircle2,
} from 'lucide-react';

import './Experience.css';

const experienceList = [
    {
        id: 6,
        number_label: '06',
        company: 'Cloudi5 Technologies',
        role_title: 'From Intern to Developer',
        year_label: '2026',
        is_current: true,

        description:
            'Expanded technical skills across frontend and backend web development while working on real production client projects.',

        responsibilities: [
            'Developed responsive website components using React.js, HTML5, CSS3, and Bootstrap.',
            'Implemented backend functionality using PHP, Laravel, and MySQL.',
            'Managed deployments using AWS EC2 and InMotion hosting.',
            'Customized WordPress sites and optimized web performance.',
        ],

        technologies: [
            'React.js',
            'JavaScript',
            'PHP',
            'Laravel',
            'MySQL',
            'Bootstrap',
            'AWS EC2',
            'WordPress',
        ],

        certificate_url: '',
    },

    {
        id: 5,
        number_label: '05',
        company: 'Ibacus Tech Solution',
        role_title: 'React.js Intern',
        year_label: '2025',
        is_current: false,

        description:
            'Completed an intensive 3-month React.js internship focused on modular frontend web applications.',

        responsibilities: [
            'Built reusable React components with clean state management.',
            'Designed responsive interfaces and integrated REST APIs.',
            'Worked with forms, UI components, and application state.',
        ],

        technologies: [
            'React.js',
            'JavaScript',
            'CSS3',
            'REST API',
            'Git',
        ],

        certificate_url: '',
    },

    {
        id: 4,
        number_label: '04',
        company: "St. Xavier's College, Nagercoil",
        role_title: 'National Web Game Competition',
        year_label: '2024',
        is_current: false,

        description:
            'Won Second Prize at a National Level IT Symposium by developing an interactive web game under strict time constraints.',

        responsibilities: [
            'Built interactive game logic using JavaScript and HTML5 Canvas.',
            'Worked under competition time limits to deliver a functional prototype.',
        ],

        technologies: [
            'JavaScript',
            'HTML5 Canvas',
            'CSS Animations',
            'Game Logic',
        ],

        certificate_url: '',
    },

    {
        id: 3,
        number_label: '03',
        company: 'AK Infopark',
        role_title: 'Web Development Intern',
        year_label: '2024',
        is_current: false,

        description:
            'Completed a web development internship focused on building real-world e-commerce website structures.',

        responsibilities: [
            'Developed a functional Flipkart website clone with product grids and checkout UI.',
            'Strengthened HTML, CSS Flexbox, Grid, and JavaScript DOM concepts.',
        ],

        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'UI Design',
        ],

        certificate_url: '',
    },

    {
        id: 2,
        number_label: '02',
        company: 'Techvolt',
        role_title: 'Figma UI/UX Intern',
        year_label: '2023',
        is_current: false,

        description:
            'Introduced to modern UI design systems, visual hierarchy, wireframing, and interactive prototyping.',

        responsibilities: [
            'Designed mobile and web wireframes using Figma.',
            'Created typography systems, component guides, and user flows.',
        ],

        technologies: [
            'Figma',
            'UI/UX Design',
            'Wireframing',
            'Prototyping',
        ],

        certificate_url: '',
    },

    {
        id: 1,
        number_label: '01',
        company: 'Network Systems',
        role_title: 'Java Full Stack Student',
        year_label: '2023',
        is_current: false,

        description:
            'Learned foundational software development principles, object-oriented Java, and database concepts.',

        responsibilities: [
            'Studied Java OOP, NetBeans IDE, and database management.',
            'Developed an early interest in frontend and interactive web development.',
        ],

        technologies: [
            'Java',
            'SQL',
            'HTML',
            'CSS',
            'OOP Principles',
        ],

        certificate_url: '',
    },
];


/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({ item, onClick, index }) {
    return (
        <motion.button
            type="button"
            className={`experience-card ${
                item.is_current ? 'experience-card-current' : ''
            }`}
            onClick={onClick}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.45,
                delay: index * 0.06,
            }}
            whileHover={{
                y: -7,
            }}
        >

            {/* CARD TOP */}
            <div className="experience-card-top">

                <span className="experience-number">
                    {item.number_label}
                </span>

                <div className="experience-card-meta">

                    <span className="experience-year">
                        <Calendar size={12} />
                        {item.year_label}
                    </span>

                    {item.is_current && (
                        <span className="experience-current">
                            <span />
                            Current
                        </span>
                    )}

                </div>

            </div>


            {/* CARD BODY */}
            <div className="experience-card-body">

             
                <h3>
                    {item.company}
                </h3>

                <h4>
                    {item.role_title}
                </h4>

            </div>


            {/* CARD FOOTER */}
            <div className="experience-card-bottom">

                <span className="experience-view">
                    View details
                </span>

                <span className="experience-card-arrow">
                    <ArrowUpRight size={15} />
                </span>

            </div>

        </motion.button>
    );
}


/* =========================================================
   EXPERIENCE MODAL
========================================================= */

function ExperienceModal({ item, onClose }) {
    useEffect(() => {
        if (!item) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener(
            'keydown',
            handleEscape
        );

        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener(
                'keydown',
                handleEscape
            );

            document.body.style.overflow = '';
        };
    }, [item, onClose]);

    if (!item) {
        return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                className="experience-modal-overlay"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                onClick={onClose}
            >

                <motion.div
                    className="experience-modal"
                    initial={{
                        opacity: 0,
                        scale: 0.94,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.94,
                        y: 25,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >

                    {/* MODAL HEADER */}
                    <div className="experience-modal-header">

                        <div className="modal-header-left">

                            <span className="modal-number">
                                {item.number_label}
                            </span>

                            <div className="modal-meta">

                                <span className="modal-year">
                                    <Calendar size={13} />
                                    {item.year_label}
                                </span>

                                {item.is_current && (
                                    <span className="modal-current">
                                        <span />
                                        Current Role
                                    </span>
                                )}

                            </div>

                        </div>


                        <button
                            type="button"
                            className="modal-close"
                            onClick={onClose}
                            aria-label="Close experience details"
                        >
                            <X size={20} />
                        </button>

                    </div>


                    {/* MODAL TITLE */}
                    <div className="experience-modal-title">

                        <span className="modal-overline">
                            PROFESSIONAL EXPERIENCE
                        </span>

                        <h2>
                            {item.company}
                        </h2>

                        <h3>
                            {item.role_title}
                        </h3>

                    </div>


                    {/* DESCRIPTION */}
                    <div className="experience-modal-description">

                        <p>
                            {item.description}
                        </p>

                    </div>


                    {/* DETAILS */}
                    <div className="experience-modal-grid">

                        {/* RESPONSIBILITIES */}
                        <div className="modal-detail-section">

                            <div className="modal-section-heading">

                                <span className="modal-section-icon">
                                    <CheckCircle2 size={16} />
                                </span>

                                <h4>
                                    Key Responsibilities
                                </h4>

                            </div>

                            <ul className="modal-responsibilities">

                                {item.responsibilities.map(
                                    (
                                        responsibility,
                                        index
                                    ) => (
                                        <li
                                            key={index}
                                        >
                                            <span className="modal-bullet" />

                                            <span>
                                                {responsibility}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ul>

                        </div>


                        {/* TECHNOLOGIES */}
                        <div className="modal-detail-section">

                            <div className="modal-section-heading">

                                <span className="modal-section-icon">
                                    <Sparkles size={16} />
                                </span>

                                <h4>
                                    Technologies & Skills
                                </h4>

                            </div>

                            <div className="modal-technologies">

                                {item.technologies.map(
                                    (
                                        technology,
                                        index
                                    ) => (
                                        <span
                                            key={`${technology}-${index}`}
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}

                            </div>

                        </div>

                    </div>


                    {/* MODAL FOOTER */}
                    <div className="experience-modal-footer">

                        {item.certificate_url ? (
                            <a
                                href={
                                    item.certificate_url
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-certificate"
                            >
                                <Award size={16} />
                                View Certificate
                            </a>
                        ) : (
                            <span className="modal-certificate disabled">
                                <Award size={16} />
                                Certificate unavailable
                            </span>
                        )}

                        <button
                            type="button"
                            className="modal-done-button"
                            onClick={onClose}
                        >
                            Close
                        </button>

                    </div>

                </motion.div>

            </motion.div>
        </AnimatePresence>
    );
}


/* =========================================================
   MAIN EXPERIENCE SECTION
========================================================= */

export default function Experience() {
    const [selectedExperience, setSelectedExperience] =
        useState(null);

    return (
        <section
            id="experience"
            className="experience-section"
        >

            <div className="experience-container">

                {/* SECTION HEADER */}
                <header className="experience-heading">

                    <span className="experience-eyebrow">
                        <Sparkles size={14} />
                        Career Journey
                    </span>

                    <h2 className="experience-title">
                        My Professional Journey
                    </h2>

                    <p className="experience-subtitle">
                        From learning the fundamentals of software
                        development to building real-world applications,
                        every experience has shaped the developer I am
                        today.
                    </p>

                </header>


                {/* EXPERIENCE CARDS */}
                <div className="experience-grid">

                    {experienceList.map(
                        (item, index) => (
                            <ExperienceCard
                                key={item.id}
                                item={item}
                                index={index}
                                onClick={() =>
                                    setSelectedExperience(
                                        item
                                    )
                                }
                            />
                        )
                    )}

                </div>


             
            </div>


            {/* MODAL */}
            <ExperienceModal
                item={selectedExperience}
                onClose={() =>
                    setSelectedExperience(null)
                }
            />

        </section>
    );
}