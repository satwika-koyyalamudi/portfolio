import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Each section has a 60px offset for fixed navbar */}
        <div id="home" style={{ paddingTop: "60px", marginTop: "-60px" }}>
          <Home />
        </div>

        <div id="about" style={{ paddingTop: "60px", marginTop: "-60px" }}>
          <About />
        </div>

        <div id="projects" style={{ paddingTop: "60px", marginTop: "-60px" }}>
          <Projects />
        </div>

        <div id="contact" style={{ paddingTop: "60px", marginTop: "-60px" }}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
