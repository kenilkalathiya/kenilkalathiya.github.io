import React from 'react';
import './Timeline.css'; // Use the new stylesheet

export default function Experience() {
  return (
    <div className="timeline-container">
      <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-header">
            <h3 className="timeline-title">Bigscal Technologies Pvt. Ltd. - India</h3>
            <span className="timeline-badge">Oct 2022 - Apr 2023</span>
          </div>
          <p className="timeline-subtitle">Web Developer (Intern)</p>
          <ul className="timeline-details">
            <li>Spearheaded the development of web applications, to demonstrating expertise in both front-end (ReactJs) and back-end (Python) web technologies.</li>
            <li>Implemented new components or functionalities using Flask and ReactJs as per User Requirements.</li>
            <li>Successfully delivered projects within tight deadlines, receiving positive feedback for quality and innovation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}