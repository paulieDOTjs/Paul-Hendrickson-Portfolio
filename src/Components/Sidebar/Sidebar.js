import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="PseudoBorder">
      <div className="Sidebar">
        <ul className="NavList">
          <li className="NavListItem">
            <Link className="WordNav" to="/">
              {/* About */}
              <span className="UpperCaseLetter">A</span>bout
            </Link>
          </li>
          <li className="NavListItem">
            <Link className="WordNav" to="/portfolio">
              {/* Portfolio */}
              <span className="UpperCaseLetter">P</span>
              <span style={{ marginLeft: "-4px" }}>ortfolio</span>
            </Link>
          </li>
          {/* <li className="NavListItem">
            <a
              className="WordNav"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/open?id=1Kh5WEMasbLFWzCspyEu7Mf5XuJGByyXu"
            >
              <span className="UpperCaseLetter">R</span>esume
            </a>
          </li> */}
          <li className="NavListItem">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulrobhendrickson"
            >
              {/* Github */}
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="NavListItem">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paul-hendrickson-718332186/"
            >
              {/* Linkedin */}
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Twitter */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/paulie_js"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Phone */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+19522502195"
            >
              <i className="fas fa-phone"></i>
            </a>
          </li>
          <li className="NavListItem">
            {/* Email */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:paulrobhendrickson@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
