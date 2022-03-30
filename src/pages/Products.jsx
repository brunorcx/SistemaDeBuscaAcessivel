import React, { useState } from "react";
import "styles/products.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Sibebar from "components/Sidebar";
import ProductList from "components/ProductList";

const Products = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="product-container">
        <div className={openSidebar ? "openSidebar" : "sidebar"}>
          <Sibebar />
        </div>
        <div className="productList">
          <ProductList className="productList" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
