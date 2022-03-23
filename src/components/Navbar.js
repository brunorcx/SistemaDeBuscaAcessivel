import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="App-header">
      <nav className="total-nav">
        <div className="logo">
          <img src="/Logo.png" alt="logo"></img>
        </div>
        <menu>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/products">Produtos </Link>
          </li>
          <li>Item 3</li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
