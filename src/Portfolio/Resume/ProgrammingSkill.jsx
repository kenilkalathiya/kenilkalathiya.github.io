import React from 'react';
import './ProgrammingSkill.css';

const skillData = {
  "Frontend Development": [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Bootstrap", level: 85 },
  ],
  "Backend Development": [
    { name: "Node.js", level: 75 },
    { name: "Python", level: 80 },
    { name: "Django/Flask", level: 75 },
  ],
  "Databases & Tools": [
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
    { name: "GitHub", level: 85 },
    { name: "JSON/JWT", level: 90 },
  ],
};

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
      {Object.entries(skillData).map(([category, skills]) => (
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