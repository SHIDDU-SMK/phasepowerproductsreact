import React from "react";
// import NavBar from './navbar';
import {Row, Col,Image } from 'react-bootstrap';
import { HashLink as  Link } from 'react-router-hash-link';
import Header from '../header';
import Footer from '../footer';
import SplitCorCT from '../images/splitcorect.png';
import Converter from '../images/converter.png';
import Gate from '../images/gateway.png';

function SmartNetworking (){
    return (
       <>
       <Header/>
       
       <Row>
    <Col> 
    <div className="container nav-link" style={{marginTop : "40px"}}>
                {/* <MultiCarousel items = { categoryhr } />             */}
            <Row> 
                <Col>
               <Link  to= "#splitcorect">  <p> <Image src = {SplitCorCT} height="100"  width="100" rounded  /> <br/>Split Core CT </p>  </Link>
               </Col>
               <Col>
               <Link to ="#Converter" >  <p> <Image src = {Converter} height="100"  width="100" rounded   /><br/> Converter </p></Link>
               </Col>
               <Col> 
                <Link to ="#Gate"> <p> <Image src = {Gate} height="100"  width="100" rounded /><br/> Gateway</p></Link>
                </Col>
            </Row>      
            </div>
               
                        <h1 style={{ "textAlign": "center", "text-decoration": "underline" }}><strong>SMART Networking </strong></h1>
                
                        <div>
                            
                                <Row>
                                    <Col>
                                        <h2 id="splitcorect" style={{ textAlign: "center", "text-decoration": "underline" }}> Split Core CT </h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> Seamless switching between sources for uninterrupted supply.
                                   Automatic Transfer Switch manufactures in India </p>
                                        <Image src={SplitCorCT} height="250" width="400" rounded />
                                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                        <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                        <li>Inbuilt control switch for selecting auto/manual mode</li>
                                        <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                        <li>Optional RS485 communication and cloud</li>
                                        <br />
                                        <p>Applications</p>
                                        <li>Monitor real-time system voltage and frequency </li>
                                        <li> Monitor source healthiness and output for both Source</li>
                                        <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                        <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                                    </Col>
                                </Row>
                                <div className="divider-line"></div>
                                <Row>
                                    <Col>
                                        <h2 id="Converter" style={{ textAlign: "center", "text-decoration": "underline" }}> Converter </h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> Seamless switching between sources for uninterrupted supply.
                                   Automatic Transfer Switch manufactures in India </p>
                                        <Image src={Converter} height="250" width="400" rounded />
                                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                        <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                        <li>Inbuilt control switch for selecting auto/manual mode</li>
                                        <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                        <li>Optional RS485 communication and cloud</li>
                                        <br />
                                        <p>Applications</p>
                                        <li>Monitor real-time system voltage and frequency </li>
                                        <li> Monitor source healthiness and output for both Source</li>
                                        <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                        <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                                    </Col>
                                </Row>
                                <div className="divider-line"></div>
                                <Row>
                                    <Col>
                                        <h2 id="Gate" style={{ textAlign: "center", "text-decoration": "underline" }}> Gateway </h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> Seamless switching between sources for uninterrupted supply.
                                   Automatic Transfer Switch manufactures in India </p>
                                        <Image src={Gate} height="250" width="400" rounded />
                                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                        <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                        <li>Inbuilt control switch for selecting auto/manual mode</li>
                                        <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                        <li>Optional RS485 communication and cloud</li>
                                        <br />
                                        <p>Applications</p>
                                        <li>Monitor real-time system voltage and frequency </li>
                                        <li> Monitor source healthiness and output for both Source</li>
                                        <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                        <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                                    </Col>
                                </Row>
                                <div className="divider-line"></div>
                                </div> 
    </Col>
      </Row>
     <Footer/>
 
     </>
       )
 };
 export default  SmartNetworking;