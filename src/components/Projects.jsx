import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ExternalLink,
    Sparkles,
    Search,
    Eye,
    X
} from 'lucide-react';

import './Projects.css';

// =====================================================
// PROJECT IMAGES
// =====================================================

import weatherImg from '../assets/weather.jpeg';
import tryzoneImg from '../assets/tryzone.jpeg';
import owltrackrImg from '../assets/owltrakr.jpeg';
import owlixImg from '../assets/owlix.jpeg';
import neoImg from '../assets/neo.jpeg';
import hiremindsImg from '../assets/hireminds.jpeg';
import grindoImg from '../assets/grindo.jpeg';
import chotekisanImg from '../assets/chotekisan.jpeg';
import calcverseImg from '../assets/calcverse.jpeg';

// =====================================================
// PROJECT IMAGE MAP
// =====================================================

const projectImages = {
    weather: weatherImg,
    tryzone: tryzoneImg,
    owltrackr: owltrackrImg,
    owlix: owlixImg,
    neo: neoImg,
    hireminds: hiremindsImg,
    grindo: grindoImg,
    chotekisan: chotekisanImg,
    calcverse: calcverseImg
};

// =====================================================
// PROJECT IMAGE COMPONENT
// =====================================================

function ProjectImage({
    src,
    alt,
    className,
    ...props
}) {
    const [imageSrc, setImageSrc] = useState(src);

    const handleImageError = () => {
        setImageSrc(
            'https://placehold.co/1200x700/f5f3ff/475569?text=Project+Preview'
        );
    };

    return (
        <img
            src={imageSrc}
            alt={alt || 'Project preview'}
            className={className}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            {...props}
        />
    );
}

// =====================================================
// GET LOCAL PROJECT IMAGE
// =====================================================

function getProjectImage(project) {
    if (!project) {
        return null;
    }

    const title = String(
        project.title || ''
    ).toLowerCase();

    if (
        title.includes('weather') ||
        title.includes('skycast')
    ) {
        return projectImages.weather;
    }

    if (
        title.includes('tryzone') ||
        title.includes('try zone')
    ) {
        return projectImages.tryzone;
    }

    if (
        title.includes('owltrackr') ||
        title.includes('owltrack')
    ) {
        return projectImages.owltrackr;
    }

    if (
        title.includes('owlix') ||
        title.includes('employee hub') ||
        title.includes('employee')
    ) {
        return projectImages.owlix;
    }

    if (
        title.includes('neo wheels') ||
        title.includes('neo-wheels') ||
        title.includes('neo')
    ) {
        return projectImages.neo;
    }

    if (
        title.includes('hireminds') ||
        title.includes('hire minds')
    ) {
        return projectImages.hireminds;
    }

    if (title.includes('grindo')) {
        return projectImages.grindo;
    }

    if (
        title.includes('chotekisan') ||
        title.includes('chote kisan')
    ) {
        return projectImages.chotekisan;
    }

    if (
        title.includes('calcverse') ||
        title.includes('calculator')
    ) {
        return projectImages.calcverse;
    }

    return project.image_url || null;
}

// =====================================================
// PROJECTS COMPONENT
// =====================================================

