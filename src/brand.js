import React from 'react';
import Image from 'react-bootstrap/Image'
 import Elmeasure from './images/elmeasure.png';
 import DSE from './images/dse.png';
 import Eaton from './images/eaton.png';
 import Lubi from './images/lubi.jpg';
 import havells from './images/havells.jpg';
 import Micro from './images/micro.jpg';

 function Brand() {
    return (
         <>
        <div className="container">

        <div className="row featurette">
        <h2 className="featurette-heading">
            Esteemed Clients
        </h2>
        </div>
        <div className="row featurette">
         <div className="container" style={{paddingBottom:"4rem" , textAlign:"center"}} >
             <div className="row">           
                 <div className=" col-lg-4 ">
                     <Image src={Elmeasure} alt="brand image" width="200px" height="100px"/>
                 </div>
                 <div className=" col-lg-4 ">
                     <Image src={Eaton} alt="brand image" width="200px" height="100px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={Micro} alt="brand image" width="200px" height="80px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={Lubi} alt="brand image" width="100px" height="100px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={havells} alt="brand image" width="100px" height="100px"/>
                 </div>
                 <div className="col-lg-4 ">
                     <Image src={DSE} alt="brand image" width="100px" height="100px"/>
                 </div>
            
             </div>
         </div>
         </div>
         </div>
         </>
    )

 }
 export default Brand;