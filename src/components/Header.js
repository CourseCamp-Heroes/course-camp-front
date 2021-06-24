import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About Us</Link>
      </Navbar>
    );
  }
}

export default Header;
