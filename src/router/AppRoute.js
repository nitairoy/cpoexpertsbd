import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import CorporateSocialPage from "../pages/CorporateSocialPage";
import SpecializationPage from "../pages/SpecializationPage";
import Leadership from "../components/Leadership/Leadership";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/leadership" component={Leadership} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/services" component={ServicePage} />
          <Route exact path="/csr" component={CorporateSocialPage} />
          <Route exact path="/specialization" component={SpecializationPage} />
        </Switch>
      </Fragment>
    );
  }
}
export default AppRoute;
