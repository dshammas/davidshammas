import React from "react";
import "./css/AboutSection.css";
import { Row, Col, Image } from "react-bootstrap";


export default function AboutSection() {
  return (
    <React.Fragment>
      <div className="aboutDiv">
        <br />
        <div className="text-center">
          <h1 data-aos="fade-in">About Me...</h1>
          <br />
          <br />
        </div>

        <Row className="justify-content-center">
          <Col md={6} sm={12} data-aos="fade-up">
            <Image
              height="auto"
              width="300px"
              src="img/ds-about.jpg"
              alt="Profile Image"
              rounded
              className="mx-auto d-block about-image"
            />
          </Col>
          <Col md={6} sm={12}>
            <Row>
              <Col md={12} sm={12}>
                <div className="text-center" data-aos="zoom-in-left">
                  <p className="">
                    Self-motivated Computer Science and Software Engineering student at Oakland
                    University. Enthusiastic team player adept at building
                    strong relationships with co-workers and management.
                    Continuously improves tech, programming and web publishing
                    skills. Experienced software and application developer with
                    solid understanding of object oriented programming and data
                    Structures. Able to handle complex problems and provide
                    efficient solutions. I'm a LifeLong Learner. 
                  </p>
                  <br />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
      </div>
    </React.Fragment>
  );
}
