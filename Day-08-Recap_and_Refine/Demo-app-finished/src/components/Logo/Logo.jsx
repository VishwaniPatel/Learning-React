import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Logo.css";
const Logo = () => {
  return (
    // load image dynamically
    <div className="logo">
      <img src={logo} className="img" alt="logo"></img>
    </div>
  );
};

export default Logo;
