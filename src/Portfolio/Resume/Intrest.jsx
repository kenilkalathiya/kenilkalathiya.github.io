import React from 'react';
import './Timeline.css'; // Use the new stylesheet

export default function Intrest() {
  return (
    <div className="timeline-container">
      <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3 className="timeline-title">Music</h3>
          <ul className="timeline-details">
            <li>Listening to a diverse range of music is my go-to for relaxation and focus.</li>
          </ul>
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3 className="timeline-title">Travelling</h3>
          <ul className="timeline-details">
            <li>I'm passionate about exploring new places, as each journey adds a new perspective and story to my life.</li>
          </ul>
        </div>
      </div>

       <div className="timeline-entry">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3 className="timeline-title">Gaming</h3>
          <ul className="timeline-details">
            <li>I enjoy challenging my reflexes and strategic thinking in competitive online games.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}