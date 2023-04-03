import React from "react";
import styles from "./Project.module.css";

const Project = ({ project: { title, date, img, misc, background } }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectBg} style={{ background: background }}>
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
  );
};

// const Project = () => {
//   return (
//     <div class={styles.container}>
//       <div class={styles.card}>
//         <p>Texto.</p>
//       </div>
//       <div class={styles.card}>
//         <p>Texto.</p>
//       </div>
//       <div class={styles.card}>
//         <p>Texto.</p>
//       </div>
//       <div class={styles.card}>
//         <p>Texto.</p>
//       </div>
//       <div class={styles.card}>
//         <p>Texto.</p>
//       </div>
//     </div>
//   );
// };

export default Project;
