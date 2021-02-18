import React from "react";
import Header from '../header';
// import Contactus from './contactus';
import { Row, Col, Image, Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import AutomaticTransferSwitch from '../images/automatictransferswitch.png';
import ManualtransferSwitch from '../images/manualtransferswitch.png';
import PrepaidPostPaidMeter from '../images/prepaidpostpaidmeter.png';
import PowerAnalyzer from '../images/poweranalyzer.png'
import ACCL from '../images/accl.png';
import PowerQualityAnalyzer from '../images/powerqualityanalyzer.png';
import SmartIo from '../images/smartio.png';
import Footer from '../footer';
import { HashLink as  Link } from 'react-router-hash-link';
import SubNav from '../subnav';


function SmartResorces() {
    return (
        <>
            <Header />
            <Container>
            <div className="container nav-link" style={{marginTop : "40px", paddingLeft : "10%", paddingRight:"0%"}}>
                {/* <MultiCarousel items = { categoryhr } />             */}
        <Row>
            <Col>
               <Link  to= "#automatictransferswitch">  <p> <Image src = {AutomaticTransferSwitch} height="100"  width="100" rounded  /> <br/>AutomaticTransferSwitch </p>  </Link>
               </Col>
               <Col>
               <Link to ="#manualtransferswitch" >  <p> <Image src = {ManualtransferSwitch} height="100"  width="100" rounded   /><br/> Manual Transfer Switch </p></Link>
               </Col>
               <Col>
                <Link to ="#prepaidmeter"> <p> <Image src = {PrepaidPostPaidMeter} height="100"  width="100" rounded /><br/> Prepaid PostPaid Meter</p></Link>
                </Col>
                <Col> 
                <Link to ="#powerfactorcontrol" >  <p> <Image src = {PowerAnalyzer} height="100"  width="100" rounded /><br/> Power Analyzer </p>  </Link>
                </Col>
                <Col>
                <Link to ="#accl">  <p>  <Image src = {ACCL} height="100"  width="100" rounded /> <br/> ACCL</p></Link>
                </Col>
                <Col>
                <Link to ="#poweranalyzer">  <p> <Image src = {PowerQualityAnalyzer} height="100"  width="100" rounded /> <br/> Power Quality Analyzer</p></Link>
                </Col>
                <Col>
                <Link to ="#smartio">  <p> <Image src = {SmartIo} height="100"  width="100" rounded /> <br/> Smart I /o</p></Link>
                </Col>
                </Row>
                <SubNav/>
            </div>
               
                        <h1 style={{ "textAlign": "center", "text-decoration": "underline" }}><strong>SMART RESOURCES</strong></h1>
                
                        <div>
                            
                                <Row>
                                    <Col>
                                        <h2 id="automatictransferswitch" style={{ textAlign: "center", "text-decoration": "underline" }}> Automatic Transfer Switch </h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> Seamless switching between sources for uninterrupted supply.
                                   Automatic Transfer Switch manufactures in India </p>
                                        <Image src={AutomaticTransferSwitch} height="250" width="400" rounded />
                                        <p style={{ textAlign: "center" }}> Overload Tripping Logic | Automatic DG Start/Stop
                                    | Fire/External Fault Trip | Safe and Rapid Switching | Automatic Transfer </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                        <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                        <li>Inbuilt control switch for selecting auto/manual mode</li>
                                        <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                        <li>Optional RS485 communication and cloud</li>
                                        <br />
                                        <p>Applications</p>
                                        <li>Monitor real-time system voltage and frequency </li>
                                        <li> Monitor source healthiness and output for both Source</li>
                                        <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                        <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>
                                    </Col>
                                </Row>
                            
                            <div className="divider-line"></div>
                            
                                <Row >
                                    <Col>
                                        <h2 id="manualtransferswitch" style={{ textAlign: "center", "text-decoration": "underline" }}> Manual Transfer Switch</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> MANUALLY CONTROL YOUR POWER SOURCE. </p>
                                        <Image src={ManualtransferSwitch} height="250" width="400" rounded />
                                        <p> User-friendly Installation | Safe Changeover</p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>High short-circuit withstand capacity </li>
                                        <li>Quick-make & quick-break operation for transferring of loads</li>
                                        <li>Operating handle with provision to lock in ON/OFF position</li>
                                        <li>Safest changeover during the failure of a primary source</li>
                                        <li>Facilitate easy installation and simplified wiring connections</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> Generator OEM’s </li>
                                        <li> Commercial buildings</li>
                                        <li> Automobile Industry & Manufacturing Industry</li>
                                        <li> Power distribution and Load Management.</li>
                                    </Col>
                                </Row>
                           
                            <div className="divider-line"></div>
                           
                                <Row >
                                    <Col>
                                        <h2 id="accl" style={{ textAlign: "center", "text-decoration": "underline" }}>ACCL</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}> Accl (Automatic Source Changeover with Current Limiter) For a seamless,
                                   uninterrupted changeover between power sources. Accl Changeover Switch manufacturers in India. </p>
                                        <Image src={ACCL} height="250" width="400" rounded />
                                        <p> ACCL | Automatic Changeover Current Limiter | Frequency | Energy  </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>Microcontroller based automatic source changeover with neutral isolation </li>
                                        <li>Intelligent re-connection once trip has occurred due to either overvoltage or overload</li>
                                        <li>Optional iACCL with Prepaid Metering feature can be given for DG side</li>
                                        <li>Individual phase overload monitoring in 3 phase ACCL & overvoltage protection for DG</li>
                                        <li>Inbuilt display & measurement of I, V, F and KWh on the both generator & mains in iACCL M600</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> ACCL perform intelligent tripping to save the age of the cables </li>
                                        <li>Reduced wiring cost as single phase ACCL has separate control for power and lighting load</li>
                                        <li> A Automate power distribution, protect expensive equipment and prevent fatal risks</li>
                                        <li> ACCL Logic for Currents up to 120 Amps is available.</li>
                                    </Col>
                                </Row>
                         
                            <div className="divider-line"></div>
                           
                                <Row >
                                    <Col>
                                        <h2 id="prepaidmeter" style={{ textAlign: "center", "text-decoration": "underline" }}>Prepaid/Postpaid Meter</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}>Prepaid meter is a Single Device for electricity, 
                                        gas and water measurement. Prepaid meter manufactures in India </p>
                                        <Image src={PrepaidPostPaidMeter} height="250" width="400" rounded />
                                        <p> Multifunction | Dual source | Over voltage/current cut off for protection 
                                            | Post paid meter | Prepaid meter </p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li>User friendly contactless prepaid metering solution </li>
                                        <li> Prepaid meter with LoRa helps you to make private network being independent of service provider</li>
                                        <li>Integration of Gas & Water with the electrical parameters thereby, extending the flexibility for the user to budget expenses</li>
                                        <li>Tripping of EB or DG consumption at pre-determined set point for protection & effective use of energy</li>
                                        <li>Recharge your prepaid meter & have explicit view of energy usage & tariff rates from anywhere</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> Shopping complex </li>
                                        <li>Residential layouts / apartments</li>
                                        <li> A Automate power distribution, protect expensive equipment and prevent fatal risks</li>
                                        <li> ACCL Logic for Currents up to 120 Amps is available.</li>
                                    </Col>
                                </Row>
                          
                            <div className="divider-line"></div>
                           
                                <Row >
                                    <Col>
                                        <h2 id="poweranalyzer" style={{ textAlign: "center", "text-decoration": "underline" }}>Power Analyzer</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}>High profile power analyzer with higher accuracy and data logging </p>
                                        <Image src={PowerAnalyzer} height="250" width="400" rounded />
                                        <p> User Friendly | Dynamic Communication | Demand Monitoring</p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li> Helps you locate, predict, prevent & troubleshoot problems in power distribution </li>
                                        <li> Measures voltage, current, frequency, power, energy consumption, unbalance, harmonics & inter-harmonics  </li>
                                        <li>24x7 cloud server data logging with time stamp</li>
                                        <li>Monitor & control large campuses or remote facilities with inexpensive web technology.</li>
                                        <li>Perform audits & analyzes remotely.</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> Reduce energy costs & Acheive maximum Returns on Investment. </li>
                                        <li> Higher Performance, easy to configure but economically priced</li>
                                        <li> Supports various Protocols, Identifies & Eliminates energy waste.</li>
                                        <li> Security & System Integration, improves Working envronment.</li>
                                    </Col>
                                </Row>
                         
                            <div className="divider-line"></div>
                            
                                <Row>
                                    <Col>
                                        <h2 id="powerqualityanalyzer" style={{ textAlign: "center", "text-decoration": "underline" }}>Power Analyzer</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}>A handheld device for capturing power quality measurements (NANOVIP CUBE) </p>
                                        <Image src={PowerQualityAnalyzer} height="250" width="400" rounded />
                                        <p> Handheld Power Quality Analyzer | Power Analyzer | Harmonic Analyzer</p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li> Measures Unbalance, harmonics, inrush, transients, sag and swells </li>
                                        <li> Lightweight, handheld, compact design with Magnetic Latch  </li>
                                        <li>High capacity rechargeable battery pack providing 24 hours backup</li>
                                        <li> Auto recognition & integrated with 2/3/4 wire connection system</li>
                                        <li>Micro SD card interface for data storage and subsequent analysis</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> Energy auditing </li>
                                        <li>Higher accuracy of Power Quality Measurements</li>
                                        <li> Continuously monitors & analyze electricity lines for disturbance.</li>
                                        <li> Allows reliable delivery of energy & protects equipment.</li>
                                    </Col>
                                </Row>
                           
                            <div className="divider-line"></div>
                           
                                <Row >
                                    <Col>
                                        <h2 id="smartio" style={{ textAlign: "center", "text-decoration": "underline" }}>Smart I/O</h2>
                                        <p style={{ textAlign: "center", "text-decoration": "underline" }}>Smartest way to capture the input & communicate data output </p>
                                        <Image src={SmartIo} height="250" width="400" rounded />
                                        <p> Universal Input | Universal Output | Digital Output</p>
                                    </Col>
                                    <Col>
                                        <br />
                                        <p>Salient Features</p>
                                        <li> Up to 8 Universal Inputs field configurable </li>
                                        <li>  Up to 4 Universal Outputs field configurable  </li>
                                        <li>6 SSR outputs and 2 relay outputs (optional)</li>
                                        <li> Communication LON / RS485</li>
                                        <li>Pluggable terminal blocks, for installation wiring and ease of maintenance</li>
                                        <br />
                                        <p>Applications</p>
                                        <li> Lighting management</li>
                                        <li>Breaker status monitoring</li>
                                        <li>  Home automation.</li>
                                    </Col>
                                </Row>
                            
                            <div className="divider-line"></div>
                     </div>
                     <Footer/>
            </Container>
            
        </>
    )
};

export default SmartResorces;