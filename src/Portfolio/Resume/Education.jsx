import React from 'react';
import './Timeline.css';
import { resume } from '../../data';

export default function Education() {
  return (
    <div className="timeline-container">
      {resume.education.map((edu, index) => (
        <div className="timeline-entry" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">{edu.university}</h3>
              <span className="timeline-badge">{edu.duration}</span>
            </div>
            <p className="timeline-subtitle">{edu.degree}</p>
            <ul className="timeline-details">
              {edu.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}