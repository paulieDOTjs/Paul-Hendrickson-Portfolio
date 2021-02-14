import React from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import WordNav from "./WordNav";

function NavBar() {
  const location = useLocation();

  return (
    <div className="PseudoBorder">
      <div className="NavBar">
        <ul className="NavList">
          <WordNav word="About" active={location.pathname === "/"} url="/" />
          <WordNav
            word="Portfolio"
            active={location.pathname === "/portfolio"}
            url="/portfolio"
          />
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

export default NavBar;
