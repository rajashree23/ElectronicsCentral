import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { getDiscount, getRatingColor } from "../../../../utils/productUtils";

import "./mobile.layout.css";
import "./desktop.layout.css";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      <img src={product.imgSrc} alt={product.productName} />

      <p className="product-name">{product.productName}</p>
      <p className="rating" style={getRatingColor(product.averageRating)}>
        {product.averageRating} <FontAwesomeIcon icon={faStar} />
      </p>
      <div className="price-container">
        <p>INR {product.price}</p>
        <p className="original-price">INR {product.originalPrice}</p>
        <p className="discount">({getDiscount(product.originalPrice, product.price).toFixed(0)}% Off) </p>
      </div>

      <button>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        Add to Cart
      </button>
    </div>
  );
};
