import React from "react";
import "./WhyBootify.css";
import ico from "../../assets/non-intrusive.png";

const BootifyCard = () => {
  return (
    <div className="card">
      <div className="cardContainer">
        <div className="iconContainer">
          <img className="cardIcon" src={ico} alt="" />
        </div>
        <div className="iconTextContainer">
          <h4>Save tons of time</h4>
          <p>
            {" "}
            Get your application setup with frontend and REST API - in minutes
            instead of days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootifyCard;
