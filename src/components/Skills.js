import React, { Component } from "react";
import { projectData } from "../projectData";
import SkillList from "./SkillList";
import SearchBox from "./SearchBox";
import { Container, } from "react-bootstrap";
import CoursesList from "./CoursesList";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: projectData[2].skills,
      courses: projectData[3].courses,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { skills, searchfield } = this.state;
    const filteredSkills = skills.filter((skill) => {
      return skill.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        <div className="text-center projects-div">
          <Container>
            <SearchBox searchChange={this.onSearchChange} />
            <SkillList skills={filteredSkills} />
          </Container>
        </div>
        <Container>
          <CoursesList courses={this.state.courses} />
        </Container>
      </div>
    );
  }
}
