import React from "react";
import "./Main.css";
import profilePic from "../../Media/prof-pic.jpeg";

function Main() {
  return (
    <div className="Main">
      <div className="MainContainer Stretchy">
        <h1 style={{ marginBottom: "24px" }}>Hello, my name is Paul</h1>
      </div>
      <img className="ProfilePic" alt="Paul Hendrickson" src={profilePic}></img>
    </div>
  );
}

export default Main;
