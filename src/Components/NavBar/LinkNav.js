import React from "react";
import { Link } from "react-router-dom";

function LinkNav({ word, active, url }) {
  return (
    <>
      {active ? (
        <li className="NavListItem WordNav Active">
          <Link to={url}>
            <span className="UpperCaseLetter">{word[0]}</span>
            {word.substring(1)}
          </Link>
        </li>
      ) : (
        <li className="NavListItem WordNav">
          <Link to={url}>
            <span className="UpperCaseLetter">{word[0]}</span>
            {word.substring(1)}
          </Link>
        </li>
      )}
    </>
  );
}

export default LinkNav;
