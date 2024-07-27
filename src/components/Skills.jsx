import React from "react";
import skills from "../assets/skills.json";

import '../styles/skills.scss'
const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <hr className="animated-hr"/>

      <div className="skill-cards">
        {skills.map((data,index) => {
          return (
            <div className="card" key="index">
              <img src={data.skillImgSrc} alt={data.skillName} />
              <p>{data.skillName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
