import React from 'react';
import './Timeline.css';
import { resume } from '../../data';

export default function Interest() {
  return (
    <div className="timeline-container">
      {resume.interests.map((interest, index) => (
        <div className="timeline-entry" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">{interest.title}</h3>
            <ul className="timeline-details">
              {interest.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}