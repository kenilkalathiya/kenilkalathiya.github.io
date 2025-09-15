import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'Health Scal - Health Care Application',
    description: 'Developed a user-friendly application to predict various diseases based on patient medical reports, utilizing machine learning models for accurate decision-making.',
    tech: ['React.js', 'Flask', 'Machine Learning'],
    github: '#', // TODO: Add GitHub link
  },
  {
    title: 'Movie/Series Information System',
    description: 'Created a comprehensive information system for movies and series, allowing users to track watched content and discover new titles through a responsive interface built with the MERN stack.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: '#', // TODO: Add GitHub link
  },
  {
    title: 'Spam Predictor',
    description: 'Designed a web application for real-time content analysis to detect spam emails and identify fake news, leveraging a machine learning backend.',
    tech: ['HTML/CSS', 'JavaScript', 'ML'],
    github: '#', // TODO: Add GitHub link
  },
];

const ProjectCard = ({ title, description, tech, github }) => (
  <div className="project-card">
    <div className="project-header">
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
      </div>
    </div>
    <p className="project-description">{description}</p>
    <div className="project-tech-stack">
      {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="projects-section section-container" id="projects" style={{ '--bg-text': '"Projects"' }}>
      <div className="title">
        <h1>PROJECTS</h1>
        <p>A selection of my recent work</p>
      </div>
      <div className="projects-grid">
        {projectsData.map(project => <ProjectCard key={project.title} {...project} />)}
      </div>
    </div>
  );
}