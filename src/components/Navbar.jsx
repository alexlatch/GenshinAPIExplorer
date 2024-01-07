import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <p className="links">
        <Link to="/">Home</Link> |&nbsp;
      </p>
    </header>
  );
}

export default Navbar;