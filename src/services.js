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
                    <div className="row">
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={HandDollar} alt="Tool-img" width="140" height="140" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>ACCESSIBILITY Authorized Wholesale Dealer </h2>
                                <p>Our products have been designed with utmost care and to perfection. Adding to this our stringent quality check makes our products extremely safe.</p>
                                        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Wind} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>ENERGY MANAGEMENT SYSTEM</h2>
                                <p> The new dimension in utilities & their usage is pay as you use / prepayment metering. But the tough part is their configuration, optimization for maintenance & 
                                    getting data. Avoid manual intervention by 90% with our progressive prepaid metering solution..</p>
                                        
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Prepaid} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>PREPAID METERING SYSTEM</h2>
                                <p>Keeping in mind the need to save money we have designed methods that make installation of our products cost effective.</p>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Textile} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>TEXTILE ENERGY & PROCESS</h2>
                                <p>n a sector where the history is trending & the process is still obsolete, the growth has a bottle neck. The Textile industry contributes huge to any economy &
                                     we have determined to empower it with our Energy & process management System.</p>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Street} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>STREET LIGHT MANAGEMENT</h2>
                                <p>The Smart cities now seek the cost effective but, efficient smart energy saving techniques for street lights that can control, 
                                    optimize the energy usage when required, maintenance & reduce energy losses..</p>
                            </div>
                            <div className="col-lg-4">
                                <svg className="bd-placeholder-img rounded-rectangle" width="160" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                                    <image href={Process} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2>PROCESS AUTOMATION</h2>
                                <p>Although the processing industries are well poised to grow at an annual rate compared to others, going ahead will be tough unless these industries acquire technological know-how related to 
                                    "Connecting Each Module to Automating the Whole Process".</p>
                            </div>
                            
                            <hr className="featurette-divider" />
                    </div>
                </div>
            </main>
	)
};

export default Services;