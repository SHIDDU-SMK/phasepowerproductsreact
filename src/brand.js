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
         <h1 style={{textAlign : "center" , color : "rgb(16, 134, 163)"}}>Our Dealers</h1>
         <div className="container" style={{paddingBottom:"4rem" , textAlign:"center"}} >
             <div className="row">
           
                 <div className=" col-lg-4  swing-in-top-fwd ">
                     <Image src={Elmeasure} alt="brand image" width="200px" height="100px"/>
                 </div>
                 <div className=" col-lg-4  swing-in-top-fwd ">
                     <Image src={Eaton} alt="brand image" width="200px" height="100px"/>
                 </div>
                 <div className="col-lg-4 swing-in-top-fwd">
                     <Image src={Micro} alt="brand image" width="200px" height="80px"/>
                 </div>
                 <div className="col-lg-4 swing-in-top-fwd">
                     <Image src={Lubi} alt="brand image" width="100px" height="100px"/>
                 </div>
                 <div className="col-lg-4 swing-in-top-fwd">
                     <Image src={havells} alt="brand image" width="100px" height="100px"/>
                 </div>
                 <div className="col-lg-4 swing-in-top-fwd">
                     <Image src={DSE} alt="brand image" width="100px" height="100px"/>
                 </div>
            
             </div>
         </div>
         </>
    )

 }
 export default Brand;