import React, { Component, Fragment } from "react";

import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Analyses from "../components/Analysis/Analyses";
import Summary from "../components/Summary/Summary";
import CorporateSocial from "../components/CorporateSocial/CorporateSocial";
import Specialization from "../components/Specialization/Specialization";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";
import Leadership from "../components/Leadership/Leadership";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="CPO Experts | Image Editing | Software Development | Web Development" />
        <TopBanner />
        <Services />
        {/* <Analysis /> */}
        <Analyses />
        <Summary />
        <ClientReview />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
