import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';
import './Education.css';

export default function Education({ educationList }) {
    const list = educationList || [];

    return (
        <section className="education-section" id="education">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">
                        <Sparkles size={14} /> Academic Background
                    </span>
                    <h2 className="section-title">Education & Achievements</h2>
                    <p className="section-subtitle">
                        Formal qualifications, computer science degree, awards, and certifications.
                    </p>
                </div>

                {/* Education Grid */}
                <div className="education-grid">
                    {list.map((item, idx) => (
                        <motion.div
                            key={item.id || idx}
                            className="education-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="edu-icon-box">
                                <GraduationCap size={24} />
                            </div>

                            <div className="edu-content">
                                <span className="edu-years">{item.start_year} — {item.end_year}</span>
                                <h3 className="edu-qualification">{item.qualification}</h3>
                                <h4 className="edu-field gradient-text">{item.field_of_study}</h4>
                                <p className="edu-institution">{item.institution}</p>
                                <p className="edu-desc">{item.description}</p>
                                {item.grade_or_cgpa && (
                                    <div className="edu-grade-badge">
                                        <Award size={14} />
                                        <span>Grade: {item.grade_or_cgpa}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
