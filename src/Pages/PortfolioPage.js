import React from "react";
import { Tween } from "react-gsap";

import { PortfolioInfo } from "../Media/PortfolioInfo";
import PortfolioCard from "../Components/PortfolioCard/PortfolioCard";

function MainPage() {
  return (
    <div className="ContainMe">
      <h1 className="Subheading">Portfolio</h1>
      <div className="PortfolioSection">
        <Tween from={{ opacity: 0 }} stagger={0.5} duration={1.5}>
          {PortfolioInfo.map((data) => (
            <div key={data.name + "wrapper"}>
              <PortfolioCard key={data.name} props={data} />
            </div>
          ))}
        </Tween>
      </div>
    </div>
  );
}

export default MainPage;
