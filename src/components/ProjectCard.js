import React from 'react';
import './components.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-body">
        <h4>{project.title}</h4>
        <p className="project-desc">{project.description}</p>
        <p className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>
          )}
          {project.source && (
            <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
          )}
        </p>
      </div>
    </article>
  );
}
