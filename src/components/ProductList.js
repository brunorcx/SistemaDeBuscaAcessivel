import "../styles/productList.css";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState(["Arroz", "Carne", "Ovos", "Frango"]);
  const [productsLi, setProductsLi] = useState([]);

  function getProducts(products) {
    for (const product of products) {
      setProductsLi((productsLi) => [
        ...productsLi,
        <li>
          <img src="/Arroz.jpg" alt="Arroz"></img>
          <p>{product}</p>
          <p>Preço: R$6</p>
          <p>Data: 24/03/2022</p>
        </li>,
      ]);
    }
  }
  useEffect(() => {
    getProducts(products);
  }, [products]);
  return (
    <main>
      <ul>{productsLi}</ul>
    </main>
  );
};

export default ProductList;
