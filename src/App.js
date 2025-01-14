import React from "react";

import {
  AdvisorPage,
  ContactPage,
  HomePage,
  OfficerPage,
  MissionPage,
} from "./container";

import { Navbar, Footer } from "./component";

import "./App.css"

const App = () => {
  
  return (
  <div>
    <Navbar/>
    <HomePage/>
    <MissionPage/>
    <OfficerPage/>

    <ContactPage/>

    
    {/* <AdvisorPage/>
    <ContactPage/>
    <HomePage/>
    <OfficerPage/>
    <MissionPage/> */}

    <Footer/>
  </div>)
}

export default App;
