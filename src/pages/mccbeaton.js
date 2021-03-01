import React from 'react';
import Footer from '../footer';
import Header from '../header';
import BZMMccb from '../images/eaton/mccb/eatonbzm.jpg';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Mcb from '../images/eaton/mcb1.jpg';
import eatonmoeller from '../images/eaton/contractor/eatonmoeller.jpg';
import Light from '../images/eaton/light/light.png';
import SPD from '../images/eaton/spd/spd.png';


function MCCB() {

    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center", paddingTop: "1rem", color:"red", fontSize:"50px" }}> <b>Molded Case Circuit Breaker </b> </h2>
            <div className="container" style={{ marginTop: "40px"}}>
            <Row>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/eaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Mcb} className="imagecenter" Height="100px" width="100px" />
                    <h4 className="textfont" > MCB Device  </h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/eaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={BZMMccb} className="imagecenter" Height="100px" width="100px" />
                    <h4 className="textfont" > MCCB Device  </h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/eaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={eatonmoeller} className="imagecenter" Height="100px" width="100px" />
                    <h4 className="textfont" > contractors  </h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/eaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={Light} className="imagecenter" Height="100px" width="100px" />
                    <h4 className="textfont" >   Indicating lamp</h4></Link>
            </div>
            </Col>
            <Col>
            <div style={{ paddingTop: "0rem" }}>
                <Link to="/eaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={SPD} className="imagecenter" Height="100px" width="100px" />
                    <h4 className="textfont" > SPD </h4></Link>
            </div>
            </Col>
            </Row>
            <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={BZMMccb} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                    <Col sm={8}>
                        <h2><b> BZM Molded Case Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> Eaton's BZM Molded Case Circuit Breakers offer optimum and efficient protection for low voltage applications in power distribution systems. 
                        The advantage of the BZM series is its simple use: The thermal and magnetic release system for over-current and short-circuit protection of your system is already factory set. Along with simple 
                        handling of the product and its accessories, Eaton’s BZM offering provides an attractive product assortment. </p>

                    </Col>
                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> RATED CURRENTS UP TO</th>
                                <th>STANDARD</th>
                                <th>POLUTION DEGREE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 125 A / 250 A / 400 A</td>
                                <td> IEC/EN 60947-2</td>
                                <td> III (IEC/EN 60947)</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <hr className="featurette-divider" />
            </div>
            <Footer />
                    </>

                );

}

export default MCCB;