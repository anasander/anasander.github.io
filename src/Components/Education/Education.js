import React from "react";
import styles from "./Education.module.css";
import * as images from "../Images/Images";
import SingleEd from "./SingleEd";

const Education = () => {
  const Ed = [
    {
      img: images.origamidReact,
      title: "Origamid",
      date: "01//01/2001",
      sub: " React Completo",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidReact,
      title: "Origamid",
      date: "01//01/2001",
      sub: " React Completo",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
    {
      img: images.origamidReact,
      title: "Origamid",
      date: "01//01/2001",
      sub: " React Completo",
      desc: "Curso Web Design, UX/UI Design & Front-End",
    },
  ];

  return (
    <div className={styles.education}>
      <h2>Essa é a sessão com toda a minha formação na área de Front-End.</h2>
      {Ed.map((ed, index) => (
        <SingleEd key={index} index={index} ed={ed} />
      ))}
    </div>
  );
};

export default Education;
