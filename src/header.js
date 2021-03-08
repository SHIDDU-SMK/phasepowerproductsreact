import React, { useState } from 'react';
 import Logo from './images/phaselogo.png';
import './assets/css/style.css';
import './assets/css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image, Row, Col} from 'react-bootstrap';
import SmartIo from './images/smartio.png';
import Gate from './images/gateway.png';
import BZMMccb from './images/eaton/mccb/eatonbzm.jpg';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: '#33958C' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="100" height="40"/>
             </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <Link className="nav-link">Products 
                            <i class="fa fa-caret-down">
                            </i>
                        </Link>
                        <div class="menudropdown-content" >
                            <Row>
                                <Col md={8} >
                                    <Row md={4} className="justify-content-center">
                                        <h5>
                                            Elmeasure India Pvt Ltd
                                        </h5>
                                    </Row>
                                    <Row md={4}>
                                        <div className="menucolumn" >
                                            <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                                <Image src={SmartIo} height="60px" /> 
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Smart Resource
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodsn" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate} height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Smart Network
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodsm" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate} height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Smart Monitor
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodsc" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate} height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Smart Control
                                                </span>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={4} >
                                    <Row md={2} className="justify-content-center">
                                    <h5>
                                        Lubi Electronics Pvt Ltd 
                                    </h5>
                                    </Row>
                                    <Row md={1}>
                                        <div class="menucolumn" >
                                            <Link to='/prodlb' onClick={() => setExpanded(false)}>
                                                <Image src={BZMMccb}  height="60px" /> 
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    SMPS
                                                </span>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <Row md={4} className="justify-content-center">
                                        <h5>
                                            Deepsea Electronics
                                        </h5>
                                    </Row>
                                    <Row md={4}>
                                        <div className="menucolumn" >
                                            <Link to="/prodst" onClick={() => setExpanded(false)}>
                                                <Image src={SmartIo}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Start Control Modules
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodfc" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Failure Control Modules
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodsh" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Sharing Control Modules
                                                </span>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <Row md={2}  className="justify-content-center">
                                        <h5>
                                            Eaton Power Quality Pvt Ltd 
                                        </h5>
                                    </Row>
                                    <Row md={1}>
                                        <div class="menucolumn" >
                                            <Link to='/prodea' onClick={() => setExpanded(false)}>
                                                <Image src={BZMMccb}  height="60px" /> 
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    MCCB
                                                </span>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <Row md={4} className="justify-content-center">
                                        <h5>
                                            Other Products
                                        </h5>
                                    </Row>
                                    <Row md={4}>
                                        <div className="menucolumn" >
                                            <Link to="/prodsec" onClick={() => setExpanded(false)}>
                                            <Image src={Gate}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Seco Products
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodlp" > 
                                                <Image src={Gate}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Leap Industries
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="menucolumn" >
                                        <Link to="/prodkv" > 
                                            <Image src={Gate}  height="60px" />
                                            <hr width = '100'/>
                                            <span class="text-black-50">
                                                Kalaivani Electricals 
                                            </span>
                                        </Link>
                                        </div>
                                        <div className="menucolumn" >
                                            <Link to="/prodrb" > 
                                                <Image src={Gate}  height="60px" />
                                                <hr width = '100'/>
                                                <span class="text-black-50">
                                                    Rishabh Instruments 
                                                </span>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Link to="/#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="/#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span className="nav-link" style={{ fontSize: "16px", color: "white" }}>
                        <i className="fa fa-phone"></i> &emsp;
                        <Link to="+91 123456790" className="fa" style={{ color: "white" }}> 
                        +91 1234567890 </Link>  </span>
                        &emsp;
                        <i className="nav-link"class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; 
                        <Link to="sales@PhasePowerProducts.in" style={{ color: "white" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link>
                        <a className="nav-link" style={{ "font-size": "20px", "color": "white" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Header;
