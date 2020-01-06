import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';
import PageTop from '../components/PageTop/PageTop';


class AllPricing extends Component {
    render() {
        return (
            <Fragment>
            <TopNavigation title="Checkout Our Pricing for Clipping Path or Web Development" />
            <PageTop pagetitle="Pricing on different services"/>
            <Pricing />
            <Footer />

            </Fragment>
        )
    }
}

export default AllPricing;
