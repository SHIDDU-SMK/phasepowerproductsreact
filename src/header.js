import React, { useState } from 'react';
// import Logo from './images/logo1.png';
import './assets/css/style.css';
import './assets/css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image } from 'react-bootstrap';
import Transducer from './images/transducer.png';
import APFC from './images/APFC.png';
import SmartIo from './images/smartio.png';
import Gate from './images/gateway.png';


const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: 'rgb(0, 0, 88)' }} onClick={() => setExpanded(expanded ? false : "expanded")}>
            {/* <Navbar.Brand href="#home"><img src={Logo} alt="logo" width="100" height="60" /></Navbar.Brand> */}
            <h4 style={{color:"white"}}> Phase Power Products </h4>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <a href="#products" className="nav-link">Products <i class="fa fa-caret-down"></i>
                        </a>
                        <div class="menudropdown-content" style={{ paddingTop: "0.9rem" }}>

                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/smartmonotor" style={{ color: "white", "text-align": "center" }}> <Image src={Transducer} className="imagecenter" Height="100px" width="100px" />
                                 <h4>Smart Monitor</h4> </Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to='/smartcontrol' style={{ color: "white", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={APFC} className="imagecenter" Height="100px" width="100px" />
                                 <h4> Smart Controller</h4></Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/smartresource" style={{ color: "white", "text-align": "center" }}><Image style={{ "align-items": "center" }} src={SmartIo} className="imagecenter" Height="100px" width="100px" />
                            <h4>Smart  Resource</h4></Link>
                            </div>
                            <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                            <Link to="/smartnetworking" style={{ color: "white", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Gate} className="imagecenter" Height="100px" width="100px" />
                                <h4>Smart Networking</h4></Link>
                            </div>
                        </div>
                    </div>
                    <Link to="#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span style={{ fontSize: "16px", color: 'white' }}><i className="fa fa-phone"></i>&emsp;<Link to="+91 123456790" style={{ color: "white" }}> +91 1234567890 </Link>  </span>&emsp;
                        <i class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; <Link to="sales@PhasePowerProducts.in" style={{ color: "white" }}>sales@PhasePowerProducts.in&emsp;</Link>
                    <a href="#Adress" className="nav-link line current"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Header;