import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import Metadata from "../layout/Header/Metadata";
import { getProduct } from "../../actions/productAction";
import { useSelector , useDispatch } from "react-redux";



const product = {
  name: "Blue T shirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "3000",
  _id: "abhi",
};

const Home = () => {
  const dispatch = useDispatch();
  const {loading,error,products,productsCount} = useSelector(state=>state.products)
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
        <Metadata title="ECOMMERCE"/>
      <div className="banner">
        <p>Welcome to ECOMMERCE</p>
        <h1>Find Amazing Products</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
      {products && products.map(product => (
        <Product product={product} />
      ))}
              
            
      </div>
    </Fragment>
  );
};

export default Home;
