import React, { useEffect, useState } from "react";
import "./Portfolio.css";

import profile from "../assets/profile.png";
import blob from "../assets/blob.png";

// =====================================================
// SKILL IMAGES
// =====================================================

import htmlLogo from "../assets/skills-logo/html.png";
import cssLogo from "../assets/skills-logo/css.png";
import javascriptLogo from "../assets/skills-logo/jss.png";
import reactLogo from "../assets/skills-logo/react.png";
import bootstrapLogo from "../assets/skills-logo/bootstrapp.png";
import githubLogo from "../assets/skills-logo/github.png";
import mysqlLogo from "../assets/skills-logo/sql.png";
import wordpressLogo from "../assets/skills-logo/wordpress.png";

// =====================================================
// JOURNEY IMAGES
// =====================================================

import javaNetbeans from "../assets/journey/java.png";
import figmaDesign from "../assets/journey/figma.png";
import webDevelopment from "../assets/journey/flipcart.jpeg";
import webGame from "../assets/journey/game.jpeg";
import reactDevelopment from "../assets/journey/react.jpeg";
import cloudi5Development from "../assets/journey/currently.jpeg";

// =====================================================
// PROJECT IMAGES
// =====================================================

import grindoImage from "../assets/journey/currently.jpeg";
import choteKisanImage from "../assets/journey/currently.jpeg";
import hireMindsImage from "../assets/journey/currently.jpeg";
import tryZoneImage from "../assets/journey/currently.jpeg";
import akshithaImage from "../assets/journey/currently.jpeg";
import owltrackrImage from "../assets/journey/currently.jpeg";
import employeeHubImage from "../assets/journey/currently.jpeg";
import skycastImage from "../assets/journey/currently.jpeg";
import neoWheelsImage from "../assets/journey/currently.jpeg";
import calcVerseImage from "../assets/journey/currently.jpeg";

// =====================================================
// JOURNEY DATA
// =====================================================

const journeySteps = [
  {
    number: "01",
    year: "2023",
    company: "Network Systems",
    title: "Java Full Stack",
    image: javaNetbeans,

    description: (
      <>
        During the first half of my first year, I joined a{" "}
        <strong>Java Full Stack course</strong> at{" "}
        <strong>Network Systems, Court Road</strong>. While learning
        full-stack concepts, I gradually realized that I was more
        interested in <strong>frontend design, interfaces</strong> and
        creating experiences that people could interact with.
      </>
    ),

    certificate: "/certificates/java-full-stack.pdf",
  },

  {
    number: "02",
    year: "2023",
    company: "Techvolt",
    title: "Figma Internship",
    image: figmaDesign,

    description: (
      <>
        During my second year, I completed a{" "}
        <strong>one-week Figma internship</strong> at{" "}
        <strong>Techvolt</strong>. This experience introduced me to{" "}
        <strong>UI thinking, visual design</strong> and the process of
        turning ideas into clean and meaningful interfaces.
      </>
    ),

    certificate: "/certificates/figma.pdf",
  },

  {
    number: "03",
    year: "2024",
    company: "AK Infopark",
    title: "Web Development Internship",
    image: webDevelopment,

    description: (
      <>
        I completed a{" "}
        <strong>one-month web development internship</strong> at{" "}
        <strong>AK Infopark</strong>, where I worked on a{" "}
        <strong>Flipkart website clone</strong>. This experience helped
        me strengthen my{" "}
        <strong>HTML, CSS and JavaScript</strong> fundamentals and
        understand how real-world websites are structured.
      </>
    ),

    certificate: "/certificates/web-development.pdf",
  },

  {
    number: "04",
    year: "2024",
    company: "St. Xavier's College, Nagercoil",
    title: "National Level Web Game Competition",
    image: webGame,

    description: (
      <>
        I participated in a{" "}
        <strong>web game creation competition</strong> at a{" "}
        <strong>national-level symposium</strong> held at{" "}
        <strong>St. Xavier's College, Nagercoil</strong>. Our work won{" "}
        <strong>second prize</strong>, giving me confidence to experiment,
        solve problems creatively and build something within a limited
        time.
      </>
    ),

    certificate: "/certificates/symposium.pdf",
  },

  {
    number: "05",
    year: "2025",
    company: "Ibacus Tech Solution",
    title: "React.js Internship",
    image: reactDevelopment,

    description: (
      <>
        During my final year, I completed a{" "}
        <strong>three-month React.js internship</strong> at{" "}
        <strong>Ibacus Tech Solution</strong>. I gained practical
        experience in <strong>React.js</strong> and became more confident
        in building{" "}
        <strong>interactive and responsive web applications</strong>.
      </>
    ),

    certificate: "/certificates/react-internship.pdf",
  },

  {
    number: "06",
    year: "2026",
    company: "Cloudi5 Technologies",
    title: "From Intern to Developer",
    image: cloudi5Development,

    description: (
      <>
        After completing my React internship, I started looking for{" "}
        <strong>frontend opportunities</strong> and joined{" "}
        <strong>Cloudi5 Technologies</strong>. My experience expanded
        across{" "}
        <strong>
          WordPress, HTML, CSS, JavaScript, Bootstrap, React, PHP, Laravel,
          AWS
        </strong>{" "}
        and <strong>InMotion hosting</strong> while continuing to explore
        new technologies.
      </>
    ),

    certificate: "/certificates/cloudi5.pdf",
  },
];

