
import React, { useState, useEffect } from 'react';
import {
    Plus,
    Edit2,
    Trash2,
    Eye,
    EyeOff,
    Star,
    Search,
    ExternalLink,
    Loader2,
    X
} from 'lucide-react';

import { dataService } from '../services/dataService';
import './AdminEditors.css';

// =====================================================
// GITHUB BRAND ICON
// lucide-react does not provide the GitHub brand icon
// =====================================================

function GithubIcon({ size = 16 }) {
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

export default function ProjectsManager() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const emptyForm = {
        title: '',
        category: 'React Application',
        description: '',
        long_description: '',
        image_url: '',
        live_url: '',
        github_url: '',
        technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
        is_featured: false,
        is_published: true,
        display_order: 1,
    };

    const [formData, setFormData] = useState(emptyForm);
    const [techInput, setTechInput] = useState('');

    // =====================================================
    // FETCH PROJECTS
    // =====================================================

    const fetchProjects = async () => {
        setLoading(true);

        try {
            const data = await dataService.getProjects(true);
            setProjects(data);
        } catch (err) {
            console.error('Error loading projects:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // =====================================================
    // ADD PROJECT
    // =====================================================

    const handleOpenAddModal = () => {
        setEditingProject(null);
        setFormData(emptyForm);
        setTechInput('React.js, JavaScript, CSS');
        setModalOpen(true);
    };

    // =====================================================
    // EDIT PROJECT
    // =====================================================

    const handleOpenEditModal = (project) => {
        setEditingProject(project);
        setFormData(project);

        setTechInput(
            project.technologies
                ? project.technologies.join(', ')
                : ''
        );

        setModalOpen(true);
    };

    // =====================================================
    // SAVE PROJECT
    // =====================================================

    const handleSaveProject = async (e) => {
        e.preventDefault();

        try {
            const techArray = techInput
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean);

            const projectPayload = {
                ...formData,
                technologies: techArray,
            };

            if (editingProject) {
                await dataService.updateProject(
                    editingProject.id,
                    projectPayload
                );
            } else {
                await dataService.createProject(projectPayload);
            }

            setModalOpen(false);
            fetchProjects();
        } catch (err) {
            alert('Error saving project: ' + err.message);
        }
    };

    // =====================================================
    // DELETE PROJECT
    // =====================================================

    const handleDeleteProject = async (id, title) => {
        if (
            window.confirm(
                `Are you sure you want to delete project "${title}"?`
            )
        ) {
            try {
                await dataService.deleteProject(id);
                fetchProjects();
            } catch (err) {
                alert('Error deleting project: ' + err.message);
            }
        }
    };

    // =====================================================
    // FEATURED TOGGLE
    // =====================================================

    const handleToggleFeatured = async (project) => {
        try {
            await dataService.updateProject(project.id, {
                is_featured: !project.is_featured,
            });

            fetchProjects();
        } catch (err) {
            console.error(err);
        }
    };

    // =====================================================
    // PUBLISHED TOGGLE
    // =====================================================

    const handleTogglePublished = async (project) => {
        try {
            await dataService.updateProject(project.id, {
                is_published: !project.is_published,
            });

            fetchProjects();
        } catch (err) {
            console.error(err);
        }
    };

    // =====================================================
    // SEARCH / FILTER
    // =====================================================

    const filteredProjects = projects.filter(
        (p) =>
            p.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            p.category
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
    );

    return (
        <div className="admin-editor-container">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="editor-header">
                <div>
                    <h1 className="editor-title">
                        Projects Management CMS
                    </h1>

                    <p className="editor-subtitle">
                        Add, edit, feature, or remove projects shown on
                        your portfolio.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleOpenAddModal}
                    className="btn-primary-glow"
                >
                    <Plus size={18} />
                    <span>Add New Project</span>
                </button>
            </div>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div
                className="project-search-box glass-panel"
                style={{ maxWidth: '350px' }}
            >
                <Search
                    size={16}
                    className="search-icon"
                />

                <input
                    type="text"
                    placeholder="Filter projects by title or tech..."
                    value={searchQuery}
                    onChange={(e) =>
                        setSearchQuery(e.target.value)
                    }
                    className="search-input"
                />
            </div>

            {/* =================================================
                PROJECT TABLE
            ================================================= */}

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2
                        size={24}
                        className="spinner"
                    />

                    <span>
                        Loading Projects Database...
                    </span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">
                    <div className="table-responsive">
                        <table className="admin-table">

                            <thead>
                                <tr>
                                    <th>Thumbnail</th>
                                    <th>Title & Category</th>
                                    <th>Featured</th>
                                    <th>Published</th>
                                    <th>Links</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredProjects.map((proj) => (
                                    <tr key={proj.id}>

                                        {/* THUMBNAIL */}
                                        <td>
                                            <img
                                                src={proj.image_url}
                                                alt={proj.title}
                                                style={{
                                                    width: '60px',
                                                    height: '40px',
                                                    objectFit: 'cover',
                                                    borderRadius: '6px',
                                                }}
                                            />
                                        </td>

                                        {/* TITLE */}
                                        <td>
                                            <strong>
                                                {proj.title}
                                            </strong>

                                            <div
                                                style={{
                                                    fontSize: '0.8rem',
                                                    color: 'var(--brand-purple)',
                                                }}
                                            >
                                                {proj.category}
                                            </div>
                                        </td>

                                        {/* FEATURED */}
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleToggleFeatured(proj)
                                                }
                                                className={`table-action-btn ${
                                                    proj.is_featured
                                                        ? 'highlight'
                                                        : ''
                                                }`}
                                                title="Toggle Featured Status"
                                            >
                                                <Star
                                                    size={14}
                                                    fill={
                                                        proj.is_featured
                                                            ? '#f59e0b'
                                                            : 'none'
                                                    }
                                                />
                                            </button>
                                        </td>

                                        {/* PUBLISHED */}
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleTogglePublished(proj)
                                                }
                                                className="table-action-btn"
                                                title="Toggle Published Status"
                                            >
                                                {proj.is_published ? (
                                                    <Eye
                                                        size={14}
                                                        color="#10b981"
                                                    />
                                                ) : (
                                                    <EyeOff
                                                        size={14}
                                                        color="#ef4444"
                                                    />
                                                )}
                                            </button>
                                        </td>

                                        {/* LINKS */}
                                        <td>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '0.4rem',
                                                }}
                                            >
                                                {proj.live_url && (
                                                    <a
                                                        href={proj.live_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="table-action-btn"
                                                        title="Open Live Project"
                                                    >
                                                        <ExternalLink
                                                            size={13}
                                                        />
                                                    </a>
                                                )}

                                                {proj.github_url && (
                                                    <a
                                                        href={proj.github_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="table-action-btn"
                                                        title="Open GitHub Repository"
                                                    >
                                                        <GithubIcon
                                                            size={13}
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        </td>

                                        {/* ACTIONS */}
                                        <td>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '0.4rem',
                                                }}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleOpenEditModal(proj)
                                                    }
                                                    className="table-action-btn"
                                                    title="Edit Project"
                                                >
                                                    <Edit2 size={14} />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDeleteProject(
                                                            proj.id,
                                                            proj.title
                                                        )
                                                    }
                                                    className="table-action-btn"
                                                    style={{
                                                        color: '#ef4444',
                                                    }}
                                                    title="Delete Project"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            )}

            {/* =================================================
                ADD / EDIT PROJECT MODAL
            ================================================= */}

            {modalOpen && (
                <div
                    className="modal-overlay"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="modal-content glass-panel"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={() => setModalOpen(false)}
                        >
                            <X size={20} />
                        </button>

                        <h2 className="modal-title">
                            {editingProject
                                ? 'Edit Project'
                                : 'Add New Project'}
                        </h2>

                        <form
                            onSubmit={handleSaveProject}
                            className="contact-form"
                        >

                            {/* TITLE + CATEGORY */}
                            <div className="form-group-row">

                                <div className="form-group">
                                    <label>
                                        Project Title *
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                title: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Category *
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                category: e.target.value,
                                            })
                                        }
                                        required
                                        placeholder="e.g. React Application, Marketplace/E-Commerce"
                                    />
                                </div>

                            </div>

                            {/* SHORT DESCRIPTION */}
                            <div className="form-group">
                                <label>
                                    Short Description *
                                </label>

                                <textarea
                                    rows={2}
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            {/* LONG DESCRIPTION */}
                            <div className="form-group">
                                <label>
                                    Detailed Case Study (Modal)
                                </label>

                                <textarea
                                    rows={4}
                                    value={formData.long_description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            long_description: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* IMAGE URL */}
                            <div className="form-group">
                                <label>
                                    Image URL *
                                </label>

                                <input
                                    type="text"
                                    value={formData.image_url}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            image_url: e.target.value,
                                        })
                                    }
                                    required
                                    placeholder="https://images.unsplash.com/... or /src/assets/projects/..."
                                />
                            </div>

                            {/* LIVE URL + GITHUB URL */}
                            <div className="form-group-row">

                                <div className="form-group">
                                    <label>
                                        Live Demo URL
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.live_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                live_url: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        GitHub Repository URL
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.github_url}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                github_url: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                            </div>

                            {/* TECHNOLOGIES */}
                            <div className="form-group">
                                <label>
                                    Technologies Used (Comma Separated)
                                </label>

                                <input
                                    type="text"
                                    value={techInput}
                                    onChange={(e) =>
                                        setTechInput(e.target.value)
                                    }
                                    placeholder="React.js, Tailwind CSS, Supabase"
                                />
                            </div>

                            {/* FEATURED */}
                            <div className="form-checkbox-group">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={formData.is_featured}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            is_featured: e.target.checked,
                                        })
                                    }
                                />

                                <label htmlFor="is_featured">
                                    Highlight as Featured Project
                                </label>
                            </div>

                            {/* PUBLISHED */}
                            <div className="form-checkbox-group">
                                <input
                                    type="checkbox"
                                    id="is_published"
                                    checked={formData.is_published}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            is_published: e.target.checked,
                                        })
                                    }
                                />

                                <label htmlFor="is_published">
                                    Publish On Portfolio Landing Page
                                </label>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="btn-primary-glow w-full"
                                style={{ marginTop: '1rem' }}
                            >
                                <span>
                                    {editingProject
                                        ? 'Update Project'
                                        : 'Create Project'}
                                </span>
                            </button>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}