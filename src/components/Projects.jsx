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
// All images are inside:
// src/assets/
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
// GITHUB ICON
// =====================================================

function GithubIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.66.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.79-1.65 2.76-1.65.9 0 1.64.3 2.05.77.1-.76.35-1.28.64-1.58-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.27-5.14 5.55.36.31.69.92.69 1.85v2.74c0 .3.2.65.78.54a11.27 11.27 0 0 0 7.68-10.66C23.25 5.48 18.27.5 12 .5Z" />
        </svg>
    );
}

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

    // Weather / SkyCast
    if (
        title.includes('weather') ||
        title.includes('skycast')
    ) {
        return projectImages.weather;
    }

    // TryZone
    if (
        title.includes('tryzone') ||
        title.includes('try zone')
    ) {
        return projectImages.tryzone;
    }

    // OwlTracKR
    if (
        title.includes('owltrackr') ||
        title.includes('owltrack')
    ) {
        return projectImages.owltrackr;
    }

    // Owlix
    if (
        title.includes('owlix') ||
        title.includes('employee hub') ||
        title.includes('employee')
    ) {
        return projectImages.owlix;
    }

    // Neo Wheels
    if (
        title.includes('neo wheels') ||
        title.includes('neo-wheels') ||
        title.includes('neo')
    ) {
        return projectImages.neo;
    }

    // HireMinds
    if (
        title.includes('hireminds') ||
        title.includes('hire minds')
    ) {
        return projectImages.hireminds;
    }

    // Grindo
    if (
        title.includes('grindo')
    ) {
        return projectImages.grindo;
    }

    // ChoteKisan
    if (
        title.includes('chotekisan') ||
        title.includes('chote kisan')
    ) {
        return projectImages.chotekisan;
    }

    // CalcVerse
    if (
        title.includes('calcverse') ||
        title.includes('calculator')
    ) {
        return projectImages.calcverse;
    }

    // If image_url already contains a valid URL/path,
    // use it as a fallback.
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

        const query =
            searchQuery
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

                        <span>
                            My Portfolio
                        </span>

                    </span>

                    <h2 className="section-title">
                        Featured Projects
                    </h2>

                    <p className="section-subtitle">
                        Explore my real production client
                        websites, web applications,
                        e-commerce platforms, and
                        interactive software tools.
                    </p>

                </div>

                {/* =====================================
                    FILTER + SEARCH
                ====================================== */}

                <div className="projects-control-bar">

                    {/* CATEGORY FILTER */}

                    <div className="category-pills">

                        {categories.map(
                            (category) => (

                                <button
                                    key={category}
                                    type="button"
                                    className={`filter-pill ${
                                        selectedCategory ===
                                        category
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        setSelectedCategory(
                                            category
                                        )
                                    }
                                >

                                    {category}

                                </button>

                            )
                        )}

                    </div>

                    {/* SEARCH */}

                    <div className="project-search-box glass-panel">

                        <Search
                            size={16}
                            className="search-icon"
                        />

                        <input
                            type="text"
                            placeholder="Search projects or skills..."
                            value={searchQuery}
                            onChange={(event) =>
                                setSearchQuery(
                                    event.target.value
                                )
                            }
                            className="search-input"
                        />

                        {searchQuery && (

                            <button
                                type="button"
                                onClick={() =>
                                    setSearchQuery('')
                                }
                                className="clear-search-btn"
                                aria-label="Clear search"
                            >

                                <X size={14} />

                            </button>

                        )}

                    </div>

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
                                        scale: 0.9
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9
                                    }}
                                    transition={{
                                        duration: 0.4
                                    }}
                                    className={`bento-card glass-panel ${
                                        project.is_featured
                                            ? 'featured-card'
                                            : ''
                                    }`}
                                >

                                    {/* =================================
                                        IMAGE
                                    ================================== */}

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

                                                <Eye size={16} />

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

                                    {/* =================================
                                        CONTENT
                                    ================================== */}

                                    <div className="bento-content">

                                        <div className="bento-header">

                                            <span className="project-cat-tag">

                                                {project.category ||
                                                    'Project'}

                                            </span>

                                            <span className="project-num">

                                                {project.number_label ||
                                                    `0${
                                                        idx + 1
                                                    }`}

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

                                        {Array.isArray(
                                            project.technologies
                                        ) &&
                                            project
                                                .technologies
                                                .length >
                                                0 && (

                                                <div className="project-tech-badges">

                                                    {project.technologies
                                                        .slice(
                                                            0,
                                                            4
                                                        )
                                                        .map(
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

                                            )}

                                        {/* BUTTONS */}

                                        <div className="bento-actions">

                                            {project.live_url &&
                                                project.live_url !==
                                                    '#' && (

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
                                                            size={
                                                                14
                                                            }
                                                        />

                                                    </a>

                                                )}

                                            {project.github_url && (

                                                <a
                                                    href={
                                                        project.github_url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-project-link secondary"
                                                    title="GitHub Repository"
                                                >

                                                    <GithubIcon
                                                        size={16}
                                                    />

                                                    <span>
                                                        Code
                                                    </span>

                                                </a>

                                            )}

                                        </div>

                                    </div>

                                </motion.div>

                            )
                        )}

                    </AnimatePresence>

                </motion.div>

                {/* =====================================
                    NO RESULTS
                ====================================== */}

                {filteredProjects.length ===
                    0 && (

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

                        {/* CLOSE BUTTON */}

                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >

                            <X size={20} />

                        </button>

                        <div className="modal-body">

                            {/* =================================
                                MODAL IMAGE
                            ================================== */}

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

                            {/* =================================
                                MODAL DETAILS
                            ================================== */}

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

                                {/* TECHNOLOGIES */}

                                {Array.isArray(
                                    activeModalProject.technologies
                                ) &&
                                    activeModalProject
                                        .technologies
                                        .length >
                                        0 && (

                                        <div className="modal-section-block">

                                            <h4>
                                                Technologies Used
                                            </h4>

                                            <div className="project-tech-badges">

                                                {activeModalProject
                                                    .technologies
                                                    .map(
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

                                {/* ACTIONS */}

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
                                                    size={16}
                                                />

                                            </a>

                                        )}

                                    {activeModalProject.github_url && (

                                        <a
                                            href={
                                                activeModalProject.github_url
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary-glass"
                                        >

                                            <GithubIcon
                                                size={18}
                                            />

                                            <span>
                                                View GitHub Code
                                            </span>

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