import React, { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from 'recharts';
// import clippingPath from '../../asset/image/Clipping-Path.jpg';

 class Analyses extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {technology: 'HTML', Projects: 100},
                {technology: 'CSS', Projects: 90},
                {technology: 'SQL', Projects: 95},
                {technology: 'SASS', Projects: 100},
                {technology: 'Bootstrap', Projects: 100},
                {technology: 'React', Projects: 90},
                {technology: 'Angular', Projects: 50},
                {technology: 'Python', Projects: 100},
                {technology: 'PHP', Projects: 65},
               
            ]
        }
    }


    render() {

        var blue="rgba(0,115,230,0.8)"

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle"> Apps and web development solution</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                        <BarChart width={100} height={300} data={this.state.data}>
                            <XAxis dataKey="technology" />
                            <Tooltip/>
                            <Bar dataKey="Projects" fill={blue}> </Bar>        
                        </BarChart>
                        </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                        <p className="des text-justify" >
                        To build native android apps we use Java as well as kotline mainly. 
                        React JS is used for cross platform mobile application. 
                        we use MySQL database for relational database system. To build NoSQL application we use MongoDB. 
                        Firebase database system is used where it is necessary to provide realtime data flow facilities.

                        We always build dynamic application. 
                        Admin panel is the heart of such kinds of application. 
                        We always try to provide sufficient features in admin panel to dominate application. 
                        According to client demand We use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                        </p>
                       
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analyses;
