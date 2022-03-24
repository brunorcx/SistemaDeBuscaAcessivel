import React from "react";
import "../styles/products.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sibebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="product-container">
        <Sibebar className="sidebar" />
        <ProductList className="productList" />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
