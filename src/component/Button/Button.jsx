import { removeFromCart } from "../../services/cart/cartService";
import { addToWishlist } from "../../services/wishlist/wishlistService";

export const Button = ({ button, product, dataDispatch, token }) => {
  const primaryButtonHandler = () => {
    if (type === "cart") {
      removeFromCart(dataDispatch, product._id, token);
    }
  };
  const secondaryButtonHandler = () => {
    if (type == "cart") {
      addToWishlist(dataDispatch, product, token);
      removeFromCart(dataDispatch, product._id, token);
    }
  };
  return (
    <>
      <button className="primary-button" onClick={primaryButtonHandler}>
        {button.label}
      </button>
      <button className="secondary-button" onClick={secondaryButtonHandler}>
        {button.label}
      </button>
    </>
  );
};
