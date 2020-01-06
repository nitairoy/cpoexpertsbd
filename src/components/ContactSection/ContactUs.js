import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
// import {FaIconPack} from 'react-icons/lib/fa';


// library.add(faEnvelope, faKey);

class ContactUs extends Component {
    render() {
        return (
            <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                    <h1 className="serviceMainTitle">Get reply in minutes</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="serviceDescription">Name</Form.Label>
                            <Form.Control type="name"/>
                        </Form.Group>  
                        <Form.Group>
                            <Form.Label className="serviceDescription">Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>  
                        <Form.Group>
                                <Form.Label className="serviceDescription">What is your urgency?</Form.Label>
                                <Form.Control as="select">
                                <option className="serviceDescription">General Inquiries</option>
                                <option className="serviceDescription">Order Inquiries</option>
                                <option className="serviceDescription">Invoice Inquiries</option>
                                <option className="serviceDescription">Quotation Inquiries</option>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="serviceDescription">Message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <h1 className="serviceMainTitle">Office Address</h1>
                    <h2 className="serviceName">CPO Experts Ltd.</h2>
                    <p className="serviceDescription">Chirirbandar, Dinajpur-5240</p>
                    <p className="serviceDescription">Bangladesh</p>
                    <hr />

                        <FontAwesomeIcon
                            icon="envelope"
                            color="#6DB65B"
                            size="sm"
                        />
                    <FontAwesomeIcon icon="envelope" />
                    <p className="serviceDescription">Email: support@cpoexpertsbd.com</p>
                    <hr />
                    <p className="serviceDescription">Phone: +880-1734173799</p>
                    


                    </Col>
                </Row>
            </Container>
            </Fragment>
        )
    }
}

export default ContactUs;