// =====================================================
// SKILLS
// =====================================================

const skills = [
  {
    name: "HTML5",
    logo: htmlLogo,
  },
  {
    name: "CSS3",
    logo: cssLogo,
  },
  {
    name: "JavaScript",
    logo: javascriptLogo,
  },
  {
    name: "React.js",
    logo: reactLogo,
  },
  {
    name: "Bootstrap",
    logo: bootstrapLogo,
  },
  {
    name: "GitHub",
    logo: githubLogo,
  },
  {
    name: "MySQL",
    logo: mysqlLogo,
  },
  {
    name: "WordPress",
    logo: wordpressLogo,
  },
];

// =====================================================
// SKILL DESCRIPTIONS
// =====================================================

const skillDescriptions = {
  HTML5:
    "I use semantic HTML5 to build clean, accessible and well-structured web pages.",

  CSS3:
    "I use CSS3 to create responsive layouts, visual styling, positioning, animations and polished user interfaces.",

  JavaScript:
    "I use JavaScript to add interactivity, handle events, perform validation and create dynamic frontend experiences.",

  "React.js":
    "I build reusable React.js components and responsive interfaces using modern React development practices.",

  Bootstrap:
    "I use Bootstrap for responsive grid systems, layouts, components and faster frontend development.",

  GitHub:
    "I use GitHub for repositories, source-code management, version control and maintaining my development projects.",

  MySQL:
    "I have working familiarity with MySQL databases, tables, queries and basic database operations.",

  WordPress:
    "I have experience working with WordPress for website content, layouts and frontend customization.",
};

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    number: "01",
    title: "ChoteKisan",
    category: "Marketplace",
    image: choteKisanImage,
    description:
      "A farmer marketplace platform focused on managing products and creating a simple digital experience for agricultural users.",
    live: "https://chotekisan.com/",
  },

  {
    number: "02",
    title: "Grindo",
    category: "E-Commerce",
    image: grindoImage,
    description:
      "An Indian masala and grocery e-commerce website designed with a warm, traditional visual identity and responsive shopping experience.",
    live: "https://grindo.life/",
  },

  {
    number: "03",
    title: "HireMinds",
    category: "Course Purchasing Platform",
    image: hireMindsImage,
    description:
      "A course purchasing website designed to help users explore courses, view course information and make informed learning decisions through a clean and responsive interface.",
    live: "https://hireminds.ci5.in/",
  },

  {
    number: "04",
    title: "TryZone",
    category: "Medicine Enquiry Website",
    image: tryZoneImage,
    description:
      "A medicine enquiry website designed to help users explore medicine-related information and submit enquiries through a simple and user-friendly interface.",
    live: "https://tryzone.ci5.in/",
  },

  {
    number: "05",
    title: "Akshitha Interiors",
    category: "Landing Page",
    image: akshithaImage,
    description:
      "A visually focused interior design landing page created to showcase services, projects and brand presentation.",
    live: "https://www.akshithainteriorstudio.com/",
  },

  {
    number: "06",
    title: "OwlTracKR",
    category: "Management System",
    image: owltrackrImage,
    description:
      "A React-based internship management system with trainer and intern roles, task management and local data handling.",
    live: "https://owltrackr.netlify.app/",
    github: "https://github.com/Keerthi25098",
  },

  {
    number: "07",
    title: "Employee HUB",
    category: "Web Application",
    image: employeeHubImage,
    description:
      "A responsive employee management application built with React.js featuring CRUD operations and a clean dashboard interface.",
    live: "https://owlix.netlify.app/",
    github: "https://github.com/Keerthi25098",
  },

  {
    number: "08",
    title: "SkyCast",
    category: "Weather Application",
    image: skycastImage,
    description:
      "A weather application that retrieves real-time weather information through an API and presents it through a responsive interface.",
    live: "https://skycastify.netlify.app/",
    github: "https://github.com/Keerthi25098",
  },

  {
    number: "09",
    title: "Neo Wheels 2.0",
    category: "E-Commerce",
    image: neoWheelsImage,
    description:
      "A modern electric vehicle e-commerce interface created with React.js, focusing on product presentation and responsive design.",
    live: "https://neo-wheels-2-0.vercel.app/",
    github: "https://github.com/Keerthi25098/NEO_Wheels-2.0",
  },

  {
    number: "10",
    title: "CalcVerse",
    category: "Web Application",
    image: calcVerseImage,
    description:
      "A modern calculator suite that brings multiple calculation utilities together in one responsive web application.",
    live: "#",
    github: "https://github.com/Keerthi25098",
  },
];

