import React from 'react';
import Header from './header';
import TpCarousel from './carousel';
import Services from './services';
import Footer from './footer';
import About from './about';
// import Slider from './slider';
// import Product from './product';
// import Marketing from './marketing';
// import './assets/css/navbar.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/css/App.css';
// import './assets/css/album.css';
 import Brand from './brand';


const Home = () => {
      return (
        <div className="marketing">
          <Header />
          <TpCarousel />
          <About />
          <Services />
          <Brand />
          {/* <Slider /> */}
          <Footer />
        </div>
      );    
  }

  export default Home;