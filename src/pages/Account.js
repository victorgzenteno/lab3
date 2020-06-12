import React from "react";
import { Switch, Route } from "react-router-dom";
import { LOGIN_URL, REGISTER_URL } from "./../routes";
import Login from "./account/Login";
import Register from "./account/Register";

export default function Account() {
  return (
    <Switch>
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={REGISTER_URL} component={Register} />
    </Switch>
  );
}
