import React from 'react';
import Header from './header';
import TpCarousel from './carousel';
import Services from './services';
import Footer from './footer';
import About from './about';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Brand from './brand';


const Home = () => {
      return (
        <div className="marketing">
          <Header />
          <TpCarousel />
          <About />
          <Services />
          <Brand />
          <Footer />
        </div>
      );    
  }

  export default Home;