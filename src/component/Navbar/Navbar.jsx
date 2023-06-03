import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import { useDataContext } from "../../context/data/DataContext";

import { ACTION_TYPES } from "../../utils/actionTypeConstants";

import Logo from "../../assets/Logo.svg";

import "./navbar.mobile.layout.css";
import "./navbar.desktop.layout.css";
import { useAuthContext } from "../../context/auth/AuthContext";

export const Navbar = () => {
  const [hamburgerSelected, setHamburgerSelected] = useState(false);
  const { filters, dataDispatch, cart, wishlist } = useDataContext();
  const { token, user } = useAuthContext();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    dataDispatch({
      type: ACTION_TYPES.INPUT_SEARCH,
      payload: e.target.value,
    });
    navigate("/products");
  };

  return (
    <>
      <nav className="nav-container">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            value={filters.inputSearch}
            placeholder="Search"
            onChange={inputHandler}
          />
        </div>

        <div className="action-container">
          <Link to="/cart">
            {cart.length > 0 && (
              <div className="item-count">
                <p>{cart.length}</p>
              </div>
            )}
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </Link>
          <Link to="/wishlist">
            {wishlist.length > 0 && (
              <div className="item-count wishlist-count">
                <p>{wishlist.length}</p>
              </div>
            )}
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </Link>
          {token ? (
            <Link to="/user-profile">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </Link>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
        </div>
      </nav>

      <nav className="mobile-nav-container">
        <div className="image-container">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setHamburgerSelected((prev) => !prev)}
        >
          {hamburgerSelected ? (
            <FontAwesomeIcon icon={faXmark} className="icon cross" />
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </nav>

      <div className={`${hamburgerSelected ? "nav-items-container" : "none"}`}>
        <Link to="/cart" className="link">
          <div
            className="nav-items"
            onClick={() => setHamburgerSelected((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="icon " />
            <p>Cart</p>
          </div>
        </Link>

        <Link to="/wishlist" className="link">
          <div
            className="nav-items"
            onClick={() => setHamburgerSelected((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <p>Wishlist</p>
          </div>
        </Link>
        {token ? (
          <Link to="/user-profile" className="link">
            <div
              className="nav-items"
              onClick={() => setHamburgerSelected((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faUser} className="icon" />
              <p>{JSON.parse(user)?.firstName}</p>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="link">
            <div
              className="nav-items"
              onClick={() => setHamburgerSelected((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faUser} className="icon" />
              Login
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
