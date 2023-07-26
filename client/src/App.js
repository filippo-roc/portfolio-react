import React, { useState } from "react";
import "./App.css";
import Header from "./containers/header/Header";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Links from "./containers/links/Links";
import Projects from "./containers/projects/Projects";
import Footer from "./containers/footer/Footer";
import Skills from "./containers/skills/Skills";

function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(true);

  const changeMode = function () {
    if (darkModeIsOn) {
      document.documentElement.style.setProperty("--primary-color", "#121212");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#f5f5f7e9"
      );
      document.documentElement.style.setProperty("--tertiary-color", "#aeaeb4");
      document.documentElement.style.setProperty("--special-color", "#bb86fc");
      document.documentElement.style.setProperty(
        "--alternative-color",
        "#bb86fc"
      );
      return
    }
    document.documentElement.style.setProperty("--primary-color", "#f5f5f7e9");
    document.documentElement.style.setProperty("--secondary-color", "#121212");
    document.documentElement.style.setProperty("--tertiary-color", "#6e6e73");
    document.documentElement.style.setProperty("--special-color", "#bb86fc");
    document.documentElement.style.setProperty(
      "--alternative-color",
      "#000000cc"
    );
  };

  changeMode();

  return (
    <React.Fragment>
      <ion-icon onClick={()=> setDarkModeIsOn(!darkModeIsOn)} size="large" id="mode" name="contrast-outline"></ion-icon>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Links />
      <Footer />
    </React.Fragment>
  );
}

export default App;
