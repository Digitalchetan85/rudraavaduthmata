import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../../Images/slider/image-1.jpg";


const MainSlider = () => {
  const slides = [
    { id: 1, src: Slide1, alt: "" }

  ];
  return (
    <div>
      <Carousel>
        {slides.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
