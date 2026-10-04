import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
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

    const skills = Array.isArray(skillsList)
        ? skillsList
        : [];

    const categories = [
        'All',
        'Frontend',
        'Backend',
        'Database',
        'Tools & Deployment',
    ];

    const filteredSkills =
        activeCategory === 'All'
            ? skills
            : skills.filter((skill) =>
                skill.category
                    ?.toLowerCase()
                    .includes(
                        activeCategory.toLowerCase()
                    )
            );

    /*
     * Split skills into two rows.
     *
     * Row 1:
     * first half of the skills
     *
     * Row 2:
     * second half of the skills
     */
    const rows = useMemo(() => {
        const middle = Math.ceil(
            filteredSkills.length / 2
        );

        return [
            filteredSkills.slice(0, middle),
            filteredSkills.slice(middle),
        ];
    }, [filteredSkills]);

    /*
     * Duplicate each row so the marquee can loop
     * continuously without an empty space.
     */
    const getMarqueeItems = (row) => [
        ...row,
        ...row,
    ];

    return (
        <section
            className="skills-section"
            id="skills"
        >
            <div className="section-container">

                {/* Section Header */}
                <div className="section-header">

                    <span className="section-tag">
                        <Sparkles size={14} />
                        <span>
                            Technical Proficiency
                        </span>
                    </span>

                    <h2 className="section-title">
                        Skills & Technologies
                    </h2>

                    <p className="section-subtitle">
                        Languages, frameworks, databases,
                        and modern web development tools
                        I work with.
                    </p>

                </div>

                {/* Category Tabs */}
                <div className="skills-tabs">

                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`skill-tab-btn ${
                                activeCategory === category
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() =>
                                setActiveCategory(
                                    category
                                )
                            }
                        >
                            {category}
                        </button>
                    ))}

                </div>

            </div>

            {/* =================================================
                SKILLS MARQUEE
            ================================================= */}

            {filteredSkills.length > 0 ? (
                <div className="skills-marquee-wrapper">

                    {/* ROW 1 */}
                    <div className="skills-marquee-row">

                        <div className="skills-marquee-track row-one">

                            {getMarqueeItems(
                                rows[0]
                            ).map(
                                (skill, index) => {

                                    const logoSrc =
                                        skill.logo_url &&
                                        skill.logo_url.startsWith(
                                            '/'
                                        ) &&
                                        !skill.logo_url.includes(
                                            'assets'
                                        )
                                            ? skill.logo_url
                                            : fallbackLogos[
                                                skill.name
                                            ] ||
                                            skill.logo_url ||
                                            reactLogo;

                                    return (
                                        <motion.div
                                            key={`row1-${skill.id || skill.name}-${index}`}
                                            className="skill-card"
                                            whileHover={{
                                                y: -5,
                                            }}
                                        >

                                            <div className="skill-icon-wrap">

                                                <img
                                                    src={
                                                        logoSrc
                                                    }
                                                    alt={
                                                        skill.name
                                                    }
                                                    className="skill-logo-img"
                                                />

                                            </div>

                                            <div className="skill-info">

                                                <span className="skill-cat">
                                                    {
                                                        skill.category
                                                    }
                                                </span>

                                                <h3 className="skill-name">
                                                    {
                                                        skill.name
                                                    }
                                                </h3>

                                                <p className="skill-desc">
                                                    {
                                                        skill.description
                                                    }
                                                </p>

                                            </div>

                                            {skill.proficiency_label && (
                                                <span className="skill-badge">
                                                    {
                                                        skill.proficiency_label
                                                    }
                                                </span>
                                            )}

                                        </motion.div>
                                    );
                                }
                            )}

                        </div>

                    </div>


                    {/* ROW 2 */}
                    <div className="skills-marquee-row">

                        <div className="skills-marquee-track row-two">

                            {getMarqueeItems(
                                rows[1]
                            ).map(
                                (skill, index) => {

                                    const logoSrc =
                                        skill.logo_url &&
                                        skill.logo_url.startsWith(
                                            '/'
                                        ) &&
                                        !skill.logo_url.includes(
                                            'assets'
                                        )
                                            ? skill.logo_url
                                            : fallbackLogos[
                                                skill.name
                                            ] ||
                                            skill.logo_url ||
                                            reactLogo;

                                    return (
                                        <motion.div
                                            key={`row2-${skill.id || skill.name}-${index}`}
                                            className="skill-card"
                                            whileHover={{
                                                y: -5,
                                            }}
                                        >

                                            <div className="skill-icon-wrap">

                                                <img
                                                    src={
                                                        logoSrc
                                                    }
                                                    alt={
                                                        skill.name
                                                    }
                                                    className="skill-logo-img"
                                                />

                                            </div>

                                            <div className="skill-info">

                                                <span className="skill-cat">
                                                    {
                                                        skill.category
                                                    }
                                                </span>

                                                <h3 className="skill-name">
                                                    {
                                                        skill.name
                                                    }
                                                </h3>

                                                <p className="skill-desc">
                                                    {
                                                        skill.description
                                                    }
                                                </p>

                                            </div>

                                            {skill.proficiency_label && (
                                                <span className="skill-badge">
                                                    {
                                                        skill.proficiency_label
                                                    }
                                                </span>
                                            )}

                                        </motion.div>
                                    );
                                }
                            )}

                        </div>

                    </div>

                </div>
            ) : (
                <div className="skills-empty">
                    <p>
                        No skills available for this
                        category.
                    </p>
                </div>
            )}

        </section>
    );
}