import React, { Component, Fragment } from 'react';
import {Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter, faLinkedinIn, faPinterest } from "@fortawesome/free-brands-svg-icons";


import logo from '../../asset/image/CPOExperts-logo.svg';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection footerTex">
                    
                    <Row>

                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="footerTitleLogo"> <img src={logo} alt="CPO Experts Logo"/> CPO Experts</h1>
                       
                        <a className="footerTex" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                        <a className="footerTex" href="#"><FontAwesomeIcon icon={faYoutube} /> Youtube</a><br/>
                        <a className="footerTex" href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a><br/>
                        <a className="footerTex" href="#"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</a><br/>
                        <a className="footerTex" href="#"><FontAwesomeIcon icon={faPinterest} /> Pinterest</a><br/>


                        {/* i will think later about this */}

                        {/* <span>Subscribe to our newsletter</span><br/>
                        <form class="form-inline">
                            <input type="email" class="form-control" placeholder="Email Address"></input>
                            <button type="button pull-right" class="btn btn-primary">Subscribe</button> </form> */}
                        </Col>
                        
                        <Col lg={3} md={6} sm={12} className="text-justify p-5"> 
                        <h1 className="footerTitle">Image Editing</h1>
                         <a className="footerTex" href="#">Clipping Path</a><br/>
                         <a className="footerTex" href="#">Drop Shadow </a><br/>
                         <a className="footerTex" href="#">Image Masking</a><br/>
                         <a className="footerTex" href="#">Image Retouching</a><br/>
                         <a className="footerTex" href="#">Image Optimization</a><br/>
                         <a className="footerTex" href="#">Image Manipulation</a><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                        <h1 className="footerTitle">Software Development</h1>
                         <a className="footerTex" href="#">Web Design</a><br/>
                         <a className="footerTex" href="#">Web Development</a><br/>
                         <a className="footerTex" href="#">Mobile Apps Development</a><br/>
                         <a className="footerTex" href="#">IT Software Development</a><br/>
                         <a className="footerTex" href="#">Discuss your need</a><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                        <h1 className="footerTitle">Company Info</h1>
                         <a className="footerTex" href="#">About Us</a><br/>
                         <a className="footerTex" href="#">Terms of Service</a><br/>
                         <a className="footerTex" href="#">Privacy Policy</a><br/>
                         <a className="footerTex" href="#">Testimonials</a><br/>
                         <a className="footerTex" href="#">Support Area</a><br/>
                        </Col>

                    </Row>

                    
                </Container>

                <Container fluid={true} className="text-center copyRightSelction">
                  <p className="copyRightLink"> This site is developed by Nitai Roy : <a className="copyRightLink" href="#">CPO Experts &copy; 2012-2020</a> </p> 
                </Container>

            </Fragment>
        )
    }
}

export default Footer;
