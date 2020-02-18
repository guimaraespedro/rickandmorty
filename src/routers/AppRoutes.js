import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Episodes from "../pages/Episodes/Episodes";
import "./AppRoutes";

const AppRoutes = () => {
  return (
    <Router className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          {<Redirect to="/home" />}
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/home/:id" component={Home} />
        <Route path="/episodes" component={Episodes} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
