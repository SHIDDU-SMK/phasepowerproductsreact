import React, { useState } from 'react';
 import Logo from './images/logonew.png';
import './assets/css/style.css';
import './assets/css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image, Row, } from 'react-bootstrap';
// import Transducer from './images/transducer.png';
import SmartIo from './images/smartio.png';
import Gate from './images/gateway.png';
import BZMMccb from './images/eaton/mccb/eatonbzm.jpg';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: 'rgb(0, 0, 88)' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="100" height="40" />
             </Navbar.Brand> 
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <span className="nav-link">Products <i class="fa fa-caret-down"></i>
                        </span>
                        <div class="menudropdown-content" >
                                <Row >
                                    <div style={{marginLeft: '50px'}}>
                                        <h4>Elmeasure India Pvt Ltd</h4>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="menucolumn" >
                                    <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                        <Image style={{ "align-items": "center" }} src={SmartIo} className="imagecenter" height="50px" width="50px" />
                                        <hr width = '100' paddingBottom='10'/>
                                    <h6>Smart Resource</h6>
                                    </Link>
                                    </div>
                                    <div className="menucolumn" >
                                    <Link to="/prodsn" onClick={() => setExpanded(false)}> 
                                    <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" height="50px" width="50px" />
                                        <hr width = '100' paddingBottom='10'/>

                                        <h6>Smart Networking</h6></Link>
                                    </div>
                                    <div className="menucolumn" >
                                        <Link to="/prodsm" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" height="50px" width="50px" />
                                        <hr width = '100' paddingBottom='10'/>

                                            <h6>Smart Monitor</h6></Link>
                                    </div>
                                    <div className="menucolumn" >
                                        <Link to="/prodsc" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" height="50px" width="50px" />
                                        <hr width = '100' paddingBottom='10'/>

                                        <h6>Smart Control</h6></Link>
                                    </div>
                                </Row>
                            <Row>
                                <div class="menucolumn" >
                                <Link to='/prodea' onClick={() => setExpanded(false)}>
                                    <Image style={{ "align-items": "center" }} src={BZMMccb} className="imagecenter" Height="50px" width="50px" />
                                    <hr width = '100' paddingBottom='10'/>

                                    <h6>Eaton Power Quality Pvt Ltd </h6></Link>
                                </div>
                            </Row>
                            <Row>
                            <div class="menucolumn" >
                            <Link to="/prod" > <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" Height="50px" width="50px" />
                                <hr width = '100' paddingBottom='10'/>

                                <h6>Other  Products </h6></Link>
                            </div>
                            </Row>
                        </div>
                    </div>
                    <Link to="/#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="/#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span className="nav-link" style={{ fontSize: "16px", color: 'grey' }}>
                        <i className="fa fa-phone"></i> &emsp;
                        <Link to="+91 123456790" className="fa" style={{ color: "grey" }}> 
                        +91 1234567890 </Link>  </span>
                        &emsp;
                        <i className="nav-link"class="fa fa-envelope" style={{ "font-size": "20px", "color": "grey" }}></i>&emsp; 
                        <Link to="sales@PhasePowerProducts.in" style={{ color: "grey" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link>
                        <a className="nav-link" style={{ "font-size": "20px", "color": "grey" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Header;