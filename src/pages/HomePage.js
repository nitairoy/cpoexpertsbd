import React, { Component, Fragment } from 'react';

import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Analyses from '../components/Analysis/Analyses';
import Summary from '../components/Summary/Summary';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Specialization from '../components/Specialization/Specialization';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';

 class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="CPO Experts | Image Editing | Software Development | Web Development" />
                <TopBanner />
                <Services />
                <Analysis />
                <Analyses />
                <Summary />
                <RecentProjects />
                <Specialization />
                <Video />
                <ClientReview />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage;