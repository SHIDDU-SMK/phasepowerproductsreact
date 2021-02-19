import React from "react";
// import NavBar from './navbar';
// import Contactus from './contactus';
import { Row, Col, Image } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import PowerQualityMeter from '../images/powerqualitymeter.png';
import APFC from '../images/APFC.png';
import DemandControl from '../images/demandcontrol.png';
import PowerFactorController from '../images/powerfactorcontroller.png';
import EarthLeakageRelay from '../images/earthleakagerelay.png';
import EnergyProcessMonitor from '../images/energyprocessmonitor.png';
import MotorProtectionSystem from '../images/motorprocetionsystem.png';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../header';
import Footer from '../footer';
// import SubNav from '../subnav';

// import SubNav from '../subnav';



function SmartControl() {
   return (
      <>
            <Header />
            <h2 style={{textAlign:"center" , paddingTop:"1rem"}}> <b>Smart Controller </b> </h2>
                    <div className="container" style={{ marginTop: "40px"}}>
                        {/* <MultiCarousel items = { categoryhr } />             */}
                        
                        <Row>
                            <Col>
                                <Link to="#powerqualitymeter"> 
                                <Image src={PowerQualityMeter} height="130" width="130" rounded title="Power Quality Meter" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Power Quality Meter</p> </Link>
                            </Col>
                            <Col>
                                <Link to="#apfc" > 
                                <Image src={APFC} height="130" width="130" rounded title="APFC" />
                                <p style={{color:"black", paddingTop:"1rem"}}> APFC </p></Link>
                            </Col>
                            <Col>
                                <Link to="#demandcontrol">  
                                <Image src={DemandControl} height="130" width="130" rounded  title="DemandControl" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Demand Control  </p></Link>
                            </Col>
                            <Col>
                                <Link to="#powerfactorcontrol" >  
                                <Image src={PowerFactorController} height="130" width="130" rounded title="PowerFactorController" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Power Factor Controller </p></Link>
                            </Col>
                            <Col>
                                <Link to="#earthleakagerelay">  
                                <Image src={EarthLeakageRelay} height="130" width="130" rounded title="EarthLeakageRelay"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Earth Leakage Relay </p></Link>
                            </Col>
                            <Col>
                                <Link to="#energyprocessmonitor">
                                <Image src={EnergyProcessMonitor} height="130" width="130" rounded title="EnergyProcessMonitor"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Energy Process Monitor </p></Link>
                            </Col>
                            <Col>
                                <Link to="#motorprotectionsystem">
                                <Image src={MotorProtectionSystem} height="130" width="130" rounded title="MotorProtectionSystem"  />
                                <p style={{color:"black", paddingTop:"1rem"}}>Motor Protection System</p></Link>
                            </Col>
                        </Row>
                 
                        <hr className="featurette-divider" />
                    </div>

                   

                    <div className="container">
                        <Row>
                            <Col>
                                <h2 id="powerqualitymeter" style={{ textAlign: "center" }}><b> Power Quality Meter </b></h2>
                                <p style={{ textAlign: "center" }}> Measure, record and visualize electrical network parameters </p> 
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PowerQualityMeter} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Multifunction Meter | Power quality | Load Manager | Demand controller | Power quality | Harmonics </p>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>Power quality meter displays waveform for instantaneous V,I, harmonics,Sag/Swell with data storage upto 14GB</li>
                                 <li>Measurement of THD and harmonics up to 63 rd order is possible with power quality meter</li>
                                 <li>Captures and measures power quality events: flicker, K factor, crest factor,sag/swell, interruption & unbalance</li>
                                 <li>TOD option for energy & demand upto 8 slots</li>
                                 <li> Power quality meter monitors performance & availability of devices using inbuilt MQTT & TCP/IP protocol</li>
                                 <li>Power quality meter is an ideal choice for remote monitoring of devices via M2M software platform</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">

                                 <li>Monitoring critical load,incomers, and HT panels </li>
                                 <li> Utility billing in Apartments and commercial complexes</li>
                                 <li> Measuring energy variants in Building Management system</li>
                                 <li>  Measuring power & energy variants in Gensets, Test benches, and the laboratories</li>

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
                                <li> Power factor controlling based on the capacitor bank switching history</li>
                     <li>Capacitor is automatically disabled when it is deteriorated beyond a certain level</li>
                     <li> Automatically learns the number of capacitors connected and the value.</li>
                     <li>Capacitance-based power factor correction takes care of variation in voltage and frequency.</li>
                     <li>  Controlling based on VAR parameter and availability of built-in alarms</li>
                     <li>  Flexibility for site programmability of CT ratio suitable for any load</li>
                     </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li>Automobile industry</li>
                                 <li> Cement Industry</li>
                                 <li>  Hospitals, commercial industries</li>
                                 <li> Any manufacturing industry</li>
                                  </ul>
                            </Col>
                            <Col>
                                <h2 id="apfc" style={{ textAlign: "center" }}> APFC  </h2>
                                <p style={{ textAlign: "center" }}>Automatic Power Factor Controller Save energy, maintain power factor range to avoid penalties</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={APFC} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Power | Frequency | PF | VAR | 8/12/16 stage control Automatic power factor controller </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="demandcontrol" style={{ textAlign: "center" }}> Demand Controller </h2>
                                <p style={{ textAlign: "center" }}>High-end multifunction meter for comprehensive energy management</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={DemandControl} alt="logo-img" width="100%" hight="100%"/> </svg>
                                <p style={{ textAlign: "center" }}> Multifunction Meter | Load Manager | Import Export | Harmonics | Digital/Analog Input or Output | K-factor | BACnet | Energy Meter  </p>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>1 sec. update for demand makes the demand controlling very precise</li>
                     <li>Field programmable demand parameters kVA, kW, kVAR and Aavg</li>
                     <li>TOU/TOD based controlling. Individually programmable demand level</li>
                     <li>Maximum demand controller can forecast demand and cuts off load as maximum demand crosses preset value</li>
                     <li>  Communication: MODBUS RTU, RS485, BACnet </li>

                                    
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>Automatic connection or disconnection of Gensets connected to common bus. </li>
                                    <li>Process management</li>
                                    <li>  Maximum demand control & management</li>
                                    <li> Energy Accounting & Balancing</li>

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
                                <li>User programmable</li>
                                 <li> Three phase sensing (it gives accurate measurement of PF</li>
                                 <li>Automatic or manual control (manual control with power backup option </li>
                                 <li>Four quadrant operation</li>
                                 <li> Optional RS485 communication interface </li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li>can work for any electrical Incomer</li>
                                 <li> Fixed power factor corrections individual (e.g. motor, transformers, lighting, etc.)</li>
                                 <li> Group fixed power factor correction (several equipments connected in a group)</li>
                                 <li>  Capacitor banks of tuned and detuned</li>

                                </ul>

                            </Col>
                            <Col>
                                <h2 id="powerfactorcontrol" style={{ textAlign: "center" }}> Power Factor Controller </h2>
                                <p style={{ textAlign: "center" }}>Intelligent device to maintain the power factor in required range</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PowerFactorController} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Current | Voltage | Frequency | PF | VAR | 6/8/12 stage control  </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="earthleakagerelay" style={{ textAlign: "center" }}>  Earth Leakage Relay</h2>
                                <p style={{ textAlign: "center" }}>Detect the leakage current in an intelligent electrical device</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={EarthLeakageRelay} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Earth leakage current | Trip time |  CBCT | Also read about prepaid meter  </p>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li> Inverse curve - Trip time to accomplish faster trip time for a higher leakage current.</li>
                     <li>  High accuracy Earth Leakage Relay of class 2.0FS in industry</li>
                     <li> Programmable Earth Leakage Trip time from 100ms - 30s with password protection.</li>
                     <li>Wide selectable range of Earth leakage current from 30 mA – 30 A</li>
                     <li>Monitors and protects power systems from Earth Leakage Current</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li> Protects life and property against overflow of leakage current</li>
                     <li>Protects motors / transformers / feeders / DG etc.,ensures reliable measurement and maximum safety</li>
                     <li>Complete protection for oil refineries, pulp industries, mining industry, electrical distribution & control engineering</li>
                     <li>  Protects control panels and switch boards from earth leakage current</li>

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
                                <image href={EnergyProcessMonitor} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Multifunction meter | Dual source measurement  </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">
                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="motorprotectionsystem" style={{ textAlign: "center" }}>Motor Protection System</h2>
                                <p style={{ textAlign: "center" }}>One stop solution for motor protection</p>
                                {/* <Image src={DcEnergyMeter} height="250" width="400" rounded /> */}
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={MotorProtectionSystem} alt="logo-img" width="100%" hight="100%"/></svg>
                                <p style={{ textAlign: "center" }}> Voltage | Overload | Frequency | PF | Single phasing | Unbalance loading of voltage and current | Neutral current | Phase revers  </p>
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
   )
};
export default SmartControl;