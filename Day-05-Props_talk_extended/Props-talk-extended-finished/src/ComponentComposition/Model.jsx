import React from "react";

const Model = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid black" /*here some another base style for wrapper */,
      }}
    >
      {children}
    </div>
  );
};

export default Model;
