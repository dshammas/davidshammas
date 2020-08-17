import React, { Component } from "react";
import "./css/Blog.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-img">
          <div className="blog-text">
            <h1>Coming Soon</h1>
              <Link to="/">
                <Button className="ds-cust-btn primary-btn">Home</Button>
              </Link>
          </div>
      </div>
    );
  }
}
