import React from "react";
import styles from "./SingleEd.module.css";

const SingleEd = ({ ed: { img, title, date, sub, desc, href } }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank" className={styles.singleEd}>
      <div className={styles.singleImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.edDesc}>
        <div className={styles.edFlex}>
          <h2 className="size32">{title}</h2>
          <p className="size24">{date}</p>
        </div>
        <p className={`size32 ${styles.edp1}`}>{sub}</p>
        <p className={`size24 ${styles.edp2}`}>{desc}</p>
      </div>
    </a>
  );
};

export default SingleEd;
