import React, { Component } from "react";
import "./css/Contact.css";
import { Container } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="img-contact"></div>
        <br />

        <div className="container text-center">
          <h1>let's Get in touch!</h1>
          <p>Do not hesitate to contact me.</p>
        </div>

        <div className="container">
          <h3 className="text-center">Contact</h3>
          <div className=" p-text">
            <p>
              <span className="glyphicon glyphicon-map-marker"></span> Michigan,
              US
            </p>
            <p>
            {/* <i className="fas fa-envelope-open-text"></i>  */}
            Email: dshammas@oakland.edu
            </p>
          </div>
          <hr />
        </div>
        <Container className="contact-div">
          <div className="col-md-12 text-center">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
            <br />
            <div className="row">
              <div className="col-md-12 form-group">
                <button className="ds-cust-btn primary-btn text-dark" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </Container>
        <br/>
      </div>
    );
  }
}
