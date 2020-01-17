import React, { Component, Fragment } from "react";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
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
                  <h1 className="topTitle">Retouching or Image Editing</h1>
                  <h4 className="topSubTitle">
                    Web Application or Software Development
                  </h4>
                  <br />
                  <h4 className="topSubTitle">
                    We focus on digitalization of products to improve visual
                    communication.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
export default TopBanner;
