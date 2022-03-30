import React from "react";
import "styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import prodHelper from "helpers/prodHelper";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Suggested />
      <Under10 />
      <Footer />
    </div>
  );
};
export default Home;

const Suggested = () => {
  const [products, setProducts] = useState(["Arroz", "Carne", "Ovos", "Frango", "Batata"]);
  const [productsLi, setProductsLi] = useState([]);

  useEffect(() => {
    prodHelper.setProdList(products, setProductsLi);
  }, [products]);

  return (
    <main className="suggested">
      <h1>Recomendados</h1>
      <ul>{productsLi}</ul>
    </main>
  );
};
const Under10 = () => {
  const [products, setProducts] = useState(["Arroz", "Ovos", "Frango", "Batata"]);
  const [productsLi, setProductsLi] = useState([]);

  useEffect(() => {
    prodHelper.setProdList(products, setProductsLi);
  }, [products]);

  return (
    <div className="under10">
      <h1>Produtos abaixo de R$10</h1>
      <ul>{productsLi}</ul>
    </div>
  );
};
