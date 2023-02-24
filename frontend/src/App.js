import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from './component/Home/Home.js'
import Product from './component/Home/ProductCard';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails.js"



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
      <Route exact path="/product/:id" component={ProductDetails} />

      </Routes>
     
      <Home/>
    
      <Footer/>
    </Router>
  );
}

export default App;
