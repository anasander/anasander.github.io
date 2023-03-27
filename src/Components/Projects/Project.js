import React from "react";
import styles from "./Project.module.css";

const Project = ({ project: { title, date, img, misc } }) => {
  return (
    <div className={styles.project}>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src={img} alt="" />
      {misc.map((i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  );
};

export default Project;
