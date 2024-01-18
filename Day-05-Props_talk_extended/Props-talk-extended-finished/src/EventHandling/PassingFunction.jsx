import React from "react";

const PassingFunction = ({ showMessage }) => {
  // receive function as prop
  return <button onClick={showMessage}>Show Message</button>;
};

export default PassingFunction;
