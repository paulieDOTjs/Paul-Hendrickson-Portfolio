import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  return (
    <div className="PortfolioCard">
      <h1>{props.props.name}</h1>
      <div className="MyRow">
        <span>
          <a style={{ textDecoration: "underline" }} href={props.props.URL}>
            Github
          </a>
        </span>
        <span>
          {props.props.liveSite === "N/A"
            ? "Live site: N/A"
            : " Click here for: " && (
                <a
                  style={{ textDecoration: "underline" }}
                  href={props.props.liveSite}
                >
                  Live Site
                </a>
              )}
        </span>
      </div>
      <p style={{ margin: "12px" }}>{props.props.description}</p>
      <img
      className='PortfolioImage'
        alt={props.props.name}
        src={process.env.PUBLIC_URL + props.props.image}
      />
    </div>
  );
}

export default PortfolioCard;
