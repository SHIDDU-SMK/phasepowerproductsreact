import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Row, Col, Table } from 'react-bootstrap';

function ProductTempleteLp({data}) {
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
                                    <Col md="3" style={{ "text-align": "center"}} >
                                        <Link to={`#${item.id}`}> 
                                            <Image src={ item.image} Height="50" width="50" style={{padding: '100'}}/>
                                            <hr width = '100' paddingBottom='10'/>
                                            <h6 style={{color: 'black'}}> { item.heading } </h6>
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
                                <Col className={ item.id % 2 === 0? '' : 'order-2' }>
                                    <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                    </h2>
                                    <p style={{ textAlign: "center" }}>
                                        {item.sub_heading}
                                    </p>
                                    <Image src={item.image} style={{ paddingBottom: '2rem'}}/>
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
                            <div style={{ textAlign: "center", fontSize: "20px" }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Tube Base Type</th>
                                            <th>Length</th>
                                            <th>IP Rating</th>
                                            <th>Power Consumption</th>
                                            <th>Shape</th>
                                            <th>Color</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {item.features.tube_base_type} </td>
                                            <td> {item.features.length}</td>
                                            <td> {item.features.ip_rating}</td>
                                            <td> {item.features.power_consumption}</td>
                                            <td> {item.features.shape}</td>
                                            <td> {item.features.color}</td> 
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

export default ProductTempleteLp;