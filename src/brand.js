import React from 'react';
import Image from 'react-bootstrap/Image'
 import Elmeasure from './assets/images/elmeasure.png';
 import Rishab from './assets/images/rishablogo.png';
 import Eaton from './assets/images/eaton.png';
 import Lubi from './assets/images/lubi.png';
//  import havells from './assets/images/havells.webp';
 import Micro from './assets/images/micro.png';
 import Ampturn from './assets/images/amplogo.png';
//  import LeapLogo from './assets/images/leaplogo.webp';
//  import SecoLogo from './assets/images/secologo.webp';
//  import KalaiVani from './assets/images/kalaivani.webp';
 import Dse from './assets/images/dse.png';
 import { Row, Col, Container } from 'react-bootstrap';


 function Brand() {
    return (
         <>

            <Container>
                <h2 className="featurette-heading" style={{paddingBottom:"2rem"}}>
                        Dealer for
                </h2>
                <Row style={{paddingBottom:"3rem"}}>
                    <Col sm={4} className="zoom">
                    <Image src={Elmeasure} alt="brand image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Eaton} alt="brand image" width="100%" height="100%"/>
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Micro} alt="brand image" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row style={{paddingBottom:"3rem"}}>
                    <Col sm={4} className="zoom">
                    <Image src={Lubi} alt="brand image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Rishab} alt="brand image" width="100%" height="100%" />
                    </Col>
                    <Col sm={4} className="zoom">
                    <Image src={Ampturn} alt="brand image" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row style={{paddingBottom:"3rem"}}>
                    <Col sm={4} className="zoom">
                    <Image src={Dse} alt="brand image" width="100%" height="100%" />
                    </Col>
                </Row>
                <hr className="featurette-divider" />
            </Container>
        {/* <div className="container">

        <div className="row featurette">
        <h2 className="featurette-heading" style={{paddingBottom:"2rem"}}>
            Dealer for
        </h2>

         <div className="row" >
                 <div className=" col-lg-4 zoom ">
                     <Image src={Elmeasure} alt="brand image" width="100%" height="100%" style={{paddingLeft:"3rem"}}/>
                 </div>
                 <div className=" col-lg-4 zoom">
                     <Image src={Eaton} alt="brand image" width="100%" height="100%"/>
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={Micro} alt="brand image" width="100%" height="100%" style={{paddingLeft:"3rem"}}/>
                 </div>
            </div>
            <div className="row" style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                 <div className="col-lg-4 zoom">
                     <Image src={Lubi} alt="brand image" width="100%" height="100%" />
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={DSE} alt="brand image" width="100%" height="100%" />
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={Ampturn} alt="brand image" width="100%" height="100%" />
                 </div>
                 
                 <div className="col-lg-4 zoom" style={{paddingTop:"2rem"}}>
                     <Image src={RishabLogo} alt="brand image" width="100%" height="100%" />
                 </div>
         </div>
         </div>
         <hr className="featurette-divider" />
         </div> */}
         </>
    )

 }
 export default Brand;