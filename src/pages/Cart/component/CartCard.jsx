import { useAuthContext } from "../../../context/AuthContext.js/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";
import {
  removeFromCart,
  updateCart,
} from "../../../services/cart/cartService";
import { addToWishlist } from "../../../services/wishlist/wishlistService";
import { getDiscount } from "../../../utils/productUtils";

import "./mobile.layout.css";
export const CartCard = ({ product }) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();
  return (
    <div className="product-detail-card cart">
      <img src={product.imgSrc} alt={product.productName} width={150}></img>
      <div className="detail">
        <p>{product.productName}</p>
        <div className="price-container">
          <p>INR {product.price}</p>
          <p className="original-price">INR {product.originalPrice}</p>
          <p className="discount">
            ({getDiscount(product.originalPrice, product.price).toFixed(0)}%
            Off){" "}
          </p>
        </div>

        <div>
          <button
            disabled={product.qty === 1}
            onClick={() =>
              updateCart(dataDispatch, product._id, "decrement", token)
            }
          >
            -
          </button>
          <span>{product.qty}</span>
          <button
            onClick={() =>
              updateCart(dataDispatch, product._id, "increment", token)
            }
          >
            +
          </button>
        </div>

        <div>
          <button
            onClick={() => removeFromCart(dataDispatch, product._id, token)}
          >
            Remove
          </button>
          <button onClick={()=>{
            addToWishlist(dataDispatch, product, token);
            removeFromCart(dataDispatch, product._id, token);
          }}>Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
