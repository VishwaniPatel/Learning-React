import React from "react";
import Model from "./Model";
import Error from "./Error";
const About = () => {
  return (
    <section
      style={{ border: "1px solid black", marginTop: "10px", padding: "5px" }}
    >
      <h3>About</h3>
      <Model>
        <Error></Error>
      </Model>
    </section>
  );
};

export default About;
