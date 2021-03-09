import React from 'react';
import HandDollar from './assets/images/wholesaledealer.png';
import Wind  from './assets/images/energymanagement.png';
import Prepaid  from './assets/images/prepaidmetering.png';
import Textile from './assets/images/textilesenergy.png';
import Street from './assets/images/Street Light.png';
import Process from './assets/images/automation.png';


const Services = () => {
	return (
           <div className="container">
                <div className="row featurette">
                    <h2 className="featurette-heading">
                        Services
                    </h2>
                </div>
                <div className="row featurette">
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="140" height="140" >
                                    <image href={HandDollar} alt="Tool-img" width="100%" height="100%" />
                                </svg>
                                <h4 style={{paddingTop:"1rem"}}>
                                    <b>Accessibility Authorized Wholesale Dealer</b>
                                </h4>        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="120" height="120" >
                                    <image href={Wind} alt="Tool-img" width="100%" hight="100%" />
                                   
                                </svg>
                                <h4 style={{paddingTop:"2rem"}}><b>Energy Management System</b></h4>                                        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="120" height="120" >
                                    <image href={Prepaid} alt="Tool-img" width="100%" hight="100%" />
                                    
                                </svg>
                                <h4 style={{paddingTop:"2rem"}}><b>Prepaid Metering System</b></h4>
                            </div>
                    </div>
                    <div className="row" style={{paddingTop:"3rem"}}>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="120" height="120" >
                                    <image href={Textile} alt="Tool-img" width="100%" hight="100%" />
                                    
                                </svg>
                                <h4 style={{paddingTop:"2rem"}}><b>Textiles Energy & Process</b></h4>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="120" height="120" >
                                    <image href={Street} alt="Tool-img" width="100%" hight="100%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4 style={{paddingTop:"2rem"}}><b>Street Light Management </b></h4>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="120" height="120" >
                                    <image href={Process} alt="Tool-img" width="100%" hight="100%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4 style={{paddingTop:"2rem"}}><b>Process Automation</b></h4>
                            </div>
                            
                            <hr className="featurette-divider" />
                    </div>
            </div>
	)
};

export default Services;