import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ContactUs from '../components/ContactSection/ContactUs';
import Footer from '../components/Footer/Footer';

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
            <TopNavigation title="About CPO Experts" />
            {/* <PageTop pagetitle="Contact Us" /> */}
            <ContactUs />
             <Footer />    
            </Fragment>
        )
    }
}

export default ContactPage;
