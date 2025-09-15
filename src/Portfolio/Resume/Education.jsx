import React from 'react';
import './Timeline.css'; // Use the new stylesheet

export default function Education() {
  return (
    <div className="timeline-container">
      <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-header">
            <h3 className="timeline-title">Technical University of Chemnitz, Germany</h3>
            <span className="timeline-badge">Apr 2024 - Present</span>
          </div>
          <p className="timeline-subtitle">Master of Science, Automotive Software Engineering</p>
          <ul className="timeline-details">
            <li>Automotive Software Engineering (AUTOSAR)</li>
            <li>Design of Software for Embedded System, Media Encoding</li>
            <li>Formal Specification and Verification</li>
            <li>Security of Distributed System</li>
          </ul>
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-header">
            <h3 className="timeline-title">Gujarat Technological University, India</h3>
            <span className="timeline-badge">Jun 2019 - Jul 2023</span>
          </div>
          <p className="timeline-subtitle">Bachelor of Technology, Information Technology</p>
          <ul className="timeline-details">
            <li>Object Oriented Programming With C, Java, Python</li>
            <li>Web Designing, Software Engineering development</li>
            <li>Networking and Security of system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}