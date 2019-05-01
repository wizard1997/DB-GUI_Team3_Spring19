import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
import HomeFeed from './containers/homeFeed';
import DietTab from './containers/dietTab';
import FitnessTab from './containers/fitnessTab';
import AccountTab from './containers/accounttab';
import AppliedRoute from "./components/AppliedRoute";

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch history={history}>
  {/*
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
  */}
    <PrivateRoute exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <AppliedRoute path="/homeFeed/:userId" exact component={HomeFeed} props={childProps} />
    <AppliedRoute path="/fitness/:userId" exact component={FitnessTab} props={childProps} />
    <AppliedRoute path="/diet" exact component={DietTab} props={childProps} />
    <AppliedRoute path="/account" exact component={AccountTab} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;


  