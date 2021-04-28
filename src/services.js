import React from 'react';
import HandDollar from './assets/images/wholesaledealer1.png';
import Wind  from './assets/images/energymanagement1.png';
import Prepaid  from './assets/images/prepaidmetering1.png';
import Textile from './assets/images/textilesenergy1.png';
import Street from './assets/images/Street Light.webp';
import Process from './assets/images/automation1.png';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';




const Services = () => {
	return (
        <>

        <Container>
            <h2 className="featurette-heading" style={{paddingBottom:"4rem"}}>
            Services
            </h2>
            <Row >
                <Col sm={4} className="zoom image-center">
                    <Image src={HandDollar} alt="brand image" width="100px" height="100px" />
                    <h4><b>Accessibility Authorized Wholesale Dealer</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Wind} alt="brand image" width="100px" height="100px"/>
                    <h4><b>Energy Management System</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Prepaid} alt="brand image" width="100px" height="100px" />
                    <h4><b>Prepaid Metering System</b></h4>
                </Col>
            </Row>
            <Row style={{paddingBottom:"2rem"}}>
                <Col sm={4} className="zoom image-center">
                    <Image src={Textile} alt="brand image" width="100px" height="100px" />
                    <h4><b>Textiles Energy & Process</b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Street} alt="brand image" width="100px" height="100px" />
                    <h4><b>Street Light Management </b></h4>
                </Col>
                <Col sm={4} className="zoom image-center">
                    <Image src={Process} alt="brand image" width="100px" height="100px" />
                    <h4><b>Process Automation</b></h4>
                </Col>
            </Row>
            
            <hr className="featurette-divider" />
        </Container>
    </>
	)
};

export default Services;