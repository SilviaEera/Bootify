import React from "react";
import "./Hero.css";
import plane from "../../assets/home_plane.png";
import cloud from "../../assets/home_cloud.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroWrapper">
          <div className="heroImg">
            <img src={plane} alt="" className="plane" />
            <img src={cloud} alt="" className="cloud" />
          </div>
          <div className="heroText">
            <h1 className="heroHeading">
              <strong>Best developer experience</strong> for
              <br />
              starting <nobr>Spring Boot apps&nbsp;-</nobr>
              <br />
              <nobr>
                <strong>best practices</strong> included
              </nobr>
            </h1>

            <div className="btnGroup">
              <a href="#" className="button">
                Go To Shop
              </a>
              <span class="noReg">No registration required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
