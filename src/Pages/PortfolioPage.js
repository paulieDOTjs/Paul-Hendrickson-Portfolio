import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./PortfolioPage.scss";
import PortfolioInfo from "../Media/PortfolioInfo.json";
import PortfolioCard from "../Components/PortfolioCard/PortfolioCard";
import SkillsList from "../Components/SkillsList/SkillsList";

const allCards = PortfolioInfo.cards;

const skills = [
  ...new Set(
    allCards
      .reduce((prev, curr) => [...prev, ...curr.technologies.split(",")], [])
      .map((str) => str.trim())
  ),
].sort((a, b) => a.localeCompare(b));

function MainPage() {
  const [redirect, setRedirect] = useState(false);
  const [filters, setFilters] = useState(
    useLocation()
      .search.substring(1)
      .split("&")
      .map((str) => str.replaceAll("%20", " "))
  );
  const [cards, setCards] = useState(allCards);

  useEffect(() => {
    if (filters.length === 1) {
      setCards(allCards);
    } else {
      setCards(
        allCards.filter((card) =>
          filters.some(
            (filter) => card.technologies.includes(filter) && filter !== ""
          )
        )
      );
    }
  }, [filters]);

  return (
    <>
      <div className="PortfolioMain">
        <div className="Subheading">
          <h1>Featured Projects I've Created:</h1>

          <div className="MyRow" style={{ justifyContent: "space-between" }}>
            <div style={{ width: "102px" }}></div>
            <h4>
              Filter out projects that don't include any of the following
              technologies:
            </h4>
            <ul className="SkillsList">
              <li>
                <button
                  onClick={() => {
                    setFilters([""]);
                    setRedirect(true);
                  }}
                >
                  Clear
                </button>
              </li>
            </ul>
          </div>
          <SkillsList
            redirect={redirect}
            setRedirect={setRedirect}
            setFilters={setFilters}
            filters={filters}
            skills={skills}
          />
        </div>
        <div className="PortfolioSection">
          {cards.map((card) => (
            <div key={card.name + "wrapper"}>
              <PortfolioCard
                redirect={redirect}
                setRedirect={setRedirect}
                setFilters={setFilters}
                filters={filters}
                key={card.name}
                cardInfo={card}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
