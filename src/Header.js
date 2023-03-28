import React from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import * as images from "./Components/Images/Images";
import Button from "./Components/Button/Button";

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
        <nav className={styles.header}>
          <NavLink to="/" end>
            <img src={images.logo} alt="" />
          </NavLink>
          <Button onClick={scrollProjects}>Projetos</Button>
          <Button onClick={scrollEducation}>Formação</Button>
          <Button onClick={scrollContact}>Contato</Button>
          <NavLink to="/projetos-pessoais">#ProjetosPessoais</NavLink>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className={styles.header}>
          <NavLink to="/" end>
            <img src={images.logo} alt="" />
          </NavLink>
          <NavLink to="/projetos-pessoais" disabled>
            #ProjetosPessoais
          </NavLink>
        </nav>
      </header>
    );
  }
};

export default Header;
