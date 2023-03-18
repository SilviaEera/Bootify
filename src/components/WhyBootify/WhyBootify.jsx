import React from "react";
import BootifyCard from "./BootifyCard";
import "./WhyBootify.css";

const WhyBootify = () => {
  return (
    <div className="whyBootify">
      <div className="container">
        <div className="wyBootifyWrapper">
          <h1 className="whyBootifyHeading">Why Bootify</h1>
          <div className="whyBootifyCardContainer">
            <BootifyCard />
            <BootifyCard />
            <BootifyCard />
            <BootifyCard />
            <BootifyCard />
            <BootifyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBootify;
