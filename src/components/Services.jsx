import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import './Services.css';

export default function Services({ servicesList }) {
    const iconMap = {
        Code2,
        Layout,
        Sparkles,
        Smartphone,
    };

    const list = servicesList || [];

    return (
        <section className="services-section" id="services">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">
                        <Sparkles size={14} /> What I Offer
                    </span>
                    <h2 className="section-title">Services & Solutions</h2>
                    <p className="section-subtitle">
                        High quality web development services crafted to elevate your business, product, or personal brand.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className="services-grid">
                    {list.map((service, idx) => {
                        const IconComp = iconMap[service.icon_name] || Code2;
                        return (
                            <motion.div
                                key={service.id || idx}
                                className="service-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="service-icon-box">
                                    <IconComp size={24} />
                                </div>

                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>

                                <a href="#contact" className="service-cta-link">
                                    <span>Enquire Now</span>
                                    <ArrowRight size={14} />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
