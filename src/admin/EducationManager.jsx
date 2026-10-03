import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, GraduationCap, Loader2, X } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function EducationManager() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const emptyForm = {
        institution: '',
        qualification: '',
        field_of_study: '',
        start_year: '2021',
        end_year: '2025',
        grade_or_cgpa: '',
        description: '',
        display_order: 1,
    };

    const [formData, setFormData] = useState(emptyForm);

    const fetchEducation = async () => {
        setLoading(true);
        try {
            const data = await dataService.getEducation();
            setItems(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEducation();
    }, []);

    const handleOpenAddModal = () => {
        setEditingItem(null);
        setFormData(emptyForm);
        setModalOpen(true);
    };

    const handleOpenEditModal = (item) => {
        setEditingItem(item);
        setFormData(item);
        setModalOpen(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (editingItem) {
                await dataService.updateEducation(editingItem.id, formData);
            } else {
                await dataService.createEducation(formData);
            }

            setModalOpen(false);
            fetchEducation();
        } catch (err) {
            alert('Error saving education record: ' + err.message);
        }
    };

    const handleDelete = async (id, title) => {
        if (window.confirm(`Delete record "${title}"?`)) {
            try {
                await dataService.deleteEducation(id);
                fetchEducation();
            } catch (err) {
                alert('Error deleting: ' + err.message);
            }
        }
    };

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Education & Qualifications CMS</h1>
                    <p className="editor-subtitle">Manage degree details, schools, and academic awards.</p>
                </div>
                <button type="button" onClick={handleOpenAddModal} className="btn-primary-glow">
                    <Plus size={18} />
                    <span>Add Education Record</span>
                </button>
            </div>

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2 size={24} className="spinner" />
                    <span>Loading Education Database...</span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Degree / Qualification</th>
                                    <th>Institution</th>
                                    <th>Field of Study</th>
                                    <th>Years</th>
                                    <th>Grade</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <strong>{item.qualification}</strong>
                                        </td>
                                        <td>{item.institution}</td>
                                        <td>{item.field_of_study}</td>
                                        <td>{item.start_year} — {item.end_year}</td>
                                        <td>{item.grade_or_cgpa || 'N/A'}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                <button type="button" onClick={() => handleOpenEditModal(item)} className="table-action-btn">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(item.id, item.qualification)}
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

                        <h2 className="modal-title">{editingItem ? 'Edit Education' : 'Add Education Record'}</h2>

                        <form onSubmit={handleSave} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Qualification / Degree *</label>
                                    <input
                                        type="text"
                                        value={formData.qualification}
                                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                        required
                                        placeholder="B.E Computer Science and Engineering"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Institution / College *</label>
                                    <input
                                        type="text"
                                        value={formData.institution}
                                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Field of Study *</label>
                                    <input
                                        type="text"
                                        value={formData.field_of_study}
                                        onChange={(e) => setFormData({ ...formData, field_of_study: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Grade / CGPA</label>
                                    <input
                                        type="text"
                                        value={formData.grade_or_cgpa}
                                        onChange={(e) => setFormData({ ...formData, grade_or_cgpa: e.target.value })}
                                        placeholder="e.g. 8.2 / 10.0"
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Start Year *</label>
                                    <input
                                        type="text"
                                        value={formData.start_year}
                                        onChange={(e) => setFormData({ ...formData, start_year: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>End Year *</label>
                                    <input
                                        type="text"
                                        value={formData.end_year}
                                        onChange={(e) => setFormData({ ...formData, end_year: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn-primary-glow w-full" style={{ marginTop: '1rem' }}>
                                <span>{editingItem ? 'Update Education' : 'Add Education'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
