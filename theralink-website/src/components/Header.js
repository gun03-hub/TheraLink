import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import logo from "../assets/images/logo.jpg"; // Correct logo path

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="TheraLink Logo" className="logo" />
        <h1>TheraLink</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
