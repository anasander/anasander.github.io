import React from "react";
import styles from "./Project.module.css";
import * as images from "../Images/Images";

// const Project = ({ project: { title, date, img, misc, background } }) => {
//   return (
//     <div className={styles.project}>
//       <div className={styles.projectBg} style={{ background: background }}>
//         <h1 className="size32">{title}</h1>
//         <p className="size24">{date}</p>
//         <img src={img} alt="" />
//         <div className={styles.projectFlex}>
//           {misc.map((i) => (
//             <p className={`size24 ${styles.ability}`} key={i}>
//               {i}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card1} ${styles.card}`}>
        <h2 className={`size32 ${styles.cardTitle}`}>Dogs</h2>
        <p className={`size24 ${styles.cardDate}`}>2023</p>
        <img src={images.dogsSquare} className={styles.cardImg} alt="Dogs" />
        <div className={`size24 ${styles.misc}`}>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </div>
      <div className={`${styles.card2} ${styles.card}`}>
        <h2 className={`size32 ${styles.cardTitle}`}>Iguana Games</h2>
        <p className={`size24 ${styles.cardDate}`}>2022</p>
        <img
          src={images.iguanaSquare}
          className={styles.cardImg}
          alt="Iguana Games"
        />
        <div className={`size24 ${styles.misc}`}>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>
      </div>
      <div className={`${styles.card3} ${styles.card}`}>
        <h2 className={`size32 ${styles.cardTitle}`}>Ultra Arcade</h2>
        <p className={`size24 ${styles.cardDate}`}>2022</p>
        <img
          src={images.ultraSquare}
          className={styles.cardImg}
          alt="Ultra Arcade"
        />
        <div className={`size24 ${styles.misc}`}>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
      <div className={`${styles.card4} ${styles.card}`}>
        <h2 className={`size32 ${styles.cardTitle}`}>ProTECC</h2>
        <p className={`size24 ${styles.cardDate}`}>2022</p>
        <img
          src={images.proteccSquare}
          className={styles.cardImg}
          alt="ProTECC"
        />
        <div className={`size24 ${styles.misc}`}>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
      <div className={`${styles.card5} ${styles.card}`}>
        <h2 className={`size32 ${styles.cardTitle}`}>Plushy</h2>
        <p className={`size24 ${styles.cardDate}`}>2022</p>
        <img
          src={images.plushySquare}
          className={styles.cardImg}
          alt="Plushy"
        />
        <div className={`size24 ${styles.misc}`}>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
