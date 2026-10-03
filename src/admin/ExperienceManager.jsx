import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Calendar, Award, ExternalLink, Loader2, X } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function ExperienceManager() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const emptyForm = {
        company: '',
        role_title: '',
        year_label: '2026',
        start_date: '2026',
        end_date: 'Present',
        is_current: false,
        description: '',
        responsibilities: [],
        technologies: [],
        certificate_url: '',
        display_order: 1,
    };

    const [formData, setFormData] = useState(emptyForm);
    const [respInput, setRespInput] = useState('');
    const [techInput, setTechInput] = useState('');

    const fetchExperience = async () => {
        setLoading(true);
        try {
            const data = await dataService.getExperience(true);
            setItems(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperience();
    }, []);

    const handleOpenAddModal = () => {
        setEditingItem(null);
        setFormData(emptyForm);
        setRespInput('');
        setTechInput('');
        setModalOpen(true);
    };

    const handleOpenEditModal = (item) => {
        setEditingItem(item);
        setFormData(item);
        setRespInput(item.responsibilities ? item.responsibilities.join('\n') : '');
        setTechInput(item.technologies ? item.technologies.join(', ') : '');
        setModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const respArray = respInput.split('\n').map((r) => r.trim()).filter(Boolean);
            const techArray = techInput.split(',').map((t) => t.trim()).filter(Boolean);

            const payload = {
                ...formData,
                responsibilities: respArray,
                technologies: techArray,
            };

            if (editingItem) {
                await dataService.updateExperience(editingItem.id, payload);
            } else {
                await dataService.createExperience(payload);
            }

            setModalOpen(false);
            fetchExperience();
        } catch (err) {
            alert('Error saving experience record: ' + err.message);
        }
    };

    const handleDelete = async (id, company) => {
        if (window.confirm(`Delete experience record for "${company}"?`)) {
            try {
                await dataService.deleteExperience(id);
                fetchExperience();
            } catch (err) {
                alert('Error deleting: ' + err.message);
            }
        }
    };

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Experience & Career CMS</h1>
                    <p className="editor-subtitle">Manage internships, developer roles, and achievements.</p>
                </div>
                <button type="button" onClick={handleOpenAddModal} className="btn-primary-glow">
                    <Plus size={18} />
                    <span>Add Experience</span>
                </button>
            </div>

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2 size={24} className="spinner" />
                    <span>Loading Experience Records...</span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Company / Inst.</th>
                                    <th>Role Title</th>
                                    <th>Period</th>
                                    <th>Certificate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <strong>{item.company}</strong>
                                        </td>
                                        <td>{item.role_title}</td>
                                        <td>
                                            <span className="year-badge">
                                                <Calendar size={12} /> {item.year_label || item.start_date}
                                            </span>
                                        </td>
                                        <td>
                                            {item.certificate_url && (
                                                <a href={item.certificate_url} target="_blank" rel="noopener noreferrer" className="table-action-btn">
                                                    <ExternalLink size={13} />
                                                </a>
                                            )}
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                <button type="button" onClick={() => handleOpenEditModal(item)} className="table-action-btn">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(item.id, item.company)}
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

                        <h2 className="modal-title">{editingItem ? 'Edit Experience' : 'Add New Experience'}</h2>

                        <form onSubmit={handleSave} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Company / Institution *</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Role / Position Title *</label>
                                    <input
                                        type="text"
                                        value={formData.role_title}
                                        onChange={(e) => setFormData({ ...formData, role_title: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Year Label *</label>
                                    <input
                                        type="text"
                                        value={formData.year_label}
                                        onChange={(e) => setFormData({ ...formData, year_label: e.target.value })}
                                        required
                                        placeholder="2026 — Present"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Certificate URL</label>
                                    <input
                                        type="text"
                                        value={formData.certificate_url}
                                        onChange={(e) => setFormData({ ...formData, certificate_url: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <textarea
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Key Responsibilities (One per line)</label>
                                <textarea
                                    rows={4}
                                    value={respInput}
                                    onChange={(e) => setRespInput(e.target.value)}
                                    placeholder="Developed responsive client landing pages&#10;Integrated REST API endpoints"
                                />
                            </div>

                            <div className="form-group">
                                <label>Technologies Used (Comma Separated)</label>
                                <input
                                    type="text"
                                    value={techInput}
                                    onChange={(e) => setTechInput(e.target.value)}
                                    placeholder="React.js, WordPress, PHP"
                                />
                            </div>

                            <button type="submit" className="btn-primary-glow w-full" style={{ marginTop: '1rem' }}>
                                <span>{editingItem ? 'Update Experience' : 'Add Experience'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
