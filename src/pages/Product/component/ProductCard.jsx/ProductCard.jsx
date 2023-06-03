import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { useDataContext } from "../../../../context/data/DataContext";

import {
  getDiscount,
  getRatingColor,
  isPresentInCart,
  isPresentInWishlist,
} from "../../../../utils/productUtils";

import "../../product.mobile.layout.css";
import "../../product.desktop.layout.css";
import { useAuthContext } from "../../../../context/auth/AuthContext";
import { addToCart } from "../../../../services/cart/cartService";
import { addToWishlist, removeFromWishlist } from "../../../../services/wishlist/wishlistService";

export const ProductCard = ({ product }) => {
  const { dataDispatch, cart, wishlist } = useDataContext();
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const presentInCart = isPresentInCart(cart, product);
  const presentInWishlist = isPresentInWishlist(wishlist, product);

  const addToCartHandler = (product) => {
    if (token) {
      addToCart(dataDispatch, product, token, toast);
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = (productId) => {
    if (token) {
      removeFromWishlist(dataDispatch, productId, token, toast);
    } else {
      navigate("/login");
    }
  };
  const addToWishlistHandler = (product) => {
    if (token) {
      addToWishlist(dataDispatch, product, token, toast);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="product-card">
      {presentInWishlist >= 0 ? (
        <FontAwesomeIcon
          onClick={() => removeFromWishlistHandler(product._id)}
          icon={faHeart}
          className="heart-icon wishlisted"
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => addToWishlistHandler(product)}
          icon={faHeart}
          className="heart-icon"
        />
      )}

      <img src={product.imgSrc} alt={product.productName} />

      <Link to={`/products/${product.id}`} className="product-name">
        <p>{product.productName}</p>
      </Link>

      <p className="rating" style={getRatingColor(product.averageRating)}>
        {product.averageRating} <FontAwesomeIcon icon={faStar} />
      </p>

      <div className="price-container">
        <p>INR {product.price}</p>
        <p className="original-price">INR {product.originalPrice}</p>
        <p className="discount">
          ({getDiscount(product.originalPrice, product.price).toFixed(0)}% Off){" "}
        </p>
      </div>

      {presentInCart >= 0 ? (
        <Link className="primary-button cart-link" to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          Go to Cart
        </Link>
      ) : (
        <button
          className="primary-button"
          onClick={() => addToCartHandler(product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          Add to Cart
        </button>
      )}
    </div>
  );
};
