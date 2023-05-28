import { useDataContext } from "../../context/data/DataContext";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";

import { getDiscount } from "../../utils/productUtils";
import { addToCart, removeFromCart, updateCart } from "../../services/cart/cartService";
import { addToWishlist, removeFromWishlist } from "../../services/wishlist/wishlistService";

import "./product.mobile.layout.css";
import "./product.desktop.layout.css";

export const ProductCard = ({ product, type }) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  return (
    <div className="common-product-card">
      <img src={product.imgSrc} alt={product.productName} width={300}></img>
      <div className="detail">
        <h2 className="product-name">{product.productName}</h2>
        <div className="price-container">
          <p>INR {product.price}</p>
          <p className="original-price">INR {product.originalPrice}</p>
          <p className="discount">
            ({getDiscount(product.originalPrice, product.price).toFixed(0)}%
            Off){" "}
          </p>
        </div>

        {type !== "wishlist" && (
          <div>
            <button
              className="quantity-button"
              disabled={product.qty === 1}
              onClick={() =>
                updateCart(dataDispatch, product._id, "decrement", token)
              }
            >
              -
            </button>
            <span className="quanity-number">{product.qty}</span>
            <button
              className="quantity-button"
              onClick={() =>
                updateCart(dataDispatch, product._id, "increment", token)
              }
            >
              +
            </button>
          </div>
        )}

        {type !== "wishlist" ? (
          <div className="button-container">
            <button
              className="primary-button card-btn"
              onClick={() => removeFromCart(dataDispatch, product._id, token)}
            >
              Remove
            </button>
            <button
              className="secondary-button"
              onClick={() => {
                addToWishlist(dataDispatch, product, token);
                removeFromCart(dataDispatch, product._id, token);
              }}
            >
              Move to Wishlist
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button
              className="primary-button card-btn"
              onClick={() => {
                addToCart(dataDispatch, product, token);
                removeFromWishlist(dataDispatch, product._id, token);
              }}
            >
              Move to Cart
            </button>
            <button
              className="secondary-button"
              onClick={() =>
                removeFromWishlist(dataDispatch, product._id, token)
              }
            >
              Remove from Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
