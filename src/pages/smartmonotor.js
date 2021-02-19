import React from 'react';
import Footer from '../footer';
import Header from '../header';
// import SubProduct from '../subproduct';
// import MultiCarousel from '../multicarousel';
// import {categoryhr} from '../data';
// import {hrproducts} from '../data';
import { Image, Row, Col } from 'react-bootstrap';
// import CenterMode from '../pages/multislider';
import Transducer from '../images/transducer.png';
import Digitalpanel from '../images/digitalpanel.png';
import MultiFunctionMeter from '../images/multifunctionmeter.png';
import BranchCircuitMonitor from '../images/branchcircuitmonitor.png';
import GeneratorMonitoringUnit from '../images/generatormonitoringunit.png';
import DualSourcEenergyMeter from '../images/dualsourceenergymeter.png';
import DcEnergyMeter from '../images/dcenergymeter.png';
import { HashLink as Link } from 'react-router-hash-link';


function SmartMonotor() {

    return (
        <>
            <Header />
                    <div className="container" style={{ marginTop: "40px"}}>
                        {/* <MultiCarousel items = { categoryhr } /> */}
                        <Row>
                            <Col>
                                <Link to="#transducerisolator"> 
                                <Image src={Transducer} height="130" width="130" rounded title="Transducer & Isolator" />
                                <p style={{color:"black", paddingTop:"1rem"}}>Transducer & Isolator </p> </Link>
                            </Col>
                            <Col>
                                <Link to="#digitalpanelmeter" > 
                                <Image src={Digitalpanel} height="130" width="130" rounded title=" Digital Panel Meter" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Digital Panel Meter </p></Link>
                            </Col>
                            <Col>
                                <Link to="#multifunction">  
                                <Image src={MultiFunctionMeter} height="130" width="130" rounded />
                                <p style={{color:"black", paddingTop:"1rem"}}>  Multi Function  </p></Link>
                            </Col>
                            <Col>
                                <Link to="#branchcircuitmonitor" >  
                                <Image src={BranchCircuitMonitor} height="130" width="130" rounded />
                                <p style={{color:"black", paddingTop:"1rem"}}> Branch Circuit Monitor </p></Link>
                            </Col>
                            <Col>
                                <Link to="#generalmoitoringunit">  
                                <Image src={GeneratorMonitoringUnit} height="130" width="130" rounded />
                                <p style={{color:"black", paddingTop:"1rem"}}>Generator Monitoring Unit</p></Link>
                            </Col>
                            <Col>
                                <Link to="#dualsource">
                                <Image src={DualSourcEenergyMeter} height="130" width="130" rounded />
                                <p style={{color:"black", paddingTop:"1rem"}}>Dual Source Energy Meter </p></Link>
                            </Col>
                            <Col>
                                <Link to="#dcenergy">
                                <Image src={DcEnergyMeter} height="130" width="130" rounded />
                                <p style={{color:"black", paddingTop:"1rem"}}> DC Energy Meter</p></Link>
                            </Col>
                        </Row>
                 
                        <hr className="featurette-divider" />
                    </div>

                   

                    <div className="container">
                        <Row>
                            <Col>
                                <h2 id="transducerisolator" style={{ textAlign: "center" }}><b> Transducer & Isolator</b></h2>
                                <p style={{ textAlign: "center" }}> Measure, record and visualize electrical network parameters </p> 
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Transducer} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Isolation Interface | Signal Changeover | Power Transducer | Voltage Transducer</p>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                    <li>Measured parameters can be programmed to generate equivalent output signals </li>
                                    <li>Override selection for desired value and range</li>
                                    <li>Isolation between input to output or output to output</li>
                                    <li>Quick response time of 300ms in display and communication</li>
                                    <li> On field configurable Input and Output parameters</li>
                                    <li>User friendly interface to support remote monitoring and communication</li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">

                                    <li>Easy to install and is field configurable by the user </li>
                                    <li> Output signal is transferable over a long range</li>
                                    <li>  Textile and manufacturing industry</li>
                                    <li> Process Manufacturing/OEM’s</li>
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
                                    <li>Inbuilt Selector Switch</li>
                                    <li>High resolution reading with autoscaling</li>
                                    <li>Suitable for industrial panels, gen-sets, solar, pump control panels, etc.</li>
                                    <li>Optional RS485 for data collection</li>
                                    <li>  Optional easy interface to PLC through modbus protocol </li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>AC & DC Measurement </li>
                                    <li> Equipment Monitoring</li>
                                    <li>  Genset, Solar and UPS applications</li>
                                    <li> In control panel to measure different electrical loads</li>
                                </ul>
                            </Col>

                            <Col>
                                <h2 id="digitalpanelmeter" style={{ textAlign: "center" }}> Digital Panel Meter</h2>
                                <p style={{ textAlign: "center" }}>Basic parameters measured precisely</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Digitalpanel} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Ammeter | Volt meter | VAF Meter | Hz Meter | Frequency Meter
                                DC Meter | RPM & MPM | Transducer Output </p>

                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="multifunction" style={{ textAlign: "center" }}> Multifunction Meter</h2>
                                <p style={{ textAlign: "center" }}>Simultaneous measurement of various electrical parameters</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={MultiFunctionMeter} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Basic | Power | Energy | Load Manager Digital Output | Pulse Output </p>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                    <li>Easy navigation</li>
                                    <li>Event recording with time stamp (all basic & power parameters)</li>
                                    <li>Unbalance load and voltage with calculated neutral current.</li>
                                    <li>Dynamic communication</li>
                                    <li>  Optional digital output for all basic and power parameters </li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>Monitoring Electrical Parameters </li>
                                    <li>Control / protection</li>
                                    <li>  In control panel to measure different electrical loads</li>
                                    <li> Generator & control panels</li>
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
                                    <li>Multiple branches of load can be monitored together</li>
                                    <li> Faster communication through RS485 port (Modbus protocol)d</li>
                                    <li>Accuracy Class 1.0 as per IEC 62053-21 & Class 0.5 as per IEC 62053-22 Standards</li>
                                    <li>Displays more than 25 parameters</li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>Remote reading and control</li>
                                    <li>Building management system</li>
                                    <li> In control panel to measure different electrical loads</li>
                                    <li>  Ideal for billing in apartments/commercial complexes</li>
                                </ul>

                            </Col>
                            <Col>
                                <h2 id="branchcircuitmonitor" style={{ textAlign: "center" }}> Branch Circuit Monitor</h2>
                                <p style={{ textAlign: "center" }}>Compact device to enroute multiple channels</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={BranchCircuitMonitor} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Multi-channel load manager | Power distribution unit </p>

                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="generalmoitoringunit" style={{ textAlign: "center" }}> Generator Monitoring Unit</h2>
                                <p style={{ textAlign: "center" }}>Generator monitoring device with dual display</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={GeneratorMonitoringUnit} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Counter & LED Display | Pulse Output </p>

                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                    <li>Avoids the requirement of 2 different meters (energy and VAF in one)</li>
                                    <li> Reduces the cost and simplify wiring</li>
                                    <li>High resolution reading with auto scaling in LED</li>
                                    <li>Energy consumption in counter even if CT is reversed</li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li> Easy configuration of Gen-set Controllers</li>
                                    <li>Monitor health & Readiness</li>
                                    <li> Remote operation & control</li>
                                    <li>  Multiple alarms & notifications</li>
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
                                    <li>Directly replaces 2 energy meters</li>
                                    <li> Sensing dual source through 240V connection</li>
                                    <li>Dual row display switches based on the source</li>
                                    <li>Optional digital output separately for EB or DG parameters</li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li> To measure dual power source</li>
                                    <li>Dual source energy billing</li>
                                    <li>  Industries, residential, commercial buildings</li>
                                    <li>  Generator & control panels</li>
                                </ul>
                            </Col>
                            <Col>
                                <h2 id="dualsource" style={{ textAlign: "center" }}> Dual Source Energy Meter</h2>
                                <p style={{ textAlign: "center" }}>Collecting data from two different sources of energy</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={DualSourcEenergyMeter} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Multifunction meter | Dual source measurement </p>

                            </Col>
                        </Row>
                    </div>

                    <div className="container">
                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="dcenergy" style={{ textAlign: "center" }}>DC Energy Meter</h2>
                                <p style={{ textAlign: "center" }}>Smart device for all renewal energy resources</p>
                                {/* <Image src={DcEnergyMeter} height="250" width="400" rounded /> */}
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={DcEnergyMeter} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Multi-channel DC Energy | Voltage/Current full scale </p>

                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                    <li>Multiple channels can be measured by a single meter, EN2450N & EN2450D</li>
                                    <li> Differential current input for all the current channels </li>
                                    <li>Programmable shunt secondary 50mV to 100mV</li>
                                    <li> Programmable CT Primary for all channels up to 200A - for Hall Effect CT</li>
                                    <li> Data logging for parameters such as Energy, Load hours and Ampere hours</li>
                                    <li> Easy installation,Compact size, weight and simple wiring</li>
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>DC Measurement</li>
                                    <li>Equipment Monitoring</li>
                                    <li>  Genset, Solar and UPS applications</li>
                                    <li> In control panel to measure different electrical loads </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
            <Footer />
        </>

    );

}

export default SmartMonotor;
