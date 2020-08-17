import React, { Component } from 'react';
import { projectData } from "../projectData";
import ProjectList from './ProjectList';

export default class FeaturedProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectData[1].featured,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-5" data-aos="fade-in"><strong>Featured Projects</strong></h1>
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}
