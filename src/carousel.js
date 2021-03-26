import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SlideOne from './assets/images/slide-0.webp';
import SlideTwo from './assets/images/slide-1.webp';
import SlideThree  from './assets/images/slide-2.webp';
import SlideFour from './assets/images/slide-3.webp';
import SlideFive from './assets/images/slide-4.webp';

function Slider() {    
  
      return (
          <Carousel >
            <Carousel.Item>
              <Image
                className="d-block w-100" 
                src={SlideOne}
                alt="First slide"
                style={{ paddingTop: '2rem'}}
                />
              
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <Image
                className="d-block w-100"
                src={SlideTwo}
                alt="Third slide"
                style={{ paddingTop: '2rem' }}
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <Image  className="d-block w-100"
                src={SlideThree}
                alt="Third slide"
                style={{ paddingTop: '2rem' }}
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <Image  className="d-block w-100"
                src={SlideFour}
                alt="Third slide" 
                style={{ paddingTop: '2rem' }} 
              />
              </Carousel.Item>
         
          <Carousel.Item>
              <Image  className="d-block w-100"
                src={SlideFive}
                alt="Third slide" 
                style={{ paddingTop: '2rem' }}/>
              </Carousel.Item>
          </Carousel>
       );
    }

export default Slider;