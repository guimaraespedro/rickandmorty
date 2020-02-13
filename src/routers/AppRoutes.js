import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import './AppRoutes'

const AppRoutes = () => {
  return (
    <Router className="app">
      <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
    </Router>
  );
};

export default AppRoutes;