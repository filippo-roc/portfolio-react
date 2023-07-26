import React from "react";
import "./Skills.css"
const Skills = () => {
  return (
    <section id="Skills" className="section skills">
      <div className="skills__item skills-title-container">
        <h1 className="skills__item__title">SKILLS</h1>
        <span className="special-underlining"></span>
      </div>
      <div className="skills__item">
        <ul className="skills-list">
          <li className="skills-list__item">
            <i className="dev-icon devicon-html5-plain colored"></i>
            <span>HTML</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-css3-plain colored"></i>
            <span>CSS</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-javascript-plain colored"></i>
            <span>Javascript</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-nodejs-plain colored"></i>
            <span>NodeJS</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-express-original colored"></i>
            <span>Express</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-mongodb-plain colored"></i>
            <span>mongoDB</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-react-original colored"></i>
            <span>React</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-cplusplus-plain colored"></i>
            <span>C++</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-java-plain colored"></i>
            <span>Java</span>
          </li>

          <li className="skills-list__item">
            <i className="dev-icon devicon-git-plain colored"></i>
            <span>GIT</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;