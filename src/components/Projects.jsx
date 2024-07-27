import React from "react";
import projectData from "../assets/projects.json";
import { Link } from "react-router-dom";

import '../styles/projects.scss'

const Projects = () => {
  return (
    <div className="project-container">
      <h2>Projects</h2>
      <hr className="animated-hr"/>

      <div className="project-cards">
        {projectData.map((data) => {
          return (
            <div className="card">
              <img src={data.projectImgSrc} alt={data.projectTitle} />
              <div className="card-info">
                <h4>{data.projectTitle}</h4>
                <p>{data.projectDesc}</p>
                <p>Technology Used : {data.skillsUsed}</p>
                <Link to={data.link} className="link">Checkout</Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={'/projects'} className="see-more-btn"> See More </Link>
    </div>
  );
};

export default Projects;
