import React, { Component } from 'react';
import Logo from './assets/images/phaselogo.png';
import { Link } from 'react-router-dom';
import {Row ,Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor : "black",
      marginTop : "30px"
    };

    const footerTextSize = {
      fontSize: "25px"
    };

    return (
      <div id="contact">         
        <footer className="card-body footer-text" style={footerbgColor}>
                <div className="row">
                    <Col md={6}> 
                        <img src={Logo} alt="Tool-img" width="100px" height="40px"/>
                      <p className="card-text" style={{color:"white"}}> “Phase Power Products” was incorporated in the year 2010 as a Sole Proprietorship entity." </p>

                      <h4 style={{color:"grey"}}><b>Contact</b></h4>
                      <p className="card-text" style={{color:"white"}}>Phase Power Products <br/> 8/16, OPP.KTG School, 40 Feet Rd, Srigandha Nagar, 
                      Hegganahalli, Bengaluru, Karnataka 560091 </p>
                      <p style={{color:"white"}}> GST N0-29AASFP4396C1ZO </p>
                      <p style={{ fontSize: "20px", color: "white" }}>
                        <i className="fa fa-phone"></i> &emsp;
                        <Link style={{ color: "white" }}> 
                        +91 80 28365150, 7353775063, 7090026669, 7090036669, 7090046669&emsp; </Link>  </p>
                        <i class="fa fa-envelope" style={{ "font-size": "16px", "color": "white" }}></i>&emsp; 
                        <Link to="sales@PhasePowerProducts.in" style={{ color: "white" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link><br/> 
                        <i class="fa fa-envelope" style={{ "font-size": "16px", "color": "white" }}></i>&emsp; 
                        <Link to="phasepowerproducts@gmail.com" style={{ color: "white" }}>
                            phasepowerproducts@gmail.com&emsp;
                        </Link>
                        <p>
                          <a className="fa" href="https://facebook.com/"style={{color:"grey"}} ><i className="fa fa-facebook-square" style={footerTextSize}></i></a>&emsp;
                          <a className="fa" href="https://linkedin.com/" style={{color:"grey"}}><i className="fa fa-linkedin " style={footerTextSize}></i></a>&emsp;
                          <a className="fa" href="https://twitter.com" style={{color:"grey"}}><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                      </p>
                      </Col>
                      <Col md={6}>
                          <Row>
                            <h4 className="card-title" style={{paddingLeft : '60px', color:"grey"}}>
                              <b>Quick Links</b>
                            </h4>
                          </Row>
                          <Row>
                            <Col md={6}>
                                  <ul>
                                    <li ><Link className="nav-link" to="/prodsr" style={{color:"grey"}} >Smart Resource</Link></li>
                                    <li ><Link className="nav-link" to="/prodsn" style={{color:"grey"}} >Smart Network</Link></li>
                                    <li ><Link className="nav-link" to="/prodsm" style={{color:"grey"}} >Smart Monitor</Link></li>
                                    <li ><Link className="nav-link" to="/prodsc" style={{color:"grey"}} >Smart Control</Link></li>
                                    <li ><Link className="nav-link" to="/prodst" style={{color:"grey"}} >Start Control Modules</Link></li>
                                    <li ><Link className="nav-link" to="/prodfc" style={{color:"grey"}} >Failure Control Modules</Link></li>
                                    <li ><Link className="nav-link" to="/prodsh" style={{color:"grey"}} >Sharing Control Modules</Link></li>
                                  </ul> 
                          </Col>
                            <Col md={6}>
                                  <ul>
                                    <li ><Link className="nav-link" to="/prodlb" style={{color:"grey"}} >Lubi Electronics</Link></li>                         
                                    <li ><Link className="nav-link" to="/prodea" style={{color:"grey"}} >Eaton Products</Link></li>
                                    <li ><Link className="nav-link" to="/prodtp" style={{color:"grey"}} >L.T.Tape Insulated</Link></li>
                                    <li ><Link className="nav-link" to="/prodmd" style={{color:"grey"}} >L.T.Moulded Case</Link></li>
                                    <li ><Link className="nav-link" to="/prodrn" style={{color:"grey"}} >L.T.Resin Cast</Link></li>
                                    <li ><Link className="nav-link" to="/prodrb" style={{color:"grey"}} >Rishabh Instruments</Link></li>
                                  </ul> 
                            </Col>
                          </Row>
                    </Col>
              </div>
              <div>
                <p style={{color:"lightblue", paddingBottom:"1rem"}}>&copy; Phase Power Products &middot; <a className="link-color"  style={{color:"lightblue"}} href="/privacy">Privacy</a> &middot; <a className="link-color" style={{color:"lightblue"}} href="/terms">Terms</a></p>
                <p  style={{color:"lightblue", textAlign:"right"}}> made by <a className="link-color" href="www.anyonecancode.in">anyonecancode.in</a></p>
                <link  style={{paddingBottom:"1rem"}}   rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              </div>
        </footer>
      </div>
    );
  }
}

export default Footer;