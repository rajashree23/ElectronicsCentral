import { Link } from "react-router-dom";
import {
  getActualPrice,
  getDeliveryCharges,
  getDiscountedPrice,
  getOriginalPrice,
} from "../../../utils/cartUtils";

import "../cart.mobile.layout.css";
import "../cart.desktop.layout.css";

export const PriceCard = ({ cart }) => {
  const originalPrice = getOriginalPrice(cart);
  const discountedPrice = getDiscountedPrice(cart);
  const deliveryFees = getDeliveryCharges(originalPrice, discountedPrice);
  const totalAmount = getActualPrice(cart) + deliveryFees;

  return (
    <>
      <div className="price-details">
        <p>Price ({`${cart.length} items`})</p>
        <p>INR {originalPrice}</p>
      </div>

      <div className="price-details">
        <p>Discount</p>
        <p>- INR {discountedPrice}</p>
      </div>

      <div className="price-details">
        <p>Delivery Charges</p>
        <p>{deliveryFees ? `INR ${deliveryFees}` : "FREE"}</p>
      </div>

      <div className="price-details total">
        <p>TOTAL AMOUNT</p>
        <p>INR {totalAmount}.00</p>
      </div>

      <div className="price-details">
        <p className="summary-text">You will save INR {discountedPrice} on this order</p>
      </div>
      <div className="checkout-container">
        <Link to="/checkout">
          <button className="primary-button">Checkout</button>
        </Link>
      </div>
    </>
  );
};
