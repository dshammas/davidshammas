import React, { Component } from "react";
import { projectData } from "../projectData";
import ProjectList from "./ProjectList";
import "./css/Projects.css";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectData[0].projects,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12} sm={12}>
            <ProjectList projects={this.state.projects} />
          </Col>
        </Row>
      </div>
    );
  }
}
