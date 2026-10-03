import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './AdminLogin.css';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        if (!email.trim() || !password.trim()) {
            setErrorMsg('Please enter both email address and password.');
            return;
        }

        setLoading(true);
        try {
            await login(email.trim(), password.trim());
            navigate('/admin/dashboard');
        } catch (err) {
            setErrorMsg(err.message || 'Authentication failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-screen">
            <div className="login-card glass-panel">
                <div className="login-header">
                    <div className="shield-icon-box">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="login-title">Admin CMS Access</h1>
                    <p className="login-subtitle">Keerthika KT Portfolio Management System</p>
                </div>

                {errorMsg && (
                    <div className="login-error-alert">
                        <AlertCircle size={16} />
                        <span>{errorMsg}</span>
                    </div>
                )}

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-input-group">
                        <label htmlFor="admin-email">Administrator Email</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                id="admin-email"
                                placeholder="keerthikeerthi32155@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-input-group">
                        <label htmlFor="admin-password">Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="admin-password"
                                placeholder="••••••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-pw-btn"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary-glow w-full btn-login-submit">
                        {loading ? (
                            <>
                                <Loader2 size={18} className="spinner" />
                                <span>Authenticating...</span>
                            </>
                        ) : (
                            <span>Log In to Dashboard</span>
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <a href="/" className="back-to-site-link">
                        <ArrowLeft size={15} />
                        <span>Return to Public Website</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
