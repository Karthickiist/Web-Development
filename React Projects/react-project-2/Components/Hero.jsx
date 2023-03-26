import React from "react";

function Hero() {
  return (
    <div className="hero">
      <img
        className="grid-image"
        src={require("../public/images/grid.jpg")}
        alt="air bnb"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
