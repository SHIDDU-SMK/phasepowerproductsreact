import React from 'react';
import Image from 'react-bootstrap/Image'
 import Elmeasure from './assets/images/brands/elmeasure.webp';
 import DSE from './assets/images/brands/rishablogo.webp';
 import Eaton from './assets/images/brands/eaton.webp';
 import Lubi from './assets/images/brands/lubi.webp';
//  import havells from './assets/images/havells.webp';
 import Micro from './assets/images/brands/micro.webp';
 import Ampturn from './assets/images/brands/amplogo.webp';
//  import LeapLogo from './assets/images/leaplogo.webp';
//  import SecoLogo from './assets/images/secologo.webp';
//  import KalaiVani from './assets/images/kalaivani.webp';
 import RishabLogo from './assets/images/brands/dse.webp';

 function Brand() {
    return (
         <>
        <div className="container">

        <div className="row featurette">
        <h2 className="featurette-heading" style={{paddingBottom:"2rem"}}>
            Dealer for
        </h2>

         <div className="row" >
                 <div className=" col-lg-4 zoom ">
                     <Image src={Elmeasure} alt="brand image" width="70%" height="70%" style={{paddingLeft:"3rem"}}/>
                 </div>
                 <div className=" col-lg-4 zoom">
                     <Image src={Eaton} alt="brand image" width="90%" height="70%"/>
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={Micro} alt="brand image" width="80%" height="50%" style={{paddingLeft:"3rem"}}/>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 zoom">
                     <Image src={Lubi} alt="brand image" width="70%" height="50%" style={{paddingLeft:"4rem"}}/>
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={DSE} alt="brand image" width="70%" height="70%" style={{paddingLeft:"3rem"}}/>
                 </div>
                 <div className="col-lg-4 zoom">
                     <Image src={Ampturn} alt="brand image" width="80%" height="50%" style={{paddingLeft:"2rem"}}/>
                 </div>
                 
                 <div className="col-lg-4 zoom">
                     <Image src={RishabLogo} alt="brand image" width="50%" height="50%" style={{paddingLeft:"3rem"}}/>
                 </div>
         </div>
         </div>
         <hr className="featurette-divider" />
         </div>
         </>
    )

 }
 export default Brand;