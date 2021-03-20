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
        <h2 className="featurette-heading">
            Dealer for
        </h2>

         <div className="row" style={{paddingTop:'2rem'}}>
                 <div className=" col-lg-4 ">
                     <Image src={Elmeasure} alt="brand image" width="200px" height="75px"/>
                 </div>
                 <div className=" col-lg-4 ">
                     <Image src={Eaton} alt="brand image" width="200px" height="75px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={Micro} alt="brand image" width="200px" height="75px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={Lubi} alt="brand image" width="200px" height="75px"/>
                 </div>
                 {/* <div className="col-lg-4 ">
                     <Image src={havells} alt="brand image" width="200px" />
                 </div> */}
                 <div className="col-lg-4 ">
                     <Image src={DSE} alt="brand image" width="200px" height="75px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={Ampturn} alt="brand image" width="200px" height="75px"/>
                 </div>
                 {/* <div className="col-lg-4 ">
                     <Image src={LeapLogo} alt="brand image" width="200px" />
                 </div> */}
                 {/* <div className="col-lg-4 ">
                     <Image src={SecoLogo} alt="brand image" width="200px" />
                 </div> */}
                 {/* <div className="col-lg-4 ">
                     <Image src={KalaiVani} alt="brand image" width="200px" />
                 </div> */}
                 <div className="col-lg-4 ">
                     <Image src={RishabLogo} alt="brand image" width="200px" height="100px"/>
                 </div>
         </div>
         </div>
         </div>
         </>
    )

 }
 export default Brand;