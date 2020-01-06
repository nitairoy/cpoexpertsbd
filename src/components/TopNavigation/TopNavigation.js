import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { tsConstructorType } from '@babel/types';
import logo from "../../asset/image/CPOExperts-logo.svg";
import { NavLink } from "react-router-dom";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [logo],
      navBarItem: "navItem",
      pageTitle: props.title
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarItem: "navBarScroll"
      });
    } else if (window.scrollY < 100) {
      this.setState({ navBarTitle: "navTitle", navBarItem: "navItem" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>

        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand className={this.state.navBarTitle} href="/">
            <img src={this.state.navBarLogo} alt="CPO Experts Logo" /> CPO
            Experts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link> <NavLink exact activeStyle={{color:'#ff7f00'}} to="/">Home</NavLink></Nav.Link>  */}

              {/* <NavDropdown
                exact
                activeStyle={{ color: "#ff7f00" }}
                title={<span className="text-primary my-auto">Services</span>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/">Background Removal</NavDropdown.Item>
                <NavDropdown.Item href="/Pricing">
                  Image Editing
                </NavDropdown.Item>
                <NavDropdown.Item href="/aboutus">
                  Photo Retouching
                </NavDropdown.Item>
                <NavDropdown.Item href="/Contact">
                  Vector Conversion
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Contact">Mobile Apps</NavDropdown.Item>
                <NavDropdown.Item href="/services">Web Design</NavDropdown.Item>
                <NavDropdown.Item href="/projects">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/specialization">
                  Software Development
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link>
                {" "}
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/pricing">
                  The Team
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/aboutus">
                  About Us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/contact">
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#ff7f00" }}
                  className={this.state.navBarItem}
                  to="signin"
                >
                  Sign in
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#ff7f00" }}
                  className={this.state.navBarItem}
                  to="/signup"
                >
                  Sign up
                </NavLink>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
