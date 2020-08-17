import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import '../components/css/Project.css';
import Tilt from 'react-tilt';


export default function Project({ title, description, id, tools, code, view, image }) {
    
    return (
        <React.Fragment>
          <Container className="mt-5 mb-5">
            <Row>
              <Col lg={7} md={7} sm={12}>
                <Container data-aos="zoom-in-right">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <ul className="ml-5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: tools,
                      }}
                    ></div>
                  </ul>
                  
                  <a target="_blank" rel="noopener noreferrer" href={view.isAvailable ? view.link : '' }>
                    {
                      view.isAvailable ? <Button className="ds-cust-btn primary-btn">See Live</Button> : ''
                    }  
                  </a>

                  <a target="_blank" rel="noopener noreferrer" href={code.isAvailable ? code.link : '' }>
                    {
                      code.isAvailable ? <Button className="ds-cust-btn secondary-btn">See Code</Button> : ''
                    } 
                  </a>
                </Container>
              </Col>
              <Col lg={5} md={5} sm={12}>
              <Tilt className="Tilt" options={{ max : 30 }} style={{  }} >
                <div className="Tilt-inner" data-aos="flip-down"> 
                  <Image
                    height="auto"
                    width="300px"
                    src={image}
                    alt="Profile Image"
                    rounded
                    className="mx-auto d-block cust-image"
                  />
                 </div>
              </Tilt>
                
              </Col>
            </Row>
            <br />
            <br />
            <hr/>
          </Container>
        </React.Fragment>
    )
}
