import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import clippinglogo from '../../asset/image/clipping.svg';
import mobiledevelopment from '../../asset/image/mobile.svg';
import devservice from '../../asset/image/web.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle"> Our Services</h1>
                    <Row>   
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={clippinglogo} />
                                 <h2 className="serviceName">Image Editing</h2>
                                <p className="serviceDescription">We are specialist on Clipping Path, Image Editing or any Photoshop, Illustrator services.</p>
                                {/* <Button variant="warning">Get Free Trial</Button>  */}
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={mobiledevelopment} />
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">We develop native or any mobile platform apps, let us know your requirements.</p>
                                {/* <Button variant="primary">Get Estimate</Button>    */}
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={devservice} />
                               <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">We design & develop static-dynamic, device responsive web site or web application.</p>
                                {/* <Button variant="primary">Get Estimate</Button>    */}
                        </div>
                    </Col>



                    {/* <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={clippinglogo} />
                                 <h2 className="serviceName">Photoshop Image Editing</h2>
                                <p className="serviceDescription">We are specialist on Clipping Path, Image Editing or any Photoshop, Illustrator services.</p>
                                <Button variant="warning">Get Free Trial</Button> 
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={mobiledevelopment} />
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">We develop native or any mobile platform apps, let us know your requirements.</p>
                                <Button variant="primary">Get Estimate</Button>   
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={devservice} />
                               <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">We design & develop static-dynamic, device responsive web site or web application.</p>
                                <Button variant="primary">Get Estimate</Button>   
                        </div>
                    </Col> */}
                    </Row>
                </Container>         
            </Fragment>
        )
    }
}

export default Services;
