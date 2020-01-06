import React, { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import clippingPath from '../../asset/image/Clipping-Path.jpg';

 class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle"> Image Editing Solution</h1>
                    <Row>
                        <div>
                        <Col lg={6} md={12} sm={12}>
                        <img src={clippingPath} alt="Clipping Path to White Background" /> 
                        </Col>
            
                        </div>
                
                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify photoshopIntro"> We have been providing most of the Photoshop Image-Editing task precisely since 2012.
                        For example, Clipping Path to white background, image optimization for web publication. 
                        You can try our free trial background removal services or let us know your requirements.</p>

                        </Col>
            
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis;
