import React from "react";
import { Switch, Route } from "react-router-dom";
import { DASHBOARD_URL } from "./../routes";
import UserDashboard from "./dashboard/UserDashboard";

export default function Dashboard() {
  return (
    <Switch>
      <Route exact path={DASHBOARD_URL} component={UserDashboard} />
    </Switch>
  );
}
