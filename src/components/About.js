import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div style={{ height: "60px", marginTop: "-60px" }}></div>

      <div className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with a strong foundation in React.js and modern frontend technologies. I enjoy building responsive, user-friendly, and interactive web applications that provide a seamless user experience. My skills include HTML, CSS, JavaScript, React, and basic backend integration using Node.js and Firebase.
        </p>
        <p>
          Apart from coding, I love solving complex problems and optimizing applications for performance. I am constantly learning new frameworks, tools, and best practices to stay updated in this fast-evolving field. My goal is to create efficient, maintainable, and scalable solutions while delivering high-quality work.
        </p>
        <p>
          I am a proactive team player who believes in collaboration, clear communication, and continuous improvement. Whether working individually or as part of a team, I aim to contribute positively and make an impact through my projects.
        </p>
      </div>
    </section>
  );
}

export default About;
