import React from "react";
import Posts from "./Components/Posts/Posts";
import styles from "./PersonalProjects.module.css";

const PersonalProjects = () => {
  return (
    <section>
      <div className={styles.perBg}>
        <div className={styles.personalProjects}>
          <h1 className={`titulo container ${styles.tituloPer}`}>
            #ProjetosPessoais
          </h1>
          <div className={styles.perDesc}>
            <p className="container padding">
              Atualizações de GameDev, ilustrações, pixel art, projetos avulsos,
              tudo num único lugar.
            </p>
          </div>
        </div>
      </div>
      <div className="container padding">
        <Posts />
      </div>
    </section>
  );
};

export default PersonalProjects;