export default function Projects({ projectsList }) {
    const [selectedCategory, setSelectedCategory] =
        useState('All');

    const [searchQuery, setSearchQuery] =
        useState('');

    const [activeModalProject, setActiveModalProject] =
        useState(null);

    // =================================================
    // PROJECT DATA
    // =================================================

    const projects = Array.isArray(projectsList)
        ? projectsList.map((project) => ({
            ...project,
            localImage: getProjectImage(project)
        }))
        : [];

    // =================================================
    // CATEGORIES
    // =================================================

    const categories = useMemo(() => {
        const categorySet = new Set(['All']);

        projects.forEach((project) => {
            if (
                project?.category &&
                typeof project.category === 'string'
            ) {
                categorySet.add(project.category);
            }
        });

        return Array.from(categorySet);
    }, [projects]);

    // =================================================
    // FILTER PROJECTS
    // =================================================

    const filteredProjects = useMemo(() => {
        const query = searchQuery
            .toLowerCase()
            .trim();

        return projects.filter((project) => {
            if (!project) {
                return false;
            }

            const matchesCategory =
                selectedCategory === 'All' ||
                project.category === selectedCategory;

            const matchesSearch =
                !query ||
                project.title
                    ?.toLowerCase()
                    .includes(query) ||
                project.description
                    ?.toLowerCase()
                    .includes(query) ||
                project.technologies?.some(
                    (technology) =>
                        String(technology)
                            .toLowerCase()
                            .includes(query)
                );

            return (
                matchesCategory &&
                matchesSearch
            );
        });
    }, [
        projects,
        selectedCategory,
        searchQuery
    ]);

    // =================================================
    // CLOSE MODAL
    // =================================================

    const closeModal = () => {
        setActiveModalProject(null);
    };

    // =================================================
    // RETURN
    // =================================================

    return (
        <section
            className="projects-section"
            id="projects"
        >
            <div className="section-container">

                {/* =====================================
                    SECTION HEADER
                ====================================== */}

                <div className="section-header">

                    <span className="section-tag">
                        <Sparkles size={14} />
                        <span>My Portfolio</span>
                    </span>

                    <h2 className="section-title">
                        Featured Projects
                    </h2>


                </div>

                {/* =====================================
                    FILTER + SEARCH
                ====================================== */}

                <div className="projects-control-bar">

          

                </div>

                {/* =====================================
                    PROJECT GRID
                ====================================== */}

                <motion.div
                    className="bento-grid"
                    layout
                >
                    <AnimatePresence>
                        {filteredProjects.map(
                            (project, idx) => (
                                <motion.div
                                    key={
                                        project.id ||
                                        project.title ||
                                        idx
                                    }
                                    layout
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96
                                    }}
                                    transition={{
                                        duration: 0.3
                                    }}
                                    className={`bento-card glass-panel ${
                                        project.is_featured
                                            ? 'featured-card'
                                            : ''
                                    }`}
                                >

                                    {/* IMAGE */}

                                    <div className="bento-img-container">

                                        <ProjectImage
                                            src={
                                                project.localImage
                                            }
                                            alt={
                                                project.title ||
                                                'Project preview'
                                            }
                                            className="bento-img"
                                        />

                                        <div className="bento-overlay">

                                            <button
                                                type="button"
                                                className="btn-view-details"
                                                onClick={() =>
                                                    setActiveModalProject(
                                                        project
                                                    )
                                                }
                                            >
                                                <Eye size={15} />

                                                <span>
                                                    Case Study
                                                </span>
                                            </button>

                                        </div>

                                        {project.is_featured && (
                                            <span className="featured-badge">
                                                Featured
                                            </span>
                                        )}

                                    </div>

                                    {/* CONTENT */}

                                    <div className="bento-content">

                                        <div className="bento-header">

                                            <span className="project-cat-tag">
                                                {project.category ||
                                                    'Project'}
                                            </span>

                                            <span className="project-num">
                                                {project.number_label ||
                                                    `0${idx + 1}`}
                                            </span>

                                        </div>

                                        <h3
                                            className="project-title"
                                            onClick={() =>
                                                setActiveModalProject(
                                                    project
                                                )
                                            }
                                        >
                                            {project.title ||
                                                'Untitled Project'}
                                        </h3>

                                        <p className="project-desc">
                                            {project.description ||
                                                'A modern web project built with contemporary technologies.'}
                                        </p>

                                        {/* TECHNOLOGIES */}


                                        {/* LIVE DEMO ONLY */}

                                        <div className="bento-actions">

                                            {project.live_url &&
                                                project.live_url !== '#' && (
                                                    <a
                                                        href={
                                                            project.live_url
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-project-link primary"
                                                    >
                                                        <span>
                                                            Live Demo
                                                        </span>

                                                        <ExternalLink
                                                            size={13}
                                                        />
                                                    </a>
                                                )}

                                        </div>

                                    </div>

                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* NO RESULTS */}

                {filteredProjects.length === 0 && (
                    <div className="no-projects-found">
                        <p>
                            No projects match your
                            current filter or search
                            criteria.
                        </p>
                    </div>
                )}

            </div>

            {/* =========================================
                PROJECT MODAL
            ========================================== */}

            {activeModalProject && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                >
                    <div
                        className="modal-content glass-panel"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >

                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <X size={19} />
                        </button>

                        <div className="modal-body">

                            <div className="modal-img-wrapper">
                                <ProjectImage
                                    src={
                                        activeModalProject.localImage
                                    }
                                    alt={
                                        activeModalProject.title ||
                                        'Project preview'
                                    }
                                    className="modal-img"
                                />
                            </div>

                            <div className="modal-details">

                                <span className="project-cat-tag">
                                    {activeModalProject.category ||
                                        'Project'}
                                </span>

                                <h2
                                    className="modal-title"
                                    id="project-modal-title"
                                >
                                    {activeModalProject.title ||
                                        'Untitled Project'}
                                </h2>

                                <p className="modal-long-desc">
                                    {activeModalProject.long_description ||
                                        activeModalProject.description ||
                                        'Project details are currently unavailable.'}
                                </p>

                                {Array.isArray(
                                    activeModalProject.technologies
                                ) &&
                                    activeModalProject.technologies
                                        .length > 0 && (
                                        <div className="modal-section-block">

                                            <h4>
                                                Technologies Used
                                            </h4>

                                            <div className="project-tech-badges">
                                                {activeModalProject.technologies.map(
                                                    (
                                                        technology,
                                                        technologyIndex
                                                    ) => (
                                                        <span
                                                            key={
                                                                technologyIndex
                                                            }
                                                            className="tech-badge-sm"
                                                        >
                                                            {
                                                                technology
                                                            }
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                        </div>
                                    )}

                                {/* LIVE WEBSITE ONLY */}

                                <div className="modal-actions">

                                    {activeModalProject.live_url &&
                                        activeModalProject.live_url !==
                                            '#' && (
                                            <a
                                                href={
                                                    activeModalProject.live_url
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary-glow"
                                            >
                                                <span>
                                                    Visit Live Website
                                                </span>

                                                <ExternalLink
                                                    size={15}
                                                />
                                            </a>
                                        )}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}