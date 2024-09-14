import React from "react";
import { FiPhone, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificate from "./Certificate";
import Experience from "./Experience";
import Contact from "./Contact";


import "../styles/home.scss"

const Home = () => {
  return (
    <div className="home-parent-container">
      {/* Home */}

      <div className="main-container" id="home">
        <div className="main-text">
          <p>
            I'M <span>Ashutosh</span>
            <br />
            Full Stack Web Developer
          </p>
          <a
            href="https://drive.google.com/file/d/12XQZn6gsvk3ByaWpmiEHVT4-n5-h1Uxh/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <a
            href="mailto:mail.ashutosh246@gmail.com?subject=From%20Portfolio&body=Hello%20there!"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
        <div className="social-icons-container">
          <a href="tel:+916398529296" className="social-icon" aria-label="Phone">
            <FiPhone className="icon"/>
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-037463220"
            target="_blank"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="icon"/>
          </a>
          <a
            href="mailto:mail.ashutosh246@gmail.com?subject=From%20Portfolio&body=Hello%20there!"
            className="social-icon"
            aria-label="Email"
          >
            <FiMail className="icon"/>
          </a>
          <a
            href="https://leetcode.com/u/Ashutosh021/"
            target="_blank"
            className="social-icon"
            aria-label="LeetCode"
          >
            <SiLeetcode className="icon"/>
          </a>
        </div>
      </div>

      {/* About */}

      <div className="about" id="about">
        <About />
      </div>

      {/* Skills */}

      <div className="skills" id="skills">
        <Skills />
      </div>

      {/* Projects */}
      <div className="projects" id="projects">
        <Projects />
      </div>

      {/* Experiences */}
      <div className="experience" id="experience">
        <Experience />
      </div>

      {/* Certificates */}
      <div className="certificate" id="certificate">
        <Certificate />
      </div>

      {/* Contact */}
      <div className="contact" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
