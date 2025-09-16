import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'Health Scal - Health Care Application',
    description: 'Developed a user-friendly application to predict various diseases based on patient medical reports, utilizing machine learning models for accurate decision-making.',
    tech: ['React.js', 'Flask', 'Machine Learning'],
    github: 'https://github.com/kenilkalathiya/Health-Scal',
  },
  {
    title: 'Movie/Series Information System',
    description: 'Created a comprehensive information system for movies and series, allowing users to track watched content and discover new titles through a responsive interface built with the MERN stack.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/kenilkalathiya/GMTV_Project',
  },
  {
    title: 'Spam Predictor',
    description: 'Designed a web application for real-time content analysis to detect spam emails and identify fake news, leveraging a machine learning backend.',
    tech: ['HTML/CSS', 'JavaScript', 'ML'],
    github: 'https://github.com/kenilkalathiya/Spam-Prediction-Using-Machine-Learning-Model',
  },
  // Add this new object for the GitHub link card
  {
    isGithubLink: true,
    github: 'https://github.com/kenilkalathiya/',
  }
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

// New component for the special GitHub card
const MoreProjectsCard = ({ github }) => (
  <a href={github} target="_blank" rel="noopener noreferrer" className="more-projects-card">
    <h3>Check out more projects on my GitHub profile!</h3>
    <FaArrowRight className="arrow-icon" />
  </a>
);

export default function Projects() {
  return (
    <div className="projects-section section-container" id="projects" style={{ '--bg-text': '"Projects"' }}>
      <div className="title">
        <h1>PROJECTS</h1>
        <p>A selection of my recent work</p>
      </div>
      <div className="projects-grid">
        {projectsData.map(project => (
          project.isGithubLink
            ? <MoreProjectsCard key="more-projects" {...project} />
            : <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}