import React from "react";
import "./Main.css";
import profilePic from "../../Media/prof-pic.jpeg";

function Main() {
  return (
    <div className="Main">
      <div className="MainContainer Stretchy">
        <h1 style={{ marginBottom: "24px" }}>Hello, my name is Paul</h1>
        <h3>
          I am a front end web developer well-versed in HTML, CSS and JavaScript
          and am comfortable handling full stack front and back end systems. I
          am also a music arranger, singer, songwriter, pianist, and TTRPG
          player. I bring an equal degree of passion, creativity, and enthusiasm
          to all of my projects. I excel most with process management,
          innovation management, and dealing with ambiguity.
        </h3>
      </div>
      <img className="ProfilePic" alt="Paul Hendrickson" src={profilePic}></img>
    </div>
  );
}

export default Main;
