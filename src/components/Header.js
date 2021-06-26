import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import { Link } from "react-router-dom";
import logo from "./../img/logo2.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./../css/header.css";

class Header extends React.Component {
  state = {
    grayScroll: false,
  };

  grayScrollFunction = () => {
    if (window.scrollY > 100) {
      this.setState({
        grayScroll: true,
      });
    } else {
      this.setState({
        grayScroll: false,
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.grayScrollFunction);
  };
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className={this.state.grayScroll ? "gray-scroll" : "bg-dark"}
      >
        <div className="container">
          <Navbar.Brand href="#home" className="m-auto">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
            <div className="barnd-text">
              <p>Course</p>
              <p>Camp</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              {!this.props.isAuthenticated ? <LoginButton /> : <LogoutButton />}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
