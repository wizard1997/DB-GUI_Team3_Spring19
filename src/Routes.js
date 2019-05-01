import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
import HomeFeed from './containers/homeFeed';
import DietTab from './containers/dietTab';
import FitnessTab from './containers/fitnessTab';
import AccountTab from './containers/accounttab';
import AppliedRoute from "./components/AppliedRoute";

import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/homeFeed" exact component={HomeFeed} props={childProps} />
    <AppliedRoute path="/fitness" exact component={FitnessTab} props={childProps} />
    <AppliedRoute path="/diet" exact component={DietTab} props={childProps} />
    <AppliedRoute path="/account" exact component={AccountTab} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

