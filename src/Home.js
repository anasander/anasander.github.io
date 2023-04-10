import React from "react";
import { Link } from "react-router-dom";
import Education from "./Components/Education/Education";
import Languages from "./Components/Education/Languages";
import Projects from "./Components/Projects/Projects";
import styles from "./Home.module.css";
import * as images from "./Components/Images/Images";

const Home = () => {
  return (
    <main aria-label="Página Principal">
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
                <p className={`size32 ${styles.subtitulo}`}>
                  Desenvolvedora Front-End & <br /> UI/UX Designer.
                </p>
                <div className={`size32 ${styles.desc}`}>
                  <p>Front-End Dev localizada em Belo Horizonte/MG 🍞🧀.</p>
                  <p>
                    Possuo conhecimentos em <span className="bold">HTML</span>,{" "}
                    <span className="bold">CSS</span>,{" "}
                    <span className="bold">JavaScript</span> e{" "}
                    <span className="bold">React</span>, e desenvolvi projetos
                    como a loja de pelúcias{" "}
                    <span className="bold b2">Plushy</span>, o site do time de
                    E-Sports <span className="bold b2">Ultra Arcade</span> e
                    também a loja de games{" "}
                    <span className="bold b2">Iguana Games</span>, sendo
                    responsável pelo UI/UX Design dos mesmos.
                  </p>
                </div>
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

      <section className="padding container">
        <div className={styles.proPe}>
          <h2 className="size24">#ProjetosPessoais</h2>
          <p className="size32">
            Quer conhecer um pouco mais sobre mim e minhas paixões? Só clicar no
            botão abaixo e descobrir:
          </p>
          <div className={styles.proBtn}>
            <Link to="/projetos-pessoais" className="button size32">
              Clique Aqui
            </Link>
          </div>
        </div>
      </section>

      <div id="contact">
        <div className="space"></div>
      </div>
    </main>
  );
};

export default Home;
