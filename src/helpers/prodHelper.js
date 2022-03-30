const prodHelper = {
  setProdList: function (products, setProductsLi) {
    for (const product of products) {
      setProductsLi((productsLi) => [
        ...productsLi,
        <li key={product}>
          <img src="/Arroz.jpg" alt="Arroz"></img>
          <p>{product}</p>
        </li>,
      ]);
    }
  },
  helper2: function (param1) {},
  helper3: function (param1, param2) {},
};

export default prodHelper;
