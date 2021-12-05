import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from '../../Images/Gallery/image-1.jpg';
import image2 from '../../Images/Gallery/image-2.jpg';

const Gallery = () => {
  return (
    <div>
      <Container>
        <Row>
        <h2 className="text-center fw-bold">Gallery</h2>
          <Col md={4}>
            <div className="text-center m-2 ">
              <Image className="img-fluid rounded shadow-sm" src={image1} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-2">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-2">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-2">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-2">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center m-2">
              <Image className="img-fluid rounded shadow-sm" src={image2} alt="galery" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
