import React from 'react';
import Image from 'react-bootstrap/Image';
import BMRCL from './assets/images/bmrcl.png';
import Pgrid from './assets/images/powergrid1.png';
import Loha from './assets/images/lohalogo1.png';
import ESS from './assets/images/ess.png';
import SldLogo from './assets/images/sld.png';
import { Row, Col, Container } from 'react-bootstrap';


 function Clients() {
    return (
         <>
            <Container>
            <h2 className="featurette-heading" style={{paddingBottom:"4rem"}}>
                    Our clients
                </h2>
                <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
                    <Col sm={4} className="zoom image-center">
                    <Image src={BMRCL} alt="bmrcl image" width="100%"  />
                    </Col>
                    <Col sm={4} className="zoom image-center">
                    <Image src={SldLogo} alt="brand image" width="100%"  /> 
                    </Col> 
                    <Col sm={4} className="zoom image-center">
                    <Image src={Loha} alt="brand image" width="100%"  />
                    </Col>
                    
                </Row>
                <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
                    <Col sm={4} className="zoom image-center">
                    <Image src={ESS} alt="brand image" width="100%"  />
                    </Col>
                    
                    
                    <Col sm={4} className="zoom image-center">
                    <Image src={Pgrid} alt="brand image" width="100%" />
                    </Col>
                </Row >
                <hr className="featurette-divider" style={{borderColor: 'transparent'}}/>
            </Container>
         </>
    )

 }
 export default Clients;