import React from "react";
import MyButton from "./MyButton";
import LikeButton from "./LikeButton";
import { UploadButton } from "./UploadButton";
import Greet from "./Greet";
import PassingFunction from "./PassingFunction";

const EventsExample = () => {
  function handleEvent() {
    alert("Hello there");
  }
  const sayHello = (name) => alert(`Hello ${name}`);
  const displayMessage = () => console.log("Hello");
  const greetUser = (name) => alert(`Hello ${name}`);
  return (
    <>
      {/* Handling Event by passing function */}
      <button onClick={handleEvent}>Click Me</button>

      <button
        onClick={function handleEvent() {
          alert("Hello there");
        }}
      >
        Hello
      </button>

      <button onClick={() => alert("Hello")}>Hello</button>

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
