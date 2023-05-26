import { Link } from "react-router-dom";
import {
  getActualPrice,
  getDeliveryCharges,
  getDiscountedPrice,
  getOriginalPrice,
} from "../../../utils/cartUtils";
import { useContext } from "react";
import { useDataContext } from "../../../context/data/DataContext";

export const PriceCard = ({ cart }) => {
  const originalPrice = getOriginalPrice(cart);
  const discountedPrice = getDiscountedPrice(cart);
  const deliveryFees = getDeliveryCharges(originalPrice, discountedPrice);
  const totalAmount = getActualPrice(cart) + deliveryFees;
  const { deliveryAddress } = useDataContext();
  console.log(deliveryAddress)
  return (
    <>
      <div>
        <h1>Order details</h1>
      </div>
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
      <Link to="/order-summary">
        <button>Place Order</button>
      </Link>

      {deliveryAddress!==null && (
        <>
          <h2>Delivery to</h2>
          <p>{deliveryAddress.name}</p>
          <p>
            {deliveryAddress.street}, {deliveryAddress.city},{" "}
            {deliveryAddress.country}
          </p>
          <p>{deliveryAddress.zipcode}</p>
          <p>{deliveryAddress.mobile}</p>
        </>
      )}
    </>
  );
};
