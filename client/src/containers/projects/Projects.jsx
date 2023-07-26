import React from "react";
import "./Projects.css";

import Project from "../../components/project/Project";

// photos
import project1 from "../../assets/project.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Projects = () => {
  return (
    <section id="Projects" className="section projects">
      <div className="projects-container-title">
        <h1 className="projects__title">PROJECTS</h1>
        <span className="special-underlining"></span>
      </div>
      <ul className="projects-list">
        <Project
          projectTitle="Ryanair"
          projectTechnologies={["React", "Node JS", "MongoDB"]}
          projectDescription=" Web application che riporta alcune funzionalità del sito ufficiale Ryanair.Ricerca dei voli, prenotazione dei voli, creazione di un'account e molto altro..."
          projectLinkLive="https://ryanair-portfolio.netlify.app/"
          projectLinkRepo="https://github.com/filippo-roc/ryanair-client"
          projectLinkRepoServer="https://github.com/filippo-roc/ryanair-client"
          projectPhoto={project1}
        />
        <Project
          projectTitle="Portfolio"
          projectTechnologies={["Html", "Css", "Javascript"]}
          projectDescription="Nel mio sito web personale ho voluto mantenere un design semplice e funzionale."
          projectLinkLive="/index.html"
          projectLinkRepo="https://github.com/filippo-roc/portfolio-react"
          projectPhoto={project2}
          projectIdImg = {"portfolio-img"}
        />
          <Project
          projectTitle="GPT3"
          projectTechnologies={["React"]}
          projectDescription="Sito web ispirato a chatGTP3, realizzato con react per
          riutilizzare il più possibile tutti i componenti. Il sito è
          completamente responsive.."
          projectLinkLive="https://chatgpt3filrocc.netlify.app/"
          projectLinkRepo="https://github.com/filippo-roc/gpt3"
          projectPhoto={project3}
        />
          <Project
          projectTitle="Sociopedia"
          projectTechnologies={["React", "Node JS", "MongoDB"]}
          projectDescription="Applicazione create utilizzando lo stack MERN, replica alcune funzionalità di un social network."
          projectLinkLive="https://sociopediaportfolio.netlify.app/"
          projectLinkRepo="https://github.com/filippo-roc/sociopedia"
          projectLinkRepoServer="https://github.com/filippo-roc/sociopedia-server"
          projectPhoto={project4}
        />
      </ul>
    </section>
  );
};

export default Projects;
