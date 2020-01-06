import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor  from "react-visibility-sensor";


class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner mt-5">
                    <div className="summaryBannerOverlay">
                     <Container className="text-center">
                         <Row>
                            <Col lg={8} md={6} sm={12}>
                            <Row className="countSection">
                                <Col>
                                <h1 className="countNumber">

                                <CountUp start={900} end={1000}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                             )}
                                </CountUp>

                                </h1>
                                <h4 className="countTitle">Total Projects</h4>
                                <hr className="bg-white w-25"/>
                                </Col>
                                <Col>
                                <h1 className="countNumber">
                                
                                <CountUp start={400} end={500}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                             )}
                                </CountUp>

                                </h1>
                                <h4 className="countTitle">Total Clients</h4>
                                <hr className="bg-white w-25"/>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify">How it works</Card.Title>
                                                <Card.Text>
                                                    <p className="cardSubTitle text-justify"> <FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Send your equirements</p>
                                                    <p className="cardSubTitle text-justify"> <FontAwesomeIcon className="iconBullet"  icon={faCheckSquare} /> Wait while analysis</p>
                                                    <p className="cardSubTitle text-justify"> <FontAwesomeIcon className="iconBullet"  icon={faCheckSquare} /> Confirm the project</p>
                                                    <p className="cardSubTitle text-justify"> <FontAwesomeIcon className="iconBullet"  icon={faCheckSquare} /> Pilot code testing</p>
                                                    <p className="cardSubTitle text-justify"> <FontAwesomeIcon className="iconBullet"  icon={faCheckSquare} /> Final implementation</p>
                                                 </Card.Text>
                                        </Card.Body>
                                    </Card>    
                            </Col>
                         </Row>
                     </Container>

                    </div>
                </Container>
         </Fragment>
        )
    }
}

export default Summary;
