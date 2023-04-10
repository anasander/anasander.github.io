import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project";

const Projects = () => {
  return (
    <section className={styles.projetoTopo}>
      <h2 className={`titulo container ${styles.tituloProjetos}`}>Projetos</h2>
      <div className={styles.projectsBg}>
        <div className="container padding">
          <div className={styles.projects}>
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
