import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from './component/Home/Home.js'
import Product from './component/Home/Product';



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);
  return (
    <Router>
      
      <Header/>
      <Routes>
      <Route exact path="/" component={Home} />
      </Routes>
     
      <Home/>
    
      <Footer/>
    </Router>
  );
}

export default App;
