import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";

//import SmartMonotor from "./pages/smartmonotor";
//import SmartControl from './pages/smartcontrol';
//import SmartResorces from './pages/smartresource';
//import SmartNetworking from './pages/smartnetworking';
//import Othersproducts from './pages/othersproducts';
import Elmsure from './pages/elmsure';
// import Eaton from './pages/eaton';
import ProductTemplate from "./pages/product-template";
import ProductMonitor from "./pages/product-monitor";
import ProductControl from './pages/product-Control';
import ProductResource from './pages/product-resource';
import ProductNetwork from './pages/product-network';
import ProductEatonMcb from './pages/product-eatonmcb';
import EatonTemplate from './pages/eaton-templetes';
const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
        {/* <Route path="/product"><Product /></Route> */}
        {/* <Route path="/coldroll"><ColdRoll /></Route>   */}
        {/* <Route path="/smartmonotor"><SmartMonotor /></Route> */}
        {/* <Route path="/smartcontrol"> <SmartControl /></Route> */}
        {/* <Route path="/smartresource"> <SmartResorces/></Route>
        <Route path ="/smartnetworking"> <SmartNetworking /></Route>
        <Route path ="/othersproducts"> <Othersproducts /> </Route> */}
        <Route path ="/elmsure"> <Elmsure /> </Route>
         {/* <Route path ="/eaton"> <Eaton /> </Route>   */}
        <Route path ="/prod"> <ProductTemplate /> </Route>
        <Route path ="/prodsm"> <ProductMonitor /> </Route>
        <Route path ="/prodsc"> <ProductControl /> </Route>
        <Route path ="/prodsr"> <ProductResource /> </Route>
        <Route path ="/prodsn"> <ProductNetwork /> </Route>
        <Route path ="/eaton"> <EatonTemplate /> </Route>
        <Route path ="/eatonmcb"> <ProductEatonMcb /> </Route>


        
        
        
        

      </Switch>
    </Router>
  );
}

export default NavBarTop;