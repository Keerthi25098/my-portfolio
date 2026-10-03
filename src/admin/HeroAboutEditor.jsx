import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { dataService } from '../services/dataService';
import './AdminEditors.css';

export default function HeroAboutEditor() {
    const [hero, setHero] = useState({
        greeting: "Hello, I'm",
        headline: 'Keerthika KT',
        roles: ['Frontend Developer', 'React Developer', 'Junior Software Developer'],
        bio: '',
        profile_image_url: '',
        cta_primary_label: 'View My Work',
        cta_secondary_label: "Let's Talk",
    });

    const [about, setAbout] = useState({
        heading: 'I Create Products, Not Just Interfaces.',
        subheading: '',
        bio_paragraph_1: '',
        bio_paragraph_2: '',
        bio_paragraph_3: '',
        years_experience_label: '1+ Years Experience',
        projects_completed_label: '10+ Featured Projects',
        internships_completed_label: '3+ Industry Internships',
    });

    const [rolesInput, setRolesInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const [heroData, aboutData] = await Promise.all([
                    dataService.getHeroContent(),
                    dataService.getAboutContent(),
                ]);
                if (heroData) {
                    setHero(heroData);
                    setRolesInput(heroData.roles ? heroData.roles.join(', ') : '');
                }
                if (aboutData) {
                    setAbout(aboutData);
                }
            } catch (err) {
                console.error('Error loading hero/about editor data:', err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setSaveSuccess(false);

        try {
            const parsedRoles = rolesInput
                .split(',')
                .map((r) => r.trim())
                .filter(Boolean);

            const updatedHero = { ...hero, roles: parsedRoles };

            await Promise.all([
                dataService.updateHeroContent(updatedHero),
                dataService.updateAboutContent(about),
            ]);

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 4000);
        } catch (err) {
            console.error('Error saving hero/about data:', err);
            alert('Failed to save changes: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="admin-page-loading">
                <Loader2 size={24} className="spinner" />
                <span>Loading Hero & About Editor...</span>
            </div>
        );
    }

    return (
        <div className="admin-editor-container">
            <div className="editor-header">
                <div>
                    <h1 className="editor-title">Hero & About Section Editor</h1>
                    <p className="editor-subtitle">
                        Update headlines, bio text, animated roles, and profile image URLs for the landing page.
                    </p>
                </div>
                <button type="button" onClick={handleSave} disabled={saving} className="btn-primary-glow btn-save">
                    {saving ? <Loader2 size={16} className="spinner" /> : <Save size={16} />}
                    <span>{saving ? 'Saving...' : 'Save All Changes'}</span>
                </button>
            </div>

            {saveSuccess && (
                <div className="save-success-toast">
                    <CheckCircle2 size={18} />
                    <span>Hero & About content successfully updated across live site & database!</span>
                </div>
            )}

            <form onSubmit={handleSave} className="editor-form-grid">
                {/* Hero Section Block */}
                <div className="editor-card glass-panel">
                    <h2 className="card-section-title">
                        <Sparkles size={18} /> Hero Section Content
                    </h2>

                    <div className="form-group">
                        <label>Greeting Prefix</label>
                        <input
                            type="text"
                            value={hero.greeting}
                            onChange={(e) => setHero({ ...hero, greeting: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Main Headline Name</label>
                        <input
                            type="text"
                            value={hero.headline}
                            onChange={(e) => setHero({ ...hero, headline: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Rotating Roles (Comma Separated)</label>
                        <input
                            type="text"
                            value={rolesInput}
                            onChange={(e) => setRolesInput(e.target.value)}
                            placeholder="Frontend Developer, React Developer, Junior Software Developer"
                        />
                    </div>

                    <div className="form-group">
                        <label>Hero Short Bio</label>
                        <textarea
                            rows={3}
                            value={hero.bio}
                            onChange={(e) => setHero({ ...hero, bio: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Profile Image URL</label>
                        <input
                            type="text"
                            value={hero.profile_image_url}
                            onChange={(e) => setHero({ ...hero, profile_image_url: e.target.value })}
                            placeholder="/src/assets/profile.png or Supabase Storage URL"
                        />
                    </div>
                </div>

                {/* About Section Block */}
                <div className="editor-card glass-panel">
                    <h2 className="card-section-title">About Section Content</h2>

                    <div className="form-group">
                        <label>About Heading Title</label>
                        <input
                            type="text"
                            value={about.heading}
                            onChange={(e) => setAbout({ ...about, heading: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio Paragraph 1</label>
                        <textarea
                            rows={3}
                            value={about.bio_paragraph_1}
                            onChange={(e) => setAbout({ ...about, bio_paragraph_1: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio Paragraph 2</label>
                        <textarea
                            rows={3}
                            value={about.bio_paragraph_2}
                            onChange={(e) => setAbout({ ...about, bio_paragraph_2: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio Paragraph 3</label>
                        <textarea
                            rows={3}
                            value={about.bio_paragraph_3}
                            onChange={(e) => setAbout({ ...about, bio_paragraph_3: e.target.value })}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
