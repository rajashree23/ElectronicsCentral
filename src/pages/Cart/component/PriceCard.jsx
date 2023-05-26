import { Link } from "react-router-dom";
import {
  getActualPrice,
  getDeliveryCharges,
  getDiscountedPrice,
  getOriginalPrice,
} from "../../../utils/cartUtils";

export const PriceCard = ({ cart }) => {
  const originalPrice = getOriginalPrice(cart);
  const discountedPrice = getDiscountedPrice(cart);
  const deliveryFees = getDeliveryCharges(originalPrice, discountedPrice);
  const totalAmount = getActualPrice(cart) + deliveryFees;

  return (
    <>
      <div>
        <p>Price ({`${cart.length} items`})</p>
        <p>INR {originalPrice}</p>
      </div>

      <div>
        <p>Discount</p>
        <p>- INR {discountedPrice}</p>
      </div>

      <div>
        <p>Delivery Charges</p>
        <p>INR {deliveryFees}</p>
      </div>

      <div>
        <p>TOTAL AMOUNT</p>
        <p>INR {totalAmount}</p>
      </div>

      <div>
        <p>You will save INR {discountedPrice} on this order</p>
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </>
  );
};
