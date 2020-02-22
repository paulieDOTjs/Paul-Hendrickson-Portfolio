import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage";
import PortfolioPage from "./Pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/portfolio" component={PortfolioPage} />
        </Switch>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
