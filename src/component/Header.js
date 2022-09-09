import React from "react";
import { Link } from "react-router-dom";
import "../scss/Layout.scss";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <ul className="utilMenu">
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Resume</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
