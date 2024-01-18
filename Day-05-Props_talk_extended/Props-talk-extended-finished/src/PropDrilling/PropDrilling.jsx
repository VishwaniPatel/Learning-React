import React from "react";

const PropDrilling = () => {
  const firstName = "Ravi";

  return (
    <section>
      <Home firstName={firstName}></Home>
      <About firstName={firstName} />
    </section>
  );
};

function Home({ firstName }) {
  return (
    <section style={{ border: "1px solid black", padding: "5px" }}>
      <h2>Home</h2>
      <Card firstName={firstName} />
    </section>
  );
}

function About({ firstName }) {
  return (
    <section
      style={{ border: "1px solid black", marginTop: "10px", padding: "5px" }}
    >
      <h3>About</h3>
      <p>{firstName}</p>
    </section>
  );
}

function Card({ firstName }) {
  return (
    <div style={{ border: "1px solid blue", padding: "5px" }}>
      <h3>Card</h3>

      <p>{firstName}</p>
    </div>
  );
}

export default PropDrilling;
