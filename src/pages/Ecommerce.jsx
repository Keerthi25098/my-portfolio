import React from "react";
import Navbar from "../components/Navbar";
import "./ProjectDetails.css";
import poster from "../assets/poster.png";

function Ecommerce() {
  return (
    <>
      <Navbar />

      <div className="project-container">
        {/* Project Title */}
        <h1>OwlTracKR</h1>

        {/* Short Project Description */}
        
        <p className="project-desc">
          A role-based intern management website with separate dashboards for
          trainer and interns. Trainers can assign tasks and review submissions,
          while interns can view tasks, submit work and track status.
          Built using React, JavaScript and LocalStorage with a clean responsive UI.
        </p>

        {/* Buttons */}
        <div className="project-buttons">
          <a href="https://github.com/Keerthi25098/OwlTracKR" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a href="https://owltrackr.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </>
  );
}

export default Ecommerce;
