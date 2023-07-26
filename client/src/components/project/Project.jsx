import React from "react";

const Project = (props) => {
    const {projectTitle} = props;

    // must be an array
    const {projectTechnologies} = props;

    const {projectDescription} = props;

    const {projectLinkLive} = props;
    const {projectLinkRepo} = props;
    const {projectLinkRepoServer} = props;

    //photo
    const {projectPhoto} = props;

    const {projectIdImg} = props;

    return(
        <li className="project">
            
          <div className="project__img-container">
            <img className="project__img" id ={projectIdImg} src={projectPhoto} alt="" />
          </div>
  
          <div className="project__description">
            <h3 className="project__description__title">{projectTitle}</h3>
            
              <h4 className="project__description__technologies-title">Principali tecnologie utilizzate :  </h4>
              <ul className="project__description__technologies">
                {projectTechnologies.map((technologie) => 
                <li className="project__description__technologies__item"> {technologie}</li>
                 )}
              </ul>
  
            <p className="project__description__paragraph">
              {projectDescription}
            </p>
            <div className="project-link-container">
              <a href={projectLinkLive} className="project-link" target="_blank" rel="noreferrer">Live</a>
              <a href={projectLinkRepo} className="project-link" target="_blank" rel="noreferrer">Repo</a>
              {projectLinkRepoServer && 
              <a href={projectLinkRepoServer} className="project-link project-link--server" target="_blank" rel="noreferrer">Repo Server</a>}
            </div>
          </div>
        </li>
    )
}

export default Project