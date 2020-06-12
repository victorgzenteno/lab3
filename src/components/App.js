import React from "react";
import { Router } from "react-router-dom";
import history from "./../history";
import Navigation from "./layout/Navigation";
import Account from "./../pages/Account";
import Dashboard from "./../pages/Dashboard";
import Landing from "./../pages/Landing";
// eslint-disable-next-line
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navigation />
        <Landing />
        <Dashboard />
        <Account />
      </div>
    </Router>
  );
}

export default App;
