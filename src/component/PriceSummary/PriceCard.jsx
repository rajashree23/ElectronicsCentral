import { Link, useNavigate } from "react-router-dom";
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
import { removeAllFromCart } from "../../services/cart/cartService";
import { useAuthContext } from "../../context/auth/AuthContext";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const PriceCard = ({ type }) => {
  const navigate = useNavigate();
  const { deliveryAddress, cart, dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  const originalPrice = getOriginalPrice(cart);
  const discountedPrice = getDiscountedPrice(cart);
  const deliveryFees = getDeliveryCharges(originalPrice, discountedPrice);
  const totalAmount = getActualPrice(cart) + deliveryFees;

  const placeOrderHandler = () => {
    dataDispatch({
      type: ACTION_TYPES.SET_ORDER_SUMMARY_PRICE,
      payload: { originalPrice, discountedPrice, totalAmount },
    });
    dataDispatch({ type: ACTION_TYPES.SET_ORDER_SUMMARY_ITEMS, payload: cart });
    dataDispatch({
      type: ACTION_TYPES.SET_ORDER_SUMMARY_ADDRESS,
      payload: deliveryAddress,
    });

    removeAllFromCart(dataDispatch, cart, token);

    navigate("/order-summary");
  };

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
      {type == "checkout" && deliveryAddress == null && (
        <p>Please choose a delivery address from the left side panel!</p>
      )}
        {type == "checkout" && deliveryAddress !== null && (
          <div className="delivery-address">
            <h2 className="heading">DELIVERY TO</h2>
            <p>{deliveryAddress.name}</p>
            <p>
              {deliveryAddress.street}, {deliveryAddress.city},{" "}
              {deliveryAddress.country}
            </p>
            <p>{deliveryAddress.zipCode}</p>
            <p>{deliveryAddress.mobile}</p>

            <button className="primary-button" onClick={placeOrderHandler}>
              Place Order
            </button>
          </div>
        )}
      </>
    </div>
  );
};
