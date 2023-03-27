import React from "react";

const Post = ({ post: { title, date, body, img } }) => {
  return (
    <div>
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
