import React from 'react';
import './assets/css/subnav.css';
// import { Link } from 'react-router-dom';
import {Navbar ,Nav} from 'react-bootstrap';

const SubNav = () => {
    return (       
            <Navbar  id = "content-desktop"  fixed="top" sticky="top"  style={{top : "50px"}}>
                <Nav className="mr-auto">
                    
                    </Nav>
            </Navbar>
        
            );
}

export default SubNav;
