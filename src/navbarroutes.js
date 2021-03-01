import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";
import ProductElmsure from './pages/elmeasure';
import ProductMonitor from "./pages/product-monitor";
import ProductControl from './pages/product-control';
import ProductResource from './pages/product-resource';
import ProductNetwork from './pages/product-network';
import ProductEaton from './pages/product-eaton';
import ProductOther from './pages/otherproducts';

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
        <Route path ="/prodel"> <ProductElmsure /> </Route>
        <Route path ="/prodsm"> <ProductMonitor /> </Route>
        <Route path ="/prodsc"> <ProductControl /> </Route>
        <Route path ="/prodsr"> <ProductResource /> </Route>
        <Route path ="/prodsn"> <ProductNetwork /> </Route>
        <Route path ="/prodea"> <ProductEaton /> </Route>
        <Route path ="/prodpt"> <ProductOther /> </Route>
      </Switch>
    </Router>
  );
}

export default NavBarTop;