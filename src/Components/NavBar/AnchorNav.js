import React from "react";

function LinkNav({ word, href }) {
  return (
    <>
      <li className="NavListItem">
        <a target="_blank" rel="noopener noreferrer" href={href}>
          <span className="UpperCaseLetter">{word[0]}</span>
          {word.substring(1)}
        </a>
      </li>
    </>
  );
}

export default LinkNav;
