import React from "react";
import { Link } from "react-router-dom";

function WordNav({ word, active, url }) {
  console.log(word);
  console.log(active);
  console.log(url);
  return (
    <>
      {active ? (
        <li className="NavListItem WordNav Active">
          <Link to={url}>
            {/* About */}
            <span className="UpperCaseLetter">{word[0]}</span>
            {word.substring(1)}
          </Link>
        </li>
      ) : (
        <li className="NavListItem WordNav">
          <Link to={url}>
            {/* About */}
            <span className="UpperCaseLetter">{word[0]}</span>
            {word.substring(1)}
          </Link>
        </li>
      )}
    </>
  );
}

export default WordNav;
