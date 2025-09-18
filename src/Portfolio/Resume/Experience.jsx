import React from 'react';
import './Timeline.css'; 
import { resume } from '../../data';

export default function Experience() {
  return (
    <div className="timeline-container">
      {resume.experience.map((exp, index) => (
        <div className="timeline-entry" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">{exp.company}</h3>
              <span className="timeline-badge">{exp.duration}</span>
            </div>
            <p className="timeline-subtitle">{exp.role}</p>
            <ul className="timeline-details">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}