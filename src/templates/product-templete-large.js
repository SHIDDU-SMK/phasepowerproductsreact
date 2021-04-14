import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col, Table } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

let i=1;
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
                                        <Col md="3" style={{ "text-align": "center"}}>
                                            <Link to={`#${item.id}`} style={{ "color": "black"}}>
                                                <Image src={ item.image} height="300" width="300"
                                                style={{padding: 15}}/>
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
                    <hr className="featurette-divider" />
                    <b>
                        { data.SpecTitle } 
                    </b> 
                    <Table striped bordered hover>
                    {
                        data.Specifications.map(item => 
                            <>
                                <thead hidden = {i % 2 !== 0? true : false}>
                                    <tr>
                                        <th style={{width: '40%'}}>{ item.label}</th>
                                        <th> {item.value} </th>
                                    </tr>
                                </thead>
                                <tbody hidden = {i % 2 === 0? true : false}>
                                    <tr>
                                        <td style={{width: '40%'}}>{ item.label}</td>
                                        <td> {item.value} </td>
                                    </tr>
                                </tbody>
                                <span hidden={ true }>
                                    {i++}
                                </span>
                            </>                  
                        )
                    }
                    </Table>
                </div> 
            <Footer />   
        </>
    );

}

export default ProductTempleteLubi;
