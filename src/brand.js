import React from 'react';
import Image from 'react-bootstrap/Image'
 import Elmeasure from './assets/images/brands/elmeasure.png';
 import DSE from './assets/images/brands/rishablogo.png';
 import Eaton from './assets/images/brands/eaton.png';
 import Lubi from './assets/images/brands/lubi.png';
//  import havells from './assets/images/havells.jpg';
 import Micro from './assets/images/brands/micro.png';
 import Ampturn from './assets/images/brands/amplogo.png';
//  import LeapLogo from './assets/images/leaplogo.jpg';
//  import SecoLogo from './assets/images/secologo.jpeg';
//  import KalaiVani from './assets/images/kalaivani.png';
 import RishabLogo from './assets/images/brands/dse.png';

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