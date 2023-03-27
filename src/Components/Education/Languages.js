import React from "react";
import styles from "./Languages.module.css";

const Languages = () => {
  const Lang = [
    {
      language: "Inglês",
      level: "Avançado",
    },
    {
      language: "Espanhol",
      level: "Intermediário",
    },
  ];

  return (
    <div className={styles.languages}>
      {Lang.map(({ language, level }, index) => (
        <div key={index} index={index}>
          <h3>{language}</h3>
          <span>{level}</span>
        </div>
      ))}
    </div>
  );
};

export default Languages;
