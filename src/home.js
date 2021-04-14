import React from 'react';
import Header from './header';
import Slider from './carousel';
import Services from './services';
import Footer from './footer';
import About from './about';
import Brand from './brand';


const Home = () => {
      return (
        <div className='flex-auto'>
          <Header />
          <Slider />
          <About />
          <Services />
          <Brand />
          <Footer />
        </div>
      );    
  }

  export default Home;