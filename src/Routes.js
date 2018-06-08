import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '@Components/Loading';
import AuthenticatedRoute from '@Components/AuthenticatedRoute';
import UnauthenticatedRoute from '@Components/UnauthenticatedRoute';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ '@Pages/Homepage'),
  loading: Loading,
  modules: ['homepage']
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ '@Pages/Dashboard'),
  loading: Loading,
  modules: ['dashboard']
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "signin" */ '@Pages/SignIn'),
  loading: Loading,
  modules: ['signin']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
    <UnauthenticatedRoute exact path="/signin" component={SignIn} />

    <Redirect to="/" />
  </Switch>
);
