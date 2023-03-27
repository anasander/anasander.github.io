import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post";
import * as images from "../Images/Images";

const Posts = () => {
  const blogPost = [
    {
      title: "Postagem 1",
      date: "01/01/2000",
      body: "Uma postagem muito interessante cheia de frases e parágrafos superlongos pra que eu possa ter uma ideia geral de todos os aspectos importantes quando estiver estilizando a aparência da mesma através do CSS desse componente.",
      img: [images.projeto1, images.projeto2],
    },
    {
      title: "Postagem 2",
      date: "01/01/2000",
      body: "Uma postagem muito interessante cheia de frases e parágrafos superlongos pra que eu possa ter uma ideia geral de todos os aspectos importantes quando estiver estilizando a aparência da mesma através do CSS desse componente.",
      img: [images.projeto1],
    },
    {
      title: "Postagem 3",
      date: "01/01/2000",
      body: "Uma postagem muito interessante cheia de frases e parágrafos superlongos pra que eu possa ter uma ideia geral de todos os aspectos importantes quando estiver estilizando a aparência da mesma através do CSS desse componente.",
      img: [images.projeto1],
    },
  ];

  return (
    <div className={styles.posts}>
      <h2>Essa é a página cheia de postagens.</h2>
      {blogPost.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
