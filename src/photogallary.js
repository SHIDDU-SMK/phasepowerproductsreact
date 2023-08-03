import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./assets/css/photogallary.css";
// import sliderImageUrl from"./data/photoGallary"
import { Container } from "react-bootstrap";
// import "react-image-lightbox/style.css";
import LightBox, { Modal, ModalGateway } from "react-images";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    img: "./assets/images/gallary/IMG_1.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_2.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_3.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_4.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_5.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_6.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_7.jpg",
  },

  {
    img: "./assets/images/gallary/IMG_8.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_9.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_10.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_11.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_12.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_13.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_14.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_15.jpg",
  },
  // {
  //   img:
  //   "./assets/images/gallary/IMG_16.jpg"
  // },
  {
    img: "./assets/images/gallary/IMG_17.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_18.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_19.jpg",
  },
  {
    img: "./assets/images/gallary/IMG_20.jpg",
  },
];

class PhotoGallary extends Component {
  _isMounted = false;
  state = {
    awsApiData: [],
    loading: false,
    lightboxIsOpen: false,
    // selectedIndex: 0,
    selectedImage: {},
  };

  componentDidMount() {
    this._isMounted = true;
    console.log("app mounted");
    this.setState({ loading: true });
    this.setState(
      {
        awsApiData: sliderImageUrl.map((item) => ({
          ...item,
          source: item.img,
        })),
        loading: false,
      }
      // () => console.log(data)
    );
    // );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleLightbox = (post, selectedIndex) => {
    // this.setState(state => ({
    //   lightboxIsOpen: !state.lightboxIsOpen,
    //   selectedIndex
    // }));
    this.setState((state) => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { author: post.author, index: selectedIndex },
    }));
  };
  render() {
    return (
      <>
        <Container>
          <h2 className="featurette-heading" style={{ paddingBottom: "4rem" }}>
            New Office Opening Ceremony
          </h2>
          <div
            className="parent"
            style={{ background: "rgba(248, 248, 248, 0.82)" }}
          >
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              autoPlaySpeed={6000}
              dotListClass="custom-dot-list-style"
            >
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <div
                    className="slider"
                    onClick={() => this.toggleLightbox(imageUrl, index)}
                    key={index}
                  >
                    <img src={imageUrl.img} alt="photos" />
                  </div>
                );
              })}
            </Carousel>
            <ModalGateway>
              {this.state.lightboxIsOpen ? (
                <Modal onClose={this.toggleLightbox}>
                  <LightBox
                    components={{
                      FooterCaption: (props) => {
                        return (
                          // <div>shot by - {this.state.selectedImage.author}</div>
                          <div>{props.currentView.author}</div> // this displays correct dynamic author
                        );
                      },
                    }}
                    // currentIndex={this.state.selectedIndex}
                    currentIndex={this.state.selectedImage.index}
                    // formatters={{ getAltText }}
                    frameProps={{ autoSize: "height" }}
                    views={this.state.awsApiData}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Container>
        <hr
          className="featurette-divider"
          style={{ borderColor: "transparent" }}
        />
      </>
    );
  }
}
export default PhotoGallary;
