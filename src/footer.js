import React, { Component } from 'react';
// import Logo from './assets/images/phaselogo.png';
import { Link } from 'react-router-dom';
import {Row ,Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor : '#C7E1C7',
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
                          <h4 style={{color:"grey"}}>
                            <b>Contact</b>
                          </h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <p className="card-text" style={{color:"grey"}}>
                            Phase Power Products <br/> 
                            8/16, OPP.KTG School,  <br/>
                            40 Feet Rd,  <br/>
                            Srigandha Nagar, Hegganahalli,  <br/>
                            Bengaluru, Karnataka 560091 <br />
                              GST N0-29AASFP4396C1ZO 
                          </p>
                        </Col>
                        <Col md={6} style={{ color: "grey" }}>
                            <p className="card-text" >
                              <i className="fa fa-phone"></i> &emsp;
                              +91 80 28365150 <br />
                              +91 80 7353775063, +91 80 7090026669, <br /> 
                              +91 80 7090036669, +91 80 7090046669&emsp; 
                            </p>
                            <p>
                              <i class="fa fa-envelope" style={{ "font-size": "16px", color: "grey" }}></i>&emsp; 
                              <Link mailto="sales@PhasePowerProducts.in" style={{ color: "grey" }}>
                                  sales@phasepowerproducts.in&emsp;
                              </Link><br/> 
                              <i class="fa fa-envelope" style={{ "font-size": "16px", color: "grey"  }}></i>&emsp; 
                              <Link mailto="phasepowerproducts@gmail.com" style={{ color: "grey" }}>
                                  phasepowerproducts@gmail.com&emsp;
                              </Link>
                            </p>
                            <p>
                                <a className="fa" href="https://facebook.com/" style={{color:"grey"}} ><i className="fa fa-facebook-square" style={footerTextSize}></i></a>&emsp;
                                <a className="fa" href="https://linkedin.com/" style={{color:"grey"}}><i className="fa fa-linkedin " style={footerTextSize}></i></a>&emsp;
                                <a className="fa" href="https://twitter.com" style={{color:"grey"}}><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                            </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                          <Row>
                            <h4 className="card-title" style={{paddingLeft : '60px', color:"grey"}}>
                              <b>Quick Links</b>
                            </h4>
                          </Row>
                          <Row>
                            <Col lg={6}>
                                  <ul style={{ lineHeight: '80%' }}>                                    
                                      <Link className="nav-link" to="/prodsr" style={{color:"grey"}} >Smart Resource</Link>
                                      <Link className="nav-link" to="/prodsn" style={{color:"grey"}} >Smart Network</Link><Link className="nav-link" to="/prodsm" style={{color:"grey"}} >Smart Monitor</Link>
                                      <Link className="nav-link" to="/prodsc" style={{color:"grey"}} >Smart Control</Link><Link className="nav-link" to="/prodst" style={{color:"grey"}} >Start Control Modules</Link><Link className="nav-link" to="/prodfc" style={{color:"grey"}} >Failure Control Modules</Link><Link className="nav-link" to="/prodsh" style={{color:"grey"}} >Sharing Control Modules</Link>
                                  </ul> 
                          </Col>
                            <Col lg={6}>
                                  <ul style={{ lineHeight: '80%' }}>
                                    <Link className="nav-link" to="/prodlb" style={{color:"grey"}} >Lubi Electronics</Link>                         
                                    <Link className="nav-link" to="/prodea" style={{color:"grey"}} >Eaton Products</Link>
                                    <Link className="nav-link" to="/prodtp" style={{color:"grey"}} >L.T.Tape Insulated</Link><Link className="nav-link" to="/prodmd" style={{color:"grey"}} >L.T.Moulded Case</Link><Link className="nav-link" to="/prodrn" style={{color:"grey"}} >L.T.Resin Cast</Link><Link className="nav-link" to="/prodrb" style={{color:"grey"}} >Rishabh Instruments</Link>
                                  </ul> 
                            </Col>
                          </Row>
                    </Col>
              </Row>
              <Row style={{ paddingTop: "1rem"}}>
                <Col lg={12}>
                  <p style={{color:"grey"}}>
                  &copy; Phase Power Products 
                  &emsp;&middot; 
                  <a href="/privacy" style={{color:"grey"}}>
                  &emsp;Privacy
                  </a> 
                  &emsp;&middot; 
                  <a href="/terms" style={{color:"grey"}}>
                  &emsp;Terms</a>
                  <span style={{float:"right"}}> made by 
                  <a style={{color:"grey"}} href="www.anyonecancode.in">
                  &emsp;anyonecancode.in
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