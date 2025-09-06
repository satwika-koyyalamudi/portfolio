import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div style={{ height: "60px", marginTop: "-60px" }}></div>

      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">

          <div className="card">
            <h3>Event Planner</h3>
            <p>
              A web application that helps users plan events by suggesting venues and vendors. Built with React.js and modern frontend technologies.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/satwika-koyyalamudi/event-planner"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
              <a
                href="https://eventplanner-demo.netlify.app" // replace with your live link
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Learning App</h3>
            <p>
              An Android app designed to help users learn a new language easily using Android Studio and Firebase.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/SaiSaranyabevara/LL_App"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
              <a
                href="https://learningapp-demo.web.app" // replace with your live link
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Portfolio</h3>
            <p>
              My personal portfolio website showcasing my skills, projects, and contact information. Built with React.js and modern web technologies.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/satwika-koyyalamudi/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
              <a
                href="https://bright-babka-c4221b.netlify.app/#projects" // replace with your actual Netlify link
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
