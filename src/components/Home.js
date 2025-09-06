import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div style={{ height: "60px", marginTop: "-60px" }}></div>

      <div className="home">
        <div className="home-content">
          <h1>Hi, I'm Satwika</h1>
          <h2>
            <ReactTyped
              strings={["Web Developer", "Problem Solver", "Tech Enthusiast"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </h2>
          <p>
            Welcome to my portfolio. I build responsive and interactive web applications using modern frontend technologies.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1zgzXJL50vJlAHct14aXW_Ai3EaPaVsHJ/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
