import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuHandler = function (e) {
    e.preventDefault();
    if (
      e.target.className.includes("menu__item__link") ||
      e.target.className.includes("menu__item")
    ) {
      document
        .querySelector(e.target.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul
          className={`menu ${menuIsOpen ? "active" : ""}`}
          onClick={menuHandler}
        >
          <li className="menu__item">
            <a className="menu__item__link" href="#Home">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item__link" href="#About">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item__link" href="#Skills">
              Skills
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item__link" href="#Projects">
              Projects
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item__link" href="#Links">
              Links
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${menuIsOpen ? "active" : ""}`}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </header>
  );
};

export default Header;
