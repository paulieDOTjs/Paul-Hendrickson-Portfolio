import React from "react";

function CardLink({ url, word }) {
  return (
    <span>
      {url === "N/A" ? (
        word + ": N/A"
      ) : (
        <a
          className="PortfolioLink"
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {word}
        </a>
      )}
    </span>
  );
}

export default CardLink;
