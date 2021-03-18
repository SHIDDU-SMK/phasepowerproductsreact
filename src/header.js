import React, { useState } from 'react';
 import Logo from './assets/images/logo.png';
import './assets/css/style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image,  Col} from 'react-bootstrap';
import SmartIo from './assets/images/submenuicons/smartio.png';
import Gate from './assets/images/submenuicons/gateway.png';
import Monitor from './assets/images/submenuicons/branchcircuitmonitor.png';
import Controller from './assets/images/submenuicons/multifunctionmeter.png';
import Lubi from './assets/images/submenuicons/smps15b5.png';
import DSE701 from './assets/images/submenuicons/dse701mkii.png';
import DSE4520 from './assets/images/submenuicons/dse4520.png';
import DSE8620 from './assets/images/submenuicons/dse8620.png';
import LTTape from './assets/images/submenuicons/lttape3.png';
import LTMould from './assets/images/submenuicons/ltm2.png';
import LTResin from './assets/images/submenuicons/resincast3.png';
import Rishabh from './assets/images/submenuicons/rishabh.png';
import BZMMccb from './assets/images/submenuicons/eatonbzm.png';
import ScrollToTop from './scrolltotop';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [hidemenu, setHideMenu] = useState(false);

    return (
        <ScrollToTop>
        <Navbar expand="lg" expanded={expanded} fixed="top" style={{ backgroundColor: 'rgb(211, 207, 207)' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="150" height="52.5"/>
             </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current">Home</Link>
                    <div class="menudropdown">
                        <Link className="nav-link" onClick={() => setHideMenu(hidemenu ? false : true)}>
                            Products&emsp;
                            <i class="fa fa-caret-down">
                            </i>
                        </Link>
                        <div className="menudropdown-content link-container">
                            <Col sm = {4}>
                                <ul>
                                    <h5>Elmeasure India</h5>
                                    <li>
                                        <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                                <Image src={SmartIo} className="dropmenu-image"/>      
                                                &emsp;
                                            <span className="dropdownLink">Smart Resource
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodsn" onClick={() => setExpanded(false)}> 
                                                <Image src={Gate}  className="dropmenu-image"/>
                                                &emsp;
                                            <span className="dropdownLink">Smart Network
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodsm" onClick={() => setExpanded(false)}> 

                                                <Image src={Monitor}  className="dropmenu-image"/>   
                                                &emsp;
                                            <span className="dropdownLink">Smart Monitor
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodsc" onClick={() => setExpanded(false)}>
                                                <Image src={Controller}  className="dropmenu-image"/>   
                                                &emsp;
                                            <span className="dropdownLink">Smart Control
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <h5>Deepsea Electronics</h5>
                                    <li>
                                        <Link to="/prodst" onClick={() => setExpanded(false)}>
                                            <Image src={DSE701}  className="dropmenu-image"/>     
                                            &emsp;
                                            <span className="dropdownLink">Start Control Modules
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodfc" onClick={() => setExpanded(false)}> 
                                            <Image src={DSE4520}  className="dropmenu-image"/>    
                                            &emsp;
                                            <span className="dropdownLink">
                                                Failure Control Modules
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodsh" onClick={() => setExpanded(false)}> 
                                            <Image src={DSE8620}  className="dropmenu-image"/>    
                                            &emsp;
                                            <span className="dropdownLink">Sharing Control Modules
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm = {4}>
                                <ul>
                                    <li>
                                        <h5>
                                            Ampturn Electricals
                                        </h5>
                                        <Link to="/prodtp" onClick={() => setExpanded(false)}>
                                            <Image src={LTTape}  className="dropmenu-image"/>         
                                            &emsp;
                                            <span className="dropdownLink">L.T.Tape Insulated
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodmd" > 
                                            <Image src={LTMould}  className="dropmenu-image"/>
                                            &emsp;
                                            <span className="dropdownLink">L.T.Moulded Case
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prodrn" >
                                            <Image src={LTResin}  className="dropmenu-image"/>
                                            &emsp;
                                            <span className="dropdownLink">
                                                L.T.Resin Cast
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h5>
                                            Eaton Power Quality 
                                        </h5>
                                        <Link to='/prodea' onClick={() => setExpanded(false)}>
                                            <Image src={BZMMccb}  className="dropmenu-image" />      
                                            &emsp;
                                            <span className="dropdownLink">
                                                MCCB
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul>
                                    <li>
                                        <h5>
                                            Lubi Electronics 
                                        </h5>
                                        <Link to='/prodlb' onClick={() => setExpanded(false)}>
                                            <Image src={Lubi}  className="dropmenu-image"/>     
                                            &emsp;
                                            <span className="dropdownLink">
                                                SMPS
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h5>
                                            Other Products
                                        </h5>
                                        <Link to="/prodrb" >
                                            <Image src={Rishabh} className="dropmenu-image"/>
                                            &emsp;
                                            <span className="dropdownLink">
                                                Rishabh Instruments    
                                            </span>                                 
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </div>
                    <Link to="/#services" className="nav-link line current" onClick={() => setExpanded(false)}>Services</Link>
                    <Link to="/#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="/#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span className="nav-link" style={{ fontSize: "16px", color: "navy" }}>
                        <i className="fa fa-phone"></i> &emsp;
                        <Link className="fa" style={{ color: "navy" }}> 
                        +91 80 28365150 </Link>  </span>
                        &emsp;
                        <i className="nav-link"class="fa fa-envelope" style={{ "font-size": "20px", "color": "navy" }}></i>&emsp; 
                        <Link mailto="sales@PhasePowerProducts.in" style={{ color: "navy" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link>
                        <a className="nav-link" style={{ "font-size": "20px", "color": "navy" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map-marker"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </ScrollToTop>
    );
}



export default Header;
