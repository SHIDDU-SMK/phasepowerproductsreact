import React, { Component } from 'react';
import Logo from './images/phaselogo.png';
import { Link } from 'react-router-dom';
import './assets/css/navbar.css';
import {Row ,Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor : "black",
      marginTop : "30px"
    };

    const footerTextSize = {
      fontSize: "36px"
    };

    return (
      <div className="fluid" id="contact">         
        <footer className="card-body footer-text" style={footerbgColor}>
                <div className="row">
                    <div className="col-sm-4">
                         <img src={Logo} alt="Tool-img" width="100px" height="40px"/>
                      <p className="card-text" style={{color:"white"}}> “Phase Power Products” was incorporated in the year 2010 as a Sole Proprietorship entity." </p>
                    </div>
                    <div className="col-sm-4" >
                      <h4 className="card-title" style={{paddingLeft : '60px', color:"grey"}}><b>Quick Links</b></h4>
                      <Row>
                        <Col>
                          <p className="card-text" style={{color:"white"}}>
                              <ul>
                                  <li ><Link className="nav-link textproduct" to="/smartmonotor" style={{color:"grey"}} >Smart Monotoring</Link></li>
                                  <li ><Link className="nav-link" to="/smartcontrol" style={{color:"grey"}}>Smart Control</Link></li>
                                  <li ><Link className="nav-link" to="/smartresource" style={{color:"grey"}}>Smart Resouces</Link></li>
                                  <li ><Link className="nav-link" to="/smartnetworking" style={{color:"grey"}}>Smart Networking </Link></li>
                                 
                              </ul>
                          </p>
                          </Col>
                      </Row>
                    </div>
                    <div className="col-sm-4">
                        <h4 style={{color:"grey"}}><b>Contact</b></h4>
                        <p className="card-text" style={{color:"white"}}>Phase Power Products <br/> 8/16, OPP.KTG School, 40 Feet Rd, Srigandha Nagar, 
                        Hegganahalli, Bengaluru, Karnataka 560091 </p>
                        <p style={{color:"white"}}> GST N0-29AASFP4396C1ZO </p>
                         <p>
                            <a className="fa" href="https://facebook.com/"style={{color:"grey"}} ><i className="fa fa-facebook-square" style={footerTextSize}></i></a>&emsp;
                            <a className="fa" href="https://linkedin.com/" style={{color:"grey"}}><i className="fa fa-linkedin " style={footerTextSize}></i></a>&emsp;
                            <a className="fa" href="https://twitter.com" style={{color:"grey"}}><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                        </p>
                    </div>
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