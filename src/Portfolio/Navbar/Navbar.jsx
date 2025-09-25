import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link'; // Use HashLink
import { SiInstagram, SiLinkedin, SiX, SiGithub } from "react-icons/si";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🚀 Disable scroll when menu is open
  // This is the new, improved hook
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (isOpen) {
      htmlElement.classList.add("no-scroll");
      bodyElement.classList.add("no-scroll");
    } else {
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
    }

    // Cleanup function to be safe
    return () => {
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
    };
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
      <div className="logo">
        <span className="logo-mr">Mr.</span>
        <span className="logo-name">Kenil</span>
      </div>

      {/* Navigation links (desktop + mobile sliding menu) */}
      <div className={`links ${isOpen ? "active" : ""}`}>
        <ul className="navigation">
          <li><HashLink smooth to="/#home" onClick={handleLinkClick}>Home</HashLink></li>
          <li><HashLink smooth to="/#about-me" onClick={handleLinkClick}>About Me</HashLink></li>
          <li><HashLink smooth to="/#resume" onClick={handleLinkClick}>Resume</HashLink></li>
          <li><HashLink smooth to="/#projects" onClick={handleLinkClick}>Projects</HashLink></li>
          <li><HashLink smooth to="/#contact-me" onClick={handleLinkClick}>Contact Me</HashLink></li>

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
