import React from "react";
import Development from "../../components/Development/Development";
import Hero from "../../components/Hero/Hero";
import WhyBootify from "../../components/WhyBootify/WhyBootify";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="homeWrapper">
          <Hero />
          <Development />
          <WhyBootify />
        </div>
      </div>
    </div>
  );
};

export default Home;
