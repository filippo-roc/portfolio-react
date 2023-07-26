import React from "react";
import "./Links.css"
const Links = () => {
  return (
    <section id="Links" className="section links">
      <div className="links-container-title">
        <h1 className="links__title">LINKS</h1>
        <span className="special-underlining"></span>
      </div>
      <ul className="links-list">
        <li className="links-list__item">
          <span>GitHub: </span>
          <a target="_blank" rel = "noreferrer"  href="https://github.com/filippo-roc">
            clicca qui
          </a>
        </li>
        <li className="links-list__item">
          <span>Linkedin: </span>
          <a
            target="_blank" rel = "noreferrer"
            href="https://www.linkedin.com/in/filippo-roccamatisi-a26baa205/"
          >
            clicca qui
          </a>
        </li>
        <li className="links-list__item">
          <span>HacherRank: </span>
          <a
            target="_blank" rel = "noreferrer"
            href="https://www.hackerrank.com/filippo_roccama1?hr_r=1"
          >
            clicca qui
          </a>
        </li>
        <li className="links-list__item">
          <span>LeetCode: </span>
          <a target="_blank" rel = "noreferrer" href="https://leetcode.com/Roccas03/">
            clicca qui
          </a>
        </li>
        <li className="links-list__item">
          <span>codeWars: </span>
          <a
            target="_blank" rel = "noreferrer"
            href="https://www.codewars.com/users/FilippoRoccamatisi"
          >
            clicca qui
          </a>
        </li>
        <li className="links-list__item">
          <span>FastFingers: </span>
          <a target="_blank" rel = "noreferrer" href="https://10fastfingers.com/user/2714551/">
            clicca qui
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;