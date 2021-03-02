import React from "react";
import Footer from "../footer";
import Header from "../header";
import { Image, Row, Col } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Transducer from "../images/transducer.png";
import APFC from "../images/APFC.png";
import SmartIo from "../images/smartio.png";
import Gate from "../images/gateway.png";

function Elmeasure() {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", paddingTop: "1rem" }}>
        {" "}
        <b>ELMEASURE </b>{" "}
      </h2>
      <div className="container" style={{ marginTop: "40px" }}>
        <Row>
          <Col>
            <div style={{ paddingTop: "2rem" }}>
              <Link
                to="/prodsm"
                style={{ color: "black", "text-align": "center" }}
              >
                {" "}
                <Image
                  style={{ "align-items": "center" }}
                  src={Transducer}
                  className="imagecenter"
                  Height="100px"
                  width="100px"
                />
                <h4>Smart Monitors </h4>
              </Link>
            </div>
          </Col>
          <Col>
            <div style={{ paddingTop: "2rem" }}>
              <Link
                to="/prodsc"
                style={{ color: "black", "text-align": "center" }}
              >
                <Image
                  style={{ "align-items": "center" }}
                  src={APFC}
                  className="imagecenter"
                  Height="100px"
                  width="100px"
                />
                <h4> Smart Controller</h4>
              </Link>
            </div>
          </Col>
          <Col>
            <div style={{ paddingTop: "2rem" }}>
              <Link
                to="/prodsr"
                style={{ color: "black", "text-align": "center" }}
              >
                <Image
                  style={{ "align-items": "center" }}
                  src={SmartIo}
                  className="imagecenter"
                  Height="100px"
                  width="100px"
                />
                <h4>Smart Resource</h4>
              </Link>
            </div>
          </Col>
          <Col>
            <div style={{ paddingTop: "2rem" }}>
              <Link
                to="/prodsn"
                style={{ color: "black", "text-align": "center" }}
              >
                {" "}
                <Image
                  style={{ "align-items": "center" }}
                  src={Gate}
                  className="imagecenter"
                  Height="100px"
                  width="100px"
                />
                <h4>Smart Networking</h4>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Elmeasure;
