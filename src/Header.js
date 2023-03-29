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

  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  if (pathname === "/") {
    return (
      <header className={styles.headerBG}>
        <nav className={`${styles.header} container`}>
          <NavLink to="/" end>
            <img src={images.logo} className={styles.logo} alt="" />
          </NavLink>
          <div className={styles.headerBtns}>
            <Button onClick={scrollProjects}>Projetos</Button>
            <Button onClick={scrollEducation}>Formação</Button>
            <Button onClick={scrollContact}>Contato</Button>
            <NavLink to="/projetos-pessoais" className={styles.pp}>
              #ProjetosPessoais
            </NavLink>
          </div>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${styles.mobileBtn} ${
              mobileMenu && styles.mobileBtnActv
            }`}
          ></button>
          <ul
            className={`${styles.menuDrop} ${
              mobileMenu && styles.menuDropActv
            }`}
          >
            <li>
              <p onClick={scrollProjects} className={styles.singleMobile}>
                Projetos
              </p>
            </li>
            <li>
              <p onClick={scrollEducation} className={styles.singleMobile}>
                Formação
              </p>
            </li>
            <li>
              <p onClick={scrollContact} className={styles.singleMobile}>
                Contato
              </p>
            </li>
            <li className={styles.singleMobile}>
              <NavLink
                to="/projetos-pessoais"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                #ProjetosPessoais
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className={styles.headerBG}>
        <nav className={`${styles.header} container`}>
          <NavLink to="/" end>
            <img src={images.logo} className={styles.logo} alt="" />
          </NavLink>
          <div className={styles.headerBtns}>
            <NavLink to="/" className="button">
              Voltar
            </NavLink>
            <NavLink to="/projetos-pessoais" className={styles.disabled}>
              #ProjetosPessoais
            </NavLink>
          </div>
          <NavLink to="/" className={`${styles.voltar} button`}>
            Voltar
          </NavLink>
        </nav>
      </header>
    );
  }
};

export default Header;
