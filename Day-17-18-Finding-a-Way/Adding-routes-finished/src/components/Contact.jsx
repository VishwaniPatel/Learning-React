import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  console.log("Rendered Contact");
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li>
           {/* Using relative paths */}
          <Link to="1">Contact 1</Link>
        </li>
        <li>
           {/* Using relative paths */}
          <Link to="2">Contact 2</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default Contact;
