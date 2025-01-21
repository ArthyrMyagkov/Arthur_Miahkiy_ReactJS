import AboutMe from "./aboutme.jsx";
import SoftSkills from "./softskills.jsx";
import HardSkills from "./hardskills.jsx";
import Education from "./education.jsx";
import WorkExperience from "./workexp.jsx";
import Contact from "./contact.jsx";
import React, { useState } from "react";

function Navigation() {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState("AboutMe");

  return (
    <>
      <nav className="Navigation-bar">
        <button className="Nav-Button" onClick={() => setActiveSection("AboutMe")}
        >
          <i className="fa-solid fa-user"></i> About me
        </button>
        <button
          className="Nav-Button"
          onClick={() => setActiveSection("SoftSkills")}
        >
          <i className="fa-solid fa-feather"></i> My soft skills
        </button>
        <button
          className="Nav-Button"
          onClick={() => setActiveSection("HardSkills")}
        >
          <i className="fa-solid fa-hammer"></i> My hard skills
        </button>
        <button
          className="Nav-Button"
          onClick={() => setActiveSection("Education")}
        >
          <i className="fa-solid fa-graduation-cap"></i> Education
        </button>
        <button
          className="Nav-Button"
          onClick={() => setActiveSection("WorkExperience")}
        >
          <i className="fa-solid fa-gear"></i> Work Experience
        </button>
        <button
          className="Nav-Button"
          onClick={() => setActiveSection("Contacts")}
        >
          <i className="fa-solid fa-address-book"></i> Contacts
        </button>
      </nav>

      <div className="Displayable-section">
        {activeSection === "AboutMe" && <AboutMe />}
        {activeSection === "SoftSkills" && <SoftSkills />}
        {activeSection === "HardSkills" && <HardSkills />}
        {activeSection === "Education" && <Education />}
        {activeSection === "WorkExperience" && <WorkExperience />}
        {activeSection === "Contacts" && <Contact />}
      </div>
    </>
  );
}

export default Navigation;
