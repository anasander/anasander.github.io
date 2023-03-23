import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>

      <section>
        <h2>Intro</h2>
        <p>
          Aqui está uma descrição com minhas capacidades e habilidades de
          interesse.
        </p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section id="projects">
        <h2>Projetos</h2>
        <p>
          Aqui está uma lista contendo todos os meus melhores projetos
          selecionados.
        </p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section id="education">
        <h2>Formação</h2>
        <p>
          Aqui está uma lista detalhando todos os meus cursos mais importantes
          na área de Front-End.
        </p>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <h2>#ProjetosPessoais</h2>
        <p>
          Esta é a área para clicar e ir para a página de Projetos Pessoais.
        </p>
        <Link to="/projetos-pessoais">Clique Aqui</Link>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
