import React from "react";
import styles from "./Footer.module.css";
import * as images from "./Components/Images/Images";

const Footer = () => {
  return (
    <section id="contact" className={styles.footer}>
      <h1>Contato</h1>
      <p>Esta é a área com todas as minhas informações de contato.</p>
      <img src={images.email} alt="" />
      <img src={images.linkedin} alt="" />
      <img src={images.github} alt="" />
      <img src={images.twitter} alt="" />
      <img src={images.instagram} alt="" />
    </section>
  );
};

export default Footer;
