import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Navbar from "../components/Navbar";
// Project data
const projects = [
  {
    name: "Intern Management System",
    description: "Website for task assignment & tracking using React and LocalStorage",
  
    github: "https://github.com/Keerthi25098/OwlTracKR",
    live: "https://owltrackr.netlify.app/",
    
  },
  {
    name: "Employee HUB",
    description: "CRUD operations using React.js",
    
    github: "https://github.com/Keerthi25098/Owlix",
    live: "https://owlix.netlify.app/",
    
  },
  {
    name: "SkyCast",
    description: "React weather app that fetches real-time data from API",
    
    github: "https://github.com/Keerthi25098/SkyCast",
    live: "https://skycastify.netlify.app/",
   
  },
  {
    name: "CalcVerse",
    description: "A smart all-in-one web app",
    
    github: "https://github.com/Keerthi25098/CalcVerse",
    live: "https://calcversee.netlify.app/",
  
  },
  {
    name: "Neo Wheels",
    description:
      "An e-vehicle shopping website for browsing, comparing, and booking electric bikes, scooters, and cars.",
   
    github: "https://github.com/Keerthi25098/NEO_Wheels-2.0",
    live: "https://neo-wheels-2-0.vercel.app/",
   
  },
];

export default function ProjectsPage() {
  return (
    <>
    <Navbar />
    <section id="works" className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
          
            <div className="project-info">
              <h3>
                <Link to={project.route} className="project-link">
                  {project.name}
                </Link>
              </h3>
              <p>{project.description}</p>
            </div>
            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn live-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}