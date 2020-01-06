import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { Container, Row, Col, Button } from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">Image Editing or Web Development </h1>
                                    <h4 className="topSubTitle">Vector Conversion or Apps Development </h4>
                                    <br/>
                                    <Button variant="primary" size="lg">Get Started</Button>   
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default TopBanner;
