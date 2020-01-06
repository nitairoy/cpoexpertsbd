import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllSpecialization from '../components/AllSpecialization/AllSpecialization';
import Footer from '../components/Footer/Footer';
 class SpecializationPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <PageTop pagetitle="All Specialization"/>
                <AllSpecialization />
                <Footer />
            </Fragment>
        )
    }
}

export default SpecializationPage;
