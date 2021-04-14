import React from 'react';
import Image from 'react-bootstrap/Image';
import BMRCL from './assets/images/bmrcl.png';
import Pgrid from './assets/images/powergrid.png';
import Loha from './assets/images/loha.png';
import ESS from './assets/images/ekadanthass-logo.png';
import SldLogo from './assets/images/sldlogo.png';



 function Clients() {
    return (
         <>
        <div className="container">

            <div className="row featurette">
                <h2 className="featurette-heading" style={{paddingBottom:"2rem"}}>
                    Our clients
                </h2>
                <div className="row" >
                    <div className=" col-lg-4 zoom ">
                        <Image src={BMRCL} alt="bmrcl image" width="80%" height="100%" style={{paddingLeft:"3rem"}}/>
                    </div>
                    <div className=" col-lg-4 zoom">
                        <Image src={Pgrid} alt="brand image" width="90%" height="70%"/>
                    </div>
                    <div className="col-lg-4 zoom">
                        <Image src={Loha} alt="brand image" width="70%" height="70%" />
                    </div>
                    </div>
                    <div className="row" style={{paddingTop:"2rem"}}>
                    <div className="col-lg-4 zoom">
                        <Image src={ESS} alt="brand image" width="90%" height="50%" style={{paddingLeft:"3rem"}}/>
                    </div>
                    <div className="col-lg-4 zoom">
                        <Image src={SldLogo} alt="brand image" width="70%" height="70%" style={{paddingLeft:"3rem"}}/>
                    </div>
                </div>
            </div>
         </div>
         </>
    )

 }
 export default Clients;