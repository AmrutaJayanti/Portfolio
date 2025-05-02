import React from 'react';
import Navbar from '../components/Navbar';
import './../styles/Projects.css';

const projects = [
  {
    title: "Portfolio",
    description: "My Portfolio website to showcase my projects, achievements",
    stack: ['React.js'],
    github: "https://github.com/AmrutaJayanti/Portfolio"
  },
  {
    title: "Periodic Table",
    description: "Project to create a replica of Periodic Table",
    stack: ['HTML', 'CSS', 'Javascript'],
    github: "https://github.com/AmrutaJayanti/Mini-projects/tree/mini-projects/Interactive-Periodic-Table"
  },
  {
    title: "Animated Tea Cup",
    description: "Project to learn CSS animations",
    stack: ['HTML', 'CSS', 'Javascript'],
    github: "https://github.com/AmrutaJayanti/Mini-projects/tree/mini-projects/Animated%20Tea%20Cup"
  },
  {
    title: 'Blood Alcohol Content Calculator',
    description: 'Project as a part of open source contribution GSSoC\'24',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: "https://github.com/AmrutaJayanti/Mini-projects/tree/mini-projects/Blood%20Alcohol%20Content"
  },
  {
    title: 'PhotoResizer Web Extension',
    description: 'Project as a part of open source contribution GSSoC\'24',
    stack: ['HTML', 'CSS', 'Javascript'],
    github: "https://github.com/AmrutaJayanti/Mini-projects/tree/mini-projects/Photo%20Resizer"
  }
];

function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.stack.map((tech, i) => (
                  <span className="tech-badge" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <svg
                    className="github-icon"
                    fill="#433e3a"
                    height="24"
                    viewBox="0 0 16 16"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29
                    6.53 5.47 7.59.4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                    -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
                    2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                    0 0 .67-.21 2.2.82a7.65 7.65 0 012.01-.27c.68 0
                    1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16
                    1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87
                    3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                    1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016
                    8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
