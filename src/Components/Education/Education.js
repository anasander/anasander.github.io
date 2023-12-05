import React from "react";
import styles from "./Education.module.css";
import * as images from "../Images/Images";
import SingleEd from "./SingleEd";

const Education = () => {
  const Ed = [
    {
      img: images.googleUXdesignfinal,
      title: "Google UX Design",
      date: "10/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/professional-cert/3NM2Z99TSDY9",
    },
    {
      img: images.googleUXbemsocial,
      title: "Design para Bem Social",
      date: "10/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/9KDA287DHMQH",
    },
    {
      img: images.googleUXwebdesign,
      title: "Web Design Resposivo",
      date: "09/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/CLRHU8Q88DWN",
    },
    {
      img: images.googleUXcriardesigns,
      title: "Criar Designs Hi-Fi",
      date: "09/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/88962XCAT3PN",
    },
    {
      img: images.googleUXpesquisas,
      title: "Conduzir pesquisas UX",
      date: "08/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/8LCHW7S2VGVD",
    },
    {
      img: images.googleUXwireframesPrototipos,
      title: "Criar wireframes e prototipos",
      date: "07/2023",
      sub: "Google/Coursera",
      desc: "Certificado Profissional de UX Design",
      href: "https://coursera.org/verify/GDXERL49CUVF",
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
      img: images.scrumProfCert,
      title: "Certificado Profissional SCRUM",
      date: "06/2023",
      sub: "CertiProf",
      desc: "Certificado Profissional SFPC",
      href: "https://www.credly.com/badges/e50edbdb-e498-4053-8e43-56c6ff2f577b/linked_in_profile",
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
