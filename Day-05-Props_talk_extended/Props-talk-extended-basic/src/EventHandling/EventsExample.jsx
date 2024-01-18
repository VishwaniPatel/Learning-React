import React from "react";
import MyButton from "./MyButton";
import LikeButton from "./LikeButton";
import { UploadButton } from "./UploadButton";
import Greet from "./Greet";
import PassingFunction from "./PassingFunction";

const EventsExample = () => {
  return (
    <>
      {/* Handling Event by passing function */}

      {/* Passing argument */}
      <button onClick={() => sayHello("Vishwani")}> Say Hello</button>

      {/* Passing props */}
      <MyButton message="I Receive Props">Pass Props</MyButton>

      {/* Passing Event Handlers */}
      <LikeButton movieName="Movie"></LikeButton>
      <UploadButton />

      {/* passing function as props */}
      <PassingFunction showMessage={displayMessage}></PassingFunction>

      {/* passing arguments as props */}
      <Greet greetFunction={greetUser} />
    </>
  );
};

export default EventsExample;
