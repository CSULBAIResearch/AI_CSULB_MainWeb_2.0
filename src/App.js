import React from "react";

import {
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

    <Footer/>
  </div>)
}

export default App;
