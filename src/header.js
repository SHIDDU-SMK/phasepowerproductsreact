import React, { useState } from 'react';
 import Logo from './images/logonew.png';
import './assets/css/style.css';
import './assets/css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image } from 'react-bootstrap';
import Transducer from './images/transducer.png';
import SmartIo from './images/smartio.png';
import Gate from './images/gateway.png';
import BZMMccb from './images/eaton/mccb/eatonbzm.jpg';



const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: 'rgb(0, 0, 88)' }} onClick={() => setExpanded(expanded ? false : "expanded")}>
             <Navbar.Brand href="#home"><img src={Logo} alt="logo" width="100" height="40" /></Navbar.Brand> 
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <a href="#products" className="nav-link">Products <i class="fa fa-caret-down"></i>
                        </a>
                        <div class="menudropdown-content" style={{ paddingTop: "0.9rem" }}>

                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/elmsure" style={{ color: "white", "text-align": "center" }}> <Image src={Transducer} className="imagecenter" Height="100px" width="100px" />
                                 <h4>Elmeasure India Pvt Ltd</h4> </Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to='/prodeaton' style={{ color: "white", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={APFC} className="imagecenter" Height="100px" width="100px" />
                                 <h4> Eaton Power Quality Pvt Ltd </h4></Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/smartresource" style={{ color: "white", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={SmartIo} className="imagecenter" Height="100px" width="100px" />
                            <h4>Smart  Resource</h4></Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/smartnetworking" style={{ color: "white", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" Height="100px" width="100px" />
                                <h4>Smart Networking</h4></Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/othersproducts" style={{ color: "white", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" Height="100px" width="100px" />
                                <h4>Other  Products </h4></Link>
                            </div>
                        </div>
                    </div>
                    <Link to="#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span className="nav-link" style={{ fontSize: "16px", color: 'grey' }}><i className="fa fa-phone"></i> &emsp;<Link to="+91 123456790" className="fa" style={{ color: "grey" }}> +91 1234567890 </Link>  </span>&emsp;
                        <i  className="nav-link"class="fa fa-envelope" style={{ "font-size": "20px", "color": "grey" }}></i>&emsp; <Link to="sales@PhasePowerProducts.in" style={{ color: "grey" }}>sales@phasepowerproducts.in&emsp;</Link>
                    <a className="nav-link" style={{ "font-size": "20px", "color": "grey" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Header;