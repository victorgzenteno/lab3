import React from "react";
import { Switch, Route } from "react-router-dom";
import { LANDING_URL } from "./../routes";
import Main from "./landing/Main";

export default function Landing() {
  return (
    <Switch>
      <Route exact path={LANDING_URL} component={Main} />
    </Switch>
  );
}
