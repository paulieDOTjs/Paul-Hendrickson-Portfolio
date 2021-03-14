import React from "react";
import "./PortfolioCard.css";
import CardLink from "./CardLink";

function PortfolioCard({ cardInfo }) {
  return (
    <div className="PortfolioCard">
      <div>
        <h1>{cardInfo.name}</h1>
        <div className="MyRow">
          <CardLink word="Github" url={cardInfo.url} />
          <CardLink word="Live Site" url={cardInfo.liveSite} />
        </div>
        <p>{cardInfo.description}</p>
      </div>
      <img
        className="PortfolioImage"
        alt={cardInfo.name}
        src={process.env.PUBLIC_URL + cardInfo.image}
      />
      <p>
        <span style={{ fontWeight: "bolder" }}>Technology Used:</span>{" "}
        {cardInfo.technologies
          .split(",")
          .map((str) => str.trim())
          .filter((str) => typeof str === "string" && str.length > 1)
          .sort((a, b) => a.localeCompare(b))
          .join(", ")}
      </p>
    </div>
  );
}

export default PortfolioCard;
