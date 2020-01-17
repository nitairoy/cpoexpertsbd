import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

class Analyses extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { technology: "ADOBE", Projects: 100 },
        { technology: "HTML5", Projects: 90 },
        { technology: "CSS3", Projects: 90 },
        { technology: "SASS", Projects: 50 },
        { technology: "MySQL", Projects: 90 },
        { technology: "SQL", Projects: 95 },
        { technology: "Boot", Projects: 60 },
        { technology: "React", Projects: 80 },
        { technology: "JScript", Projects: 90 },
        { technology: "VS", Projects: 100 },
        { technology: "Boot", Projects: 100 },
        { technology: "Java", Projects: 50 },
        { technology: "Python", Projects: 100 },
        { technology: "PHP", Projects: 65 },
        { technology: "Django", Projects: 80 }
      ]
    };
  }

  render() {
    var blue = "rgba(0,115,230,0.8)";

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">We use the following technology</h1>
          <Row>
            <Col
              style={{ width: "100%", height: "300px" }}
              lg={12}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}>
                    {" "}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analyses;
