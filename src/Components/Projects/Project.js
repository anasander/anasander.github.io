import React from "react";
import styles from "./Project.module.css";
import * as images from "../Images/Images";

const Project = () => {
  return (
    <section aria-label="Projetos">
      <div className={styles.container}>
        <a
          href="https://github.com/anasander/dogs"
          className={`${styles.card1} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Dogs</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img src={images.dogsSquare} className={styles.cardImg} alt="Dogs" />
          <div className={`size24 ${styles.misc}`}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </a>
        <a
          href="https://github.com/anasander/iguana-games"
          className={`${styles.card2} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Iguana Games</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.iguanaSquare}
            className={styles.cardImg}
            alt="Iguana Games"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UI/UX</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </a>
        <a
          href="https://github.com/anasander/hi-fi-rush"
          className={`${styles.card4} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Hi-Fi-Rush</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.hifirushSquare}
            className={styles.cardImg}
            alt="Hi-Fi-Rush"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UI/UX</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>
        <a
          href="https://github.com/anasander/ultra-arcade"
          className={`${styles.card3} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Ultra Arcade</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.ultraSquare}
            className={styles.cardImg}
            alt="Ultra Arcade"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UI/UX</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>
        <a
          href="https://github.com/anasander/plushy"
          className={`${styles.card5} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Plushy</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.plushySquare}
            className={styles.cardImg}
            alt="Plushy"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UI/UX</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
