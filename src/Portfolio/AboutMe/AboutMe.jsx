import React from "react";
import "./AboutMe.css";
import profile from "../../Assets/Home/profile-pic.jpg";

export default function AboutMe() {
  return (
    <>
    <div className="title-main" id='about-me'>
      <div className="title1 title" >
        <h1>About Me</h1>
        <p>Why Choose Me?</p>
      </div>
      <div className="about-me">
        <div className="extra">
          <div className="photo">
            <img src={profile} alt="Profile" />
          </div>
          <div className="detail">
            <p>
              I describe my self as competent and positive person who wants to
              have long and successful carrier in these field.
            </p>
            <br />

            <div className="list">
              <h3>Few Highlight Abou Me:</h3>
              <ul>
                <li> Web Developer with good knowledge</li>
                <li> Front end developer as per design</li>
                <li> HTML, CSS, JavaScript, ReactJs</li>
                <li> API Integration</li>
                <li> Managing Database</li>
                <li> Emdedded System</li>
              </ul>
            </div>
            <div className="profile-buttons">
              <button className="hire-me-btn buttons">Hire Me</button>
              <a href="Kenil Kalathiya.pdf" download="Kenil Kalathiya.pdf">
                <button className="resume-btn buttons">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
