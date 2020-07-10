import React from "react";
import { Switch, Router, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Repository from "./repository/Repository";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repository" component={Repository}/>
  </Switch>
);
export default Routes;



