import React, { useState } from 'react';
import './assets/css/style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image,  Col} from 'react-bootstrap';
import Logo from './assets/images/logo.webp';
import SmartIo from './assets/images/submenuicons/smartio.webp';
import Gate from './assets/images/submenuicons/gateway.webp';
import Monitor from './assets/images/submenuicons/branchcircuitmonitor.webp';
import Controller from './assets/images/submenuicons/multifunctionmeter.webp';
import Lubi from './assets/images/submenuicons/smps15b5.webp';
import DSE701 from './assets/images/submenuicons/dse701mkii.webp';
import DSE4520 from './assets/images/submenuicons/dse4520.webp';
import DSE8620 from './assets/images/submenuicons/dse8620.webp';
import LTTape from './assets/images/submenuicons/lttape3.webp';
import LTMould from './assets/images/submenuicons/ltm2.webp';
import LTResin from './assets/images/submenuicons/resincast3.webp';
import Rishabh from './assets/images/submenuicons/rishabh.webp';
import BZMMccb from './assets/images/submenuicons/eatonbzm.webp';
import Acb from './assets/images/submenuicons/acb.webp';
import Plsm from './assets/images/submenuicons/plsm.webp';
import Contactor from './assets/images/submenuicons/contactor.webp';
import ScrollToTop from './scrolltotop';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [hidemenu, setHideMenu] = useState(false);

    return (
        <ScrollToTop>
        <Navbar expand="lg" expanded={expanded} fixed="top" style={{ backgroundColor: '#63EC90' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="150" height="52.5"/>
             </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current">Home</Link>
                    <div className="menudropdown">
                        <Link className="nav-link" onClick={() => setHideMenu(hidemenu ? false : true)}>
                            Products&emsp;
                            <i className="fa fa-caret-down">
                            </i>
                        </Link>
                        <div className="menudropdown-content link-container">
                            <Col md = {4}>
                                <ul>
                                    <h5>Elmeasure India</h5>
                                    <li>
                                        <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                            <Image src={SmartIo} className="dropmenu-image"/>      
                                            &emsp;
                                            <span className="dropdownLink">
                                                Smart Resource
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
                            <Col md = {4}>
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
                                        <Link to='/prodemcb' onClick={() => setExpanded(false)}>
                                            <Image src={Plsm}  className="dropmenu-image" />      
                                            &emsp;
                                            <span className="dropdownLink">
                                                MCB
                                            </span>
                                        </Link>
                                        <Link to='/prodeacb' onClick={() => setExpanded(false)}>
                                            <Image src={Acb}  className="dropmenu-image" />      
                                            &emsp;
                                            <span className="dropdownLink">
                                                ACB
                                            </span>
                                        </Link>
                                        <Link to='/prodeco' onClick={() => setExpanded(false)}>
                                            <Image src={Contactor}  className="dropmenu-image" />      
                                            &emsp;
                                            <span className="dropdownLink">
                                                Contactor
                                            </span>
                                        </Link>
                                        <Link to='/prodeps' onClick={() => setExpanded(false)}>
                                            <Image src={BZMMccb}  className="dropmenu-image" />      
                                            &emsp;
                                            <span className="dropdownLink">
                                                Pilot & Signal Divice
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm = {4}>
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
                    <p className="nav-link" style={{ fontSize: "16px", color: "navy" }}>
                    <i className="fa fa-envelope" style={{ "font-size": "20px", "color": "navy" }}></i>&emsp; 
                        <Link mailto="sales@PhasePowerProducts.in" style={{ color: "navy" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link><br/>
                        <i className="fa fa-phone"></i> &emsp;
                        <span style={{ color: "navy" }}>
                        +91 80 28365150 </span></p>
                        <a className="nav-link" style={{ "font-size": "20px", "color": "navy" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map-marker"></i>&emsp; Reach Us</a>
                        
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </ScrollToTop>
    );
}



export default Header;
