import React from "react";
import "./MyJourney.css";
import Navbar from "../components/Navbar";
export default function MyJourney() {
  const journey = [
    {
      year: "2007 - 2022",
      title: "School Education",
      description: "Completed my schooling with a focus on computer and mathematics, developing foundational skills in problem-solving and logical thinking.",
    },
    {
      year: "2022 - 2026",
      title: "Bachelor's Degree",
      description: "Pursuing B.E in Computer Science Engineering at Arunachala College of Engineering. Learned full-stack development, OOP, data structures, and algorithms.",
    },
    {
      year: "2023 - 2025",
      title: "Internships & Training",
      description: "Completed multiple internships in web development, including a 3-month internship at IBacus Tech Solutions in Coimbatore. Gained practical experience in React, Firebase, and UI/UX design.",
    },
    {
      year: "2025",
      title: "Projects & Portfolio",
      description: "Developed multiple projects including Neo Wheels (EV shopping site), CalcVerse (web app), SkyCast (React weather app), and Intern Management System.",
    },
  ];

  return (
    <>
    <Navbar />
    <section className="journey-page">
      <h2>My Journey</h2>
      <div className="timeline">
        {journey.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{item.title}</h3>
              <span className="year">{item.year}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}