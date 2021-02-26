import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";
// import Product from "./product";
// import ColdRoll from "./pages/coldroll";
// import Galvanised from "./pages/galvanised";
// import Access from "./pages/access";
// import Cement from "./pages/cement";
// import PrePaint from "./pages/prepainted";
// import Steel from "./pages/steel";
// import Others from "./pages/others";
// import TilesS from './pages/tiles-S';
// import Pipes from './pages/pipes';
// import Tubes from './pages/tubes';
// import Polycarbonates from './pages/poly';
// import Monotorsubproducts from './pages/monotorsubproducts';
import SmartMonotor from "./pages/smartmonotor";
import SmartControl from './pages/smartcontrol';
import SmartResorces from './pages/smartresource';
import SmartNetworking from './pages/smartnetworking';
import Othersproducts from './pages/othersproducts';
import Elmsure from './pages/elmsure';
import Eaton from './pages/eaton';
import ProductTemplate from "./pages/product-template";
import ProductTemp from "./pages/product-temp";

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
        {/* <Route path="/product"><Product /></Route> */}
        {/* <Route path="/coldroll"><ColdRoll /></Route>   */}
        <Route path="/smartmonotor"><SmartMonotor /></Route> 
        <Route path="/smartcontrol"> <SmartControl /></Route>
        <Route path="/smartresource"> <SmartResorces/></Route>
        <Route path ="/smartnetworking"> <SmartNetworking /></Route>
        <Route path ="/othersproducts"> <Othersproducts /> </Route>
        <Route path ="/elmsure"> <Elmsure /> </Route>
        <Route path ="/eaton"> <Eaton /> </Route>
        <Route path ="/prod"> <ProductTemplate /> </Route>
        <Route path ="/prodtemp"> <ProductTemp /> </Route>
      </Switch>
    </Router>
  );
}

export default NavBarTop;