import React from "react";
import "./css/Footer.css";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer-div">
      <footer className="page-footer bg-light">
        <div className="container text-center ">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold mt-3 mb-4">DSEngineer</h5>
              <p>
                Thank you for visiting my website. Do not hesitate to contact
                me.<br/> <strong>dshammas@oakland.edu</strong>
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                
              </h5>

              <ul className="list-unstyled">
                <li>
                <Nav.Link className="ds-cust-btn p-0 m-auto" to="/" href="https://dshammas.github.io/davidshammas/#/" >Home</Nav.Link>
                  {/* <Link href="/" to="/">
                    <span className="ds-cust-btn ">Home</span>
                  </Link> */}
                </li>
                <li>
                <Nav.Link className="ds-cust-btn p-0 m-auto" key={2} href="https://dshammas.github.io/davidshammas/#/projects">Projects</Nav.Link>
                  {/* <Link to="/projects">
                    <span className="ds-cust-btn ">Projects</span>
                  </Link> */}
                </li>
                <li>
                <Nav.Link className="ds-cust-btn p-0 m-auto" key={4} href="https://dshammas.github.io/davidshammas/#/blog">Blog</Nav.Link>
                  {/* <Link to="/blog">
                    <span className="ds-cust-btn ">Blog</span>
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dshammas" className="btn-floating btn-fb mx-1">
                <i className="fa fa-github"> </i>
              </a>
          </li>
        </ul>

        <div className="footer-copyright text-center py-3">
          &#169; Copyright 2020<br/>
          <span className="text-primary"><strong>DSEngineer</strong></span>
        </div>
      </footer>
    </div>
  );
}
