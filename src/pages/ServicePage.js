import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';



 class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About CPO Experts" />
                <PageTop pagetitle="My Services"/>
                {/* <Services /> */}
                <Footer />
            </Fragment>
        )
    }
}

export default ServicePage;
