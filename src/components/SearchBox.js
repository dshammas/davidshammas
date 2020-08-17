import React from "react";

export default function SearchBox({ searchChange }) {
  return (
    <div className="pa2 mt-5 text-center">
      <h1 data-aos="slide-down">
        This is a full list of my skills, tools, and technologies that I have
        worked with. You can search for a skill below
      </h1>
      <input
        className="pa3 ba b--green bg-lightest-blue br4"
        data-aos="fade-in"
        type="search"
        placeholder="Search and find Skills"
        onChange={searchChange} //call this func. when value is entered in the search box
      />
    </div>
  );
}
