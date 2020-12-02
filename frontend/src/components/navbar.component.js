import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <button type="button" class="btn btn-dark">
          <Link to="/registration">Registration</Link>
          </button>

        <button type="button" class="btn btn-dark">
          <Link to="/login">Login</Link>
          </button>
        </nav>
        )};

export default Navbar;
