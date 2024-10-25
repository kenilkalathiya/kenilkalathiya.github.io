import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div class="timeline">
        <div className="main-timeline">

        <div class="timeline-item">
          <div class="dot"></div>
          <div class="content">
            <h3>Technical University Of Chemnitz, Chemnitz, Germany</h3>
            <p>Master of Science, Automotive Software Engineering </p>
          </div>
          <div class="year-box">2024-Present</div>
        </div>
        <ul className="subject">
          <li>Automotive Software Engineering (AUTOSAR)</li>
          <li>Design of Software for Embedded System, Media Encoding</li>
          <li>Formal Specification and Verification</li>
        </ul>
        </div>


        <div className="main-timeline">

        <div class="timeline-item">
          <div class="dot"></div>
          <div class="content">
            <h3>Gujarat Technological University</h3>
            <p>Bachelor of Engineering, Information Technology </p>
          </div>
          <div class="year-box">2019-2023</div>
        </div>
        <ul className="subject">
          <li>Object Oriented Programming With C, Java, Python</li>
          <li>Web Designing, Software Engineering development</li>
          <li>Networking and Security of system</li>
        </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
