import React from "react";
import styles from "./Education.module.css";
import * as images from "../Images/Images";
import SingleEd from "./SingleEd";

const Education = () => {
  const Ed = [
    {
      img: images.googleUXwireframesPrototipos,
      title: "Criar wireframes e prototipos",
      date: "07/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/GD XERL49CUVF",
    },
    {
      img: images.googleUXempatia,
      title: "Iniciar o processo de design de UX",
      date: "07/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/JMGMHQA4TAER",
    },
    {
      img: images.googleUXfundamentos,
      title: "Fundamentos do design UX",
      date: "06/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/VBZ6B3WMX3TL",
    },
    {
      img: images.origamidTipoa,
      title: "Tipografia Avançada",
      date: "05/2023",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/19a187e4",
    },
    {
      img: images.origamidReact,
      title: "React Completo",
      date: "03/2023",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/2b78ee94",
    },
    {
      img: images.origamidJS,
      title: "JavaScript Completo ES6",
      date: "12/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/59db0af3",
    },
    {
      img: images.origamidUIav,
      title: "UI Design Avançado",
      date: "09/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/5dfd8aea",
    },
    {
      img: images.origamidCSSg,
      title: "CSS Grid Layout",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/92c75565",
    },
    {
      img: images.origamidCSSf,
      title: "CSS Flexbox",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/d19c000c",
    },
    {
      img: images.origamidHTMLCSS,
      title: "HTML & CSS para Iniciantes",
      date: "08/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/51435d55",
    },
    {
      img: images.origamidUIi,
      title: "UI Design para Iniciantes",
      date: "07/2022",
      sub: "Origamid",
      desc: "Curso Web Design, UX/UI Design & Front-End",
      href: "https://origamid.com/certificate/9d4e5c13",
    },
  ];

  return (
    <section aria-label="Formação">
      <div className={styles.education}>
        <h2 className={`titulo container ${styles.tituloFormacao}`}>
          Formação
        </h2>
        <div className={styles.line}></div>
        <div className={`padding container ${styles.scrollbar}`}>
          {Ed.map((ed, index) => (
            <SingleEd key={index} index={index} ed={ed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
