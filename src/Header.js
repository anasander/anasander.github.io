import React from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import * as images from "./Components/Images/Images";

const Header = () => {
  const { pathname } = useLocation();

  const scrollProjects = () => {
    const scrollP = document.querySelector("#projects");
    scrollP.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollEducation = () => {
    const scrollE = document.querySelector("#education");
    scrollE.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollContact = () => {
    const scrollC = document.querySelector("#contact");
    scrollC.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (pathname === "/") {
    return (
      <header>
        <h1>Header</h1>
        <nav className={styles.header}>
          <NavLink to="/" end>
            <img src={images.logo} alt="" />
          </NavLink>
          <button onClick={scrollProjects}>Projetos</button>
          <button onClick={scrollEducation}>Formação</button>
          <button onClick={scrollContact}>Contato</button>
          <NavLink to="/projetos-pessoais">#ProjetosPessoais</NavLink>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <h1>Header</h1>
        <nav className={styles.header}>
          <NavLink to="/" end>
            <img src={images.logo} alt="" />
          </NavLink>
          <button to="/projetos-pessoais" disabled>
            #ProjetosPessoais
          </button>
        </nav>
      </header>
    );
  }
};

export default Header;
