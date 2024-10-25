import React from "react";
import "./ProgrammingSkill.css";

const skills = [
  { name: "C/C++", level: 75 },
  { name: "Python", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Bootstrap", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "React.js", level: 85 },
  { name: "Machine Learning", level: 75 },
  { name: "Mongo Db", level: 75 },
  { name: "Django/Flask", level: 75 },
  { name: "SQL", level: 70 },
  { name: "JSON/ JWT Token", level: 90 },
  { name: "GitHub", level: 85 },
];

const SkillBar = ({ name, level }) => (
  <div className="skill">
    <div className="skills">
      <span className="skill-name">
        <span className="dot"></span>
        {name}
      </span>
    </div>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function ProgrammingSkill() {
  const leftSkills = skills.slice(0, skills.length / 2);
  const rightSkills = skills.slice(skills.length / 2);

  return (
    <>
      <div className="skills-container">
        <div className="skills-column">
          {leftSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div className="skills-column">
          {rightSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </>
  );
}
