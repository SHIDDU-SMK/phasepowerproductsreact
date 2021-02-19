import React, { Component } from 'react';
import Logo from './images/logo1.png';
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
                      {/* <svg className="bd-placeholder-img" width="100px" height="30px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"> */}
                        <img src={Logo} alt="Tool-img" width="110px" height="90px"/>
                        <title>Placeholder</title>
                      {/* </svg> */}
                      <p className="card-text" style={{color:"white"}}> “Phase Power Products” was incorporated in the year 2010 as a Sole Proprietorship entity." </p>
                    </div>
                    <div className="col-sm-4" >
                      <h4 className="card-title" style={{paddingLeft : '60px', color:"grey"}}><b>Quick Links</b></h4>
                      <Row>
                        <Col>
                          <p className="card-text" style={{color:"white"}}>
                              <ul>
                                  <li style={{color:"white"}}><Link className="nav-link" to="/smartmonotor" style={{color:"white"}} >Smart Monotoring</Link></li>
                                  <li style={{color:"white"}}><Link className="nav-link" to="/smartcontrol" style={{color:"white"}}>Smart Control</Link></li>
                                  <li style={{color:"white"}}><Link className="nav-link" to="/smartresource" style={{color:"white"}}>Smart Resouces</Link></li>
                                  <li style={{color:"white"}}><Link className="nav-link" to="/smartnetworking" style={{color:"white"}}>Smart Networking </Link></li>
                                 
                              </ul>
                          </p>
                          </Col>
                      </Row>
                    </div>
                    <div className="col-sm-4">
                        <h4 style={{color:"grey"}}><b>Contact</b></h4>
                        <p className="card-text" style={{color:"white"}}>Phaspe Power Products
                                    Bengaluru  No.:47-P,KIADB Hardware Park,Huvinayakanahalli,
                                    Yelahanka Taluk,
                                    Bengaluru - 562149, India <br/>
                                    Cell - 1234567890,<br/>
                                    GST : XXXX123XXX</p>
                         <p>
                            <a href="https://facebook.com/"><i className="fa fa-facebook-square link-color" style={footerTextSize}></i></a>&emsp;
                            <a href="https://linkedin.com/"><i className="fa fa-linkedin link-color" style={footerTextSize}></i></a>&emsp;
                            <a href="https://twitter.com"><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                        </p>
                    </div>
              </div>
                <p>&copy; Surabhi Steel &middot; <a className="link-color" href="/privacy">Privacy</a> &middot; <a className="link-color" href="/terms">Terms</a></p>
                <p className="float-right">made by <a className="link-color" href="www.anyonecancode.in">anyonecancode.in</a></p>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </footer>
      </div>
    );
  }
}

export default Footer;