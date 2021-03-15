import React, { useState } from 'react';
 import Logo from './assets/images/logo.png';
import './assets/css/style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image, Row, Col} from 'react-bootstrap';
import SmartIo from './assets/images/smartio.png';
import Gate from './assets/images/gateway.png';
import Monitor from './assets/images/branchcircuitmonitor.png';
import Controller from './assets/images/multifunctionmeter.png';
import Lubi from './assets/images/lubi/smps15b5.jpg';
import DSE701 from './assets/images/deepsea/dse701mkii.png';
import DSE4520 from './assets/images/deepsea/dse4520.png';
import DSE8620 from './assets/images/deepsea/dse8620.png';
import LTTape from './assets/images/ampturn/lttape3.jpeg';
import LTMould from './assets/images/ampturn/ltm2.png';
import LTResin from './assets/images/ampturn/resincast3.jpeg';
// import Seco from './assets/images/seco/mmannounciator.png';
// import Leap from './assets/images/leap/ledsquarepanel.jpg';
// import Kalaivani from './assets/images/kalaivani/ctpt.jpg';
import Rishabh from './assets/images/rishab/dainsulationt.jpg';
import BZMMccb from './assets/images/eaton/mccb/eatonbzm.jpg';
import ScrollToTop from './scrolltotop';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <ScrollToTop>
        <Navbar expand="lg" expanded={expanded} fixed="top" style={{ backgroundColor: '#BFFF80' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="150" height="52.5"/>
             </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <Link className="nav-link">
                            Products&emsp;
                            <i class="fa fa-caret-down">
                            </i>
                        </Link>
                        <div class="menudropdown-content" >
                            <Row>
                                <Col>
                                    <Row>
                                        <h5>
                                            Elmeasure India
                                        </h5>
                                    </Row>
                                    <Row style={{ textAlign: 'center'}}>
                                        <div className="menucolumn" >
                                            <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={SmartIo}/>      
                                                <span className="text-black-50">
                                                    Smart Resource
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                        </Row>
                                        <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodsn" onClick={() => setExpanded(false)}> 
                                                    <div className="dropmenu-image">
                                                    <Image height="20px" src={Gate} />
                                                    <span class="text-black-50">
                                                        Smart Network
                                                    </span>
                                                    </div>
                                            </Link>
                                        </div>
                                        </Row>
                                        <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodsm" onClick={() => setExpanded(false)}> 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Monitor} />   
                                                <span class="text-black-50">
                                                    Smart Monitor
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                        </Row>
                                        <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodsc" onClick={() => setExpanded(false)}> 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Controller} />   
                                                <span class="text-black-50">
                                                    Smart Control
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                                <Col >
                                    <Row>
                                        <h5>
                                            Deepsea Electronics
                                        </h5>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodst" onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={DSE701} />     
                                                <span class="text-black-50">
                                                    Start Control Modules
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodfc" onClick={() => setExpanded(false)}> 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={DSE4520} />    
                                                <span class="text-black-50">
                                                    Failure Control Modules
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodsh" onClick={() => setExpanded(false)}> 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={DSE8620} />    
                                                <span class="text-black-50">
                                                    Sharing Control Modules
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <h5>
                                            Ampturn Electricals
                                        </h5>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodtp" onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={LTTape}/>         
                                                <span class="text-black-50">
                                                    L.T.Tape Insulated
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodmd" > 
                                                    <div className="dropmenu-image">
                                                        <Image height="20px" src={LTMould} />
                                                <span class="text-black-50">
                                                    L.T.Moulded Case
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="menucolumn" >
                                            <Link to="/prodrn" >
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={LTResin} />
                                                <span class="text-black-50">
                                                    L.T.Resin Cast
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>    
                            {/* <Row>
                            </Row> */}
                            <Row>
                            <Col>
                                    <Row >
                                        <h5>
                                            Eaton Power Quality 
                                        </h5>
                                    </Row>
                                    <Row>
                                        <div class="menucolumn" >
                                            <Link to='/prodea' onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={BZMMccb} />      
                                                <span class="text-black-50">
                                                    MCCB
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                            </Col>
                            <Col>
                                    <Row> 
                                    <h5>
                                        Lubi Electronics 
                                    </h5>
                                    </Row>
                                    <Row>
                                        <div class="menucolumn" >
                                            <Link to='/prodlb' onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Lubi} />     
                                                <span class="text-black-50">
                                                    SMPS
                                                </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                            </Col>                        
                            
                                <Col>
                                    <Row>
                                        <h5>
                                            Other Products
                                        </h5>
                                    </Row>
                                    <Row>
                                        {/* <div className="menucolumn" >
                                            <Link to="/prodsec" onClick={() => setExpanded(false)}>
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Seco} />
                                                    <hr />
                                                </div>
                                                <span class="text-black-50">
                                                    Seco Products
                                                </span>
                                            </Link>
                                        </div> */}
                                        {/* <div className="menucolumn" >
                                            <Link to="/prodlp" > 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Leap} />
                                                <hr />
                                                    </div>
                                                <span class="text-black-50">
                                                    Leap Industries
                                                </span>
                                            </Link>
                                        </div> */}
                                        {/* <div className="menucolumn" >
                                        <Link to="/prodkv" > 
                                            <div className="dropmenu-image">
                                                <Image height="20px" src={Kalaivani} />
                                                <hr />
                                            </div>
                                            <span class="text-black-50">
                                                Kalaivani Electricals 
                                            </span>
                                        </Link>
                                        </div> */}
                                        <div className="menucolumn" >
                                            <Link to="/prodrb" > 
                                                <div className="dropmenu-image">
                                                    <Image height="20px" src={Rishabh} />   
                                                <span class="text-black-50">
                                                    Rishabh Instruments 
                                                </span>
                                                </div>
                                        
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
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
