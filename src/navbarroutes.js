import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";
import Elmsure from './pages/elmeasure';
import ProductMonitor from "./pages/product-monitor";
import ProductControl from './pages/product-control';
import ProductResource from './pages/product-resource';
import ProductNetwork from './pages/product-network';
import ProductEaton from './pages/product-eaton';
import ProductEatonMccb from './pages/product-eatonmccb';
const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
        <Route path ="/elmsure"> <Elmsure /> </Route>
        <Route path ="/prodsm"> <ProductMonitor /> </Route>
        <Route path ="/prodsc"> <ProductControl /> </Route>
        <Route path ="/prodsr"> <ProductResource /> </Route>
        <Route path ="/prodsn"> <ProductNetwork /> </Route>
        <Route path ="/prodeaton"> <ProductEaton /> </Route>
        <Route path ="/prodeatonmccb"> <ProductEatonMccb /> </Route>


        
        
        
        

      </Switch>
    </Router>
  );
}

export default NavBarTop;