import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-bootify-io.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarWrapper">
          <div className="logo">
            <img className="navLogo" src={logo} alt="" />
          </div>
          <div className="navLinks">
            <Link to={"/"} className="navLink">
              <a href="#">Home</a>
            </Link>
            <Link to={"/pricing"} className="navLink">
              <a href="#">Pricing</a>
            </Link>
            <Link to={"/about"} className="navLink">
              <a href="#">About</a>
            </Link>
            <Link to={"/contact"} className="navLink">
              <a href="#">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
