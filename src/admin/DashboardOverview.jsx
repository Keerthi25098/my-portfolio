import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Inbox, FolderGit2, Briefcase, Eye, Mail, ArrowUpRight, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { dataService } from '../services/dataService';
import './DashboardOverview.css';

export default function DashboardOverview() {
    const [metrics, setMetrics] = useState({
        totalEnquiries: 0,
        newEnquiries: 0,
        totalProjects: 0,
        totalExperience: 0,
    });
    const [recentEnquiries, setRecentEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOverview() {
            try {
                const [enquiries, projects, exp] = await Promise.all([
                    dataService.getEnquiries(),
                    dataService.getProjects(true),
                    dataService.getExperience(true),
                ]);

                const unread = enquiries.filter((e) => e.status === 'unread' || e.status === 'new').length;

                setMetrics({
                    totalEnquiries: enquiries.length,
                    newEnquiries: unread,
                    totalProjects: projects.length,
                    totalExperience: exp.length,
                });

                setRecentEnquiries(enquiries.slice(0, 5));
            } catch (err) {
                console.error('Error fetching dashboard overview metrics:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchOverview();
    }, []);

    return (
        <div className="dashboard-overview-container">
            {/* Top Metric Cards */}
            <div className="metrics-grid">
                <div className="metric-card glass-panel">
                    <div className="metric-icon-box pink">
                        <Inbox size={22} />
                    </div>
                    <div>
                        <span className="metric-title">Total Enquiries</span>
                        <h3 className="metric-value">{metrics.totalEnquiries}</h3>
                        <span className="metric-sub">{metrics.newEnquiries} Unread Messages</span>
                    </div>
                </div>

                <div className="metric-card glass-panel">
                    <div className="metric-icon-box purple">
                        <FolderGit2 size={22} />
                    </div>
                    <div>
                        <span className="metric-title">Projects</span>
                        <h3 className="metric-value">{metrics.totalProjects}</h3>
                        <span className="metric-sub">Published Projects</span>
                    </div>
                </div>

                <div className="metric-card glass-panel">
                    <div className="metric-icon-box blue">
                        <Briefcase size={22} />
                    </div>
                    <div>
                        <span className="metric-title">Experience Roles</span>
                        <h3 className="metric-value">{metrics.totalExperience}</h3>
                        <span className="metric-sub">Timeline Milestones</span>
                    </div>
                </div>

                <div className="metric-card glass-panel">
                    <div className="metric-icon-box green">
                        <Sparkles size={22} />
                    </div>
                    <div>
                        <span className="metric-title">Site Status</span>
                        <h3 className="metric-value">Active</h3>
                        <span className="metric-sub">Supabase / Local DB</span>
                    </div>
                </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="quick-actions-bar">
                <h3>Quick Content Actions</h3>
                <div className="actions-buttons-group">
                    <Link to="/admin/projects" className="quick-action-btn">
                        <FolderGit2 size={16} />
                        <span>Manage Projects</span>
                    </Link>
                    <Link to="/admin/enquiries" className="quick-action-btn highlight">
                        <Mail size={16} />
                        <span>View Inbox ({metrics.newEnquiries})</span>
                    </Link>
                    <Link to="/admin/hero" className="quick-action-btn">
                        <Sparkles size={16} />
                        <span>Edit Hero Headline</span>
                    </Link>
                    <Link to="/admin/settings" className="quick-action-btn">
                        <Briefcase size={16} />
                        <span>Update Resume / Links</span>
                    </Link>
                </div>
            </div>

            {/* Recent Contact Enquiries Table */}
            <div className="recent-enquiries-block glass-panel">
                <div className="block-header">
                    <div>
                        <h3>Recent Contact Enquiries</h3>
                        <p className="block-subtitle">Submissions from public portfolio visitors</p>
                    </div>
                    <Link to="/admin/enquiries" className="view-all-link">
                        <span>Open Full Inbox</span>
                        <ArrowUpRight size={16} />
                    </Link>
                </div>

                {recentEnquiries.length === 0 ? (
                    <div className="empty-table-msg">
                        <p>No contact enquiries submitted yet.</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Sender Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentEnquiries.map((enq) => (
                                    <tr key={enq.id}>
                                        <td>
                                            <strong>{enq.name}</strong>
                                        </td>
                                        <td>{enq.email}</td>
                                        <td>{enq.subject}</td>
                                        <td>{new Date(enq.created_at).toLocaleDateString()}</td>
                                        <td>
                                            <span className={`status-pill ${enq.status || 'unread'}`}>
                                                {enq.status || 'unread'}
                                            </span>
                                        </td>
                                        <td>
                                            <Link to="/admin/enquiries" className="table-action-btn">
                                                <Eye size={15} />
                                                <span>View</span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
