import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Modal from "../../components/modal/Modal";

export default function StartupProject() {
  const [showModal, setShowModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    let win = window.open(url, "_blank");
    win.focus();
  }

  function openModal(project){
    setShowModal(true);
    setProjectInfo(project);
  }

  function closeModal(){
    setShowModal(false);
    setProjectInfo({});
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.tags?(
                        <div className="project-card-tag">
                          {project.tags.map((item, i) => {
                            return (
                                <span
                                    key={i}
                                    className={
                                      isDark ? "dark-mode project-tech-tag" : "project-tech-tag"
                                    }
                                >
                              {item}
                            </span>
                            );
                          })}
                        </div>
                    ):null}
                    {project.detail?(
                    <div
                        className={
                          isDark ? "dark-mode card-detail" : "card-detail"
                        }
                        onClick={()=>openModal(project)}
                    >
                      👉 read more
                    </div>
                    ):null}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <transition name="modal">
        {showModal&&<Modal project={projectInfo} closeModal={closeModal}/> }
      </transition>
    </Fade>
  );
}
