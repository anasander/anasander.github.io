import React from "react";
import styles from "./Footer.module.css";
import * as images from "./Components/Images/Images";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <h1 className="titulo">Contato</h1>
        <img src={images.email} alt="" />
        <img src={images.linkedin} alt="" />
        <img src={images.github} alt="" />
        <img src={images.twitter} alt="" />
        <img src={images.instagram} alt="" />
      </div>
    </section>
  );
};

export default Footer;
