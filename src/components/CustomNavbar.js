import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../components/css/CustomNavbar.css';
// import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" sticky="top" collapseOnSelect expand="md" >
        <Navbar.Brand className="brand" href="/">DSEngineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navBar" >
            <Nav.Link className="navBarItem" eventKey="/" href="/" >Home</Nav.Link>
            <Nav.Link className="navBarItem" eventKey="/projects" key={2} href="/projects">Projects</Nav.Link>
            <Nav.Link className="navBarItem" eventKey="/skills" key={3} href="/skills">Skills</Nav.Link>
            {/* <Nav.Link className=" navBarItem" eventKey="/contact" key={4} href="/contact">Contact</Nav.Link> */}
            <Nav.Link className=" navBarItem" eventKey="/blog" key={4} href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
