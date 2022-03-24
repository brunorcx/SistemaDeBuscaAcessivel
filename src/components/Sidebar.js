import { useState, useEffect } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [categories, setCategories] = useState(["Arroz", "B", "C", "D"]);
  const [categoriesLi, setCategoriesLi] = useState([]);
  function getCategories(categories) {
    for (const category of categories) {
      // setCategoriesLi((categoriesLi) => categoriesLi.concat(<li>{category}</li>));
      //A linha acima funciona e é equivalente a de baixo
      setCategoriesLi((categoriesLi) => [
        ...categoriesLi,
        <li>
          <input type="checkbox"></input>
          <p>{category}</p>
        </li>,
      ]);
    }
  }
  useEffect(() => {
    getCategories(categories);
  }, [categories]);

  return (
    <div className="sidebar">
      <ul>{categoriesLi}</ul>
    </div>
  );
};

export default Sidebar;
