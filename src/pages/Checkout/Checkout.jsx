import { Link } from "react-router-dom";

import { useDataContext } from "../../context/data/DataContext";
import { Address } from "./component/Address";
import { PriceCard } from "../../component/PriceSummary/PriceCard";

import "./checkout.mobile.layout.css";
import "./checkout.desktop.layout.css";

export const Checkout = () => {
  const { cart, address } = useDataContext();

  return (
    <div className="checkout-page-container">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <div className="address-container">
          {address.length === 0 && (
            <div className="address-card">
              <p>
                Please add address <Link to="/user-profile">here</Link>
              </p>
            </div>
          )}
          {address.map((add) => (
            <Address key={add._id} address={add} />
          ))}
        </div>

        {cart.length > 0 && <PriceCard type="checkout" />}
      </div>
    </div>
  );
};
