import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import item from '../../assets/images/home_slider_1.jpg';

export const Slider = () => {
  return (
    <div className="home_slider_container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
