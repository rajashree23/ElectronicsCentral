import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import "./mobile.layout.css";
import "./desktop.layout.css";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="image-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input placeholder="Search" />
      </div>

      <div className="action-items">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <button>Login</button>
      </div>
    </nav>
  );
};
