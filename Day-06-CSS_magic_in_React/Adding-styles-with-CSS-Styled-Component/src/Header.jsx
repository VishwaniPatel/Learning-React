import React from "react";
// import './Header.css';
import { styled } from "styled-components";
import Button from "./Button";
const Para = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;
const HeaderContainer = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  text-align: center;

  & button {
    background-color: #fff;
    color: #3498db;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    margin: 0 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #3498db;
      color: #fff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-content">
        <h1>My React App</h1>
        <Para>Explore the amazing features below.</Para>
        <div className="header-buttons">
          <button className="header-button">Sign In</button>
          <button className="header-button">Sign Up</button>
          <Button>Hello</Button>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
