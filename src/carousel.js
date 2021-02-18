import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Enegery from './images/slid1.jpg';
import Auto  from './images/slide2.jpg';
import streetlight from './images/slide3.jpg';
import Light from './images/slide4.png';

function TpCarousel() {
    
  
      return (
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100 bounce-in-top"
                src={Enegery}
                alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <Image
                className=" puff-in-center d-block w-100"
                src={Auto}
                alt="Third slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <Image  className=" bounce-in-top d-block w-100"
                src={streetlight}
                alt="Third slide" />
              
            </Carousel.Item>
            <Carousel.Item>
              <Image  className=" bounce-in-top d-block w-100"
                src={Light}
                alt="Third slide" />
              </Carousel.Item>
          </Carousel>
       );
    }

export default TpCarousel;