import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Code, Loader2, X } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function SkillsManager() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingSkill, setEditingSkill] = useState(null);

    const emptyForm = {
        name: '',
        category: 'Frontend Development',
        proficiency_label: 'Proficient',
        proficiency_percentage: 90,
        description: '',
        logo_url: '',
        display_order: 1,
    };

    const [formData, setFormData] = useState(emptyForm);

    const fetchSkills = async () => {
        setLoading(true);
        try {
            const data = await dataService.getSkills(true);
            setSkills(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleOpenAddModal = () => {
        setEditingSkill(null);
        setFormData(emptyForm);
        setModalOpen(true);
    };

    const handleOpenEditModal = (skill) => {
        setEditingSkill(skill);
        setFormData(skill);
        setModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (editingSkill) {
                await dataService.updateSkill(editingSkill.id, formData);
            } else {
                await dataService.createSkill(formData);
            }

            setModalOpen(false);
            fetchSkills();
        } catch (err) {
            alert('Error saving skill: ' + err.message);
        }
    };

    const handleDelete = async (id, name) => {
        if (window.confirm(`Delete skill "${name}"?`)) {
            try {
                await dataService.deleteSkill(id);
                fetchSkills();
            } catch (err) {
                alert('Error deleting skill: ' + err.message);
            }
        }
    };

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Skills & Tech Stack CMS</h1>
                    <p className="editor-subtitle">Manage programming languages, frameworks, and web tools.</p>
                </div>
                <button type="button" onClick={handleOpenAddModal} className="btn-primary-glow">
                    <Plus size={18} />
                    <span>Add Skill</span>
                </button>
            </div>

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2 size={24} className="spinner" />
                    <span>Loading Skills Database...</span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Skill Name</th>
                                    <th>Category</th>
                                    <th>Proficiency</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.map((skill) => (
                                    <tr key={skill.id}>
                                        <td>
                                            <strong>{skill.name}</strong>
                                        </td>
                                        <td>
                                            <span className="project-cat-tag">{skill.category}</span>
                                        </td>
                                        <td>
                                            <span className="skill-badge">{skill.proficiency_label}</span>
                                        </td>
                                        <td style={{ maxWidth: '300px' }}>{skill.description}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                <button type="button" onClick={() => handleOpenEditModal(skill)} className="table-action-btn">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(skill.id, skill.name)}
                                                    className="table-action-btn"
                                                    style={{ color: '#ef4444' }}
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

            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="modal-close-btn" onClick={() => setModalOpen(false)}>
                            <X size={20} />
                        </button>

                        <h2 className="modal-title">{editingSkill ? 'Edit Skill' : 'Add Skill'}</h2>

                        <form onSubmit={handleSave} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Skill Name *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Category *</label>
                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        required
                                        placeholder="Frontend Development, Database, Tools"
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Proficiency Label</label>
                                    <input
                                        type="text"
                                        value={formData.proficiency_label}
                                        onChange={(e) => setFormData({ ...formData, proficiency_label: e.target.value })}
                                        placeholder="Advanced / Proficient / Intermediate"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Logo Asset URL</label>
                                    <input
                                        type="text"
                                        value={formData.logo_url}
                                        onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                                        placeholder="/src/assets/skills-logo/react.png"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Skill Description *</label>
                                <textarea
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-primary-glow w-full" style={{ marginTop: '1rem' }}>
                                <span>{editingSkill ? 'Update Skill' : 'Add Skill'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
