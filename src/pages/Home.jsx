import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Suggested />
      <Footer />
    </div>
  );
};

const Suggested = () => {
  const [products, setProducts] = useState(["Arroz", "Carne", "Ovos", "Frango", "Batata"]);
  const [productsLi, setProductsLi] = useState([]);
  return <main></main>;
};

export default Home;
