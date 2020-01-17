import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
              <Nav.Link>
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/contact">
                  The Team
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#ff7f00" }}
                  to="/leadership"
                >
                  Leadership Team
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/aboutus">
                  About Us
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink exact activeStyle={{ color: "#ff7f00" }} to="/csr">
                  CSR
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
