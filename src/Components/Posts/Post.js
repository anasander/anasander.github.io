import React from "react";
import styles from "./Post.module.css";

const Post = ({ post: { title, date, body, img } }) => {
  return (
    <div className={styles.post}>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{body}</p>
      <div>
        {img.map((i) => (
          <img src={i} alt="" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Post;
