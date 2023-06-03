import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { useDataContext } from "../../context/data/DataContext";

import "./product.mobile.layout.css";
import "./product.desktop.layout.css";
import {
  getDiscount,
  getRatingColor,
  isPresentInCart,
  isPresentInWishlist,
} from "../../utils/productUtils";
import { useAuthContext } from "../../context/auth/AuthContext";
import { addToCart } from "../../services/cart/cartService";
import { addToWishlist } from "../../services/wishlist/wishlistService";

export const ProductDetailCard = () => {
  const { productId } = useParams();
  const { products, cart, wishlist, dataDispatch } = useDataContext();

  const product = products.find((product) => product?.id === productId);
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const presentInCart = isPresentInCart(cart, product);
  const presentInWishlist = isPresentInWishlist(wishlist, product);

  const addToCartHandler = (product) => {
    if (token) {
      addToCart(dataDispatch, product, token);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const addToWishlistHandler = (product) => {
    if (token) {
      addToWishlist(dataDispatch, product, token);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="product-detail-card">
      <img
        src={product?.imgSrc}
        alt={product?.productName}
        width={300}
        height={250}
      />
      <div className="details">
        <h1 className="product-name">{product?.productName}</h1>
        <p className="rating" style={getRatingColor(product?.averageRating)}>
          {product?.averageRating} <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="description">{product?.productDescription}</p>
        <div className="price-container">
          <p>INR {product?.price}</p>
          <p className="original-price">INR {product?.originalPrice}</p>
          <p className="discount">
            ({getDiscount(product?.originalPrice, product?.price).toFixed(0)}%
            Off){" "}
          </p>
        </div>

        {presentInCart >= 0 ? (
          <Link className="primary-button cart-link" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Go to Cart
          </Link>
        ) : (
          <button className="primary-button" onClick={() => addToCartHandler(product)}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Add to
            Cart
          </button>
        )}

        {presentInWishlist >= 0 ? (
          <Link className="primary-button cart-link" to="/wishlist">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            Added to Wishlist
          </Link>
        ) : (
          <button
            className="secondary-button"
            onClick={() => addToWishlistHandler(product)}
          >
            <FontAwesomeIcon icon={faHeart} className="icon" /> Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
};
