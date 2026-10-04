
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
    Calendar,
    Award,
    Sparkles,
    ExternalLink,
    ArrowUpRight,
} from 'lucide-react';

import './Experience.css';

import cloudi5Image from '../assets/journey/currently.jpeg';
import ibacusImage from '../assets/journey/react.jpeg';
import competitionImage from '../assets/journey/game.jpeg';
import akInfoparkImage from '../assets/journey/flipcart.jpeg';
import techvoltImage from '../assets/journey/figma.png';
import networkSystemsImage from '../assets/journey/java.png';

const experienceList = [
    {
        id: 6,
        number_label: '06',
        company: 'Cloudi5 Technologies',
        role_title: 'From Intern to Developer',
        year_label: '2026',
        is_current: true,
        description:
            'Expanded technical skills across full frontend and backend web development stack working on real production client projects.',
        responsibilities: [
            'Developed responsive website components using React.js, HTML5, CSS3, and Bootstrap.',
            'Implemented backend functionality and integrations using PHP, Laravel, and MySQL.',
            'Managed cloud server deployments on AWS EC2 and InMotion web hosting platforms.',
            'Customized client WordPress sites and optimized web page load performance.',
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
        image: cloudi5Image,
        imageAlt: 'Cloudi5 Technologies professional experience',
        color: '#f7e5ef',
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
            'Completed an intensive 3-month React.js internship in Coimbatore building modular frontend web applications.',
        responsibilities: [
            'Built reusable React components with clean state management.',
            'Designed responsive UI layouts and integrated RESTful backend endpoints.',
            'Collaborated on web application user interfaces and stateful form controls.',
        ],
        technologies: [
            'React.js',
            'JavaScript',
            'CSS3',
            'REST API',
            'Git',
        ],
        image: ibacusImage,
        imageAlt: 'React.js development internship',
        color: '#e7e8fb',
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
            'Won Second Prize at the National Level IT Symposium for developing an interactive web game under tight time constraints.',
        responsibilities: [
            'Engineered interactive game logic and visual rendering using HTML5 Canvas & JS.',
            'Collaborated under competition time limits to present working prototype to judges.',
        ],
        technologies: [
            'JavaScript',
            'HTML5 Canvas',
            'CSS Animations',
            'Game Logic',
        ],
        image: competitionImage,
        imageAlt: 'National web game competition achievement',
        color: '#e4f2e8',
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
            'Completed web development internship focused on crafting real e-commerce website structures.',
        responsibilities: [
            'Developed a functional Flipkart website clone featuring product grids and checkout UI.',
            'Deepened core knowledge of HTML5 structure, CSS flexbox/grid, and DOM JS manipulation.',
        ],
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'UI Design',
        ],
        image: akInfoparkImage,
        imageAlt: 'Web development internship project',
        color: '#fff0df',
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
            'Designed mobile & web UI wireframes using Figma vector tools.',
            'Created component style guides, typography specs, and user flow diagrams.',
        ],
        technologies: [
            'Figma',
            'UI/UX Design',
            'Wireframing',
            'Prototyping',
        ],
        image: techvoltImage,
        imageAlt: 'Figma UI/UX design internship',
        color: '#f4e7f7',
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
            'Learned foundational full-stack software development principles, object-oriented Java, and database queries.',
        responsibilities: [
            'Studied Java OOP principles, NetBeans IDE, and database management.',
            'Discovered a strong passion for frontend interactive engineering and web development.',
        ],
        technologies: [
            'Java',
            'SQL',
            'HTML',
            'CSS',
            'OOP Principles',
        ],
        image: networkSystemsImage,
        imageAlt: 'Java Full Stack Development training',
        color: '#e4effc',
        certificate_url: '',
    },
];

function ExperienceCard({ item, index, total, progress }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.15, 1]
    );

    const start = index / total;
    const targetScale = 1 - (total - index - 1) * 0.035;

    const scale = useTransform(
        progress,
        [start, 1],
        [1, targetScale]
    );

    return (
        <div
            ref={cardRef}
            className="experience-card-wrapper"
            style={{ zIndex: index + 1 }}
        >
            <motion.article
                className="experience-stack-card"
                style={{
                    backgroundColor: item.color,
                    scale,
                }}
            >
                <div className="experience-card-top">
                    <span className="experience-card-number">
                        EXPERIENCE / {item.number_label}
                    </span>

                    <div className="experience-card-badges">
                        <span className="experience-year">
                            <Calendar size={14} />
                            {item.year_label}
                        </span>

                        {item.is_current && (
                            <span className="experience-current">
                                <span className="experience-current-dot" />
                                Current Role
                            </span>
                        )}
                    </div>
                </div>

                <div className="experience-card-layout">
                    <div className="experience-card-content">
                        <span className="experience-card-label">
                            {item.number_label} / 06
                        </span>

                        <h3 className="experience-company">
                            {item.company}
                        </h3>

                        <h4 className="experience-role">
                            {item.role_title}
                        </h4>

                        <p className="experience-description">
                            {item.description}
                        </p>

                        <ul className="experience-responsibilities">
                            {item.responsibilities.map((responsibility, i) => (
                                <li key={i}>
                                    <span className="experience-bullet" />
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="experience-technologies">
                            {item.technologies.map((technology, i) => (
                                <span
                                    className="experience-tech-tag"
                                    key={`${technology}-${i}`}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <div className="experience-card-footer">
                            {item.certificate_url ? (
                                <a
                                    href={item.certificate_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="experience-certificate"
                                >
                                    <Award size={16} />
                                    <span>View Certificate</span>
                                    <ExternalLink size={14} />
                                </a>
                            ) : (
                                <span className="experience-certificate experience-certificate-placeholder">
                                    <Award size={16} />
                                    <span>View Certificate</span>
                                    <ExternalLink size={14} />
                                </span>
                            )}

                            <span className="experience-card-count">
                                {item.number_label}
                                <ArrowUpRight size={16} />
                            </span>
                        </div>
                    </div>

                    <div className="experience-card-image">
                        <motion.img
                            src={item.image}
                            alt={item.imageAlt}
                            style={{ scale: imageScale }}
                            loading={index < 2 ? 'eager' : 'lazy'}
                        />

                        <div className="experience-image-overlay">
                            <span>{item.company}</span>
                            <span>{item.year_label}</span>
                        </div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
}

export default function Experience() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section
            className="experience-section"
            id="experience"
            ref={sectionRef}
        >
            <header className="experience-heading">
                <span className="experience-eyebrow">
                    <Sparkles size={15} />
                    Career Journey
                </span>

                <h2 className="experience-title">
                    Professional Experience
                </h2>

              
              
            </header>

            <div className="experience-stack">
                {experienceList.map((item, index) => (
                    <ExperienceCard
                        key={item.id}
                        item={item}
                        index={index}
                        total={experienceList.length}
                        progress={scrollYProgress}
                    />
                ))}
            </div>

            <footer className="experience-ending">
                <span className="experience-ending-eyebrow">
                    THE JOURNEY CONTINUES
                </span>

                <h3>Learning through every experience.</h3>

                <p>
                    Building skills, solving problems, and growing with
                    every new opportunity.
                </p>
            </footer>
        </section>
    );
}