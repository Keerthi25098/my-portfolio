import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Sparkles } from 'lucide-react';
import './Experience.css';

export default function Experience({ experienceList }) {
    const items = experienceList || [];

    return (
        <section className="experience-section" id="experience">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">
                        <Sparkles size={14} /> Career Journey
                    </span>
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">
                        My real internships, developer roles, competitive achievements, and technical experience.
                    </p>
                </div>

                {/* Timeline Stack */}
                <div className="timeline-container">
                    <div className="timeline-spine" />

                    {items.map((item, index) => (
                        <motion.div
                            key={item.id || index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot">
                                <Briefcase size={16} />
                            </div>

                            <div className="timeline-content glass-panel">
                                <div className="timeline-header">
                                    <div>
                                        <span className="timeline-number">{item.number_label || `0${items.length - index}`}</span>
                                        <h3 className="company-name">{item.company}</h3>
                                        <h4 className="role-title gradient-text">{item.role_title}</h4>
                                    </div>

                                    <div className="timeline-badge-group">
                                        <span className="year-badge">
                                            <Calendar size={13} /> {item.year_label || item.start_date}
                                        </span>
                                        {item.is_current && <span className="current-badge">Current Role</span>}
                                    </div>
                                </div>

                                <p className="timeline-desc">{item.description}</p>

                                {item.responsibilities && item.responsibilities.length > 0 && (
                                    <ul className="responsibilities-list">
                                        {item.responsibilities.map((resp, rIdx) => (
                                            <li key={rIdx}>{resp}</li>
                                        ))}
                                    </ul>
                                )}

                                {item.technologies && item.technologies.length > 0 && (
                                    <div className="tech-tags">
                                        {item.technologies.map((tech, tIdx) => (
                                            <span key={tIdx} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {item.certificate_url && (
                                    <a
                                        href={item.certificate_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-link"
                                    >
                                        <Award size={14} />
                                        <span>View Certificate</span>
                                        <ExternalLink size={13} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
