import React from 'react';
import './ProgrammingSkill.css';
import { resume } from '../../data';

const SkillBar = ({ name, level }) => (
  <div className="skill-bar-item">
    <div className="skill-info">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}%</span>
    </div>
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${level}%` }} />
    </div>
  </div>
);

export default function ProgrammingSkill() {
  return (
    <div className="categorized-skills-container">
      {Object.entries(resume.skills).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-wrapper">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}