// Blog component
import React from "react";
import "./Blog.css";

// receive props
const Blog = ({ title, date, content }) => {
  return (
    <div className="blog">
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{content}</p>
    </div>
  );
};

export default Blog;
