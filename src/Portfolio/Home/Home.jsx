import React from "react";
import { SiInstagram, SiLinkedin, SiX, SiGithub } from "react-icons/si";
// import { TypeAnimation } from 'react-type-animation';
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="main-profile" id="home">
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-detail">
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

              <span className="profile-name">
                Hi, My Name is <br />
                <span className="name">Kenil Kalathiya</span>
              </span>

              <p className="profile-role">
                I AM <span>Full Stack Developer</span>
              </p>

              <span className="profile-role-tagline">
                Full-Stack Innovator with a Front-End Focus and a Passion for
                Problem Solving
              </span>
              <div className="profile-button">
                <button className="hire-me button">Hire Me</button>
                <a href="/Kenil-Kalathiya.pdf" download="Kenil-Kalathiya.pdf">
                  <button className="resume button">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-img">
            <div className="picture-background"></div>
            <div className="stats">
              <div className="stat-card">
                <h2>1+</h2>
                <p>
                  Years of <br /> Experience
                </p>
              </div>
              <div className="stat-card">
                <h2>15+</h2>
                <p>
                  Completed <br /> Projects
                </p>
              </div>
            </div>
          </div>

          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
        </div>

        <div className="custom-shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        
      </div>
    </>
  );
}
