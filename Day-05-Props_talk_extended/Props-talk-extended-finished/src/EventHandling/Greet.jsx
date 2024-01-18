import React from "react";

const Greet = (props) => {
  const handleButtonClick = () => {
    props.greetFunction("Vishwani");
  };
  return <button onClick={handleButtonClick}>Greet User</button>;
};

export default Greet;
