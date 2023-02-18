import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";

const product = {
  name: "Blue T shirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "3000",
  _id: "abhi",
};

const Home = () => {
  return (
    <Fragment>
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
      <div className="container id=container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
