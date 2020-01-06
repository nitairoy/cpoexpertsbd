import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
 class AllSpecialization extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <h1 className="serviceMainTitle">Experts on Image Editing Services</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="specialistImg" src="https://planetdigitalmedia.com/img/services/playing.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h4 className="text-justify specialistTitle">Clipping Path</h4>
                                <p className="text-justify specialistDes">Background removal service is one of Photoshop task, doing hand-drawn Clipping Path.</p>
                                <a className="specialistDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="specialistImg" src="https://planetdigitalmedia.com/img/services/playing.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h4 className="text-justify specialistTitle">Image Retouching</h4>
                                <p className="text-justify specialistDes">added 1 package from 1 contred 1 pack and audited 905116 packages in 28.839s</p>
                                <a className="specialistDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="specialistImg" src="https://planetdigitalmedia.com/img/services/playing.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h4 className="text-justify specialistTitle">Image Retouching</h4>
                                <p className="text-justify specialistDes">added 1 package frage from 1 contributor and audited 905116 packages in 28.839s</p>
                                <a className="specialistDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>  
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="specialistImg" src="https://planetdigitalmedia.com/img/services/playing.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h4 className="text-justify specialistTitle">Image Retouching</h4>
                                <p className="text-justify specialistDes">added 1 package 1 package from 1 contributor and audited 905116 packages in 28.839s</p>
                                <a className="specialistDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>    
                    </Row>
                </Container>    
            </Fragment>
        )
    }
}

export default AllSpecialization;
