import React from "react";
import Posts from "./Components/Posts/Posts";
import styles from "./PersonalProjects.module.css";

const PersonalProjects = () => {
  return (
    <section aria-label="Página de Projetos Pessoais">
      <div className={styles.perBg}>
        <div className={styles.personalProjects}>
          <div className={styles.titleBG}>
            <h1 className={`titulo container padding ${styles.tituloPer}`}>
              #Projetos
              <br className={styles.break} />
              Pessoais
            </h1>
          </div>
          <div className={styles.perDesc}>
            <p className="container padding size32">
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
