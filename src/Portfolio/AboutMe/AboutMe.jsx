
import React from "react";
import "./AboutMe.css";
import { aboutMe } from "../../data.js";
import { HashLink } from "react-router-hash-link";

export default function AboutMe() {
  return (
    <div
      className="about-section section-container"
      id="about-me"
      style={{ "--bg-text": '"Web Developer"' }}
    >
      <div className="title">
        <h1>{aboutMe.title}</h1>
        <p>
          <span className="highlight">My</span> {aboutMe.subtitle}
        </p>
      </div>

      
      <div className="about-grid">
        {aboutMe.services.map((service, index) => (
          <div className="about-card" key={index}>
            <h4>{service.title}</h4>
            <h2>{service.stack}</h2>
            <p>{service.description}</p>
            <HashLink smooth to="/#contact" className="contact-link">
              Contact me →
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
}
