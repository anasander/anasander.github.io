import React from "react";
import styles from "./Projects.module.css";
import * as images from "../Images/Images";
import Project from "./Project";

const Projects = () => {
  const ProjectsList = [
    {
      title: "Dogs",
      date: "01/01/2001",
      img: images.dogsSquare,
      misc: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Dogs",
      date: "01/01/2001",
      img: images.dogsSquare,
      misc: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Dogs",
      date: "01/01/2001",
      img: images.dogsSquare,
      misc: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <div className={styles.projects}>
      <h2>Essa é a sessão com todos os projetos.</h2>
      {ProjectsList.map((project, index) => (
        <Project key={index} index={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
