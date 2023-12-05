import React from "react";
import styles from "./Project.module.css";
import * as images from "../Images/Images";

const Project = () => {
  return (
    <section aria-label="Projetos">
      <div className={styles.container}>

      <a
          href="https://www.figma.com/proto/Bx4F2mLDuNmL1VhcCd89Mx/adopet?page-id=104%3A78&type=design&node-id=104-1523&viewport=299%2C110%2C0.04&t=V8wjQuzEGLRv9scM-1&scaling=scale-down-width&starting-point-node-id=104%3A1523&mode=design"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardAdopet} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Adopet</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.adopetSquare}
            className={styles.cardImg}
            alt="AdoPet"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
          </div>
        </a>
        <a
          href="https://www.figma.com/proto/PquDgnCeXqkwkoapyUqUYn/Lunar?page-id=30%3A2&type=design&node-id=30-4&viewport=241%2C185%2C0.08&t=G6HPmGEGKlLwD2y7-1&scaling=scale-down-width&starting-point-node-id=30%3A4&mode=design"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardLunar} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Lunar</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.lunarSquare}
            className={styles.cardImg}
            alt="Lunar"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
          </div>
        </a>

        <a
          href="https://www.figma.com/proto/2bWmKlSFxdfkMgD9h3LxNB/dinozoo?page-id=328%3A2&type=design&node-id=345-153&viewport=571%2C222%2C0.02&t=6FiKoJVq8KUBMTmy-1&scaling=scale-down-width&starting-point-node-id=345%3A153&mode=design"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardDino} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>DinoZoo</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.dinozooSquare}
            className={styles.cardImg}
            alt="DinoZoo"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
          </div>
        </a>

        <a
          href="https://www.figma.com/proto/lk1fKIHUfmNZtPmCfc6Fwb/RoR?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&mode=design&t=yFwFW0ZWBiW6ZWZU-1s"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardROR} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Rule of Rose</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.ruleofroseSquare}
            className={styles.cardImg}
            alt="Rule of Rose"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
          </div>
        </a>

        <a
          href="https://github.com/anasander/dogs"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardDogs} ${styles.card}`}
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
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardIguana} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Iguana Games</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.iguanaSquare}
            className={styles.cardImg}
            alt="Iguana Games"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </a>

        <a
          href="https://github.com/anasander/hi-fi-rush"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardHifirush} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Hi-Fi-Rush</h2>
          <p className={`size24 ${styles.cardDate}`}>2023</p>
          <img
            src={images.hifirushSquare}
            className={styles.cardImg}
            alt="Hi-Fi-Rush"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>

        <a
          href="https://github.com/anasander/ultra-arcade"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardUA} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Ultra Arcade</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.ultraSquare}
            className={styles.cardImg}
            alt="Ultra Arcade"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>

        <a
          href="https://github.com/anasander/plushy"
          rel="noreferrer"
          target="_blank"
          className={`${styles.cardPlushy} ${styles.card}`}
        >
          <h2 className={`size32 ${styles.cardTitle}`}>Plushy</h2>
          <p className={`size24 ${styles.cardDate}`}>2022</p>
          <img
            src={images.plushySquare}
            className={styles.cardImg}
            alt="Plushy"
          />
          <div className={`size24 ${styles.misc}`}>
            <p>UX/UI</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
