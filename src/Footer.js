import React from "react";
import styles from "./Footer.module.css";
import * as images from "./Components/Images/Images";

const Footer = () => {
  return (
    <section aria-label="Contato">
      <h1 className={`titulo container ${styles.tituloContato}`}>Contato</h1>
      <div className={styles.footer}>
        <div className="container padding">
          <div className={styles.redes}>
            <a className={styles.redesLink} href="mailto: anagsander@gmail.com">
              <img src={images.email} alt="E-mail" />
            </a>

            <a
              className={styles.redesLink}
              href="https://www.linkedin.com/in/ana-gabriela-sander-morais-ivatio-b2302019b/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={images.linkedin} alt="LinkedIn" />
            </a>

            <a
              className={styles.redesLink}
              href="https://github.com/anasander"
              rel="noreferrer"
              target="_blank"
            >
              <img src={images.github} alt="GitHub" />
            </a>

            <a
              className={styles.redesLink}
              href="https://www.behance.net/anasander"
              rel="noreferrer"
              target="_blank"
            >
              <img src={images.behance} alt="Behance" />
            </a>

            <a
              className={styles.redesLink}
              href="https://twitter.com/LadySander"
              rel="noreferrer"
              target="_blank"
            >
              <img src={images.twitter} alt="Twitter" />
            </a>
          </div>

          <div className={styles.bottom}>
            <img src={images.catsit} alt="" />
            <p>Ana Sander. Alguns direitos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
