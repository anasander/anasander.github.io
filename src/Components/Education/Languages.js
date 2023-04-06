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
      <div className={"container2 padding"}>
        <h2 className={`titulo ${styles.langTitle}`}>IDIOMAS</h2>
        {Lang.map(({ language, level }, index) => (
          <div className={styles.langFlex} key={index} index={index}>
            <h3>{language}</h3>
            <span>{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
