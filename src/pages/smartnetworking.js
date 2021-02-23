import React from "react";
// import NavBar from './navbar';
import { Row, Col, Image } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../header';
import Footer from '../footer';
import SplitCorCT from '../images/splitcorect.png';
import Converter from '../images/converter.png';
import Gate from '../images/gateway.png';
import Transducer from '../images/transducer.png';
import APFC from '../images/APFC.png';
import SmartIo from '../images/smartio.png';


function SmartNetworking() {
    return (
      
     <>
    <Header />
    <h2 style={{ textAlign: "center", paddingTop: "1rem" }}> <b>ELMEASURE </b> </h2>
            <div className="container" style={{ marginTop: "40px", "background-color": "rgb(245, 245, 239)"}}> 
            <Row>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/smartmonotor" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Transducer} className="imagecenter" Height="100px" width="100px" />
                    <h4>Smart Monitors </h4></Link>
            </div>
            </Col>
                <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to='/smartcontrol' style={{ color: "black", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={APFC} className="imagecenter" Height="100px" width="100px" />
                    <h4> Smart Controller</h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/smartresource" style={{ color: "black", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={SmartIo} className="imagecenter" Height="100px" width="100px" />
                    <h4>Smart  Resource</h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/smartnetworking" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" Height="100px" width="100px" />
                    <h4>Smart Networking</h4></Link>
            </div>
            </Col>
            
            </Row>
            <hr className="featurette-divider" />
            </div>
            <h2 style={{textAlign:"center" , paddingTop:"1rem"}}> <b>Smart Networking </b> </h2>

            <div className="container" style={{ marginTop: "40px" ,textAlign:"center"}}>
                {/* <MultiCarousel items = { categoryhr } />             */}
                <Row>
                    <Col>
                        <Link to="#splitcorect"> 
                        <Image src={SplitCorCT} height="130" width="180" rounded title="Power Quality Meter" />
                        <p style={{color:"black", paddingTop:"1rem",textAlign:"center"}}>Split Core CT  </p> </Link>
                    </Col>
                    <Col>
                        <Link to="#Converter" > 
                        <Image src={Converter} height="130" width="130" rounded title="APFC" />
                        <p style={{color:"black", paddingTop:"1rem",textAlign:"center"}}> Converter </p></Link>
                    </Col>
                    <Col>
                        <Link to="#Gate">  
                        <Image src={Gate} height="130" width="180" rounded  title="DemandControl" />
                        <p style={{color:"black", paddingTop:"1rem",textAlign:"center"}}> Gate  </p></Link>
                    </Col>
                </Row>
         
                <hr id="splitcorect"  className="featurette-divider"  />
            </div>
​
           
​
            <div className="container">
                <Row>
                    <Col>
                        <h2 style={{ textAlign: "center" }}><b> Split Core CT   </b></h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.Automatic Transfer Switch manufactures in India  </p> 
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                        <image href={SplitCorCT} alt="logo-img" width="100%" hight="100%"/></svg>
                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                        | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                    </Col>
                    <Col>
                        <h5><b>Salient Features</b></h5>
                        <ul className="ul">
                        <p>Salient Features</p>
                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                <li>Inbuilt control switch for selecting auto/manual mode</li>
                                <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                <li>Optional RS485 communication and cloud</li>
​
                        </ul>
                        <h5><b>Applications</b></h5>
                        <ul className="ul">
​
                        <li>Monitor real-time system voltage and frequency </li>
                                <li> Monitor source healthiness and output for both Source</li>
                                <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
​
​
​
                        </ul>
                    </Col>
                </Row>
            </div>
​
            <div className="container">
​
                <hr id="Converter" className="featurette-divider" />
​
                <Row>
                    <Col>
                        <h5><b>Salient Features</b></h5>
                        <ul className="ul">
                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                <li>Inbuilt control switch for selecting auto/manual mode</li>
                                <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                <li>Optional RS485 communication and cloud</li>
​
​
​
​
                        </ul>
                        <h5><b>Applications</b></h5>
                        <ul className="ul">
                        <li>Monitor real-time system voltage and frequency </li>
                                <li> Monitor source healthiness and output for both Source</li>
                                <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
​
​
                        </ul>
                    </Col>
​
                    <Col>
                        <h2  style={{ textAlign: "center" }}> Converter</h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.  Automatic Transfer Switch manufactures in India 
                        </p>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                        <image href={Converter} alt="logo-img" width="100%" hight="100%"/></svg>
                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                    </Col>
                </Row>
            </div>
​
            <div className="container">
​
                <hr id="Gate" className="featurette-divider" />
​
                <Row>
                    <Col>
                        <h2  style={{ textAlign: "center" }}>Gateway </h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.
                                   Automatic Transfer Switch manufactures in India 
 
                        </p>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                        <image href={Gate} alt="logo-img" width="100%" hight="100%"/> </svg>
                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                    </Col>
                    <Col>
                        <h5><b>Salient Features</b></h5>
                        <ul className="ul">
                        <li>User friendly contactless prepaid metering solution </li>
                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                <li>Inbuilt control switch for selecting auto/manual mode</li>
                                <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                <li>Optional RS485 communication and cloud</li>
​
​
                            
                        </ul>
                        <h5><b>Applications</b></h5>
                        <ul className="ul">
                        <li>Monitor real-time system voltage and frequency </li>
                                <li> Monitor source healthiness and output for both Source</li>
                                <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                        </ul>
                    </Col>
                </Row>
           </div>
    <Footer />
</>
    )
};
export default SmartNetworking;