import React from 'react';
import Image from 'react-bootstrap/Image';
import BMRCL from './assets/images/bmrcl.png';
import Pgrid from './assets/images/pgrid.png';
import Loha from './assets/images/loha.png';
import ESS from './assets/images/ess.png';
import SldLogo from './assets/images/sldlogo.png';
import { Row, Col, Container } from 'react-bootstrap';


 function Clients() {
    return (
         <>
            <Container>
            <h2 className="featurette-heading" style={{paddingBottom:"3rem"}}>
                    Our clients
                </h2>
                <Row style={{paddingBottom:"3rem"}}>
                    <Col sm={4} className="zoom">
                    <Image src={BMRCL} alt="bmrcl image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Pgrid} alt="brand image" width="100%" height="100%"/>
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Loha} alt="brand image" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row style={{paddingBottom:"3rem"}}>
                    <Col sm={4} className="zoom">
                    <Image src={ESS} alt="brand image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={SldLogo} alt="brand image" width="100%" height="100%" /> 
                    </Col>
                    
                </Row>
            </Container>
         </>
    )

 }
 export default Clients;