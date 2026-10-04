import React, { useState } from "react";
import {
    Mail,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
    Sparkles,
    Loader2,
    ArrowUpRight,
} from "lucide-react";

import profileImg from "../assets/profile.png";
import "./ContactSection.css";

// =====================================================
// BRAND ICONS
// =====================================================

const GithubIcon = ({ size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.92.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.2 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
);

export default function ContactSection({
    profileSettings,
    siteSettings,
    dataService,
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
        website: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // =====================================================
    // FORM HANDLERS
    // =====================================================

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (errorMsg) {
            setErrorMsg("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMsg("");

        // Honeypot protection
        if (formData.website) {
            return;
        }

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setErrorMsg("Please fill in all required fields.");
            return;
        }

        if (!formData.consent) {
            setErrorMsg(
                "Please confirm that you agree to be contacted regarding your enquiry."
            );
            return;
        }

        try {
            setLoading(true);

            if (dataService?.submitEnquiry) {
                await dataService.submitEnquiry({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                });
            } else {
                await new Promise((resolve) =>
                    setTimeout(resolve, 1000)
                );
            }

            setSuccess(true);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                consent: false,
                website: "",
            });
        } catch (error) {
            console.error("Enquiry submission failed:", error);

            setErrorMsg(
                "Something went wrong while sending your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // DATA
    // =====================================================

    const email =
        profileSettings?.email ||
        siteSettings?.email ||
        "keerthikeerthi32155@gmail.com";

    const location =
        profileSettings?.location ||
        siteSettings?.location ||
        "Coimbatore, Tamil Nadu";

    const github =
        profileSettings?.github_url ||
        siteSettings?.github_url ||
        "https://github.com/Keerthi25098";

    const linkedin =
        profileSettings?.linkedin_url ||
        siteSettings?.linkedin_url ||
        "https://linkedin.com/in/keerthika25";

    const availability =
        siteSettings?.availability_status ||
        "Available for opportunities";

    const profile =
        profileSettings?.profile_image_url || profileImg;

    return (
        <section className="contact-section" id="contact">

            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div className="contact-bg-orb contact-bg-orb-1" />
            <div className="contact-bg-orb contact-bg-orb-2" />

            <div className="contact-container">

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div className="contact-header">

                    <span className="contact-eyebrow">
                        <Sparkles size={13} />
                        Available for Opportunities
                    </span>

                    <h2>
                        Let's Work Together
                    </h2>

                    <p>
                        Looking for a React.js developer for your next
                        project? I'm open to developer roles, freelance
                        projects, and exciting collaborations.
                    </p>

                </div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="contact-grid">

                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <div className="hire-card">

                        {/* Profile */}
                        <div className="hire-profile">

                            <div className="profile-image-wrapper">

                                <img
                                    src={profile}
                                    alt="Keerthika KT"
                                    className="hire-profile-image"
                                />

                                <span className="profile-online-dot" />

                            </div>

                            <div className="hire-profile-info">

                                <h3>
                                    Keerthika KT
                                </h3>

                                <p>
                                    React.js Developer
                                </p>

                            </div>

                        </div>


                        {/* Main Content */}
                        <div className="hire-me-content">

                            <span className="hire-me-label">
                                WHY HIRE ME?
                            </span>

                            <h3 className="hire-me-title">
                                I build clean, responsive and
                                <span>
                                    {" "}user-focused web experiences.
                                </span>
                            </h3>

                            <p className="contact-intro">
                                I enjoy turning ideas and designs into
                                modern web applications using React.js,
                                JavaScript and modern frontend technologies.
                            </p>

                        </div>





                    </div>


                    {/* =================================================
                        RIGHT SIDE - WHITE FORM
                    ================================================= */}

                    <div className="contact-form-card">

                        {success ? (

                            /* SUCCESS */
                            <div className="contact-success">

                                <div className="success-icon">
                                    <CheckCircle2 size={32} />
                                </div>

                                <span className="success-small-label">
                                    MESSAGE SENT
                                </span>

                                <h3>
                                    Thanks for reaching out!
                                </h3>

                                <p>
                                    Your message has been received
                                    successfully. I'll get back to you
                                    as soon as possible.
                                </p>

                                <button
                                    type="button"
                                    className="success-new-message"
                                    onClick={() => setSuccess(false)}
                                >
                                    Send another message
                                    <ArrowUpRight size={15} />
                                </button>

                            </div>

                        ) : (

                            <>

                      
                                {/* Error */}
                                {errorMsg && (
                                    <div className="form-message form-error">

                                        <AlertCircle size={16} />

                                        <span>
                                            {errorMsg}
                                        </span>

                                    </div>
                                )}


                                {/* Form */}
                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                >

                                    {/* Honeypot */}
                                    <input
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="honeypot-field"
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />


                                    {/* Name + Email */}
                                    <div className="form-row">

                                        <div className="form-group">

                                            <label htmlFor="name">
                                                Your Name
                                            </label>

                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="form-group">

                                            <label htmlFor="email">
                                                Email Address
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* Subject */}
                                    <div className="form-group">

                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            placeholder="What would you like to discuss?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Message */}
                                    <div className="form-group">

                                        <label htmlFor="message">
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            placeholder="Tell me a little about your project or opportunity..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Consent */}
                                    <label className="consent-row">

                                        <input
                                            type="checkbox"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                        />

                                        <span>
                                            I agree to be contacted regarding
                                            this enquiry.
                                        </span>

                                    </label>


                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                        disabled={loading}
                                    >

                                        {loading ? (
                                            <>
                                                <Loader2
                                                    size={17}
                                                    className="loading-spinner"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Let's Talk
                                                <ArrowUpRight size={17} />
                                            </>
                                        )}

                                    </button>

                                </form>

                            </>

                        )}

                    </div>

                </div>


                {/* =================================================
                    AVAILABILITY
                ================================================= */}

                <div className="contact-availability">

                    <span className="availability-dot" />

                    <span>
                        {availability}
                    </span>

                </div>

            </div>

        </section>
    );
}