import React from 'react';
import HandDollar from './assets/images/wholesaledealer.webp';
import Wind  from './assets/images/energymanagement.webp';
import Prepaid  from './assets/images/prepaidmetering.webp';
import Textile from './assets/images/textilesenergy.webp';
import Street from './assets/images/streetlight.webp';
import Process from './assets/images/automation.webp';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';




const Services = () => {
	return (
        <>

        <Container>
            <h2 className="featurette-heading" style={{paddingBottom:"4rem"}}>
            Services
            </h2>
            <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
                <Col sm={4} className="zoom image-center">
                    <Image src={HandDollar} alt="brand image" width="100px" />
                    <h4><b>Accessibility Authorized Wholesale Dealer</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Wind} alt="brand image" width="100px"/>
                    <h4><b>Energy Management System</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Prepaid} alt="brand image" width="100px"  />
                    <h4><b>Prepaid Metering System</b></h4>
                </Col>
            </Row>
            <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
                <Col sm={4} className="zoom image-center">
                    <Image src={Textile} alt="brand image" width="100px"  />
                    <h4><b>Textiles Energy & Process</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Street} alt="brand image" width="100px"  />
                    <h4><b>Street Light Management </b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Process} alt="brand image" width="100px" />
                    <h4><b>Process Automation</b></h4>
                </Col>
            </Row>
            
            <hr className="featurette-divider" />
        </Container>
    </>
	)
};

export default Services;