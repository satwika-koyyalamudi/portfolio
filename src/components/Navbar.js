import React from "react";
import Scrollspy from "react-scrollspy";
import "./Navbar.css";

function Navbar() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -60; // navbar height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MyPortfolio</h1>

        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="active"
          className="nav-links"
          offset={-60} // matches navbar height
        >
          <li>
            <a href="#home" onClick={(e) => handleClick(e, "home")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact</a>
          </li>
        </Scrollspy>
      </div>
    </nav>
  );
}

export default Navbar;
