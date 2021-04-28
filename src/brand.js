import React from 'react';
import Image from 'react-bootstrap/Image'
import Elmeasure from './assets/images/elmeasure.png';
import Rishab from './assets/images/rishablogo.png';
import Eaton from './assets/images/eaton1.png';
import Lubi from './assets/images/lubi1.png';
import Micro from './assets/images/micro1.png';
import Ampturn from './assets/images/amplogo.png';
import Dse from './assets/images/dse.png';
import { Row, Col, Container } from 'react-bootstrap';


 function Brand() {
  return (
     <>
      <Container>
        <h2 className="featurette-heading" style={{paddingBottom:"4rem"}}>
            Dealer for
        </h2>
        <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
          <Col sm={4} className="zoom image-center">
          <Image src={Elmeasure} alt="brand image" width="100%" />
          </Col>
          <Col sm={4} className="zoom image-center">
          <Image src={Eaton} alt="brand image" width="100%" />
          </Col>
          <Col sm={4} className="zoom image-center">
          <Image src={Micro} alt="brand image" width="100%" />
          </Col>
        </Row>
        <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
          <Col sm={4} className="zoom image-center">
          <Image src={Lubi} alt="brand image" width="100%" />
          </Col>
          <Col sm={4} className="zoom image-center">
          <Image src={Rishab} alt="brand image" width="100%" />
          </Col>
          <Col sm={4} className="zoom image-center">
          <Image src={Ampturn} alt="brand image" width="100%"/>
          </Col>
        </Row>
        <Row style={{background: "rgba(248, 248, 248, 0.82)"}}>
          <Col sm={4} className="zoom image-center">
          <Image src={Dse} alt="brand image" width="100%" />
          </Col>
        </Row>
        <hr className="featurette-divider"/>
      </Container>
     </>
  )

 }
 export default Brand;