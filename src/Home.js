import React from "react";
import { Link } from "react-router-dom";
import Education from "./Components/Education/Education";
import Languages from "./Components/Education/Languages";
import Projects from "./Components/Projects/Projects";
import styles from "./Home.module.css";
import * as images from "./Components/Images/Images";

const Home = () => {
  return (
    <main className={styles.home}>
      <section>
        <img src={images.perfil} alt="" />
        <h1>Ana Sander</h1>
        <span>Desenvolvedora Front-End e UI/UX Designer.</span>
        <p>
          Desenvolvedora Front-End utilizando HTML, CSS, JavaScript e React,
          como os projetos Plushy, Ultra Arcade e Iguana Games, sendo
          responsável pelo UI/UX Design dos mesmos.
        </p>
      </section>

      <section id="projects">
        <h2>Projetos</h2>
        <Projects />
      </section>

      <section id="education">
        <h2>Formação</h2>
        <Education />
        <Languages />
      </section>

      <section>
        <h2>#ProjetosPessoais</h2>
        <p>
          Quer conhecer um pouco mais sobre mim e minhas paixões? Só clicar no
          botão abaixo e descobrir:
        </p>
        <Link to="/projetos-pessoais" className="button">
          Clique Aqui
        </Link>
      </section>
    </main>
  );
};

export default Home;
