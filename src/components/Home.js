import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { projectData } from "../projectData";
import "../components/css/Home.css";
import Header from "./Header";
import AboutSection from "./AboutSection";
import FeaturedProjects from "./FeaturedProjects";
import CallToAction from "./CallToAction";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      aboutImage: projectData[4].aboutImage[0].aboutImage,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <AboutSection image={this.state.aboutImage} />
        <Container>
          <FeaturedProjects />
        </Container>
        <CallToAction />
      </React.Fragment>
    );
  }
}
