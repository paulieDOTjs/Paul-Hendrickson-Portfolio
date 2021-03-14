import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tween } from "react-gsap";

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
  const [filters, setFilters] = useState(
    useLocation()
      .search.substring(1)
      .split("&")
      .map((str) => str.replaceAll("%20", " "))
  );
  const [cards, setCards] = useState(allCards);

  useEffect(() => {
    setCards(
      allCards.filter((card) =>
        filters.every((filter) => card.technologies.includes(filter))
      )
    );
  }, [filters]);

  return (
    <div className="PortfolioMain">
      <div className="Subheading">
        <h1>Featured Projects</h1>

        <div className="row">
          <h4>Filter by:</h4>
        </div>
        <SkillsList setFilters={setFilters} filters={filters} skills={skills} />
      </div>
      <div className="PortfolioSection">
        {cards.map((card) => (
          <Tween from={{ opacity: 0 }} duration={1.5}>
            <div key={card.name + "wrapper"}>
              <PortfolioCard key={card.name} cardInfo={card} />
            </div>
          </Tween>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