// =====================================================
// REUSABLE ARROW BUTTON
// =====================================================

const ArrowButton = ({
  href,
  children,
  className = "",
  onClick,
  type = "link",
  download = false,
}) => {
  if (type === "button") {
    return (
      <button
        type="button"
        className={`button ${className}`}
        style={{ "--clr": "#7808d0" }}
        onClick={onClick}
      >
        <span className="button__icon-wrapper">

          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon-svg"
            width="10"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>

          <svg
            viewBox="0 0 14 15"
            fill="none"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon-svg button__icon-svg--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>

        </span>

        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`button ${className}`}
      style={{ "--clr": "#7808d0" }}
      download={download ? true : undefined}
      target={
        href &&
        (href.startsWith("http://") ||
          href.startsWith("https://"))
          ? "_blank"
          : undefined
      }
      rel={
        href &&
        (href.startsWith("http://") ||
          href.startsWith("https://"))
          ? "noopener noreferrer"
          : undefined
      }
    >
      <span className="button__icon-wrapper">

        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg button__icon-svg--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

      </span>

      {children}
    </a>
  );
};

// =====================================================
// PORTFOLIO COMPONENT
// =====================================================

const Portfolio = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // =====================================================
  // CLOSE CONTACT MODAL WITH ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowContactModal(false);
      }
    };

    if (showContactModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showContactModal]);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-bg"></div>

        <header className="hero-navbar">

          <a href="#home" className="hero-logo">
            K<span>.</span>
          </a>

          <nav className="hero-nav">

            <a href="#home" className="nav-active">
              Home
            </a>

            <a href="#work">
              Work
            </a>

            <a href="#about">
              About
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#skills">
              Skills
            </a>

          </nav>

          {/* =================================================
              DOWNLOAD CV BUTTON
          ================================================= */}

          <ArrowButton
            href="/Keerthika-KT-Resume.pdf"
            download={true}
            className="download-cv-button"
          >
            Download CV
          </ArrowButton>

        </header>

        <main className="hero-main">

          <div className="hero-editorial">

            <div className="hero-copy">

              <p className="hero-greeting">
                Hello, I'm
              </p>

              <h1 className="hero-name">
                Keerthika KT
              </h1>

              <div className="hero-role">
                <span>Frontend</span>
                <span>Developer</span>
              </div>

              <p className="hero-description">
                I’m a passionate frontend developer who enjoys creating
                clean, responsive and engaging digital experiences. I’m
                always eager to learn new technologies, explore modern
                tools and continuously improve my skills to build better
                web experiences.
              </p>

              <div className="hero-buttons">

                <ArrowButton href="#work">
                  View projects
                </ArrowButton>

              </div>

            </div>

            <div className="hero-visual">

              <img
                src={blob}
                alt=""
                className="hero-blob"
                aria-hidden="true"
              />

              <div className="profile-image-card">

                <img
                  src={profile}
                  alt="Keerthika"
                  className="hero-image"
                />

              </div>

            </div>

          </div>

        </main>

      </section>

      {/* =====================================================
          CONTACT MODAL
      ===================================================== */}

      {showContactModal && (

        <div
          className="contact-modal-overlay"
          onClick={() => setShowContactModal(false)}
        >

          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            {/* MODAL TOP */}

            <div className="contact-modal-top">

              <span className="contact-modal-label">
                LET'S CONNECT
              </span>

              <button
                type="button"
                className="contact-modal-close"
                onClick={() => setShowContactModal(false)}
                aria-label="Close contact modal"
              >
                ×
              </button>

            </div>

            {/* MODAL INTRO */}

            <div className="contact-modal-intro">

              <div className="contact-modal-number">
                01
              </div>

              <div>

                <h2 id="contact-modal-title">
                  Let’s connect<span>.</span>
                </h2>

                <p>
                  Have a project, opportunity or simply want to
                  say hello? Feel free to reach out.
                </p>

              </div>

            </div>

            {/* PERSONAL DETAILS */}

            <div className="contact-profile">

              <div className="contact-profile-image">

                <img
                  src={profile}
                  alt="Keerthika KT"
                />

              </div>

              <div className="contact-profile-info">

                <h3>
                  Keerthika KT
                </h3>

                <p>
                  Frontend / Web Developer
                </p>

                <span>
                  Coimbatore, Tamil Nadu
                </span>

              </div>

            </div>

            {/* CONTACT DETAILS */}

            <div className="contact-modal-details">

              {/* EMAIL */}

              <a
                href="mailto:keerthikeerthi32155@gmail.com"
                className="contact-modal-item"
              >

                <div className="contact-item-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M4 7L12 13L20 7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                </div>

                <div className="contact-item-content">

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    keerthikeerthi32155@gmail.com
                  </strong>

                </div>

                <span className="contact-item-arrow">
                  ↗
                </span>

              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/keerthika25"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-modal-item"
              >

                <div className="contact-item-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M8 10V16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="8"
                      cy="7.5"
                      r="1"
                      fill="currentColor"
                    />

                    <path
                      d="M12 16V10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 13C12 11.34 13.1 10 14.75 10C16.4 10 17 11.25 17 13V16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <div className="contact-item-content">

                  <span>
                    LINKEDIN
                  </span>

                  <strong>
                    linkedin.com/in/keerthika25
                  </strong>

                </div>

                <span className="contact-item-arrow">
                  ↗
                </span>

              </a>

              {/* LOCATION */}

              <div className="contact-modal-item contact-static-item">

                <div className="contact-item-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    <path
                      d="M12 21C12 21 19 14.5 19 8.5C19 4.91 15.87 2 12 2C8.13 2 5 4.91 5 8.5C5 14.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <circle
                      cx="12"
                      cy="8.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                  </svg>

                </div>

                <div className="contact-item-content">

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Coimbatore, Tamil Nadu
                  </strong>

                </div>

              </div>

              {/* ROLE */}

              <div className="contact-modal-item contact-static-item">

                <div className="contact-item-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M8 7V5C8 4.45 8.45 4 9 4H15C15.55 4 16 4.45 16 5V7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M3 12H21"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M10 12V14H14V12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                  </svg>

                </div>

                <div className="contact-item-content">

                  <span>
                    ROLE
                  </span>

                  <strong>
                    Web Developer
                  </strong>

                </div>

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="contact-modal-footer">

              <span>
                OPEN TO NEW OPPORTUNITIES
              </span>

              <span className="contact-status">
                <span></span>
                Available to connect
              </span>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          ABOUT MY JOURNEY
      ===================================================== */}

      <section
        className="journey-section"
        id="about"
      >

        <div className="journey-intro">

          <div className="journey-intro-inner">

            <span className="name">
              ABOUT MY JOURNEY
            </span>

            <h2>
              Learning.
              <br />
              Building.
              <br />
              <span>Growing.</span>
            </h2>

            <p>
              My journey has been shaped by curiosity, creativity
              and a constant desire to learn, build and explore
              new possibilities.
            </p>

          </div>

        </div>

        <div className="journey-timeline">

          {journeySteps.map((step) => (

            <article
              className="journey-step"
              key={step.number}
            >

              <div className="step-content">

                <div className="step-text">

                  <div className="step-company">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="location-icon"
                      aria-hidden="true"
                    >

                      <path
                        d="M12 21C12 21 19 14.5 19 8.5C19 4.91 15.87 2 12 2C8.13 2 5 4.91 5 8.5 5 14.5 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="12"
                        cy="8.5"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />

                    </svg>

                    <span>
                      {step.company}
                    </span>

                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                  <ArrowButton
                    href={step.certificate}
                    className="certificate-button"
                  >
                    View Certificate
                  </ArrowButton>

                </div>

                <div className="step-image-wrapper">

                  <div className="journey-image-card">

                    <img
                      src={step.image}
                      alt={`${step.title} at ${step.company}`}
                      className="journey-step-image"
                    />

                  </div>

                  <div className="step-image-number">
                    {step.number}
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          EDUCATION SECTION
      ===================================================== */}

      <section
        className="education-section"
        id="education"
      >

        <div className="education-heading">

          <span className="education-label">
            03 — EDUCATION
          </span>

          <h2>
            My academic <span>journey.</span>
          </h2>

          <p className="education-intro">
            My academic journey has given me a strong foundation in
            computer science while helping me develop a continuous
            interest in technology and web development.
          </p>

        </div>

        <div className="education-list">

          {/* SCHOOL */}

          <article className="education-item">

            <div className="education-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >

                <path
                  d="M3 21V10L12 4L21 10V21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M7 21V14H17V21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M2 21H22"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M9 10H15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

              </svg>

            </div>

            <div className="education-content">

              <span className="education-type">
                SCHOOL EDUCATION
              </span>

              <h3>
                S.M. Matric Hr. Sec. School
              </h3>

              <p className="education-location">
                Mylaudy, Tamil Nadu
              </p>

              <p>
                Completed my schooling at{" "}
                <strong>
                  S.M. Matric Hr. Sec. School, Mylaudy
                </strong>
                , with{" "}
                <strong>
                  above 80% marks
                </strong>{" "}
                in both 10th and 12th examinations.
              </p>

            </div>

          </article>

          {/* COLLEGE */}

          <article className="education-item">

            <div className="education-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >

                <path
                  d="M3 9L12 4L21 9L12 14L3 9Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M6 11V16C6 16 8.5 19 12 19C15.5 19 18 16 18 16V11"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M21 9V16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <circle
                  cx="21"
                  cy="18"
                  r="1"
                  fill="currentColor"
                />

              </svg>

            </div>

            <div className="education-content">

              <span className="education-type">
                UNDERGRADUATE DEGREE
              </span>

              <h3>
                B.E. Computer Science &amp; Engineering
              </h3>

              <p className="education-location">
                Arunachala College of Engineering for Women
              </p>

              <p>
                Completed my{" "}
                <strong>
                  Bachelor of Engineering in Computer Science
                  and Engineering
                </strong>{" "}
                with a{" "}
                <strong>
                  CGPA of 8.5
                </strong>
                , graduating in 2026.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          SKILLS SECTION
      ===================================================== */}

      <section
        className="skills-section"
        id="skills"
      >

        <div className="skills-heading">

          <span className="skills-label">
            04 — SKILLS
          </span>

          <h2>
            What I <span>work with.</span>
          </h2>

        </div>

        <div className="skills-slider">

          <div className="skills-track">

            {skills.map((skill, index) => (

              <React.Fragment
                key={`skill-first-${index}`}
              >

                <button
                  type="button"
                  className={`skill-item ${
                    selectedSkill === skill.name
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSkill(skill.name)
                  }
                >

                  <img
                    src={skill.logo}
                    alt=""
                    className="skill-logo"
                    aria-hidden="true"
                  />

                  <span>
                    {skill.name}
                  </span>

                </button>

                <span
                  className="skill-separator"
                  aria-hidden="true"
                ></span>

              </React.Fragment>

            ))}

            {skills.map((skill, index) => (

              <React.Fragment
                key={`skill-second-${index}`}
              >

                <button
                  type="button"
                  className={`skill-item ${
                    selectedSkill === skill.name
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSkill(skill.name)
                  }
                >

                  <img
                    src={skill.logo}
                    alt=""
                    className="skill-logo"
                    aria-hidden="true"
                  />

                  <span>
                    {skill.name}
                  </span>

                </button>

                <span
                  className="skill-separator"
                  aria-hidden="true"
                ></span>

              </React.Fragment>

            ))}

          </div>

        </div>

        {selectedSkill && (

          <div className="skill-details">

            <div className="skill-details-top">

              <span className="skill-details-label">
                SELECTED SKILL
              </span>

              <button
                type="button"
                className="skill-close"
                onClick={() =>
                  setSelectedSkill(null)
                }
                aria-label="Close skill details"
              >
                ×
              </button>

            </div>

            <div className="skill-details-content">

              <div className="skill-details-number">
                04
              </div>

              <div>

                <h3>
                  {selectedSkill}
                </h3>

                <p>
                  {skillDescriptions[selectedSkill]}
                </p>

              </div>

            </div>

          </div>

        )}

      </section>

      {/* =====================================================
          MY WORK / PROJECTS
      ===================================================== */}

      <section
        className="work-section"
        id="work"
      >

        <div className="work-heading">

          <div>

            <span className="work-label">
              05 — MY WORK
            </span>

            <h2>
              Things I’ve <span>built.</span>
            </h2>

          </div>

          <p className="work-intro">
            A collection of projects I’ve built while learning,
            experimenting and working with modern frontend
            technologies.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

              </div>

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-links">

                  <ArrowButton
                    href={project.live}
                    className="project-button"
                  >
                    Live Demo
                  </ArrowButton>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          CONTACT / FOOTER
      ===================================================== */}

      <footer
        className="footer-section"
        id="contact"
      >

        <div className="footer-top">

          <div className="footer-heading">

            <h2>
              Let’s build something
              <br />
              <span>meaningful together.</span>
            </h2>

            <p>
              I’m eager to learn new skills, collaborate with new teams,
              and adapt to new environments. I enjoy taking on new
              challenges and continuously improving as a developer.
            </p>

          </div>

          <div className="footer-contact">

            {/* EMAIL */}

            <a
              href="mailto:keerthikeerthi32155@gmail.com"
              className="footer-contact-item"
            >

              <span className="footer-contact-label">
                EMAIL
              </span>

              <span className="footer-contact-value">
                keerthikeerthi32155@gmail.com
              </span>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://linkedin.com/in/keerthika25"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-label">
                LINKEDIN
              </span>

              <span className="footer-contact-value">
                linkedin.com/in/keerthika25
              </span>

            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/Keerthi25098"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-label">
                GITHUB
              </span>

              <span className="footer-contact-value">
                github.com/Keerthi25098
              </span>

            </a>

          </div>

        </div>

      </footer>

    </>
  );
};

export default Portfolio;