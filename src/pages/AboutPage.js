import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';

 class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation  title="About CPO Experts"/>
                <PageTop  pagetitle="About Us"/>
               <AboutDescription />
                <Footer />

                
            </Fragment>
        )
    }
}

export default AboutPage;
