import React from "react";
import Button from "./Button";
const LikeButton = ({ movieName }) => {
  const handlePlayClick = () => alert(`Playing ${movieName}`);
  // passing handlePlayClick as the onClick prop
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
};

export default LikeButton;
