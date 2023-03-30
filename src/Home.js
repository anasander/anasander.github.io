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
          <div className={`container ${styles.home}`}>
            <div className={styles.img}>
              <img src={images.perfil} alt="" />
            </div>
            <div>
              <div className={styles.tituloContainer}>
                <div className={styles.borderBottom}>
                  <h1 className={`titulo ${styles.tituloHome}`}>Ana Sander</h1>
                </div>
                <p className={`sub ${styles.sub}`}>
                  Desenvolvedora Front-End & <br /> UI/UX Designer.
                </p>
                <p className={`sub ${styles.desc}`}>
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

      <section id="projects">
        <div className="container">
          <h2 className="titulo">Projetos</h2>
          <Projects />
        </div>
      </section>

      <section id="education">
        <div className="container">
          <h2 className="titulo">Formação</h2>
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
    </main>
  );
};

export default Home;
