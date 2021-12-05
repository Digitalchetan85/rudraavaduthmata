import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary p-2">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="align-self-center">
            <div className="text-center">
              <p className="mb-0 text-white">All rights reserved by ಶ್ರೀ ರುದ್ರಾವಧೂತ ಮಠ ಜಮಖಂಡಿ</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
