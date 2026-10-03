import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Layers, Loader2, X } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function ServicesManager() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const emptyForm = {
        title: '',
        description: '',
        icon_name: 'Code2',
        display_order: 1,
    };

    const [formData, setFormData] = useState(emptyForm);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const data = await dataService.getServices();
            setItems(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
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
                await dataService.updateService(editingItem.id, formData);
            } else {
                await dataService.createService(formData);
            }

            setModalOpen(false);
            fetchServices();
        } catch (err) {
            alert('Error saving service: ' + err.message);
        }
    };

    const handleDelete = async (id, title) => {
        if (window.confirm(`Delete service "${title}"?`)) {
            try {
                await dataService.deleteService(id);
                fetchServices();
            } catch (err) {
                alert('Error deleting: ' + err.message);
            }
        }
    };

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Services Offered CMS</h1>
                    <p className="editor-subtitle">Manage client development offerings and solutions.</p>
                </div>
                <button type="button" onClick={handleOpenAddModal} className="btn-primary-glow">
                    <Plus size={18} />
                    <span>Add Service</span>
                </button>
            </div>

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2 size={24} className="spinner" />
                    <span>Loading Services Database...</span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Service Title</th>
                                    <th>Icon Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <strong>{item.title}</strong>
                                        </td>
                                        <td>
                                            <code>{item.icon_name}</code>
                                        </td>
                                        <td>{item.description}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                <button type="button" onClick={() => handleOpenEditModal(item)} className="table-action-btn">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(item.id, item.title)}
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

                        <h2 className="modal-title">{editingItem ? 'Edit Service' : 'Add Service'}</h2>

                        <form onSubmit={handleSave} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Service Title *</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Icon Name *</label>
                                    <input
                                        type="text"
                                        value={formData.icon_name}
                                        onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                                        required
                                        placeholder="Code2 / Layout / Sparkles / Smartphone"
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

                            <button type="submit" className="btn-primary-glow w-full" style={{ marginTop: '1rem' }}>
                                <span>{editingItem ? 'Update Service' : 'Add Service'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
