import React from "react";

import '../styles/experience.scss'

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Internships</h2>
      <hr className="animated-hr"/>
      <div className="experience-cards">
      <div className="card">
          <div className="left">
            <p>AUG 2024</p>
          </div>
          <div className="right">
            <h4>Web Development Intern | CodeClause </h4>
            <h6>Remote </h6>
            <ul>
              <li>Engaged in hands-on learning of web technologies and development practices.</li>
              <li>Built clones of popular platforms such as YouTube and Amazon using HTML and CSS, reinforcing front-end
              development skills.</li>
            </ul>
            <a href="https://drive.google.com/file/d/1RE2jmg3r66UhEc9_53jvbJdlZMuYZ2ed/view?usp=drivesdk">Checkout Certificate</a>
          </div>
        </div>
      
      <div className="card">
          <div className="left">
            <p>OCT 2023</p>
          </div>
          <div className="right">
            <h4>Web Development and Designing Intern | Oasis Infobyte</h4>
            <h6>Remote </h6>
            <ul>
              <li>Created a tribute page featuring a prominent figure, utilizing HTML and CSS to design an engaging and visually appealing webpage.</li>
              <li>Designed and implemented a ToDo web application for improved task management using HTML, CSS, and JavaScript.</li>
            </ul>
            <a href="https://drive.google.com/file/d/1PrP-A9eZ1nZKHEMNyoNlEWzJQufF_p7W/view?usp=drivesdk">Checkout Certificate</a>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <p>NOV 2021</p>
          </div>
          <div className="right">
            <h4>DSA Intern | TwoWaits Technologies</h4>
            <h6>Remote</h6>
            <ul>
              <li>Acquired foundational knowledge in data structures, including arrays, stacks, queues, and linked lists.</li>
              <li>Engaged in an intensive learning program focused on DSA topics and solved practical problems to reinforce concepts.</li>
            </ul>
            <a href="https://drive.google.com/file/d/1PjudF3kwQAZnMPYznL6XyRDxxMVXd9sA/view">Checkout Certificate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
