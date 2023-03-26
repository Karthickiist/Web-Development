import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="React"
        />
        <h3 className="logo-text">React Facts</h3>
      </div>
      <h3 className="title">React project-1</h3>
    </nav>
  );
}

export default Navbar;
