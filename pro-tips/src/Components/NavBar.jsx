import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="top-left">
          <Link to="/">Home</Link>
        </div>
        <div className="top-right">
          <Link to="/About">About</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;