import React from "react";
import Course from "./Course";

export default function CoursesList({ courses }) {
  return (
    <div>
      <h2 className="m-5 text-center" data-aos="zoom-in">All of My Related Courses</h2>
      {courses.map((course, i) => {
        return (
          <Course
            key={i}
            title={courses[i].title}
            image={courses[i].image}
            id={courses[i].id}
          />
        );
      })}
      <br />
      <br />
    </div>
  );
}
