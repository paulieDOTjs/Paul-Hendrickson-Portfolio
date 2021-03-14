import React from "react";
import { Tween } from "react-gsap";

import "./Main.css";

import profilePic from "../../Media/prof-pic.jpeg";

function Main() {
  return (
    <div className="Main">
      <Tween from={{ opacity: 0, y: "20px" }} delay={0.75}>
        <h1>Hello, my name is Paul.</h1>
      </Tween>

      <div>
        <Tween from={{ opacity: 0, y: "-20px" }} delay={3.25}>
          <h3>
            I am an innovative and passionate Full-Stack Web Developer with
            experience in analyzing, designing, programming, and the developing
            enterprise scale web-based multi-tier applications.
          </h3>
        </Tween>
        <Tween from={{ opacity: 0, y: "-100px" }} delay={4.5}>
          <h4>
            ...and a singer, songwriter, pianist, music arranger, storyteller,
            creator, and a big fan of tabletop roleplaying games (especially
            Dungeons and Dragons).
          </h4>
        </Tween>
      </div>

      <Tween
        from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
        ease="back.out(1.4)"
        delay={1.75}
      >
        <img
          className="ProfilePic"
          alt="Paul Hendrickson"
          src={profilePic}
        ></img>
      </Tween>
    </div>
  );
}

export default Main;
