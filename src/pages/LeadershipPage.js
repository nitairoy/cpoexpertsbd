import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import Leadership from "../components/Leadership/Leadership";
import PageTop from "../components/PageTop/PageTop";

class LeadershipPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Checkout Our Pricing for Clipping Path or Web Development" />
        <PageTop pagetitle="Pricing on different services" />
        <Leadership />
        <Footer />
      </Fragment>
    );
  }
}

export default LeadershipPage;
