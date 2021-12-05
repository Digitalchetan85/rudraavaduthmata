import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../../Images/testimonials/image-1.png";
import img2 from "../../Images/testimonials/image-2.png";
import img3 from "../../Images/testimonials/image-3.png";
import img4 from "../../Images/testimonials/image-4.png";
import img5 from "../../Images/testimonials/image-5.png";
import img6 from "../../Images/testimonials/image-6.png";
import img7 from "../../Images/testimonials/image-7.png";
import img8 from "../../Images/testimonials/image-8.png";
import img9 from "../../Images/testimonials/image-9.png";
import img10 from "../../Images/testimonials/image-10.png";

const CoursesAfter = () => {
  const associations = [
    { id: 1, imgurl: img1, alt: "" },
    { id: 2, imgurl: img2, alt: "" },
    { id: 3, imgurl: img3, alt: "" },
    { id: 4, imgurl: img4, alt: "" },
    { id: 5, imgurl: img5, alt: "" },
    { id: 6, imgurl: img6, alt: "" },
    { id: 7, imgurl: img7, alt: "" },
    { id: 8, imgurl: img8, alt: "" },
    { id: 9, imgurl: img9, alt: "" },
    { id: 10, imgurl: img10, alt: "" },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };
  return (
    <div id="association-slider">
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Success Stories</h2>
        <Row className="justify-content-center">
          <Col md={4}>
            <h4 className="side-line text-center">
              <span className="line">
                <i className="fas fa-book-reader"></i>
              </span>
            </h4>
          </Col>
        </Row>
        <OwlCarousel options={options}>
          {associations.map((item, index) => (
            <div className="text-center" key={index}>
              <Image src={item.imgurl} alt={item.alt} className="img-fluid" />
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default CoursesAfter;
