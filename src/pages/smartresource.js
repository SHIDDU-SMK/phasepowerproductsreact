import React from "react";
import Header from '../header';
// import Contactus from './contactus';
import { Row, Col, Image  } from 'react-bootstrap';
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
// import SubNav from '../subnav';


function SmartResorces() {
    return (
        <>
            <Header />
                    <div className="container" style={{ marginTop: "40px"}}>
                        {/* <MultiCarousel items = { categoryhr } />             */}
                        <Row>
                            <Col>
                                <Link to="#powerqualitymeter"> 
                                <Image src={AutomaticTransferSwitch} height="130" width="130" rounded title="Power Quality Meter" />
                                <p style={{color:"black", paddingTop:"1rem"}}>Automatic Transfer Switch </p> </Link>
                            </Col>
                            <Col>
                                <Link to="#apfc" > 
                                <Image src={ManualtransferSwitch} height="130" width="130" rounded title="APFC" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Manual transfer Switch </p></Link>
                            </Col>
                            <Col>
                                <Link to="#demandcontrol">  
                                <Image src={PrepaidPostPaidMeter} height="130" width="130" rounded  title="DemandControl" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Demand Control  </p></Link>
                            </Col>
                            <Col>
                                <Link to="#powerfactorcontrol" >  
                                <Image src={PowerAnalyzer} height="130" width="130" rounded title="PowerFactorController" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Power Factor Controller </p></Link>
                            </Col>
                            <Col>
                                <Link to="#earthleakagerelay">  
                                <Image src={ACCL} height="130" width="130" rounded title="EarthLeakageRelay"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Earth Leakage Relay </p></Link>
                            </Col>
                            <Col>
                                <Link to="#energyprocessmonitor">
                                <Image src={PowerQualityAnalyzer} height="130" width="130" rounded title="EnergyProcessMonitor"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Energy Process Monitor </p></Link>
                            </Col>
                            <Col>
                                <Link to="#motorprotectionsystem">
                                <Image src={SmartIo } height="130" width="130" rounded title="MotorProtectionSystem"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Motor Protection System</p></Link>
                            </Col>
                        </Row>
                 
                        <hr className="featurette-divider" />
                    </div>

                   

                    <div className="container">
                        <Row>
                            <Col>
                                <h2 id="automatictransferswitch" style={{ textAlign: "center" }}><b> AutomaticTransferSwitch  </b></h2>
                                <p style={{ textAlign: "center" }}>Seamless switching between sources for uninterrupted supply. </p> 
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={AutomaticTransferSwitch} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <p>Salient Features</p>
                                        <li>Automatic start/stop operation of DG on mains failure
                                       Overload tripping (optional) with inverse curve logic </li>
                                        <li>Automatic transfer switch are provided with fire alarm / external fault trip feature</li>
                                        <li>Inbuilt control switch for selecting auto/manual mode</li>
                                        <li>Automatic transfer switch have high capacity to withstand short circuit</li>
                                        <li>Optional RS485 communication and cloud</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">

                                <li>Monitor real-time system voltage and frequency </li>
                                        <li> Monitor source healthiness and output for both Source</li>
                                        <li> Wide range of motor operating voltage from 150VAC – 285V AC</li>
                                        <li> Automatic transfer switch for commercial centers, manufacturing, medical facilities,and data centers.</li>


                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>High short-circuit withstand capacity </li>
                                        <li>Quick-make & quick-break operation for transferring of loads</li>
                                        <li>Operating handle with provision to lock in ON/OFF position</li>
                                        <li>Safest changeover during the failure of a primary source</li>
                                        <li>Facilitate easy installation and simplified wiring connections</li>



                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li> Generator OEM’s </li>
                                        <li> Commercial buildings</li>
                                        <li> Automobile Industry & Manufacturing Industry</li>
                                        <li> Power distribution and Load Management.</li>

                                </ul>
                            </Col>

                            <Col>
                                <h2 id="manualtransferswitch" style={{ textAlign: "center" }}> Manual Transfer Switch</h2>
                                <p style={{ textAlign: "center" }}>MANUALLY CONTROL YOUR POWER SOURCE</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={ManualtransferSwitch} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="prepaidmeter" style={{ textAlign: "center" }}> Prepaid/Postpaid Meter</h2>
                                <p style={{ textAlign: "center" }}>Prepaid meter is a Single Device for electricity, gas and water measurement. Prepaid meter 
                                </p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PrepaidPostPaidMeter} alt="logo-img" width="100%" hight="100%"/> </svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>User friendly contactless prepaid metering solution </li>
                                        <li> Prepaid meter with LoRa helps you to make private network being independent of service provider</li>
                                        <li>Integration of Gas & Water with the electrical parameters thereby, extending the flexibility for the user to budget expenses</li>
                                        <li>Tripping of EB or DG consumption at pre-determined set point for protection & effective use of energy</li>
                                        <li>Recharge your prepaid meter & have explicit view of energy usage & tariff rates from anywhere</li>


                                    
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li> Shopping complex </li>
                                        <li>Residential layouts / apartments</li>
                                        <li> A Automate power distribution, protect expensive equipment and prevent fatal risks</li>
                                        <li> ACCL Logic for Currents up to 120 Amps is available.</li>


                                </ul>

                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li> Helps you locate, predict, prevent & troubleshoot problems in power distribution </li>
                                        <li> Measures voltage, current, frequency, power, energy consumption, unbalance, harmonics & inter-harmonics  </li>
                                        <li>24x7 cloud server data logging with time stamp</li>
                                        <li>Monitor & control large campuses or remote facilities with inexpensive web technology.</li>
                                        <li>Perform audits & analyzes remotely.</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li> Reduce energy costs & Acheive maximum Returns on Investment. </li>
                                        <li> Higher Performance, easy to configure but economically priced</li>
                                        <li> Supports various Protocols, Identifies & Eliminates energy waste.</li>
                                        <li> Security & System Integration, improves Working envronment.</li>

                                 

                                </ul>

                            </Col>
                            <Col>
                                <h2 id="poweranalyzer" style={{ textAlign: "center" }}> Power Analyzer </h2>
                                <p style={{ textAlign: "center" }}>High profile power analyzer with higher accuracy and data logging</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PowerAnalyzer} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="accl" style={{ textAlign: "center" }}>  ACCL</h2>
                                <p style={{ textAlign: "center" }}>Accl (Automatic Source Changeover with Current Limiter) For a seamless,
                                uninterrupted changeover between power sources. Accl Changeover Switch manufacturers in India</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={ACCL} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>Microcontroller based automatic source changeover with neutral isolation </li>
                                        <li>Intelligent re-connection once trip has occurred due to either overvoltage or overload</li>
                                        <li>Optional iACCL with Prepaid Metering feature can be given for DG side</li>
                                        <li>Individual phase overload monitoring in 3 phase ACCL & overvoltage protection for DG</li>
                                        <li>Inbuilt display & measurement of I, V, F and KWh on the both generator & mains in iACCL M600</li>


                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul> 
                                <li> ACCL perform intelligent tripping to save the age of the cables </li>
                                        <li>Reduced wiring cost as single phase ACCL has separate control for power and lighting load</li>
                                        <li> A Automate power distribution, protect expensive equipment and prevent fatal risks</li>
                                        <li> ACCL Logic for Currents up to 120 Amps is available.</li>                            
                                         </ul>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">
                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>Real time monitoring and reporting</li>
                     <li> Composite system with EMS and PEMS</li>
                     <li>Desired reports like, Doff wise, shift wise, count wise, production, energy, UKG</li>
                     <li> Speed Vs Kw curve, trends, bar graphs, comparisons</li>
                     <li> Alerts on higher UKG, lesser production, utilization & power fluctuations.</li>
                     <li>Maintenance alerts based on run hours production cost analysis - Cost Audits - Energy Audits</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li>  Energy savings will bring down operational cost & increases the plant efficiency</li>
                     <li>Scheduling of preventive maintenance</li>
                     <li>  Higher productivity- Lesser downtime</li>
                     <li>  Effective utilization of manpower and resources</li>

                                </ul>
                            </Col>
                            <Col>
                                <h2 id="energyprocessmonitor" style={{ textAlign: "center" }}> Dual Source Energy Meter</h2>
                                <p style={{ textAlign: "center" }}>Collecting data from two different sources of energy</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PowerQualityAnalyzer} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">
                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="smartio" style={{ textAlign: "center" }}>Smart I/O </h2>
                                <p style={{ textAlign: "center" }}>Smartest way to capture the input & communicate data output </p>
                                {/* <Image src={DcEnergyMeter} height="250" width="400" rounded /> */}
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={SmartIo } alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li> Up to 8 Universal Inputs field configurable </li>
                                        <li>  Up to 4 Universal Outputs field configurable  </li>
                                        <li>6 SSR outputs and 2 relay outputs (optional)</li>
                                        <li> Communication LON / RS485</li>
                                        <li>Pluggable terminal blocks, for installation wiring and ease of maintenance</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li> Lighting management</li>
                                        <li>Breaker status monitoring</li>
                                        <li>  Home automation.</li>

                                </ul>
                            </Col>
                        </Row>
                    </div>
            <Footer />
        </>
    )
};

export default SmartResorces;