import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import CSR from "../components/CorporateSocial/CorporateSocial";
import Footer from "../components/Footer/Footer";

class CorporateSocialPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="About CPO Experts" />
        <PageTop pagetitle="About Recent Projects" />
        <CSR />
        <Footer />
      </Fragment>
    );
  }
}

export default CorporateSocialPage;
