import React from "react";
import "./PortfolioCard.scss";
import CardLink from "./CardLink";
import SkillsList from "../SkillsList/SkillsList";

function PortfolioCard({
  cardInfo,
  filters,
  setFilters,
  redirect,
  setRedirect,
}) {
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
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        <p style={{ margin: "8px 0" }}> Technology Used: </p>
        <SkillsList
          redirect={redirect}
          setRedirect={setRedirect}
          setFilters={setFilters}
          filters={filters}
          skills={cardInfo.technologies
            .split(",")
            .map((str) => str.trim())
            .filter((str) => typeof str === "string" && str.length > 1)
            .sort((a, b) => a.localeCompare(b))}
        />
      </div>
    </div>
  );
}

export default PortfolioCard;
