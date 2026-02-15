import React from "react";
import "./about.css";
import profile from "../assets/profile.jpg";
import Navbar from "../components/Navbar";
import Ecommerce from "./Ecommerce";

function About() {
  return (
    <>
    <Navbar/>
    <div className="about-page">

      {/* TITLE */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>A quick introduction about who I am and what I do</p>
      </section>


      {/* ABOUT CONTENT */}
      <section className="about-container">

        <div className="about-image">
          <img src={profile} alt="Keerthika" />
        </div>

        <div className="about-content">

          <h2>I Create Products Not Just Interfaces.</h2>

          <p>
            I am Keerthika K T, a React.js Frontend Developer passionate about
            building clean and responsive web applications. I enjoy designing
            modern user interfaces and turning ideas into real working products.
          </p>

          <p>
            My focus is on creating simple, fast and user-friendly experiences.
            I pay attention to layout, usability and performance to ensure that
            every application feels smooth and professional.
          </p>

          <p>
            I continuously learn new technologies and improve my development
            skills to grow as a professional developer and contribute to
            meaningful projects.
          </p>

        </div>

      </section>

    </div>
    <Ecommerce/>
    
    </>
  );
}

export default About;
