import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../components/css/CustomNavbar.css';
// import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" sticky="top" collapseOnSelect expand="md" >
        <Navbar.Brand className="brand" href="https://dshammas.github.io/davidshammas/#/">DSEngineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navBar" >
            <Nav.Link className="navBarItem" eventKey="/" href="https://dshammas.github.io/davidshammas/#/" >Home</Nav.Link>
            <Nav.Link className="navBarItem" eventKey="/projects" key={2} href="https://dshammas.github.io/davidshammas/#/projects">Projects</Nav.Link>
            <Nav.Link className="navBarItem" eventKey="/skills" key={3} href="https://dshammas.github.io/davidshammas/#/skills">Skills</Nav.Link>
            {/* <Nav.Link className=" navBarItem" eventKey="/contact" key={4} href="/contact">Contact</Nav.Link> */}
            <Nav.Link className=" navBarItem" eventKey="/blog" key={4} href="https://dshammas.github.io/davidshammas/#/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
