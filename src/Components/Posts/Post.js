import React from "react";

const Post = ({ post: { title, date, body, img } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src={img} alt="post" />
      <p>{body}</p>
    </div>
  );
};

export default Post;
