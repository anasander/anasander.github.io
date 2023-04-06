import React from "react";
import styles from "./Footer.module.css";
import * as images from "./Components/Images/Images";

const Footer = () => {
  return (
    <section>
      <h1 className={`titulo container ${styles.tituloContato}`}>Contato</h1>
      <div className={styles.footer}>
        <div className="container padding">
          <div className={styles.redes}>
            <a href="mailto: anagsander@gmail.com">
              <img src={images.email} alt="E-mail" />
            </a>
            <a href="https://www.linkedin.com/in/ana-gabriela-sander-morais-ivatio-b2302019b/">
              <img src={images.linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/anasander">
              <img src={images.github} alt="GitHub" />
            </a>
            <a href="https://twitter.com/LadySander">
              <img src={images.twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/anasander/">
              <img src={images.instagram} alt="Intagram" />
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
