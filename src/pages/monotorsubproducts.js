import React from 'react';
import {Row, Col, Container, Image } from 'react-bootstrap';
import Transducer from '../images/transducer.png';
import Digitalpanel from '../images/digitalpanel.png';
import Header from '../header';
import MultiFunctionMeter from '../images/multifunctionmeter.png';
import BranchCircuitMonitor from '../images/branchcircuitmonitor.png';
import GeneratorMonitoringUnit from '../images/generatormonitoringunit.png';
import DualSourcEenergyMeter from '../images/dualsourceenergymeter.png';
import DcEnergyMeter from '../images/dcenergymeter.png';




function Monotorsubproducts() {
       
    return (
        <>
          <Header />
        <Container>
        
         <Row>
    <Col sytle={{ paddingTop:"3rem"}}> 
    <h2 id="transducerisolator" style={{textAlign:"center", "text-decoration":"underline", paddingTop:"3rem" }}> Transducer & Isolator</h2>
                                   <p style={{textAlign:"center", "text-decoration":"underline"}}> Measure, record and visualize electrical network parameters </p>
                                   <Image src={Transducer} height="250"  width="400" rounded />


    </Col>
    <Col>
    <p sytle={{ paddingTop:"6rem"}}>Salient Features</p> 
                                   <li>Measured parameters can be programmed to generate equivalent output signals </li>
                                   <li>Override selection for desired value and range</li>
                                   <li>Isolation between input to output or output to output</li> 
                                   <li>Quick response time of 300ms in display and communication</li>
                                   <li> On field configurable Input and Output parameters</li>
                                   <li>User friendly interface to support remote monitoring and communication</li> 
                                   <br/>
                                   <p>Applications</p> 
                                   <li>Easy to install and is field configurable by the user </li>
                                   <li> Output signal is transferable over a long range</li>
                                   <li>  Textile and manufacturing industry</li>
                                   <li> Process Manufacturing/OEM’s</li>

    </Col>
  </Row>
 
  <div className="divider-line"></div>
  <br/>
    <Row>
        <Col> 
        <h2  id ="digitalpanelmeter" style={{textAlign:"center", "text-decoration":"underline"}}> Digital Panel Meter</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Basic parameters measured precisely</p>
                                 <Image src={Digitalpanel} height="250"  width="400" rounded />


        </Col>
        <Col>
        <p>Salient Features</p> 
                                   <li>Inbuilt Selector Switch</li>
                                   <li>High resolution reading with autoscaling</li>
                                   <li>Suitable for industrial panels, gen-sets, solar, pump control panels, etc.</li> 
                                   <li>Optional RS485 for data collection</li>
                                   <li>  Optional easy interface to PLC through modbus protocol </li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>AC & DC Measurement </li>
                                   <li> Equipment Monitoring</li>
                                   <li>  Genset, Solar and UPS applications</li>
                                   <li> In control panel to measure different electrical loads</li>

        </Col>
    </Row>
    <Row>
        <Col> 
        <h2 id ="multifunction" style={{textAlign:"center", "text-decoration":"underline"}}> Multifunction Meter</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Simultaneous measurement of various electrical parameters</p>
                                 <Image src={MultiFunctionMeter} height="250"  width="400" rounded />
        </Col>
        <Col>
        <p>Salient Features</p> 
                                   <li>Easy navigation</li>
                                   <li>Event recording with time stamp (all basic & power parameters)</li>
                                   <li>Unbalance load and voltage with calculated neutral current.</li> 
                                   <li>Dynamic communication</li>
                                   <li>  Optional digital output for all basic and power parameters </li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>Monitoring Electrical Parameters </li>
                                   <li>Control / protection</li>
                                   <li>  In control panel to measure different electrical loads</li>
                                   <li> Generator & control panels</li>

        </Col>
        </Row>
        <div className="divider-line"></div>
        <Row>
                                <Col>   
                                 <h2  id="branchcircuitmonitor"style={{textAlign:"center", "text-decoration":"underline"}}> Branch Circuit Monitor</h2>
                                 <p style={{textAlign:"center" ,"text-decoration":"underline"}}>Compact device to enroute multiple channels</p>
                                 <Image src={BranchCircuitMonitor} height="250"  width="400" rounded />
                                 </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>Multiple branches of load can be monitored together</li>
                                   <li> Faster communication through RS485 port (Modbus protocol)d</li>
                                   <li>Accuracy Class 1.0 as per IEC 62053-21 & Class 0.5 as per IEC 62053-22 Standards</li> 
                                   <li>Displays more than 25 parameters</li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li>Remote reading and control</li>
                                   <li>Building management system</li>
                                   <li> In control panel to measure different electrical loads</li>
                                   <li>  Ideal for billing in apartments/commercial complexes</li>
                                   </Col>
                                   </Row>
                                   <div className="divider-line"></div>
                                   <Row>
                                <Col>   
                                 <h2 id="generalmoitoringunit" style={{textAlign:"center", "text-decoration":"underline"}}> Generator Monitoring Unit</h2>
                                 <p style={{textAlign:"center","text-decoration":"underline"}}>Generator monitoring device with dual display</p>
                                 <Image src={GeneratorMonitoringUnit} height="250"  width="400" rounded />
                                   </Col>
                                   <Col > <br/>
                                   <p>Salient Features</p> 
                                   <li>Avoids the requirement of 2 different meters (energy and VAF in one)</li>
                                   <li> Reduces the cost and simplify wiring</li>
                                   <li>High resolution reading with auto scaling in LED</li> 
                                   <li>Energy consumption in counter even if CT is reversed</li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li> Easy configuration of Gen-set Controllers</li>
                                   <li>Monitor health & Readiness</li>
                                   <li> Remote operation & control</li>
                                   <li>  Multiple alarms & notifications</li>
                                   </Col>
                                   </Row>
                                   <div className="divider-line"></div>
                                   <Row>
                                <Col>   
                                 <h2 id= "dualsource" style={{textAlign:"center", "text-decoration":"underline"}}> Dual Source Energy Meter</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Collecting data from two different sources of energy</p>
                                 <Image src={DualSourcEenergyMeter} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>Directly replaces 2 energy meters</li>
                                   <li> Sensing dual source through 240V connection</li>
                                   <li>Dual row display switches based on the source</li> 
                                   <li>Optional digital output separately for EB or DG parameters</li>
                                   <br/>
                                   <p>Applications</p> 
                                   <li> To measure dual power source</li>
                                   <li>Dual source energy billing</li>
                                   <li>  Industries, residential, commercial buildings</li>
                                   <li>  Generator & control panels</li>
                                   </Col>
                                   </Row>
                                   <div className="divider-line"></div>
                                   <Row>
                                <Col>   
                                 <h2  id="dcenergy" style={{textAlign:"center", "text-decoration":"underline"}}>DC Energy Meter</h2>
                                 <p style={{textAlign:"center", "text-decoration":"underline"}}>Smart device for all renewal energy resources</p>
                                 <Image src={DcEnergyMeter} height="250"  width="400" rounded />
                                   </Col>
                                   <Col> <br/>
                                   <p>Salient Features</p> 
                                   <li>Multiple channels can be measured by a single meter, EN2450N & EN2450D</li>
                                   <li> Differential current input for all the current channels </li>
                                   <li>Programmable shunt secondary 50mV to 100mV</li> 
                                   <li> Programmable CT Primary for all channels up to 200A - for Hall Effect CT</li>
                                   <li> Data logging for parameters such as Energy, Load hours and Ampere hours</li>
                                   <li> Easy installation,Compact size, weight and simple wiring</li>

                                   <br/>
                                   <p>Applications</p> 
                                   <li>DC Measurement</li>
                                   <li>Equipment Monitoring</li>
                                   <li>  Genset, Solar and UPS applications</li>
                                   <li> In control panel to measure different electrical loads </li>
                                   </Col>
                                   </Row>


  </Container>

</>

);

}

export default Monotorsubproducts;
