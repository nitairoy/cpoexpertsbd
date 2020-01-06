import React, { Component, Fragment } from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
// import cirleImg from '../../asset/image/nisha.jpg';
import cirle10 from '../../asset/image/iconfinder_10.svg';
import cirle4 from '../../asset/image/iconfinder_4.svg';
import cirle12 from '../../asset/image/iconfinder_12.svg';


class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 9000,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">What client says </h1>
                <Slider {...settings}>
                    <div>
                        <Row className="text-center">
                            <Col>
                            <h1 className="serviceName">Web Development</h1>
                            <p className="serviceDescription">Web development isadfd adfh adfdf. I love my country. Have to add text here. First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also </p>
                            <img className="cirleImg" src={cirle4} alt="David"/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="text-center">
                            <Col>
                            <h1>Web Development</h1>
                            <p>Web development isadfd adfh adfdf. I love my country. Have to add text here. First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also </p>
                            <img className="cirleImg" src={cirle10} alt="Warner"/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="text-center">
                            <Col>
                            <h1>Web Development</h1>
                            <p>Web development isadfd adfh adfdf. I love my country. Have to add text here. First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also </p>
                            <img className="cirleImg" src={cirle12} alt="Markus"/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="text-center">
                            <Col>
                            <h1>Web Development</h1>
                            <p>Web development isadfd adfh adfdf. I love my country. Have to add text here. First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also </p>
                            <img className="cirleImg" src={cirle12} alt="Nisha"/>
                            </Col>
                        </Row>
                    </div>
                </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default ClientReview;
