import React, { useState } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Sparkles,
    Briefcase,
    FolderGit2,
    Code,
    GraduationCap,
    Layers,
    Settings,
    Inbox,
    LogOut,
    ExternalLink,
    Sun,
    Moon,
    Menu,
    X,
    User,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import './AdminLayout.css';

export default function AdminLayout() {
    const { isAuthenticated, loading, logout, user } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    if (loading) {
        return (
            <div className="admin-loading-screen">
                <div className="spinner-ring" />
                <p>Verifying Admin Credentials...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    const menuItems = [
        { label: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
        { label: 'Hero & About', path: '/admin/hero', icon: Sparkles },
        { label: 'Projects', path: '/admin/projects', icon: FolderGit2 },
        { label: 'Experience', path: '/admin/experience', icon: Briefcase },
        { label: 'Skills', path: '/admin/skills', icon: Code },
        { label: 'Education', path: '/admin/education', icon: GraduationCap },
        { label: 'Services', path: '/admin/services', icon: Layers },
        { label: 'Enquiries Inbox', path: '/admin/enquiries', icon: Inbox },
        { label: 'Site Settings', path: '/admin/settings', icon: Settings },
    ];

    return (
        <div className={`admin-cms-wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            {/* Sidebar Navigation */}
            <aside className={`admin-sidebar glass-panel ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/admin/dashboard" className="admin-brand">
                        <span className="brand-dot">K.</span>
                        {!sidebarCollapsed && <span className="brand-text">Admin CMS</span>}
                    </Link>
                    <button
                        type="button"
                        className="mobile-close-btn"
                        onClick={() => setMobileSidebarOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => {
                        const IconComp = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                                onClick={() => setMobileSidebarOpen(false)}
                                title={item.label}
                            >
                                <IconComp size={20} className="nav-icon" />
                                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="sidebar-footer">
                    <button type="button" onClick={logout} className="sidebar-logout-btn">
                        <LogOut size={18} />
                        {!sidebarCollapsed && <span>Log Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="admin-main-viewport">
                {/* Admin Top Header */}
                <header className="admin-topbar glass-panel">
                    <div className="topbar-left">
                        <button
                            type="button"
                            className="toggle-sidebar-btn"
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        >
                            <Menu size={20} />
                        </button>
                        <h2 className="topbar-page-title">
                            {menuItems.find((m) => m.path === location.pathname)?.label || 'Dashboard Workspace'}
                        </h2>
                    </div>

                    <div className="topbar-right">
                        <a href="/" target="_blank" rel="noopener noreferrer" className="btn-view-live-site">
                            <ExternalLink size={15} />
                            <span>View Public Website</span>
                        </a>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="theme-toggle-btn"
                            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <div className="admin-user-badge">
                            <div className="user-avatar-box">
                                <User size={16} />
                            </div>
                            <span className="user-email">{user?.email || 'keerthikeerthi32155@gmail.com'}</span>
                        </div>
                    </div>
                </header>

                {/* Dynamic Nested Route Content */}
                <main className="admin-content-body">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
