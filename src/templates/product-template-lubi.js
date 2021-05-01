import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col, Table } from 'react-bootstrap';
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
                                
                                <Image src={item.image} width="350" height="350" style={{ paddingBottom: '2rem'}}/>                                    
                            </Col>
                            <Col>
                            <div style={{ textAlign: "center", fontSize: "10px" }}>
                            <h2  style={{ textAlign: "center" }}>
                                    {item.heading}
                            </h2>
                                <Table striped bordered hover >
                                    <thead>  
                                        <tr>
                                            <th>Name</th>
                                            <th>Model</th>
                                            <th>Description</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {item.features.products_name} </td>
                                            <td> {item.features.model_number}</td>
                                            <td> {item.features.description}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <hr width = '100' paddingTop='2rem' />                                
                            <div style={{ textAlign: "center", fontSize: "10px"}}>
                                <h6 className="text-black-50">
                                    {item.sub_heading}
                                </h6>
                                <Table striped bordered hover>
                                    <thead>                               
                                        <tr>
                                            <th># of O/P</th>
                                            <th>Mounting</th>
                                            <th>O/P W</th>
                                            <th>O/P V</th>
                                            <th>O/P Current</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>                                             
                                            <td> {item.specifications.number_of_outputs} </td>
                                            <td> {item.specifications.mounting_type}</td>
                                            <td> {item.specifications.output_power}</td>
                                            <td> {item.specifications.output_voltage}</td>
                                            <td> {item.specifications.output_current}</td>
                                        </tr>                                        
                                    </tbody>
                                </Table> 
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