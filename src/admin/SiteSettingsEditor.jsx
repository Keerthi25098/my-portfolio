import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, Settings, Loader2 } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function SiteSettingsEditor() {
    const [settings, setSettings] = useState({
        name: 'Keerthika KT',
        role_title: 'Junior Software Developer / Frontend Developer',
        location: 'Coimbatore, Tamil Nadu, India',
        email: 'keerthikeerthi32155@gmail.com',
        availability_status: 'Open to Opportunities',
        availability_badge_visible: true,
        resume_url: '/resumee-keerthika.pdf',
        github_url: 'https://github.com/Keerthi25098',
        linkedin_url: 'https://linkedin.com/in/keerthika25',
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    useEffect(() => {
        async function loadSettings() {
            try {
                const data = await dataService.getSiteSettings();
                if (data) {
                    setSettings(data);
                }
            } catch (err) {
                console.error('Error loading site settings:', err);
            } finally {
                setLoading(false);
            }
        }
        loadSettings();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setSaveSuccess(false);

        try {
            await dataService.updateSiteSettings(settings);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 4000);
        } catch (err) {
            alert('Failed to save settings: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="admin-page-loading">
                <Loader2 size={24} className="spinner" />
                <span>Loading Site Settings...</span>
            </div>
        );
    }

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Global Site Settings</h1>
                    <p className="editor-subtitle">
                        Configure your contact email, social links, resume link, and availability status.
                    </p>
                </div>
                <button type="button" onClick={handleSave} disabled={saving} className="btn-primary-glow btn-save">
                    {saving ? <Loader2 size={16} className="spinner" /> : <Save size={16} />}
                    <span>{saving ? 'Saving...' : 'Save Settings'}</span>
                </button>
            </div>

            {saveSuccess && (
                <div className="save-success-toast">
                    <CheckCircle2 size={18} />
                    <span>Site settings successfully updated!</span>
                </div>
            )}

            <form onSubmit={handleSave} className="editor-form-grid">
                <div className="editor-card glass-panel">
                    <h2 className="card-section-title">
                        <Settings size={18} /> Profile & Contact Details
                    </h2>

                    <div className="form-group">
                        <label>Developer Full Name</label>
                        <input
                            type="text"
                            value={settings.name}
                            onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Primary Role Title</label>
                        <input
                            type="text"
                            value={settings.role_title}
                            onChange={(e) => setSettings({ ...settings, role_title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Notification & Contact Email *</label>
                        <input
                            type="email"
                            value={settings.email}
                            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            value={settings.location}
                            onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                        />
                    </div>
                </div>

                <div className="editor-card glass-panel">
                    <h2 className="card-section-title">Availability & Links</h2>

                    <div className="form-group">
                        <label>Availability Badge Text</label>
                        <input
                            type="text"
                            value={settings.availability_status}
                            onChange={(e) => setSettings({ ...settings, availability_status: e.target.value })}
                            placeholder="Open to Opportunities"
                        />
                    </div>

                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="availability_badge_visible"
                            checked={settings.availability_badge_visible}
                            onChange={(e) => setSettings({ ...settings, availability_badge_visible: e.target.checked })}
                        />
                        <label htmlFor="availability_badge_visible">Show Availability Badge on Hero</label>
                    </div>

                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label>Resume Download URL</label>
                        <input
                            type="text"
                            value={settings.resume_url}
                            onChange={(e) => setSettings({ ...settings, resume_url: e.target.value })}
                            placeholder="/resumee-keerthika.pdf or Google Drive link"
                        />
                    </div>

                    <div className="form-group">
                        <label>GitHub Profile URL</label>
                        <input
                            type="text"
                            value={settings.github_url}
                            onChange={(e) => setSettings({ ...settings, github_url: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>LinkedIn Profile URL</label>
                        <input
                            type="text"
                            value={settings.linkedin_url}
                            onChange={(e) => setSettings({ ...settings, linkedin_url: e.target.value })}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
