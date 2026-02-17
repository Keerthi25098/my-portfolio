import React from "react";
import Navbar from "../components/Navbar";
import "./ProjectDetails.css";


function Employee() {
  return (
    <>
      <Navbar />

      <div className="project-container">
        {/* Project Title */}
        <h1>Owlix</h1>

        {/* Short Project Description */}
        <p className="project-desc">
  Owlix is an employee management web application that allows users to add,
  update, delete, and search employee records efficiently. The system provides
  an organized interface to manage employee details and instantly view changes.
  Built using React and JavaScript with LocalStorage for data persistence,
  the application features a clean, responsive, and user-friendly UI.
</p>


        {/* Buttons */}
        <div className="project-buttons">
          <a href="https://github.com/Keerthi25098/Owlix" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a href="https://owlix.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </>
  );
}

export default Employee;
