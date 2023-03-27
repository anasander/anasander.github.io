import React from "react";
import styles from "./SingleEd.module.css";

const SingleEd = ({ ed: { img, title, date, sub, desc } }) => {
  return (
    <div className={styles.singleEd}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{sub}</p>
      <p>{desc}</p>
    </div>
  );
};

export default SingleEd;
