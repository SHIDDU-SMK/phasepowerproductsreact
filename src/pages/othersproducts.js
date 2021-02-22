import React from "react";
import Header from '../header';
// import Contactus from './contactus';
import { Row, Col, Image } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import Ampturn from '../images/ampturn.png';
import Amplogo from '../images/amplogo.png'
// import Ampturnproduct from './images/ampturn1.png';
import Footer from '../footer';
// import { HashLink as  Link } from 'react-router-hash-link';
// import SubNav from '../subnav';


function Otherproducts() {
    return (
        <>
            <Header />
                    <div className="container" style={{ marginTop: "40px"}}>
                        {/* <MultiCarousel items = { categoryhr } />             */}
                        <h2  style={{backgroundColor: "grey", color:"white", textAlign:"center", paddingBottom:"1rem"}}><b> AMPTURN ELECTRICALS</b> <Image src={Amplogo}></Image> </h2>
                        
                        <Row>
                            <Col>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Ampturn} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                            <Col>
                           
                            <h5><b>Current Transformer </b></h5>
                                <ul className="ul">
                                        <li> Cast Resin CT With Windows, Bar, & Wound Primary Type</li>
                                        <li>Tpe Insulated CT withwindow type</li>
                                        <li>Bar Type & Wound primary type </li>
                                        <li>Modulded case CT with window </li>
                                        <li>Type & Wound primary type </li>

                                </ul>
                                <h5><b>VOLTAGE TRANSFORMER </b></h5>
                                <ul className="ul">

                                <li>Cast Resin VT 1Phase, 2Phase & 3Phase </li>
                                <li> Vacumm Pressure Impregnated </li>
                                <li> Voltage transformer (VT) with 1Phase, 2Phase & 3Phase </li>
                                </ul>
                                <h5><b>Transformers & Reactors </b></h5>
                                <ul className="ul">

                                <li> Cast Resin control Transformer/ power transformer/ Excitation </li>
                                <li> Transformer in single Phase & Three Phase </li>
                                <li> Vaccum Pressure Impregranated (VPT) control Transformer/power </li>
                                <li> Transfromer/ Exication transformer in single phase and three phase</li>
                                <li> Line Chokes/ Reactors in 1phase and 3phase</li>
                                <li> High Current booster Transformers</li>
                                
                                </ul>
                            </Col>
                        </Row>
                    </div>

                
            <Footer />
        </>
    )
};

export default Otherproducts;