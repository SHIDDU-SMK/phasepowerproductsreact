import React from "react";
// import NavBar from './navbar';
// import Contactus from './contactus';
import {Row, Col, Image, Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import PowerQualityMeter from '../images/powerqualitymeter.png';
import APFC from '../images/APFC.png';
import DemandControl from '../images/demandcontrol.png';
import PowerFactorController from '../images/powerfactorcontroller.png';
import EarthLeakageRelay from '../images/earthleakagerelay.png';
import EnergyProcessMonitor from '../images/energyprocessmonitor.png';
import MotorProtectionSystem from '../images/motorprocetionsystem.png';
import { HashLink as  Link } from 'react-router-hash-link';
import Header from '../header';
import Footer from '../footer';
import SubNav from '../subnav';

// import SubNav from '../subnav';



function SmartControl (){
   return (
      <>
     <Header />
     <Container>
      
      
            <div className="container nav-link" style={{marginTop : "40px"}}>
                {/* <MultiCarousel items = { categoryhr } />             */}
                <Row>
                   <Col>
                  <Link  to= "#powerqualitymeter">  <p> <Image src = {PowerQualityMeter} height="100"  width="100" rounded  /> <br/>Power Quality Meter </p>  </Link>
                  </Col>
                  <Col>
               <Link to ="#apfc" >  <p> <Image src = {APFC} height="100"  width="100" rounded   /><br/> APFC </p></Link>
                   </Col>
                   <Col>
                <Link to ="#demandcontrol"> <p> <Image src = {DemandControl} height="100"  width="100" rounded /><br/> DemandControl</p></Link>
                </Col>
                <Col>
                <Link to ="#powerfactorcontrol" >  <p> <Image src = {PowerFactorController} height="100"  width="100" rounded /><br/> PowerFactorController </p>  </Link>
                </Col>
                <Col>               
                <Link to ="#earthleakagerelay">  <p>  <Image src = {EarthLeakageRelay} height="100"  width="100" rounded /> <br/> Earth Leakage Relay</p></Link>
                </Col>
                <Col>
                <Link to ="#energyprocessmonitor">  <p> <Image src = {EnergyProcessMonitor} height="100"  width="100" rounded /> <br/> Energy Process Monitor</p></Link>
                </Col>
                <Col>
                <Link to ="#motorprotectionsystem">  <p> <Image src = {MotorProtectionSystem} height="100"  width="100" rounded /> <br/> Motor Protection System</p></Link>
                </Col>
                </Row>
            </div>
            <SubNav />
                
                                          
                       <h1 style= {{"textAlign":"center" ,"text-decoration":"underline"}}><strong>Smart Controling</strong></h1>                     
                      
                               
            <div> 
                              
                                <Row>
                                <Col>                                   
                                   <h2  id= "powerqualitymeter"style={{textAlign:"center", "text-decoration":"underline" }}> Power Quality Meter</h2>
                                   <Image src={PowerQualityMeter} height="250"  width="400" rounded />
                                   <br/>
                                   <br/>
                                   <p style={{textAlign:"center"}}> Isolation  Interface | Signal Changeover| Power Transducer | Voltage Transducer | </p>
                                   </Col> 
                                   <Col style={{ "backgroundColor" : "light"}}>
                                   <br/>
                                   <p>Salient Features</p> 
                                   <li>Power quality meter displays waveform for instantaneous V,I, harmonics,Sag/Swell with data storage upto 14GB</li>
                                   <li>Measurement of THD and harmonics up to 63 rd order is possible with power quality meter</li>
                                   <li>Captures and measures power quality events: flicker, K factor, crest factor,sag/swell, interruption & unbalance</li> 
                                   <li>TOD option for energy & demand upto 8 slots</li>
                                   <li> Power quality meter monitors performance & availability of devices using inbuilt MQTT & TCP/IP protocol</li>
                                   <li>Power quality meter is an ideal choice for remote monitoring of devices via M2M software platform</li> 
                                   <br/>
                                   <p>Applications</p> 
                                   <li>Monitoring critical load,incomers, and HT panels </li>
                                   <li> Utility billing in Apartments and commercial complexes</li>
                                   <li> Measuring energy variants in Building Management system</li>
                                   <li>  Measuring power & energy variants in Gensets, Test benches, and the laboratories</li>
                                   </Col>
                                   </Row>
                                   <div className="divider-line"></div>
                                 
      </div>
      <div className="divider-line"></div>
                                   <br/>
                                  
                        <div>
                                   <Row>
                                <Col>   
                                 <h2 id="apfc" style={{textAlign:"center", "text-decoration":"underline"}}> APFC</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Automatic Power Factor Controller Save energy, 
                                 maintain power factor range to avoid penalties</p>
                                 <Image src={APFC} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li> Power factor controlling based on the capacitor bank switching history</li>
                                   <li>Capacitor is automatically disabled when it is deteriorated beyond a certain level</li>
                                   <li> Automatically learns the number of capacitors connected and the value.</li> 
                                   <li>Capacitance-based power factor correction takes care of variation in voltage and frequency.</li>
                                   <li>  Controlling based on VAR parameter and availability of built-in alarms</li>
                                   <li>  Flexibility for site programmability of CT ratio suitable for any load</li>

                                   <br/>
                                   <p>Applications</p> 
                                   <li>Automobile industry</li>
                                   <li> Cement Industry</li>
                                   <li>  Hospitals, commercial industries</li>
                                   <li> Any manufacturing industry</li>
                                   </Col>
                                   </Row>
                                   </div>
                                  
                                   <div className="divider-line"></div>
                                 
                                   <div className="divider">
                                   <Row >
                                <Col>   
                                 <h2 id= "demandcontrol" style={{textAlign:"center", "text-decoration":"underline"}}> Demand Controller</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>High-end multifunction meter for comprehensive energy management</p>
                                 <Image src={DemandControl} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>1 sec. update for demand makes the demand controlling very precise</li>
                                   <li>Field programmable demand parameters kVA, kW, kVAR and Aavg</li>
                                   <li>TOU/TOD based controlling. Individually programmable demand level</li> 
                                   <li>Maximum demand controller can forecast demand and cuts off load as maximum demand crosses preset value</li>
                                   <li>  Communication: MODBUS RTU, RS485, BACnet </li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>Automatic connection or disconnection of Gensets connected to common bus. </li>
                                   <li>Process management</li>
                                   <li>  Maximum demand control & management</li>
                                   <li> Energy Accounting & Balancing</li>
                                   </Col>
                                   </Row>
                                   </div>
                                  
                                   <div className="divider-line"></div>
                                  
                                   <div className="divider">
                                   <Row >
                                <Col>   
                                 <h2 id ="powerfactorcontrol" style={{textAlign:"center", "text-decoration":"underline"}}> Power Factor Controller</h2>
                                 <p style={{textAlign:"center" ,"text-decoration":"underline"}}>Intelligent device to maintain the power factor in required range</p>
                                 <Image src={PowerFactorController} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>User programmable</li>
                                   <li> Three phase sensing (it gives accurate measurement of PF</li>
                                   <li>Automatic or manual control (manual control with power backup option </li> 
                                   <li>Four quadrant operation</li>
                                   <li> Optional RS485 communication interface </li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>can work for any electrical Incomer</li>
                                   <li> Fixed power factor corrections individual (e.g. motor, transformers, lighting, etc.)</li>
                                   <li> Group fixed power factor correction (several equipments connected in a group)</li>
                                   <li>  Capacitor banks of tuned and detuned</li>
                                   </Col>
                                   </Row>
                                   </div>
                                  
                                   <div className="divider-line"></div>
                                    <div className="divider">
                                   <Row xs={2} md={2} lg={2}>
                                <Col>   
                                 <h2 id ="earthleakagerelay"  style={{textAlign:"center", "text-decoration":"underline"}}> Earth Leakage Relay</h2>
                                 <p style={{textAlign:"center","text-decoration":"underline"}}>Detect the leakage current in an intelligent electrical device</p>
                                 <Image src={EarthLeakageRelay} height="250"  width="400" rounded />
                                   </Col>
                                   <Col > <br/>
                                   <p>Salient Features</p> 
                                   <li> Inverse curve - Trip time to accomplish faster trip time for a higher leakage current.</li>
                                   <li>  High accuracy Earth Leakage Relay of class 2.0FS in industry</li>
                                   <li> Programmable Earth Leakage Trip time from 100ms - 30s with password protection.</li> 
                                   <li>Wide selectable range of Earth leakage current from 30 mA – 30 A</li>
                                   <li>Monitors and protects power systems from Earth Leakage Current</li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li> Protects life and property against overflow of leakage current</li>
                                   <li>Protects motors / transformers / feeders / DG etc.,ensures reliable measurement and maximum safety</li>
                                   <li>Complete protection for oil refineries, pulp industries, mining industry, electrical distribution & control engineering</li>
                                   <li>  Protects control panels and switch boards from earth leakage current</li>
                                   </Col>
                                   </Row>
                                   </div>
                                   
                                   <div className="divider-line"></div>
                                   
                                   <div className="divider">
                                   <Row >
                                <Col>   
                                 <h2 id = "energyprocessmonitor" style={{textAlign:"center", "text-decoration":"underline"}}> Energy & Process Monitor</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Device to measure energy & process together</p>
                                 <Image src={EnergyProcessMonitor} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>Real time monitoring and reporting</li>
                                   <li> Composite system with EMS and PEMS</li>
                                   <li>Desired reports like, Doff wise, shift wise, count wise, production, energy, UKG</li> 
                                   <li> Speed Vs Kw curve, trends, bar graphs, comparisons</li>
                                   <li> Alerts on higher UKG, lesser production, utilization & power fluctuations.</li>
                                   <li>Maintenance alerts based on run hours production cost analysis - Cost Audits - Energy Audits</li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>  Energy savings will bring down operational cost & increases the plant efficiency</li>
                                   <li>Scheduling of preventive maintenance</li>
                                   <li>  Higher productivity- Lesser downtime</li>
                                   <li>  Effective utilization of manpower and resources</li>
                                   </Col>
                                   </Row>
                                   </div>
                                  
                                   <div className="divider-line"></div>
                                  
                                   <div className="divider">
                                   <Row xs={2} md={2} lg={2}>
                                <Col>   
                                 <h2 id ="motorprotectionsystem" style={{textAlign:"center", "text-decoration":"underline"}}>Motor Protection System</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>One stop solution for motor protection</p>
                                 <Image src={MotorProtectionSystem} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>Programmable ‘start time’ from sensing safe condition</li>
                                   <li> Programmable relay status High or Low for safe, 2 relay for alarm and trip </li>
                                   <li>Detect winding shorts, cable loss</li> 
                                   <li> Programmable CT Primary for all channels up to 200A - for Hall Effect CT</li>
                                   <li> DStore the reasons for tripping future correction</li>
                                   <li>Safe/Alarm/Trip indication for on-line view</li>

                                   <br/>
                                   <p>Applications</p> 
                                   <li>A comprehensive solution for protection of motors/equipment against voltage, 
                                       overload, frequency, PF, single phasing, winding short, unbalance, etc.</li>
                                   </Col>
                                   </Row>
                                   </div>
                                  
                                
                                   <Footer/>
                                 </Container>
                                 </>
                                 )
 };
 export default  SmartControl;