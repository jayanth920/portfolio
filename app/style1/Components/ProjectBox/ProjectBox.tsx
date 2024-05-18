"use client"
import React, { useState } from "react";
import "./ProjectBox.css";
import ProjectMock from "../ProjectMock/ProjectMock";

function ProjectBox() {
  const placeholderImage = "/content/assets/myPics/placeholderkid.jpg";
  const projectsToShowInitially = 4;
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleToggleShow = () => {
    setShowAllProjects((prev) => !prev);
  };

  const allProjects:any = showAllProjects
    ? ProjectMock
    : ProjectMock.slice(0, projectsToShowInitially);

  // Determine if there's an odd number of projects
  const isOddNumberOfProjects = allProjects.length % 2 !== 0;

  // Add placeholder projects for the extra box in the last row
  const extraProjectsCount = isOddNumberOfProjects ? 1 : 0;
  const extraProjects = Array.from(
    { length: extraProjectsCount },
    (_, index) => ({
      id: `placeholder-${index + 1}`,
      placeholder: true,
    })
  );

  const projectsToDisplay = allProjects.concat(extraProjects);

  const handleClick = (link:any) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="project_wrap">
      {projectsToDisplay.map((project:any, index:any) => (
        <div
          className={`project${project.placeholder ? "_placeholder" : ""}`}
          key={project.id || index}
        >
          {project.placeholder ? (
            <div className="placeholder-image">
              <img
                className="placeimg"
                src={placeholderImage.toString()}
                alt="placeholder"
              />
            </div>
          ) : (
            <>
              <img
                className="project_pic"
                src={project.imageUrl}
                alt={project.name}
              />
              <div className="project_info">
                <div className="name-buttons">
                  <h2>{project.name}</h2>
                  <div className="url-buttons">
                    <button className="codeButton" onClick={() => handleClick(project.codeUrl)}>CODE</button>
                    <button className="liveButton" onClick={() => handleClick(project.liveUrl)}>LIVE</button>
                  </div>
                </div>
                <p>Technologies: {project.technologies.join(", ")}</p>
                <div className="space"></div>
                <p>Description: {project.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
      <button className="show_btn" onClick={handleToggleShow}>
        {showAllProjects ? "Show Less" : "Show More"}
      </button>
      <div id="more">
        The list gets updated regularly with new projects. Check back again
        soon!
      </div>
    </div>
  );
}

export default ProjectBox;
