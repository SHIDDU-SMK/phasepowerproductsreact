import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import './assets/css/multi-carousal.css';


const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
      carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;

  return (
      <div className="carousel-button-group">
        <button aria-label="Go to previous slide"
            className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}
            onClick={() => previous()} ></button>
        <button aria-label="Go to next slide" 
            className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
            onClick={() => next()} ></button>
      </div>
  );
};

const responsive = {
  desktop: {
    id: 1,
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    id: 2,
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    id: 3,
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class MultiCarousel extends Component {
  render() {
    return (
      <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={ true }
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removecustomButtonGroupOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-0-px"
        renderDotsOutside={false}
        focusOnSelect={true}
        customButtonGroup={<ButtonGroup
          next={this.props.next}
          previous={this.props.previous}
          rest={this.props.rest}
        />}
        arrows={false} 
        additionalTransfrom={-4 * 4}
        >
               {
          this.props.items.map( item =>
            <Col width = '100%' style={{ marginLeft: '2.20rem', paddingRight: '3.5rem'}}>
                <Image src={item.url } width='100%' height='100'/>
                <h5 style={{ textAlign: 'center', color : 'grey',marginBottom : '30px'}}>{ item.title }</h5>
            </Col>
          )
        }
        </Carousel>
       
        );
    }
  }

export default MultiCarousel;