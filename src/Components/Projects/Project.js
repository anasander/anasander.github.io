import React from "react";
import styles from "./Project.module.css";

const Project = ({ project: { title, date, img, misc } }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectBg}>
        <div>
          <h1 className="size32">{title}</h1>
          <p className="size24">{date}</p>
          <img src={img} alt="" />
          <div className={styles.projectFlex}>
            {misc.map((i) => (
              <p className={`size24 ${styles.ability}`} key={i}>
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
