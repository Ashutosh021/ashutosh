import React from "react";
import { FiPhone, FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import '../styles/contact.scss'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="top">
        <hr />
        <h1>Contact Me</h1>
        <hr />
      </div>
      <div className="contact-cards">
        <a className="card" href="tel:+916398529296">
          <FiPhone className="icon"/>
          <p>6398529296</p>
        </a>
        <a className="card" href="mailto:mail.ashutosh246@gmail.com?subject=From%20Portfolio&body=Hello%20there!">
          <FiMail  className="icon"/>
          <p>mail.ashutosh246@gmail.com</p>
        </a>
        <a className="card" href="https://www.linkedin.com/in/ashutosh-037463220">
          <FiLinkedin  className="icon"/>
          <p>Ashutosh</p>
        </a>
        <a className="card" href="https://github.com/Ashutosh021">
          <FiGithub  className="icon"/>
          <p>Ashutosh021</p>
        </a>
      </div>
      <div className="bottom">
        <hr />
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
        <hr />
      </div>
    </div>
  );
};

export default Contact;
