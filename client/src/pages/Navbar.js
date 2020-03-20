import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = (WrappedComponent) => () => (
  <div>
    <div className="flex-container">
      <div>
        <Link to="/">Students</Link>
      </div>
      <div>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
    <div className="flex-container">
      <WrappedComponent />
    </div>
  </div>
);

export default Navbar;
