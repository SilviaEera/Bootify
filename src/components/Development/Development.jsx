import React from "react";
import "./Development.css";
import DevelopmentRowOne from "./DevelopmentRowOne";
import DevelopmentRowTwo from "./DevelopmentRowTwo";

const Development = () => {
  return (
    <div className="development">
      <div className="container">
        <div className="developmentWrapper">
          <h1 className="developmentHeading">Jumpstart your development</h1>
          <DevelopmentRowOne />
          <DevelopmentRowTwo />
          <DevelopmentRowOne />
          <DevelopmentRowTwo />
        </div>
      </div>
    </div>
  );
};

export default Development;
