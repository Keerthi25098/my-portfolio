import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const checkSession = async () => {
            if (isSupabaseConfigured && supabase) {
                try {
                    const { data: { session } } = await supabase.auth.getSession();
                    if (mounted) {
                        setUser(session?.user || null);
                    }
                } catch (err) {
                    console.error('Supabase auth session error:', err);
                }
            } else {
                // Fallback local admin session
                const localAdmin = localStorage.getItem('keerthika_admin_user');
                if (localAdmin && mounted) {
                    try {
                        setUser(JSON.parse(localAdmin));
                    } catch (e) {
                        setUser(null);
                    }
                }
            }
            if (mounted) setLoading(false);
        };

        checkSession();

        let authListener = null;
        if (isSupabaseConfigured && supabase) {
            const { data } = supabase.auth.onAuthStateChange((_event, session) => {
                if (mounted) {
                    setUser(session?.user || null);
                    setLoading(false);
                }
            });
            authListener = data.subscription;
        }

        return () => {
            mounted = false;
            if (authListener) authListener.unsubscribe();
        };
    }, []);

    const login = async (email, password) => {
        if (isSupabaseConfigured && supabase) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            setUser(data.user);
            return data.user;
        } else {
            // Local fallback credentials check
            if ((email === 'admin@keerthika' || email === 'keerthikeerthi32155@gmail.com') && password === 'Admin@123') {
                const adminObj = {
                    id: 'admin-local-1',
                    email: 'keerthikeerthi32155@gmail.com',
                    role: 'authenticated_admin',
                    user_metadata: { name: 'Keerthika KT Admin' }
                };
                localStorage.setItem('keerthika_admin_user', JSON.stringify(adminObj));
                setUser(adminObj);
                return adminObj;
            } else {
                throw new Error('Invalid email or password. (Default credentials: admin@keerthikakt.dev / Admin@123)');
            }
        }
    };

    const logout = async () => {
        if (isSupabaseConfigured && supabase) {
            await supabase.auth.signOut();
        } else {
            localStorage.removeItem('keerthika_admin_user');
        }
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
