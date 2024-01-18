import React from "react";
import Model from "./Model";
import Success from "./Success";
const Home = () => {
  return (
    <section style={{ border: "1px solid black", padding: "5px" }}>
      <h2>Home</h2>
      <Model>
        <Success></Success>
      </Model>
    </section>
  );
};

export default Home;
