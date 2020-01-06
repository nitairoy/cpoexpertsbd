import React, { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

 class Pricing extends Component {
    render() {
        return (
            <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                    <h1 className="serviceMainTitle">Write to Get Reply in minutes</h1>
                    
                    </Col>
                    <Col sm={12} md={6} lg={6}>

                    <h1 className="serviceMainTitle">Write to Get Reply in minutes</h1>
                    </Col>
                </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Pricing;
