import React from "react";
import "./cntact.css";
import Navbar from "../components/Navbar";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been sent successfully.");
    e.target.reset();
  };

  return (
    <>
      <Navbar />

      <div className="contact-page page-content">
        <section className="contact">
          <h1>Get In Touch</h1>
          <p className="subtitle">
            Let’s connect and discuss opportunities or collaborations
          </p>

          <div className="contact-container">

            <div className="contact-info">
              <h2>Contact Information</h2>

              <p>
                If you have a job opportunity, project idea, or professional
                inquiry, feel free to reach out.
              </p>

              <ul>
                <li><strong>Email:</strong> keerthikeerthi32155@example.com</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/keerthika25</li>
                <li><strong>GitHub:</strong> github.com/Keerthi25098</li>
              </ul>

              <p className="availability">
                Currently open to internships and frontend developer roles.
              </p>
            </div>

            <div className="contact-form">
              <h2>Send a Message</h2>

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
