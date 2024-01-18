import React from "react";
// receiving event handler as prop
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
