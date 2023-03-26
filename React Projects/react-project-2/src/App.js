import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Data from "../public/data";

function App() {
  const card = Data.map((temp) => {
    return (
      <Card
        img={temp.coverImg}
        rating={temp.stats.rating}
        reviewCount={temp.stats.reviewCount}
        country={temp.location}
        title={temp.title}
        price={temp.price}
        batch={temp.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="container"> {card} </section>
    </div>
  );
}

export default App;
