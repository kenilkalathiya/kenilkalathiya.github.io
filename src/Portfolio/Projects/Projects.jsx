import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaArrowRight } from 'react-icons/fa';
import './Projects.css';
import { resume } from '../../data';

// Add a "View Project" button and wrap the whole card in a Link
const ProjectCard = ({ id, title, description, tech }) => (
  <Link to={`/project/${id}`} className="project-card-link">
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tech-stack">
        {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="view-project-button">
        View Project <FaArrowRight />
      </div>
    </div>
  </Link>
);

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
        {resume.projects.map(project => (
          project.isGithubLink
            ? <MoreProjectsCard key="more-projects" {...project} />
            : <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}