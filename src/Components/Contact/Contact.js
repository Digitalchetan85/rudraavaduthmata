import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary fw-bold">ಸ್ಥಳ</h2>
        <Row className="justify-content-center">
          <Col md={4}>
            <h4 className="side-line text-center">
              <span className="line">
                <i className="fas fa-book-reader"></i>
              </span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="text-center p-2 bg-primary rounded shadow">
              <h4 className="text-white fw-bold">ಶ್ರೀ ರುದ್ರಾವಧೂತ ಮಠ</h4>
              <p className="lh-base text-white fw-bold">
                ರುದ್ರಸ್ವಾಮಿ ಪೇಠ, ಜಮಖಂಡಿ-587 301. <br/>Phone: +91 9945257512 
                
              </p>
              
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
