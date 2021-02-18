import React from 'react';
import './assets/css/App.css';
import { CurrentSlide, PlusSlides } from './showslide';
import Product5 from './images/earthleakagerelay.png';
import Product1 from './images/el1.png';
import Product2 from './images/el2.png';
import Product3 from   './images/el3.png';
import Product4 from './images/el4.png';
import product6 from './images/generatormonitoringunit.png';

class Slider extends React.Component {
  render () {
    return (
      <div className="App container" >
        <div className="heading">
           <h2>Featured Product</h2>
        </div>
          <div className="mySlides" style={{display:'block'}}>
            <div className="numbertext">1 / 6</div>
            <img src={Product4} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 6</div>
            <img src={Product1} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 6</div>
            <img src={Product2} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>
            
          <div className="mySlides">
            <div className="numbertext">4 / 6</div>
            <img src={Product3} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">5 / 6</div>
            <img src={Product5} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>
            
          <div className="mySlides">
            <div className="numbertext">6 / 6</div>
          <img src={product6} style= {{ width:"50%", height:"400px" }} alt="" />
          </div>
            
          <span className="prev" onClick={PlusSlides} src="none" value = "-1">❮</span>
          <span className="next" onClick={PlusSlides} src="none" value = "1">❯</span>

          <div className="caption-container">
            <p id="caption"></p>
          </div>
         
          <div id="myDIV" className="d-none d-lg-block" style={{paddingTop: "2rem"}}>
              <div className="row">
                  <div className="col-lg-2">
                    <img className="demo cursor" src={Product4} onClick={CurrentSlide} value="1" style= {{ width:"50%" }} alt="Smart Networking" />
                  </div>
                  <div className="col-lg-2">
                    <img className="demo cursor" src={Product1} onClick={CurrentSlide} value="2" style= {{ width:"50%" }} alt="Smart Monotring " />
                  </div>
                  <div className="col-lg-2">
                    <img className="demo cursor" src={Product2} onClick={CurrentSlide} value="3" style= {{ width:"50%" }} alt="Smart Controller " />
                  </div>
                  <div className="col-lg-2">
                    <img className="demo cursor" src={Product3} onClick={CurrentSlide} value="4" style= {{ width:"50%" }} alt="Smart Resouces " />
                  </div>
                  <div className="col-lg-2">
                    <img className="demo cursor" src={Product5} onClick={CurrentSlide} value="5" style= {{ width:"50%" }} alt="Earth Lekage Relay" />
                  </div>
                  <div className="col-lg-2">
                    <img className="demo cursor" src={product6}  onClick={CurrentSlide} value="6" style= {{ width:"50%" }} alt="Generator Monitoring Unit" />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Slider;