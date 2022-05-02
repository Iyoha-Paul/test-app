import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="nav">
      <NavLink to="/" className="link">
        Home / Take a new test
      </NavLink>

      <div className="date">{date}</div>
    </div>
  );
};

export default Navbar;
