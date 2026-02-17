

import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import profile from "../assets/profile.jpg"
import logo from "../assets/Logo.png";

function Portfolio() {

  const goToWorks = () => {
    document.getElementById("works").scrollIntoView({ behavior: "smooth" });
  };

  // View Resume (from public folder)
  const handleResume = () => {
    window.open("/Keerthika_Resume.pdf", "_blank");
  };

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">OWLORO</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Skills</a>
          <a href="#works">Projects</a>

          {/* Page Navigation */}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="hire-btn">
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
            Hire Me
          </Link>
        </button>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-left">
          <p className="intro">Hello, I'm</p>

          <h1>Keerthika K T</h1>
          <h2>Frontend Developer</h2>

          <p className="hero-desc">
            I create responsive and interactive web applications using React.js,
            JavaScript, and modern UI frameworks. Passionate about building clean,
            scalable interfaces and improving user experience through thoughtful design.
          </p>

          <div className="hero-buttons">
            <button className="primary" onClick={goToWorks}>
              View Projects
            </button>

            <button className="outline" onClick={handleResume}>
              View Resume
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Keerthika profile" />
        </div>

      </section>


      {/* SKILLS */}
      <section id="services" className="services">
        <h2>Technical Skills</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>React.js, JavaScript, HTML5, CSS3</p>
          </div>

          <div className="service-card">
            <h3>UI Frameworks</h3>
            <p>Bootstrap, Tailwind CSS</p>
          </div>

          <div className="service-card">
            <h3>Tools & Others</h3>
            <p>Git, GitHub, Figma, Canva, Netlify,</p>
          </div>
        </div>
      </section>

{/* PROJECTS */}
<section id="works" className="services">
  <h2>My Projects</h2>

  <div className="service-grid">

    {/* Intern Management */}
    <div className="service-card">
      <h3>
        <Link to="/dual" className="project-link">
          Intern Management System
        </Link>
      </h3>
      <p>Website for task assignment & tracking using React and LocalStorage</p>
    </div>

    {/* Employee Management */}
    <div className="service-card">
      <h3><Link to="/owlix" className="project-link">
          Employee HUB
        </Link></h3>
      <p>CRUD operations using React.js </p>
    </div>


    {/* ✅ NEW SkyCast Project */}
    <div className="service-card">
      <h3>
        <Link to="/skycast" className="project-link">
          SkyCast
        </Link>
      </h3>
      <p>
        A simple React weather application that fetches real-time weather data using an API.
      </p>
    </div>

  </div>
</section>



      {/* FOOTER */}
      <footer className="footer">
        © 2026 Keerthika K T — React Frontend Developer
      </footer>

    </div>
  );
}

export default Portfolio;
