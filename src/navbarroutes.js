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
        {/* <Route path ="/monotorsubproducts"> <Monotorsubproducts /> </Route> */}
        {/* <Route path="/galvanised"><Galvanised /></Route> 
        <Route path="/access"><Access /></Route>  
        <Route path="/cement"><Cement /></Route>  
        <Route path="/prepainted"><PrePaint /></Route> 
        <Route path="/steel"><Steel /></Route>  
        <Route path="/others"><Others /></Route>
        <Route path="/tiles-S"><TilesS /></Route>  
        <Route path="/pipes"><Pipes /></Route> 
        <Route path="/tubes"><Tubes /></Route>  
        <Route path="/poly"><Polycarbonates /></Route>       */}

      </Switch>
    </Router>
  );
}

export default NavBarTop;