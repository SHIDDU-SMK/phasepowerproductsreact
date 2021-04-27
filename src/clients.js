import React from 'react';
import Image from 'react-bootstrap/Image';
import BMRCL from './assets/images/bmrcl1.png';
import Pgrid from './assets/images/pgrid.png';
import Loha from './assets/images/loha.png';
import ESS from './assets/images/ess.png';
import SldLogo from './assets/images/sldlogo.png';
import { Row, Col, Container } from 'react-bootstrap';


 function Clients() {
    return (
         <>
            <Container className="animation" style={{paddingBottom:"4rem"}}>
            <h2 className="featurette-heading" style={{paddingTop:"1rem"}}>
                    Our clients
                </h2>
                <Row style={{paddingBottom:"2rem"}}>
                    <Col sm={4} className="zoom" style={{paddingTop:"2rem"}}>
                    <Image src={BMRCL} alt="bmrcl image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom" style={{paddingTop:"2rem"}}>
                    <Image src={Pgrid} alt="brand image" width="100%" height="100%"/>
                    </Col>
                    <Col sm={4} className="zoom" style={{paddingTop:"2rem"}}>
                    <Image src={Loha} alt="brand image" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row style={{paddingBottom:"2rem"}}>
                    <Col sm={4} className="zoom" style={{paddingTop:"2rem"}}>
                    <Image src={ESS} alt="brand image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom" style={{paddingTop:"2rem"}}>
                    <Image src={SldLogo} alt="brand image" width="100%" height="100%" /> 
                    </Col>  
                </Row >
            </Container>
         </>
    )

 }
 export default Clients;