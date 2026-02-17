import React from "react";
import Navbar from "../components/Navbar";
import "./ProjectDetails.css";
import poster from "../assets/poster.png";

function Car() {
  return (
    <>
      <Navbar />

      <div className="project-container">
        {/* Project Title */}
        <h1>CalcVerse</h1>

        {/* Short Project Description */}
        
        <p className="project-desc">
        CalcVerse is a modern, responsive web application that brings a suite of practical calculators to your fingertips. Designed for students, professionals, and everyday users, CalcVerse makes complex calculations simple, fast, and intuitive.
         
        </p>

        {/* Buttons */}
        <div className="project-buttons">
          <a href="https://github.com/Keerthi25098/NEO_Wheelss" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a href="https://neo-wheels.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </>
  );
}

export default Car;
