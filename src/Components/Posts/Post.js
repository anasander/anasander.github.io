import React from "react";
import styles from "./Post.module.css";

const Post = ({ post: { sub, title, date, body, img } }) => {
  return (
    <div className={styles.post}>
      <div className={styles.flex}>
        <p className="size24">{sub}</p>
        <p className="size24">{date}</p>
      </div>
      <h1 className={`size32 ${styles.titlePost}`}>{title}</h1>
      <p className={`size24 ${styles.body}`}>{body}</p>
      <div className={styles.img}>
        {img.map((i) => (
          <img src={i} alt="" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Post;
