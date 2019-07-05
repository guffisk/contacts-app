import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherComponent from "./Components/OtherComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={OtherComponent} />
      </div>
    </Router>
  );
}

export default App;
