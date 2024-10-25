import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="portfolio">
          <h2>Portfolio</h2>
        </div>
        <div className="links">
          <ul className="navigation">
            <a href="#"><li>Home</li></a>
            <a href="#about-me"><li>About Me</li></a>
            <a href="#resume"><li>Resume</li></a>
            <a href="#"><li>Project</li></a>
            <a href="#"><li>Contact Me</li></a>
          </ul>
        </div>
      </div>
    </>
  );
}
