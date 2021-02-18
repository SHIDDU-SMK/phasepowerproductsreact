import React from 'react';
import HandDollar from './images/handdollar.png';
import Wind  from './images/wind.png';
import Prepaid  from './images/prepaid.png';
import Textile from './images/textile.jpg';
import Street from './images/street.jpg';
import Process from './images/process.jpg';

const Services = () => {
	return (
            <main role="main" className="container">
                <div className="container marketing">
                <h1 className="main-headding"><b>S E R V I C E S</b></h1>
                    <div className="row" style={{paddingTop:"3rem"}}>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={HandDollar} alt="Tool-img" width="140" height="140" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>ACCESSIBILITY Authorized Wholesale Dealer </b></h4>        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Wind} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>ENERGY MANAGEMENT SYSTEM</b></h4>                                        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Prepaid} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>PREPAID METERING SYSTEM</b></h4>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Textile} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>TEXTILE ENERGY & PROCESS</b></h4>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Street} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>STREET LIGHT MANAGEMENT</b></h4>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Process} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h4><b>PROCESS AUTOMATION</b></h4>
                            </div>
                            
                            <hr className="featurette-divider" />
                    </div>
                </div>
            </main>
	)
};

export default Services;