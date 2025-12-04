import React, { useState } from "react";
import "./Navbar.css";
import logoColony from "../../assets/images/logo-colony-black-horizontal.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src={logoColony} alt="Logo Colony" />
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Us
          </a>
          <a href="#menu" onClick={() => setIsOpen(false)}>
            Menu
          </a>
          <a href="#venue" onClick={() => setIsOpen(false)}>
            Venue
          </a>
          <a href="#event" onClick={() => setIsOpen(false)}>
            Event
          </a>
          <a
            href="#contact"
            className="contact-btn"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
