import React from "react";
import "./Pages.css";
import { PortfolioInfo } from "../Media/PortfolioInfo";
import PortfolioCard from "../Components/PortfolioCard/PortfolioCard";

function MainPage() {
  return (
    <div className="ContainMe">
      {/* <h1 style={{ textAlign: "center", marginBottom: "48px" }}>Portfolio</h1> */}
      <div className="PortfolioSection">
        {PortfolioInfo.map((data) => {
          return <PortfolioCard key={data.name} props={data} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
