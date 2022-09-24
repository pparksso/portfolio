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
            <a href="https://www.notion.so/sokey/d3342af590654545b32b49805c4afe6e" target="blank">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
