import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="PseudoBorder">
      <div className="Sidebar">
        <ul className="NavList">
          <li className="NavListItem">
            <Link to="/">
              <span className="UpperCaseLetter">A</span>bout
            </Link>
          </li>
          <li className="NavListItem">
            <Link to="/portfolio">
              <span className="UpperCaseLetter">P</span>
              <span style={{ marginLeft: "-4px" }}>ortfolio</span>
            </Link>
          </li>
          <li className="NavListItem">
            <a href="https://www.google.com">
              <span className="UpperCaseLetter">R</span>esume
            </a>
          </li>
          <li className="NavListItem">
            <a href="https://github.com/paulrobhendrickson">
              {/* Github */}
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="NavListItem">
            <a href="https://www.linkedin.com/in/paul-hendrickson-718332186/">
              {/* Linkedin */}
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Twitter */}
            <a href="https://twitter.com/paulie_js">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Phone */}
            <a href="tel:+19522502195">
              <i class="fas fa-phone"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Email */}
            <a href="mailto:paulrobhendrickson@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
