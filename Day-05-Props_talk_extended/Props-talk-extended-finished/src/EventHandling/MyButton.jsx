import React from "react";

const MyButton = ({ message, children }) => {
  // use of children prop and receiving message as prop
  return <button onClick={() => alert(message)}>{children}</button>;
};

export default MyButton;
