    
import React, { useState, useEffect } from 'react';
import {
    Mail,
    Search,
    Eye,
    Trash2,
    CheckCircle2,
    Clock,
    AlertCircle,
    Loader2,
    X
} from 'lucide-react';

import { dataService } from '../services/dataService';
import './AdminEditors.css';

// =====================================================
// MAIL FORWARD ICON
// lucide-react does not provide the MailForward icon
// =====================================================

function MailForwardIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M4 4h16v12H4z" />
            <path d="m4 4 8 6 8-6" />
            <path d="M14 18h6" />
            <path d="m17 15 3 3-3 3" />
        </svg>
    );
}

export default function EnquiriesInbox() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModalEnquiry, setActiveModalEnquiry] = useState(null);

    // =====================================================
    // FETCH ENQUIRIES
    // =====================================================

    const fetchEnquiries = async () => {
        setLoading(true);

        try {
            const data = await dataService.getEnquiries();
            setEnquiries(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnquiries();
    }, []);

    // =====================================================
    // UPDATE STATUS
    // =====================================================

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            await dataService.updateEnquiryStatus(id, newStatus);

            if (
                activeModalEnquiry &&
                activeModalEnquiry.id === id
            ) {
                setActiveModalEnquiry({
                    ...activeModalEnquiry,
                    status: newStatus,
                });
            }

            fetchEnquiries();
        } catch (err) {
            alert(
                'Error updating status: ' +
                    err.message
            );
        }
    };

    // =====================================================
    // DELETE ENQUIRY
    // =====================================================

    const handleDelete = async (id, name) => {
        if (
            window.confirm(
                `Are you sure you want to delete enquiry from "${name}"?`
            )
        ) {
            try {
                await dataService.deleteEnquiry(id);

                if (
                    activeModalEnquiry &&
                    activeModalEnquiry.id === id
                ) {
                    setActiveModalEnquiry(null);
                }

                fetchEnquiries();
            } catch (err) {
                alert(
                    'Error deleting enquiry: ' +
                        err.message
                );
            }
        }
    };

    // =====================================================
    // FILTER ENQUIRIES
    // =====================================================

    const filteredEnquiries = enquiries.filter((item) => {
        const matchesStatus =
            statusFilter === 'All'
                ? true
                : statusFilter === 'Unread'
                    ? item.status === 'unread' ||
                      item.status === 'new'
                    : item.status ===
                      statusFilter.toLowerCase();

        const matchesSearch =
            item.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.email
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.subject
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.message
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    return (
        <div className="admin-editor-container">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="editor-header">
                <div>
                    <h1 className="editor-title">
                        Contact Enquiries Inbox
                    </h1>

                    <p className="editor-subtitle">
                        View and manage message submissions sent
                        through your portfolio form.
                    </p>
                </div>
            </div>

            {/* =================================================
                CONTROL BAR
            ================================================= */}

            <div className="projects-control-bar">

                <div className="category-pills">
                    {[
                        'All',
                        'Unread',
                        'Read',
                        'Replied',
                        'Archived',
                    ].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={`filter-pill ${
                                statusFilter === tab
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() =>
                                setStatusFilter(tab)
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div
                    className="project-search-box glass-panel"
                    style={{ minWidth: '280px' }}
                >
                    <Search
                        size={16}
                        className="search-icon"
                    />

                    <input
                        type="text"
                        placeholder="Search sender, email, message..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                        className="search-input"
                    />
                </div>
            </div>

            {/* =================================================
                LOADING / ENQUIRIES TABLE
            ================================================= */}

            {loading ? (
                <div className="admin-page-loading">
                    <Loader2
                        size={24}
                        className="spinner"
                    />

                    <span>
                        Loading Inbox Messages...
                    </span>
                </div>
            ) : (
                <div className="recent-enquiries-block glass-panel">

                    {filteredEnquiries.length === 0 ? (
                        <div className="empty-table-msg">
                            <p>
                                No contact enquiries found
                                matching your filters.
                            </p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="admin-table">

                                <thead>
                                    <tr>
                                        <th>Sender Name</th>
                                        <th>Email Address</th>
                                        <th>Subject</th>
                                        <th>Submitted On</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredEnquiries.map(
                                        (enq) => (
                                            <tr key={enq.id}>

                                                {/* SENDER */}
                                                <td>
                                                    <strong>
                                                        {enq.name}
                                                    </strong>
                                                </td>

                                                {/* EMAIL */}
                                                <td>
                                                    {enq.email}
                                                </td>

                                                {/* SUBJECT */}
                                                <td
                                                    style={{
                                                        maxWidth:
                                                            '220px',
                                                        whiteSpace:
                                                            'nowrap',
                                                        overflow:
                                                            'hidden',
                                                        textOverflow:
                                                            'ellipsis',
                                                    }}
                                                >
                                                    {enq.subject}
                                                </td>

                                                {/* DATE */}
                                                <td>
                                                    {new Date(
                                                        enq.created_at
                                                    ).toLocaleString()}
                                                </td>

                                                {/* STATUS */}
                                                <td>
                                                    <span
                                                        className={`status-pill ${
                                                            enq.status ||
                                                            'unread'
                                                        }`}
                                                    >
                                                        {enq.status ||
                                                            'unread'}
                                                    </span>
                                                </td>

                                                {/* ACTIONS */}
                                                <td>
                                                    <div
                                                        style={{
                                                            display:
                                                                'flex',
                                                            gap: '0.4rem',
                                                        }}
                                                    >

                                                        {/* READ */}
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setActiveModalEnquiry(
                                                                    enq
                                                                );

                                                                if (
                                                                    enq.status ===
                                                                        'unread' ||
                                                                    enq.status ===
                                                                        'new'
                                                                ) {
                                                                    handleUpdateStatus(
                                                                        enq.id,
                                                                        'read'
                                                                    );
                                                                }
                                                            }}
                                                            className="table-action-btn"
                                                        >
                                                            <Eye
                                                                size={
                                                                    14
                                                                }
                                                            />

                                                            <span>
                                                                Read
                                                            </span>
                                                        </button>

                                                        {/* DELETE */}
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    enq.id,
                                                                    enq.name
                                                                )
                                                            }
                                                            className="table-action-btn"
                                                            style={{
                                                                color:
                                                                    '#ef4444',
                                                            }}
                                                            title="Delete Enquiry"
                                                        >
                                                            <Trash2
                                                                size={
                                                                    14
                                                                }
                                                            />
                                                        </button>

                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    )}
                                </tbody>

                            </table>
                        </div>
                    )}
                </div>
            )}

            {/* =================================================
                ENQUIRY DETAIL MODAL
            ================================================= */}

            {activeModalEnquiry && (
                <div
                    className="modal-overlay"
                    onClick={() =>
                        setActiveModalEnquiry(null)
                    }
                >
                    <div
                        className="modal-content glass-panel"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        style={{
                            maxWidth: '650px',
                        }}
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={() =>
                                setActiveModalEnquiry(null)
                            }
                        >
                            <X size={20} />
                        </button>

                        <h2 className="modal-title">
                            Enquiry Details
                        </h2>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                marginTop: '1rem',
                            }}
                        >

                            {/* SENDER + EMAIL */}
                            <div className="form-group-row">

                                <div>
                                    <span className="detail-label">
                                        SENDER NAME
                                    </span>

                                    <strong
                                        style={{
                                            fontSize:
                                                '1.1rem',
                                        }}
                                    >
                                        {
                                            activeModalEnquiry.name
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <span className="detail-label">
                                        EMAIL ADDRESS
                                    </span>

                                    <a
                                        href={`mailto:${activeModalEnquiry.email}`}
                                        style={{
                                            color:
                                                'var(--brand-purple)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {
                                            activeModalEnquiry.email
                                        }
                                    </a>
                                </div>

                            </div>

                            {/* SUBJECT + DATE */}
                            <div className="form-group-row">

                                <div>
                                    <span className="detail-label">
                                        SUBJECT
                                    </span>

                                    <strong>
                                        {
                                            activeModalEnquiry.subject
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <span className="detail-label">
                                        DATE RECEIVED
                                    </span>

                                    <span>
                                        {new Date(
                                            activeModalEnquiry.created_at
                                        ).toLocaleString()}
                                    </span>
                                </div>

                            </div>

                            {/* MESSAGE */}
                            <div>
                                <span
                                    className="detail-label"
                                    style={{
                                        marginBottom:
                                            '0.5rem',
                                    }}
                                >
                                    MESSAGE BODY
                                </span>

                                <div
                                    style={{
                                        padding: '1.25rem',
                                        borderRadius:
                                            'var(--radius-md)',
                                        background:
                                            'var(--bg-secondary)',
                                        border:
                                            '1px solid var(--border-color)',
                                        whiteSpace:
                                            'pre-wrap',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {
                                        activeModalEnquiry.message
                                    }
                                </div>
                            </div>

                            {/* STATUS + REPLY */}
                            <div
                                className="form-group-row"
                                style={{
                                    alignItems:
                                        'center',
                                }}
                            >

                                <div>
                                    <span className="detail-label">
                                        CHANGE STATUS
                                    </span>

                                    <select
                                        value={
                                            activeModalEnquiry.status ||
                                            'read'
                                        }
                                        onChange={(e) =>
                                            handleUpdateStatus(
                                                activeModalEnquiry.id,
                                                e.target.value
                                            )
                                        }
                                        style={{
                                            padding:
                                                '0.45rem 0.85rem',
                                            borderRadius:
                                                'var(--radius-md)',
                                            border:
                                                '1px solid var(--border-color)',
                                            background:
                                                'var(--bg-surface-solid)',
                                            color:
                                                'var(--text-main)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        <option value="unread">
                                            Unread / New
                                        </option>

                                        <option value="read">
                                            Read
                                        </option>

                                        <option value="replied">
                                            Replied
                                        </option>

                                        <option value="archived">
                                            Archived
                                        </option>
                                    </select>
                                </div>

                                {/* REPLY VIA EMAIL */}
                                <a
                                    href={`mailto:${activeModalEnquiry.email}?subject=Re: ${encodeURIComponent(
                                        activeModalEnquiry.subject
                                    )}`}
                                    className="btn-primary-glow"
                                    onClick={() =>
                                        handleUpdateStatus(
                                            activeModalEnquiry.id,
                                            'replied'
                                        )
                                    }
                                >
                                    <MailForwardIcon size={16} />

                                    <span>
                                        Reply via Email
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}