// Blog component
import React from "react";
import "./Blog.css";

// receive props
const Blog = (prop) => {
  return (
    <div className="blog">
      <h1>{prop.title}</h1>
      <span>{date}</span>
      <p>{content}</p>
    </div>
  );
};

export default Blog;
