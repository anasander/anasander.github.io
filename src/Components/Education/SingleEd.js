import React from "react";
import styles from "./SingleEd.module.css";

const SingleEd = ({ ed: { img, title, date, sub, desc } }) => {
  return (
    <div className={`container ${styles.singleEd}`}>
      <div className={styles.singleImg}>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{sub}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleEd;
