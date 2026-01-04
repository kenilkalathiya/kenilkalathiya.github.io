import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaGithub } from 'react-icons/fa';
import { resume } from '../../data';
import './ProjectPage.css';

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = resume.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/#projects" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-page-container">
      <div className="project-page-card">

          {/* --- MEDIA SECTION START --- */}
        <div className="project-media-wrapper">
          {/* Case A: Multiple Videos */}
          {project.videoUrls && project.videoUrls.length > 0 ? (
            <div className="video-grid">
              {project.videoUrls.map((video, index) => (
                <div key={index} className="video-item">
                  <video
                    controls
                    className="project-page-video"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          ) 
          
          /* Case B: Single Video */
          : project.videoUrl ? (
            <video
              controls
              className="project-page-video single-video"
              poster={project.imageUrl} // Optional: use image as poster
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) 
          
          /* Case C: Image Fallback */
          : (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-page-image"
            />
          )}
        </div>
        {/* --- MEDIA SECTION END --- */}

        <div className="project-page-details">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-tech-stack-details">
            <strong>Technologies Used:</strong>
            <div className='tech-tag-div'>
              {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
          <div className="project-page-buttons">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub /> View on GitHub
            </a>
            <HashLink to="/#projects" className="back-link">
              Back to Home
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}