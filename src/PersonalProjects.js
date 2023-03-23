import React from "react";
import Posts from "./Components/Posts/Posts";
import styles from "./PersonalProjects.module.css";

const PersonalProjects = () => {
  return (
    <div className={styles.personal}>
      <h1>#ProjetosPessoais</h1>
      <Posts />
    </div>
  );
};

export default PersonalProjects;
