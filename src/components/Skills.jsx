import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code } from 'lucide-react';
import './Skills.css';

// Import logos from assets
import htmlLogo from '../assets/skills-logo/html.png';
import cssLogo from '../assets/skills-logo/css.png';
import javascriptLogo from '../assets/skills-logo/jss.png';
import reactLogo from '../assets/skills-logo/react.png';
import bootstrapLogo from '../assets/skills-logo/bootstrapp.png';
import githubLogo from '../assets/skills-logo/github.png';
import mysqlLogo from '../assets/skills-logo/sql.png';
import wordpressLogo from '../assets/skills-logo/wordpress.png';
import laravelLogo from '../assets/skills-logo/larawal.png';

export default function Skills({ skillsList }) {
    const [activeCategory, setActiveCategory] = useState('All');

    const fallbackLogos = {
        'HTML5': htmlLogo,
        'CSS3': cssLogo,
        'JavaScript (ES6+)': javascriptLogo,
        'JavaScript': javascriptLogo,
        'React.js': reactLogo,
        'Bootstrap': bootstrapLogo,
        'GitHub & Git': githubLogo,
        'GitHub': githubLogo,
        'MySQL': mysqlLogo,
        'WordPress': wordpressLogo,
        'PHP & Laravel': laravelLogo,
    };

    const skills = skillsList || [];

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & Deployment'];

    const filteredSkills = activeCategory === 'All'
        ? skills
        : skills.filter(s => s.category?.toLowerCase().includes(activeCategory.toLowerCase()));

    return (
        <section className="skills-section" id="skills">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">
                        <Sparkles size={14} /> Technical Proficiency
                    </span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Languages, frameworks, database systems, and modern web development tools I work with daily.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="skills-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`skill-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {filteredSkills.map((skill, idx) => {
                        const logoSrc = skill.logo_url && skill.logo_url.startsWith('/') && !skill.logo_url.includes('assets')
                            ? skill.logo_url
                            : (fallbackLogos[skill.name] || skill.logo_url || reactLogo);

                        return (
                            <motion.div
                                key={skill.id || idx}
                                className="skill-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                            >
                                <div className="skill-icon-wrap">
                                    <img src={logoSrc} alt={skill.name} className="skill-logo-img" />
                                </div>

                                <div className="skill-info">
                                    <span className="skill-cat">{skill.category}</span>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-desc">{skill.description}</p>
                                </div>

                                {skill.proficiency_label && (
                                    <span className="skill-badge">{skill.proficiency_label}</span>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
