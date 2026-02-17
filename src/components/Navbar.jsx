import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <img src={Logo} alt="logo" className="logo-img" />
        <span className="logo-text">OWLORO</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <a href="/#services">Skills</a>
        <a href="/#works">Projects</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="hire-btn">
        Hire Me
      </Link>
    </header>
  );
}

export default Navbar;
