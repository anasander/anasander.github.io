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
      <h1>Home</h1>

      <section>
        <img src={images.perfil} alt="" />
        <h2>Intro</h2>
        <img src="" alt="" />
        <p>
          Aqui está uma descrição com minhas capacidades e habilidades de
          interesse.
        </p>
      </section>

      <section id="projects">
        <h2>Projetos</h2>
        <p>
          Aqui está uma lista contendo todos os meus melhores projetos
          selecionados.
        </p>
        <Projects />
      </section>

      <section id="education">
        <h2>Formação</h2>
        <p>
          Aqui está uma lista detalhando todos os meus cursos mais importantes
          na área de Front-End.
        </p>
        <Education />
        <Languages />
      </section>

      <section>
        <h2>#ProjetosPessoais</h2>
        <p>
          Quer conhecer um pouco mais sobre mim e minhas paixões? Só clicar no
          botão abaixo e descobrir:
        </p>
        <Link to="/projetos-pessoais">Clique Aqui</Link>
      </section>
    </main>
  );
};

export default Home;
