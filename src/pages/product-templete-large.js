import React from 'react';
import Footer from '../footer';
import Header from '../header';
<<<<<<< HEAD
import { Image, Row, Col, } from 'react-bootstrap';
=======
import { Image, Row, Col } from 'react-bootstrap';
>>>>>>> e303387e75bef2c3442631a0784da2328f76cf24
import { HashLink as Link } from 'react-router-hash-link';


function ProductTempleteLubi({data}) {
    return (
        <>
            <Header />
                <h2 style={{ textAlign: "center", paddingTop: "1rem" }}> 
                    <b>
                        { data.Title } 
                    </b> 
                </h2>
                <div className="container" style={{ marginTop: "40px"}}>
                <Row className="justify-content-md-center">
                        {
                            data.Products.map(item => 
                                <>
                                    <Col md="2" style={{ "text-align": "center"}}>
                                        <Link to={`#${item.id}`} style={{ "color": "black"}}>
                                            <Image src={ item.image} height="50px" width="50px"/>
                                            <hr width = '100' paddingBottom='10'/>
                                            <h6 style = {{ fontSize:'12' }} > { item.bottom_desc } </h6>
                                        </Link>
                                    </Col>  
                                </>
                            )
                        }             
                </Row>
            </div>
                <div className="container" style={{ marginTop: "40px"}}>
                    {
                        data.Products.map(item => 
                        <>
                            <hr id={item.id} className="featurette-divider" />
                            <Row>
                                <Col sm={4} className={ item.id % 2 === 0? '' : 'order-2' }> 
                                    
                                    <Image src={item.image} width="350" height="350" style={{ paddingBottom: '2rem'}}/>                                    
                                </Col>
                                <Col>
                                <div style={{ textAlign: "center", fontsize: "20px" }}>
                                <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                </h2>
                                    
                                </div>
                                                                
                                <div style={{ textAlign: "center", fontsize: "10px"}}>
                                    <h5 className="text-black-50">
                                        {item.sub_heading}
                                    </h5>
                                    
                                </div>
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

export default ProductTempleteLubi;
