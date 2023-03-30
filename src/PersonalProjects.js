import React from "react";
import Posts from "./Components/Posts/Posts";
import styles from "./PersonalProjects.module.css";

const PersonalProjects = () => {
  return (
    <section className="container">
      <div className={styles.PersonalProjects}>
        <h1 className="titulo">#ProjetosPessoais</h1>
        <Posts />
      </div>
    </section>
  );
};

export default PersonalProjects;
