import { useAuthContext } from "../../../context/auth/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";
import { addToCart, removeFromCart, updateCart } from "../../../services/cart/cartService";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../services/wishlist/wishlistService";
import { getDiscount } from "../../../utils/productUtils";

// import "./mobile.layout.css";
export const WishlistCard = ({ product }) => {
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
            onClick={() => {
              addToCart(dataDispatch, product, token);
              removeFromWishlist(dataDispatch, product._id, token);
            }}
          >
            Move to Cart
          </button>
          <button
            onClick={() => removeFromWishlist(dataDispatch, product._id, token)}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
