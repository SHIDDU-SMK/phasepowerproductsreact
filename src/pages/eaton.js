import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Mcb from '../images/eaton/mcb1.jpg';
import Eatonxeffect from '../images/eaton/eatonxeffect.jpg';
import Eatonfaz from '../images/eaton/eatonfaz.jpg'
import Eatonfazdc from '../images/eaton/eatonfazdc.jpg';
import Eatonxeffectrcbo from '../images/eaton/eatonxeffectrcbo.jpg';
import Eatonaz from '../images/eaton/eatonaz.jpg';
import Eatonfaznadc from '../images/eaton/eatonfaznadc.jpg';
import Eatonminiature from '../images/eaton/eatonminiature.jpg'
import BZMMccb from '../images/eaton/mccb/eatonbzm.jpg';
import eatonmoeller from '../images/eaton/contractor/eatonmoeller.jpg';
import Light from '../images/eaton/light/light.png';
import SPD from '../images/eaton/spd/spd.png';



function Eaton() {

    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center", paddingTop: "1rem", color:"red", fontSize:"50px" }}> <b> EATON  </b> </h2>
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
                <Link to="/mccbeaton" style={{ color: "black", "text-align": "center" }}> <Image style={{ "align-items": "center" }} src={BZMMccb} className="imagecenter" Height="100px" width="100px" />
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
                            <image href={Mcb} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                    <Col sm={8}>
                        <h2><b> xPole Combined RCD/MCB Device PKNM, 1+N-pole</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> This residual current operated circuit breaker with integrated overcurrent protection in 1+N pole is a high-quality residual current circuit breaker and miniature circuit breaker combination.
                        This RCD/MCB combination PKNM switch is not only available as an AC and pulse current sensitive "standard type" A,
                        but also as a mixing frequency sensitive type F, as a type G or G/A triggering with a time delay of at least 10 ms.
                        While the AC and the A are only impulse current resistant up to 250 A,
                                    the other three types F, G and G/A offer an increased impulse current resistance of more than 3 kA.  </p>


                    </Col>
                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> RATED CURRENTS</th>
                                <th>COMPLIANT TO</th>
                                <th>RATED BREAKING CAPACITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> up to 40 A </td>
                                <td> IEC/EN 61009</td>
                                <td>  6 kA or 10 kA</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={8}>
                        <h2><b> xEffect Combined RCD/MCB Device, FRBmM, 1+N, 2, 3 and 3+N-pole</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> This residual current operated circuit breaker with integrated overcurrent protection is a high-quality residual current circuit breaker
                        and miniature circuit breaker combination with line voltage-independent tripping and a wide variety of rated tripping currents.
                        A tripping by a fault current is signalled by the blue display, white indicates that either the MCB part was "tripped" or that it was switched off. It is compatible with Busbars.
                                    A twin-purpose terminal (lift/open-mouthed) is available for easy and quick mounting.   </p>


                    </Col>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonxeffect} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>

                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> RATED CURRENTS</th>
                                <th>COMPLIANT TO</th>
                                <th>RATED BREAKING  CAPACITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> up to 40 A </td>
                                <td> IEC/EN 61009</td>
                                <td> 6 kA or 10 kA</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonfaz} alt="logo-img" width="100%" hight="100%" /></svg>

                    </Col>
                    <Col sm={8}>
                        <h2><b> FAZ-NA xEffect Miniature Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> The FAZ-NA / FAZ-RT miniature circuit breaker is a protective device equipped with both a
                        thermal and an electromagnetic release that is available in 1-, 2-, 3- and 4- pole versions.
                        The FAZ-NA is available with rated currents of 0.5 A to 63 A. The switching capacity is 15 kA according to IEC/EN 60947-2, and 10 kA or 14 kA according to UL 489/CSA C22.2 No. 5,
                                 depending on the device type.  </p>


                    </Col>
                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> EASY INSTALLATION</th>
                                <th>VERSIONS</th>
                                <th>CURRENT LIMITING CLASS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> on DIN rail </td>
                                <td> 1-, 2-, 3- and 4-pole</td>
                                <td> 3</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={8}>
                        <h2><b> FAZ-DC xEffect Miniature Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> The FAZ-DC miniature circuit breaker is a protective device equipped with both a thermal
                        and an electromagnetic release that is available in 1- and 2-pole versions. The FAZ is available with rated currents of 2 A to 50 A. The switching
                        capacity is 10 kA according to IEC/EN 60947-2 The DC rated voltage is 220 V per pole for the 2 A version, and 250 V per pole for the 3 A to 50 A versions.
                        A guide for secure terminal connection and a 3-position DIN-rail simplify the installation of the circuit breaker.
                                       </p>


                    </Col>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonfazdc} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>

                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>IN ACCORDANCE WITH</th>
                                <th>RATED CURRENTS</th>
                                <th>VERSIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IEC/EN 60947-2</td>
                                <td>up to 50 A</td>
                                <td>1- and 2-pole</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonxeffectrcbo} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                    <Col sm={8}>
                        <h2><b> xEffect Combined RCD/MCB Device, FRBmM, 1+N, 2, 3 and 3+N-pole</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> This residual current operated circuit breaker with integrated overcurrent protection is a high-quality residual current circuit breaker and
                        miniature circuit breaker combination with line voltage-independent tripping and a wide variety of rated tripping currents.
                        A tripping by a fault current is signalled by the blue display, white indicates that either the MCB part was "tripped" or that it was switched off.
                                It is compatible with Busbars. A twin-purpose terminal (lift/open-mouthed) is available for easy and quick mounting. </p>


                    </Col>
                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> RATED CURRENTS</th>
                                <th>COMPLIANT TO</th>
                                <th>RATED BREAKING CAPACITY </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> up to 40 A </td>
                                <td> IEC/EN 61009</td>
                                <td> 6 kA or 10 kA</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <hr className="featurette-divider" />
            </div>
            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={8}>
                        <h2><b> AZ xEffect Miniature Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> 
                        The AZ miniature circuit breaker is a protective device equipped with both a thermal and an electromagnetic
                         release that is available in 1-, 2-, 3-, 4- and 3+N pole versions. The AZ is suitable for both AC and DC 
                         applications (60 V per pole) with rated currents from 20 A to 125 A. Depending on the device type, it has a 
                         switching capacity of up to 25 kA according to IEC/EN 60947-2.
                                       </p>


                    </Col>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonaz} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>

                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>VERSIONS </th>
                                <th>IN ACCORDANCE WITH</th>
                                <th>RATED CURRENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1-, 2-, 3-, 4- and 3+N pole</td>
                                <td>IEC/EN 60947-2</td>
                                <td>up to 125 A</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr className="featurette-divider" />
                </div>
                         <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonfaznadc} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>
                    <Col sm={8}>
                        <h2><b>FAZ-NA-DC xEffect Miniature Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> 
                        The FAZ-NA-DC miniature circuit breaker is a protective device that is equipped with both a thermal and an 
                        electromagnetic release. The FAZ-NA-DC for DC applications is available in 1-pole and 2-pole versions with 
                        rated currents from 2 A to 40 A. The switching capacity is 10 kA according to IEC/EN 60947-2, UL 489 and CSA C22.2
                         No. 5. The DC rated voltage for all types is 125 V per pole according to UL 489/CSA C22.2 No. 5, and 220 V per pole 
                         for the 2 A version / 250 V per pole for the 3 A to 40 A versions according to IEC/EN 60947-2.  </p>   
                                      </Col>
                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> TRIPPING CHARACTERISTIC</th>
                                <th>VERSIONS: 1- AND 2-POLE</th>
                                <th>RATED CURRENTS </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> C</td>
                                <td> 1- and 2-pole</td>
                                <td> up to 40 A</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <hr className="featurette-divider" />
            </div>

            <div className="container">
                <Row style={{ paddingTop: "2rem" }}>
                    <Col sm={8}>
                        <h2><b> PLS6-DC and PL10-DC-IN xPole Miniature Circuit Breaker</b></h2>
                        <p style={{ "font-size": "20px", paddingTop: "2rem" }}> 
                        The PLS6 miniature circuit breaker (MCB) is a protective device that’s equipped with both a thermal and an 
                        electromagnetic release. The former responds in the event of an overload, while the latter offers protection
                         against short circuits. The 1- and 2-pole PLS6 devices for DC applications are available with rated currents
                          from 1 A to 50 A and 4P PL10 devices for DC application  are available with rated currents from 16A to 50A and
                           can withstand rated voltages of up to 250 V DC Per pole. The switching capacity is 10 kA. The PLS6-DC and
                            PL10-DC-IN is busbar compatible, and double life/claw terminals are available at the top as well as at 
                            the bottom for easy mounting.</p>


                    </Col>
                    <Col sm={4}>
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Eatonminiature} alt="logo-img" width="100%" hight="100%" /></svg>
                    </Col>

                </Row>
                <div style={{ textAlign: "center", fontsize: "20px" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>IEC 60947-2 </th>
                                <th>RATED CURRENTS</th>
                                <th>TRIPPING CHARACTERISTIC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>compliant MCB</td>
                                <td>up to 50 A</td>
                                <td>C</td>
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

export default Eaton;