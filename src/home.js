import React from 'react';
import Header from './header';
import Slider from './carousel';
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
          <Slider  style={{paddingTop:'100'}}/>
          <About />
          <Services />
          <Brand />
          <Footer />
        </div>
      );    
  }

  export default Home;