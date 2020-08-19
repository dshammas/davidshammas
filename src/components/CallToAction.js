import React from "react";
import { Row, Col, Button, Nav } from "react-bootstrap";
import "./css/CallToAction.css";

export default function CallToAction() {
  return (
    <div className="CTADiv">
      <Row>
        <Col md={12} sm={12}>
          <div className="text-center">
            <h3 className="" data-aos="fade-in">Click to see all of my projects or Skills.</h3>
            <div style={{ display: "inline-flex" }}>
              <Row>
                <Col md={6} sm={12}>
                  <Nav.Link to="/projects" href="https://dshammas.github.io/davidshammas/#/projects">
                    <Button className="ds-cust-btn primary-btn" data-aos="zoom-in-right">
                      Projects
                    </Button>
                  </Nav.Link>
                </Col>
                <Col md={6} sm={12}>
                  <Nav.Link to="/skills" href="https://dshammas.github.io/davidshammas/#/skills">
                    <Button className="ds-cust-btn secondary-btn" data-aos="zoom-in-left">
                      Skills
                    </Button>
                  </Nav.Link>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
