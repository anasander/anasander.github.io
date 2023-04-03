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
      background: "#000",
    },
    {
      title: "Cats",
      date: "01/01/2001",
      img: images.dogsSquare,
      misc: ["HTML", "CSS", "JavaScript", "React"],
      background: "#fff",
    },
    {
      title: "LOL",
      date: "01/01/2001",
      img: images.dogsSquare,
      misc: ["HTML", "CSS", "JavaScript", "React"],
      background: "#e13",
    },
  ];

  return (
    <section className={styles.projetoTopo}>
      <h2 className={`titulo container ${styles.tituloProjetos}`}>Projetos</h2>
      <div className={styles.projectsBg}>
        <div className="container">
          <div className={styles.projects}>
            {ProjectsList.map((project, index) => (
              <Project key={index} index={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
