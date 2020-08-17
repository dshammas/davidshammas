import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../components/css/Header.css";

export default function Header() {
  return (
    <div>
      <div className="hero-image" data-aos="fade-in">
        <div className="hero-text">
          <h1>I'm <span className="nameClass">David Shammas</span></h1>
          <h4>Software Engineer / Developer</h4>
          <div className="hero-btn">
          <Link to="/projects">
            <Button className="ds-cust-btn primary-btn">Know more</Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
