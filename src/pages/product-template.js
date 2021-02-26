import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Row, Col } from 'react-bootstrap';

const data = {
    'Title': 'Smart Monitor', 
    'Products':
    [{"id": 1, "heading":  "Transducer & Isolator", "top_desc": " Measure, record and visualize electrical network parameters ", "image" : '../images/transducer.png',"bottom_desc": " Isolation Interface | Signal Changeover | Power Transducer | Voltage Transducer",
    "features_heading" : "Salient Features", 
    "salient_features":[
    "Measured parameters can be programmed to generate equivalent output signals ",
    "Override selection for desired value and range",
    "Isolation between input to output or output to output",
    "Quick response time of 300ms in display and communication",
    " On field configurable Input and Output parameters",
    "User friendly interface to support remote monitoring and communication",
    ], 
    "app_heading": "Applications", 
    "app_list": ["Easy to install and is field configurable by the user ",
    " Output signal is transferable over a long range",
    "  Textile and manufacturing industry",
    " Process Manufacturing/OEM’s",]},
    {"id": 2, "heading": "Digital Panel Meter","top_desc": "Basic parameters measured precisely", "image" : '../images/digitalpanel.png',"bottom_desc": " Ammeter | Volt meter | VAF Meter | Hz Meter | Frequency MeterDC Meter | RPM & MPM | Transducer Output ","prod_id": "multifunction",
    "prod_id": "digitalpanelmeter",
    "features_heading" : "Salient Features",
    "salient_features":[
    "Inbuilt Selector Switch",
    "High resolution reading with autoscaling",
    "Suitable for industrial panels, gen-sets, solar, pump control panels, etc.",
    "Optional RS485 for data collection",
    "  Optional easy interface to PLC through modbus protocol ",
    ], 
    "app_heading": "Applications", 
    "app_list": [
    "AC & DC Measurement ",
    " Equipment Monitoring",
    "  Genset, Solar and UPS applications",
    " In control panel to measure different electrical loads"],
    },
    {"id": 3, "heading": " Multifunction Meter","top_desc": "Simultaneous measurement of various electrical parameters", "image" : '../images/multifunctionmeter.png',"bottom_desc": " Basic | Power | Energy | Load Manager Digital Output | Pulse Output ",
    "features_heading" : "Salient Features",  
    "salient_features":[
    "Easy navigation",
    "Event recording with time stamp (all basic & power parameters)",
    "Unbalance load and voltage with calculated neutral current.",
    "Dynamic communication",
    "  Optional digital output for all basic and power parameters ",
    ], 
    "app_heading": "Applications", 
    "app_list": [
    "Monitoring Electrical Parameters ",
    "Control / protection",
    "  In control panel to measure different electrical loads",
    " Generator & control panels",]},
    {"id": 4, "heading": " Branch Circuit Monitor","top_desc": "Compact device to enroute multiple channels", "image" : '../images/branchcircuitmonitor.png',"bottom_desc": " Multi-channel load manager | Power distribution unit ","prod_id": "generalmoitoringunit",
    "prod_id": "branchcircuitmonitor","features_heading" : "Salient Features",  "salient_features":[
    "Multiple branches of load can be monitored together",
    " Faster communication through RS485 port (Modbus protocol)d",
    "Accuracy Class 1.0 as per IEC 62053-21 & Class 0.5 as per IEC 62053-22 Standards",
    "Displays more than 25 parameters",
    ], "app_heading": "Applications", "app_list": [
    "Remote reading and control",
    "Building management system",
    " In control panel to measure different electrical loads",
    "  Ideal for billing in apartments/commercial complexes",
    ]},
    {"id": 5, "heading": " Generator Monitoring Unit","top_desc": "Generator monitoring device with dual display", "image" : '../images/generatormonitoringunit.png',"bottom_desc": " Counter & LED Display | Pulse Output ","features_heading" : "Salient Features",  "salient_features":[
    "Avoids the requirement of 2 different meters (energy and VAF in one)",
    " Reduces the cost and simplify wiring",
    "High resolution reading with auto scaling in LED",
    "Energy consumption in counter even if CT is reversed",
    ], "app_heading": "Applications", "app_list": [
    " Easy configuration of Gen-set Controllers",
    "Monitor health & Readiness",
    " Remote operation & control",
    "  Multiple alarms & notifications"]},
    {"id": 6, "heading": " Dual Source Energy Meter","top_desc": "Collecting data from two different sources of energy", "image" : '../images/dualsourceenergymeter.png',"bottom_desc": " Multifunction meter | Dual source measurement ","prod_id": "dcenergy", "prod_id": "dualsource",
    "features_heading" : "Salient Features", 
    "salient_features": ["Directly replaces 2 energy meters",
    " Sensing dual source through 240V connection",
    "Dual row display switches based on the source",
    "Optional digital output separately for EB or DG parameters",], 
    "app_heading": "Applications", 
    "app_list": [
    " To measure dual power source",
    "Dual source energy billing",
    "  Industries, residential, commercial buildings",
    "  Generator & control panels",]},    
    {"id": 7, "heading": "DC Energy Meter","top_desc": "Smart device for all renewal energy resources", "image" : '../images/dcenergymeter.png',"bottom_desc": " Multi-channel DC Energy | Voltage/Current full scale ","features_heading" : "Salient Features",  
    "salient_features":[
    "Multiple channels can be measured by a single meter, EN2450N & EN2450D",
    " Differential current input for all the current channels ",
    "Programmable shunt secondary 50mV to 100mV",
    " Programmable CT Primary for all channels up to 200A - for Hall Effect CT",
    " Data logging for parameters such as Energy, Load hours and Ampere hours",
    " Easy installation,Compact size, weight and simple wiring",
    ], 
    "app_heading": "Applications", "app_list": [
    "DC Measurement",
    "Equipment Monitoring",
    "  Genset, Solar and UPS applications",
    " In control panel to measure different electrical loads "]
    }]
}

function Product_Template() {
    return (
        <>
            <Header />
                <h2 style={{ textAlign: "center", paddingTop: "1rem" }}> 
                    <b>
                        { data.Title } 
                    </b> 
                </h2>
                <div className="container" style={{ marginTop: "40px"}}>
                    {
                        data.Products.map(item => 
                        <>
                            <hr id="dcenergy" className="featurette-divider" />
                            <Row>
                                <Col className={ item.id % 2 == 0? '' : 'order-2' }>
                                    <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        {item.top_desc}
                                    </p>
                                    <Image src={item.image} />
                                    <p style={{ textAlign: "center" }}> 
                                        {item.bottom_desc}
                                    </p>
                                </Col>
                                <Col>
                                    <h5>
                                        {item.features_heading}
                                    </h5>
                                    <ul className="ul">
                                        {item.salient_features.map(
                                            feature =>
                                            <li>
                                                { feature }
                                            </li>
                                        )}
                                    </ul>
                                    <h5>
                                        {item.app_heading}
                                    </h5>
                                    <ul className="ul">
                                        {item.app_list.map(
                                            app =>
                                            <li>
                                                { app }
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </>
                    )
                }
            </div> 
            <Footer />   
        </>
    );

}

export default Product_Template;