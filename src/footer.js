import React, { Component } from 'react';
// import Logo from './assets/images/phaselogo.webp';
import { Link } from 'react-router-dom';
import {Row ,Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor : 'grey',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '1rem'
  };

    const footerTextSize = {
      fontSize: "25px"
    };

    return (         
        <div id="contact" style={footerbgColor}>
              <Row>
                    <Col md={6}>
                      {/* <Row>
                        <Col md={2}>
                            <img src={Logo} alt="Tool-img" width="100px" height="70px"/>
                        </Col>
                        <Col md={10}>
                            <p className="card-text" style={{color:"grey"}}> 
                              “Phase Power Products” was incorporated in the year 2010 as a Sole Proprietorship entity." 
                            </p>
                        </Col>
                      </Row>
                      <hr style={{ width:'100px', textAlign: 'center'}}  /> */}
                      <Row>
                        <Col md={12}>
                          <h4 style={{color:"white"}}>
                            <b>Contact</b>
                          </h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={5}>
                          <p className="card-text" style={{color:"white"}}>
                            Phase Power Products <br/> 
                            8/16, OPP.KTG School,  <br/>
                            40 Feet Rd,  <br/>
                            Srigandha Nagar, Hegganahalli,  <br/>
                            Bengaluru, Karnataka 560091 <br />
                              GST N0-29AASFP4396C1ZO 
                          </p>
                        </Col>
                        <Col md={7} style={{ color: "white" }}>
                            <p className="card-text" >
                              <i className="fa fa-phone"></i> &emsp;
                              +91 80 28365150 <br />
                              +91 80 7353775063, +91 80 7090026669, <br /> 
                              +91 80 7090036669, +91 80 7090046669&emsp; 
                            </p>
                            <p>
                              <i class="fa fa-envelope" style={{ "font-size": "16px", color: "white" }}></i>&emsp; 
                              <Link mailto="sales@PhasePowerProducts.in" style={{ color: "white" }}>
                                  sales@phasepowerproducts.in&emsp;
                              </Link><br/> 
                              <i class="fa fa-envelope" style={{ "font-size": "16px", color: "white"  }}></i>&emsp; 
                              <Link mailto="phasepowerproducts@gmail.com" style={{ color: "white" }}>
                                  phasepowerproducts@gmail.com&emsp;
                              </Link>
                            </p>
                            <p>
                                <a className="fa" href="https://facebook.com/" style={{color:"white"}} ><i className="fa fa-facebook-square" style={footerTextSize}></i></a>&emsp;
                                <a className="fa" href="https://linkedin.com/" style={{color:"white"}}><i className="fa fa-linkedin " style={footerTextSize}></i></a>&emsp;
                                <a className="fa" href="https://twitter.com" style={{color:"white"}}><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                                
                            </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                          <Row>
                            <h4 className="card-title" style={{paddingLeft : '60px', color:"white"}}>
                              <b>Quick Links</b>
                            </h4>
                          </Row>
                          <Row>
                            <Col lg={6}>
                                  <ul style={{ lineHeight: '80%' }}>                                    
                                      <Link className="nav-link" to="/prodsr" style={{color:"white"}} >Smart Resource</Link>
                                      <Link className="nav-link" to="/prodsn" style={{color:"white"}} >Smart Network</Link><Link className="nav-link" to="/prodsm" style={{color:"white"}} >Smart Monitor</Link>
                                      <Link className="nav-link" to="/prodsc" style={{color:"white"}} >Smart Control</Link><Link className="nav-link" to="/prodst" style={{color:"white"}} >Start Control Modules</Link><Link className="nav-link" to="/prodfc" style={{color:"white"}} >Failure Control Modules</Link><Link className="nav-link" to="/prodsh" style={{color:"white"}} >Sharing Control Modules</Link>
                                  </ul> 
                          </Col>
                            <Col lg={6}>
                                  <ul style={{ lineHeight: '80%' }}>
                                    <Link className="nav-link" to="/prodlb" style={{color:"white"}} >Lubi Electronics</Link>                         
                                    <Link className="nav-link" to="/prodea" style={{color:"white"}} >Eaton Products</Link>
                                    <Link className="nav-link" to="/prodtp" style={{color:"white"}} >L.T.Tape Insulated</Link><Link className="nav-link" to="/prodmd" style={{color:"white"}} >L.T.Moulded Case</Link><Link className="nav-link" to="/prodrn" style={{color:"white"}} >L.T.Resin Cast</Link><Link className="nav-link" to="/prodrb" style={{color:"white"}} >Rishabh Instruments</Link>
                                  </ul> 
                            </Col>
                          </Row>
                    </Col>
              </Row>
              <Row style={{ paddingTop: "1rem"}}>
                <Col lg={12}>
                  <p style={{color:"white"}}>
                  &copy; Phase Power Products 
                  &emsp;&middot; 
                  <a href="/privacy" style={{color:"white"}}>
                  &emsp;Privacy
                  </a> 
                  &emsp;&middot; 
                  <a href="/terms" style={{color:"white"}}>
                  &emsp;Terms</a>
                  <span style={{float:"right"}}> made by 
                  <a style={{color:"white"}} target="_blank" href="http://www.anyonecancode.in" rel="noreferrer">
                  {' '}anyonecancode.in
                  </a>
                  </span>
                </p>
                </Col>
              </Row>
        </div>

    );
  }
}

export default Footer;