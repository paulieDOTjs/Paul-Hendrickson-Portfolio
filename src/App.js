import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainPage from "./Pages/MainPage";
import PortfolioPage from "./Pages/PortfolioPage";

import "./layout/Small.scss";
import "./layout/Medium.scss";
import "./layout/Large.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/portfolio" component={PortfolioPage} />
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
