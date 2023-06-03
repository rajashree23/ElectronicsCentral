import { Link } from "react-router-dom";
import {
  getOriginalPrice,
  getDiscountedPrice,
  getDeliveryCharges,
  getActualPrice,
} from "../../utils/cartUtils";

import "./pricecard.mobile.layout.css";
import "./pricecard.desktop.layout.css";
import { useDataContext } from "../../context/data/DataContext";
import { OrderSummary } from "../OrderSummary/OrderSummary";

export const PriceCard = ({ cart, type }) => {
  const { deliveryAddress } = useDataContext();

  const originalPrice = getOriginalPrice(cart);
  const discountedPrice = getDiscountedPrice(cart);
  const deliveryFees = getDeliveryCharges(originalPrice, discountedPrice);
  const totalAmount = getActualPrice(cart) + deliveryFees;

  return (
    <div
      className="checkout-price-container"
      style={{ width: type != "checkout" && "max-content" }}
    >
      {type === "checkout" && (
        <>
          {" "}
          <h2 className="heading">ORDER DETAILS</h2>
          <div className="price-details">
            <p className="item-name">Item</p>
            <p className="item-qty">Quanity</p>
          </div>
          {cart.map((c) => (
            <OrderSummary item={c} key={c._id} />
          ))}
        </>
      )}

      <h2 className="heading">PRICE DETAILS</h2>
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
        <p className="summary-text">
          You will save INR {discountedPrice} on this order
        </p>
      </div>

      <div className="checkout-container">
        {type != "checkout" && (
          <Link to="/checkout">
            <button className="primary-button">Checkout</button>
          </Link>
        )}
      </div>
      <>
        {type == "checkout" && deliveryAddress !== null && (
          <div className="delivery-address">
            <h2 className="heading">DELIVERY TO</h2>
            <p>{deliveryAddress.name}</p>
            <p>
              {deliveryAddress.street}, {deliveryAddress.city}, {deliveryAddress.country}
            </p>
            <p>{deliveryAddress.zipCode}</p>
            <p>{deliveryAddress.mobile}</p>
            <Link to="/order-summary" className="place-order">
          <button className="primary-button">Place Order</button>
        </Link>
          </div>
        )}

      </>
    </div>
  );
};
