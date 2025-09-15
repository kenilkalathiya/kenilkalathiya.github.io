import React, { useState, useEffect } from "react";
import { SiInstagram, SiLinkedin, SiX,SiGithub } from 'react-icons/si';
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🚀 Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  // 🚀 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when link is clicked
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>

      {/* Navigation links (desktop + mobile sliding menu) */}
      <div className={`links ${isOpen ? "active" : ""}`}>
        <ul className="navigation">
          <a href="#home" onClick={handleLinkClick}>
            <li>Home</li>
          </a>
          <a href="#about-me" onClick={handleLinkClick}>
            <li>About Me</li>
          </a>
          <a href="#resume" onClick={handleLinkClick}>
            <li>Resume</li>
          </a>
          <a href="#project" onClick={handleLinkClick}>
            <li>Project</li>
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            <li>Contact Me</li>
          </a>

          <div className="social-media">
        <a href="https://www.instagram.com/kenil_kalathiya_007">
          <SiInstagram />
        </a>
        <a href="https://github.com/kenilkalathiya">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/kenil-kalathiya-9422021b6/">
          <SiLinkedin />
        </a>
        <a href="https://twitter.com/KenilKalathiya1">
          <SiX />
        </a>
      </div>
        </ul>
      
      
      </div>


      {/* Hamburger icon (always on far right) */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
