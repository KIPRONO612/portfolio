import React, { useState } from "react";
import { Tilt } from "react-tilt";
import "./components.css";

// Import your project logos from assets
import project1Logo from "../assets/logo-project1.jpg";
import project2Logo from "../assets/logo-project2.jpg";

const projectData = [
  {
    title: "CLIFF ROYAL NEST LODGE",
    desc: "A hotel and bnb booking website.",
    image: project1Logo,
    github: "#",
    demo: "#",
  },
  {
    title: "KETRACLOCK",
    desc: "A teamwork project for employees' attendance marking.",
    image: project2Logo,
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, idx) => (
          <Tilt
            key={idx}
            className="project-card"
            options={{ max: 15, scale: 1.05, speed: 400 }}
            onClick={() => setSelectedProject(proj)}
          >
            <img className="project-image" src={proj.image} alt={proj.title} />
            <div className="project-body">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal preview */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.desc}</p>
            <div className="project-links">
              <a href={selectedProject.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
            <button className="btn" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
