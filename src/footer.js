import React, { Component } from "react";
// import Logo from './assets/images/phaselogo.webp';
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor: "#7c917f",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
    };

    const footerTextSize = {
      fontSize: "25px",
    };

    return (
      <div id="contact" style={footerbgColor}>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <h4 style={{ color: "white" }}>
                  <b>Contact</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p className="card-text" style={{ color: "white" }}>
                  
                  Phase Power Products <br />
                  No.5 Arjun Vilas Heights, <br/>
                  1st Floor, 15th Cross, GKW Layout <br />
                  Doddanna Industrial Area, <br />
                  Near Peenya 2nd stage, <br />
                  {/* Srigandha Nagar, Hegganahalli, <br /> */}
                  Bangalore-560058. <br />
                  GST N0-29AASFP4396C1ZO
                </p>
              </Col>
              <Col md={6} style={{ color: "white" }}>
                <p className="card-text">
                  <i
                    className="fa fa-phone"
                    style={{ paddingRight: "0.8rem" }}
                  ></i>
                  080 28365150 <br />
                  <i
                    className="fa fa-phone"
                    style={{ paddingRight: "0.5rem" }}
                  ></i>{" "}
                  +91 7353775063 <br />
                  <i
                    className="fa fa-phone"
                    style={{ paddingRight: "0.5rem" }}
                  ></i>{" "}
                  +91 7090026669/36669/46669
                </p>
                <p>
                  <i
                    class="fa fa-envelope"
                    style={{ "font-size": "16px", color: "white" }}
                  ></i>
                  <Link
                    mailto="sales@PhasePowerProducts.in"
                    style={{ color: "white", paddingLeft: "0.25rem" }}
                  >
                    sales@phasepowerproducts.in
                  </Link>
                  <br />
                  <i
                    class="fa fa-envelope"
                    style={{ "font-size": "16px", color: "white" }}
                  ></i>
                  <Link
                    mailto="phasepowerproducts@gmail.com"
                    style={{ color: "white", paddingLeft: "0.25rem" }}
                  >
                    phasepowerproducts@gmail.com
                  </Link>
                </p>
                <p>
                  <a
                    className="fa"
                    href="https://facebook.com/"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    <i
                      className="fa fa-facebook-square"
                      style={footerTextSize}
                    ></i>
                  </a>
                  <a
                    className="fa"
                    href="https://linkedin.com/"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    <i className="fa fa-linkedin " style={footerTextSize}></i>
                  </a>
                  <a
                    className="fa"
                    href="https://twitter.com"
                    style={{ color: "white" }}
                  >
                    <i
                      className="fa fa-twitter link-color"
                      style={footerTextSize}
                    ></i>
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <h4
                className="card-title"
                style={{ paddingLeft: "60px", color: "white" }}
              >
                <b>Quick Links</b>
              </h4>
            </Row>
            <Row>
              <Col lg={6}>
                <ul style={{ lineHeight: "80%" }}>
                  <Link
                    className="nav-link"
                    to="/prodsr"
                    style={{ color: "white" }}
                  >
                    Smart Resource
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodsn"
                    style={{ color: "white" }}
                  >
                    Smart Network
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodsm"
                    style={{ color: "white" }}
                  >
                    Smart Monitor
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodsc"
                    style={{ color: "white" }}
                  >
                    Smart Control
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodst"
                    style={{ color: "white" }}
                  >
                    Start Control Modules
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodfc"
                    style={{ color: "white" }}
                  >
                    Failure Control Modules
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodsh"
                    style={{ color: "white" }}
                  >
                    Sharing Control Modules
                  </Link>
                </ul>
              </Col>
              <Col lg={6}>
                <ul style={{ lineHeight: "80%" }}>
                  <Link
                    className="nav-link"
                    to="/prodlb"
                    style={{ color: "white" }}
                  >
                    Lubi Electronics
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodea"
                    style={{ color: "white" }}
                  >
                    Eaton Products
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodtp"
                    style={{ color: "white" }}
                  >
                    L.T.Tape Insulated
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodmd"
                    style={{ color: "white" }}
                  >
                    L.T.Moulded Case
                  </Link>
                  <Link
                    className="nav-link"
                    to="/prodrn"
                    style={{ color: "white" }}
                  >
                    L.T.Resin Cast
                  </Link>
                  {/* <Link className="nav-link" to="/prodrb" style={{color:"white"}} >Rishabh Instruments</Link> */}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingTop: "1rem" }}>
          <Col lg={12}>
            <p style={{ color: "white", paddingRight: "2rem" }}>
              &copy; Phase Power Products
              <a
                href="/privacy"
                style={{ color: "white", paddingLeft: "1rem" }}
              >
                Privacy
              </a>
              <a href="/terms" style={{ color: "white", paddingLeft: "1rem" }}>
                Terms
              </a>
              <span style={{ float: "right" }}>
                {" "}
                made by
                <a
                  style={{ color: "#050505", "&:hover": { color: "white" } }}
                  target="_blank"
                  href="http://www.makeanybot.com"
                  rel="noreferrer"
                >
                  {" "}
                  SMK Solutions
                </a>{" "}
                under
                <a
                  style={{ color: "#050505" }}
                  target="_blank"
                  href="http://www.anyonecancode.in"
                  rel="noreferrer"
                >
                  {" "}
                  anybodycancode.in
                </a>{" "}
                initiative
              </span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
