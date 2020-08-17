import React, { Component } from "react";
import {  Container } from "react-bootstrap";
import "../components/css/Home.css";
import Header from "./Header";
import AboutSection from "./AboutSection";
import FeaturedProjects from './FeaturedProjects';
import CallToAction from './CallToAction';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <AboutSection />
        <Container>
          <FeaturedProjects />
        </Container>
        <CallToAction />
      </React.Fragment>
    );
  }
}
