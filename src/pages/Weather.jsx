import React from "react";
import Navbar from "../components/Navbar";
import "./ProjectDetails.css";
import poster from "../assets/poster.png";

function Weather() {
  return (
    <>
      <Navbar />

      <div className="project-container">
        {/* Project Title */}
        <h1>SkyCast</h1>

        {/* Short Project Description */}
        
        <p className="project-desc">
        A simple weather forecasting web application that displays real-time weather information for searched cities. The app fetches live data from external weather APIs using secure API keys and presents temperature, humidity, wind speed, and weather conditions in a clean and responsive user interface. Developed using modern web technologies with dynamic data handling and user-friendly search functionality.
        </p>

        {/* Buttons */}
        <div className="project-buttons">
          <a href="https://github.com/Keerthi25098/SkyCast" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a href="https://skycastify.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </>
  );
}

export default Weather;
