import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/Gallery/image-1.png";
import Image2 from "../../Images/Gallery/image-2.png";
import Image3 from "../../Images/Gallery/image-3.png";
import Image4 from "../../Images/Gallery/image-4.png";
import Image5 from "../../Images/Gallery/image-5.png";
import Image6 from "../../Images/Gallery/image-6.png";
import Image7 from "../../Images/Gallery/image-7.png";
import Image8 from "../../Images/Gallery/image-8.png";

const Gallery = () => {
  const Images = [
    { id: 1, imgName: Image1, alt: "" },
    { id: 2, imgName: Image2, alt: "" },
    { id: 3, imgName: Image3, alt: "" },
    { id: 4, imgName: Image4, alt: "" },
    { id: 5, imgName: Image5, alt: "" },
    { id: 6, imgName: Image6, alt: "" },
    { id: 7, imgName: Image7, alt: "" },
    { id: 8, imgName: Image8, alt: "" },
  ];

  return (
    <div>
      <Container>
        <SRLWrapper>
          <Row>
            {Images.map((item) => (
              <Col md={3} key={item.id}>
                <div className="m-1 text-center">
                  <a href={item.imgName}>
                    <Image
                      src={item.imgName}
                      alt={item.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </SRLWrapper>
      </Container>
    </div>
  );
};

export default Gallery;
