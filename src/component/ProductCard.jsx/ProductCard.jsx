import { toast } from "react-toastify";

import { useDataContext } from "../../context/data/DataContext";
import { useAuthContext } from "../../context/auth/AuthContext";

import { getDiscount, isPresentInCart, isPresentInWishlist } from "../../utils/productUtils";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../../services/cart/cartService";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlist/wishlistService";

import "./product.mobile.layout.css";
import "./product.desktop.layout.css";

export const ProductCard = ({ product, type }) => {
  const { dataDispatch, cart,wishlist } = useDataContext();
  const { token } = useAuthContext();

  const presentInCart = isPresentInCart(cart, product);
  const presentInWishlist=isPresentInWishlist(wishlist, product);

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
                updateCart(dataDispatch, product._id, "decrement", token, toast)
              }
            >
              -
            </button>
            <span className="quanity-number">{product.qty}</span>
            <button
              className="quantity-button"
              onClick={() =>
                updateCart(dataDispatch, product._id, "increment", token, toast)
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
              onClick={() =>
                removeFromCart(dataDispatch, product._id, token, toast)
              }
            >
              Remove
            </button>
            <button
              className="secondary-button"
              onClick={() => {
                presentInWishlist ==-1 && addToWishlist(dataDispatch, product, token, toast);
                removeFromCart(dataDispatch, product._id, token, toast);
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
                presentInCart >= 0
                  ? updateCart(
                      dataDispatch,
                      product._id,
                      "increment",
                      token,
                      toast
                    )
                  : addToCart(dataDispatch, product, token, toast);
                removeFromWishlist(dataDispatch, product._id, token, toast);
              }}
            >
              Move to Cart
            </button>
            <button
              className="secondary-button"
              onClick={() =>
                removeFromWishlist(dataDispatch, product._id, token, toast)
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
