
import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div
      className="about-section section-container"
      id="about-me"
      style={{ "--bg-text": '"Web Developer"' }}
    >
      <div className="title">
        <h1>WHAT I DO</h1>
        <p>
          <span className="highlight">My</span> Services
        </p>
      </div>

      <div className="about-grid">
        {/* Full Stack */}
        <div className="about-card">
          <h4>FULL STACK DEVELOPMENT</h4>
          <h2>MERN / MEAN Stack</h2>
          <p>
            I create seamless, end-to-end web applications by combining
            front-end flair with back-end robustness. From crafting dynamic user
            interfaces to managing databases and servers, I bring your digital
            vision to life.
          </p>
          <a href="#contact" className="contact-link">
            Contact me →
          </a>
        </div>

        {/* Frontend */}
        <div className="about-card">
          <h4>FRONTEND DEVELOPMENT</h4>
          <h2>React / Angular</h2>
          <p>
            I design engaging, user-friendly interfaces that enhance user
            experience through interactive and responsive designs. By utilizing
            the latest technologies and best practices, I bring your ideas to
            the screen with creativity and precision.
          </p>
          <a href="#contact" className="contact-link">
            Contact me →
          </a>
        </div>

        {/* Backend */}
        <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions. From
            managing databases to implementing APIs, I create the backbone that
            supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">
            Contact me →
          </a>
        </div>

        {/* <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions.
            From managing databases to implementing APIs, I create the
            backbone that supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>

        <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions.
            From managing databases to implementing APIs, I create the
            backbone that supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div> */}
      </div>
    </div>
  );
}
