import React from "react";
import styles from "./Education.module.css";
import * as images from "../Images/Images";
import SingleEd from "./SingleEd";

const Education = () => {
  const Ed = [
    {
      img: images.origamidReact,
      title: "React Completo",
      date: "03/2023",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidJS,
      title: "JavaScript Completo ES6",
      date: "12/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidUIav,
      title: "UI Design Avançado",
      date: "09/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidCSSg,
      title: "CSS Grid Layout",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidCSSf,
      title: "CSS Flexbox",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidHTMLCSS,
      title: "HTML & CSS Básico",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidUIi,
      title: "UI Design para Iniciantes",
      date: "07/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
  ];

  return (
    <div>
      <h2 className={`titulo container ${styles.tituloFormacao}`}>Formação</h2>
      <div className={styles.line}></div>
      <div className="padding">
        {Ed.map((ed, index) => (
          <SingleEd key={index} index={index} ed={ed} />
        ))}
      </div>
    </div>
  );
};

export default Education;
