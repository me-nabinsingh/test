import React from "react";
import {Router, Route, Switch } from "react-router-dom";

import history from "./util/history";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Index from "./pages/index/Index";

import Planets from "./pages/planets/Planets";
import PlanetDetails from "./pages/planetDetails/PlanetDetails";

import Admin from "./pages/admin/Admin";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

import NoMatch from "./pages/nomatch/NoMatch";


const App = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route exact path="/planets/" component={Planets} />
        <Route path="/planets/:id" component={PlanetDetails} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
