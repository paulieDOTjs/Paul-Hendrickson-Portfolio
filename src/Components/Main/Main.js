import React from "react";
import { Tween } from "react-gsap";

import "./Main.css";
import "./ExtraSmallMain.scss";
import "./SmallMain.scss";
import "./MediumMain.scss";
import "./LargeMain.scss";

import profilePic from "../../Media/prof-pic.jpeg";

function Main() {
  return (
    <div className="Main">
      <Tween from={{ opacity: 0, y: "20px" }} delay={1}>
        <h1>Hello, my name is Paul.</h1>
      </Tween>

      <Tween from={{ opacity: 0, y: "-20px" }} delay={3.5}>
        <h3>
          I am a full-stack web developer well-versed in HTML, CSS and
          JavaScript and am comfortable handling full stack front and back end
          systems. I am also a music arranger, singer, songwriter, pianist, and
          TTRPG player. I bring an equal degree of passion, creativity, and
          enthusiasm to all of my projects. I excel most with process
          management, innovation management, and dealing with ambiguity.
        </h3>
      </Tween>

      <Tween
        from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
        ease="back.out(1.4)"
        delay={2}
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
