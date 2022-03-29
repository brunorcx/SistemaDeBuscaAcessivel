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

  useEffect(() => {
    getProducts(products);
  }, [products]);

  function getProducts(products) {
    for (const product of products) {
      setProductsLi((productsLi) => [
        ...productsLi,
        <li key={product}>
          <img src="/Arroz.jpg" alt="Arroz"></img>
          <p>{product}</p>
        </li>,
      ]);
    }
  }
  return (
    <main className="suggested">
      <ul>{productsLi}</ul>
    </main>
  );
};

export default Home;
