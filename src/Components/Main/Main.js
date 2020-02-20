import React from "react";
import "./Main.css";
import profilePic from "../../images/prof-pic.jpeg";

function Main() {
  return (
    <div className="Main">
      <div className="row Stretchy">
        <div className="col-8">
          <div className="MainContainer">
            <h1 style={{ marginBottom: "24px" }}>Hello, my name is Paul</h1>
            <h3>
              I am a full-stack web developer well-versed in HTML, CSS and
              javascript and am comfortable handling both front and back end
              systems. I am also a music arranger, singer, songwriter, pianist,
              and TTRPG player. I bring an equal degree of passion, creativity,
              and enthusiasm to all of my projects. I excel most with process
              management, innovation management, and dealing with ambiguity.
            </h3>
          </div>
        </div>
        <div className="col-4" style={{ display: "flex" }}>
          <img
            className="ProfilePic"
            alt="Paul Hendrickson"
            src={profilePic}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
