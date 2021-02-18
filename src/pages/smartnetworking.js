import React from "react";
// import NavBar from './navbar';
import { Row, Col, Image } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../header';
import Footer from '../footer';
import SplitCorCT from '../images/splitcorect.png';
import Converter from '../images/converter.png';
import Gate from '../images/gateway.png';

function SmartNetworking() {
    return (

        <>
            <Header />
            <div className="container" style={{ marginTop: "30px"}}>
                <Row>
                    <Col>
                        <Link to="#splitcorect">
                            <Image src={SplitCorCT} height="130" width="130" rounded title="Power Quality Meter" />
                            <p style={{ color: "black", paddingTop: "1rem" }}> Split Core CT  </p> 
                        </Link>
                    </Col>
                    <Col>
                        <Link to="#Converter" >
                            <Image src={Converter} height="130" width="130" rounded title="APFC" />
                            <p style={{ color: "black", paddingTop: "1rem" }}> APFC </p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="#Gate">
                            <Image src={Gate} height="130" width="130" rounded title="DemandControl" />
                            <p style={{ color: "black", paddingTop: "1rem" }}> Demand Control  </p>
                        </Link>
                    </Col>
                </Row>

                <hr className="featurette-divider" />
            </div>



            <div className="container">
                <Row>
                    <Col>
                        <h2 id="splitcorect" style={{ textAlign: "center" }}><b> Split Core CT   </b></h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.Automatic Transfer Switch manufactures in India  </p>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={SplitCorCT} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                    <Col>
                        <h5><b>Salient Features</b></h5>
                        <ul className="ul">
                            <li>Automatic start/stop operation of DG on mains failure
                            Overload tripping (optional) with inverse curve logic </li>
                            <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                            <li>Inbuilt control switch for selecting auto/manual mode</li>
                            <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                            <li>Optional RS485 communication and cloud</li>
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

            <div className="container">

                <hr className="featurette-divider" />

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
                        </ul>
                        <h5><b>Applications</b></h5>
                        <ul className="ul">
                            <li>Monitor real-time system voltage and frequency </li>
                            <li> Monitor source healthiness and output for both Source</li>
                            <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                            <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                        </ul>
                    </Col>

                    <Col>
                        <h2 id="Converter" style={{ textAlign: "center" }}> Converter</h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.  Automatic Transfer Switch manufactures in India
                        </p>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Converter} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                </Row>
            </div>

            <div className="container">

                <hr className="featurette-divider" />

                <Row>
                    <Col>
                        <h2 id="Gate" style={{ textAlign: "center" }}>Gateway </h2>
                        <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply.
                        Automatic Transfer Switch manufactures in India
                        
                        </p>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Gate} alt="logo-img" width="100%" hight="100%" /> </svg>
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