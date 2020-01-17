import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import clippinglogo from "../../asset/image/clipping.svg";
import mobiledevelopment from "../../asset/image/mobile.svg";
import devservice from "../../asset/image/web.svg";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Services in individual Branch</h1>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={clippinglogo} />
                <h2 className="serviceName">
                  <a href="https://clippingpathoutsource.com">
                    Clipping Path Outsource
                  </a>
                </h2>
                <p className="serviceDescription">
                  Image editing, e-commerce product optimization etc. services
                  are available from Clipping Path Outsource, a branch of CPO
                  Experts Ltd.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={devservice} />
                <h2 className="serviceName">
                  <a href="https://wedevsolution.com">We Dev Solution</a>
                </h2>
                <p className="serviceDescription">
                  Web application, mobile apps, business management software,
                  billing software etc. available. WeDevSolution is a sister
                  company of CPO Experts Ltd.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
