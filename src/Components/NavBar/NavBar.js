import React from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import LinkNav from "./LinkNav";
import AnchorNav from "./AnchorNav";

function NavBar() {
  const location = useLocation();

  return (
    <div className="PseudoBorder">
      <div className="NavBar">
        <ul className="NavList">
          <LinkNav word="About" active={location.pathname === "/"} url="/" />
          <LinkNav
            word="Projects"
            active={location.pathname === "/projects"}
            url="/projects"
          />

          <AnchorNav
            word="Resume"
            href="https://drive.google.com/file/d/1hnGp-o1_gx1TEMZccBPYUWNx12CdtEkj/view?usp=sharing"
          />

          <AnchorNav
            word="Github"
            href="https://github.com/paulrobhendrickson"
          />

          <AnchorNav word="Phone" href="tel:+19522502195" />

          <AnchorNav word="Email" href="mailto:paulrobhendrickson@gmail.com" />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
