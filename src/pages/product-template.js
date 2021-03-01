import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col } from 'react-bootstrap';

function ProductTemplate({data}) {
    return (
        <>
            <Header />
                <h2 style={{ textAlign: "center", paddingTop: "1rem" }}> 
                    <b>
                        { data.Title } 
                    </b> 
                </h2>
                <div className="container" style={{ marginTop: "40px"}}>
                    {
                        data.Products.map(item => 
                        <>
                            <hr id="dcenergy" className="featurette-divider" />
                            <Row>
                                <Col className={ item.id % 2 === 0? '' : 'order-2' }>
                                    <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        {item.top_desc}
                                    </p>
                                    <Image src={item.image} style={{ paddingBottom: '2rem'}}/>
                                    <p style={{ textAlign: "center"}}> 
                                        {item.bottom_desc}
                                    </p>
                                </Col>
                                <Col>
                                    <h5 className="text-black-50">
                                        {item.features_heading}
                                    </h5>
                                    <ul className="ul">
                                        {item.salient_features.map(
                                            feature =>
                                            <li>
                                                { feature }
                                            </li>
                                        )}
                                    </ul>
                                    <h5>
                                        {item.app_heading}
                                    </h5>
                                    <ul className="ul">
                                        {item.app_list.map(
                                            app =>
                                            <li>
                                                { app }
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </>
                    )
                }
            </div> 
            <Footer />   
        </>
    );

}

export default ProductTemplate;