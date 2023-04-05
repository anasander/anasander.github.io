import React from "react";
import { Link } from "react-router-dom";
import Education from "./Components/Education/Education";
import Languages from "./Components/Education/Languages";
import Projects from "./Components/Projects/Projects";
import styles from "./Home.module.css";
import * as images from "./Components/Images/Images";

const Home = () => {
  return (
    <main>
      <section className={styles.homeBg}>
        <div className={styles.homeStripe}>
          <div className={`container padding ${styles.home}`}>
            <div className={styles.img}>
              <img src={images.perfil} alt="" />
            </div>
            <div>
              <div className={styles.tituloContainer}>
                <div className={styles.borderBottom}>
                  <h1 className={`titulo ${styles.tituloHome}`}>Ana Sander</h1>
                </div>
                <p className={`size32 ${styles.size32}`}>
                  Desenvolvedora Front-End & <br /> UI/UX Designer.
                </p>
                <p className={`size32 ${styles.desc}`}>
                  Desenvolvedora Front-End utilizando{" "}
                  <span className="bold">HTML</span>,{" "}
                  <span className="bold">CSS</span>,{" "}
                  <span className="bold">JavaScript</span> e{" "}
                  <span className="bold">React</span>, como os projetos{" "}
                  <span className="bold b2">Plushy</span>,{" "}
                  <span className="bold b2">Ultra Arcade</span> e{" "}
                  <span className="bold b2">Iguana Games</span>, sendo
                  responsável pelo UI/UX Design dos mesmos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="projects">
        <div className="space"></div>
      </div>

      <Projects />

      <div id="education">
        <div className="space"></div>
      </div>

      <section>
        <div>
          <Education />
          <Languages />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>#ProjetosPessoais</h2>
          <p>
            Quer conhecer um pouco mais sobre mim e minhas paixões? Só clicar no
            botão abaixo e descobrir:
          </p>
          <Link to="/projetos-pessoais" className="button">
            Clique Aqui
          </Link>
        </div>
      </section>

      <div id="contact">
        <div className="space"></div>
      </div>
    </main>
  );
};

export default Home;
