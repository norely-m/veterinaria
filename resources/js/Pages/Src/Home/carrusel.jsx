import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>This is the first slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>This is the second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>This is the third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
