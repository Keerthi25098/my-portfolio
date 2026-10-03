import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials({ testimonialsList }) {
    const list = (testimonialsList || []).filter((t) => t.is_published !== false);

    if (list.length === 0) return null;

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">
                        <Sparkles size={14} /> Endorsements
                    </span>
                    <h2 className="section-title">Client & Team Feedback</h2>
                    <p className="section-subtitle">
                        What colleagues, project leads, and clients say about my frontend work and engineering collaboration.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid">
                    {list.map((item, idx) => (
                        <motion.div
                            key={item.id || idx}
                            className="testimonial-card glass-panel"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="quote-icon">
                                <Quote size={28} />
                            </div>

                            <div className="star-rating">
                                {[...Array(item.rating || 5)].map((_, sIdx) => (
                                    <Star key={sIdx} size={15} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>

                            <p className="testimonial-text">"{item.feedback}"</p>

                            <div className="client-info">
                                {item.avatar_url ? (
                                    <img src={item.avatar_url} alt={item.client_name} className="client-avatar" />
                                ) : (
                                    <div className="client-avatar-fallback">
                                        {item.client_name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="client-name">{item.client_name}</h4>
                                    <p className="client-role">
                                        {item.client_role} {item.organization ? `· ${item.organization}` : ''}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
