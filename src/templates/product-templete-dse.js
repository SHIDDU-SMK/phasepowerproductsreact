import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';


function ProductTempleteMedium({data}) {
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
                                            <h6 style = {{ fontSize:'12' }} > { item.heading } </h6>
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
                            <hr id={item.id} style={{paddingBottom:"2rem"}} className="featurette-divider" />
                            <Row>
                                <Col sm={4} className={ item.id % 2 === 0? '' : 'order-2' }>
                                   
                                    <Image src={item.image} width="325" style={{ paddingBottom: '2rem', textAlign: 'center'}}/>
                                    
                                </Col>
                                <Col sm={8}>
                                <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                    </h2>
                                   <p>
                                       {item.paragraph}
                                       </p>                                    
                                </Col>
                            </Row>
                            <div style={{ textAlign: "center", fontSize: "10px" }}>
                                <Table striped bordered hover className='feature-table'>
                                    <thead>
                                        <tr>
                                            <th>OVERALL SIZE</th>
                                            <th>PANEL CUTOUT SIZE</th>
                                            <th>MAXIMUM PANEL THICKNESS</th>
                                            <th>WEIGHT</th>
                                            <th>PRODUCT VARIANTS</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {item.features.overall_size} </td>
                                            <td> {item.features.panel_cutout_size}</td>
                                            <td> {item.features.maximum_panel_thickness}</td>
                                            <td> {item.features.weight}</td>
                                            <td> {item.features.product_variants}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    )
                }
            </div> 
            <Footer />   
        </>
    );

}

export default ProductTempleteMedium;